import { sql } from "drizzle-orm";

import { db } from "./db";
import { flashcardsTable } from "./db/schema";
import { deleteImageFromCloudinary } from "./cloudinary";

type UploadFlashcardImgArgs = {
  id: string;
  imageUrl: string;
};

type CreateFlashcardArgs = {
  id: string;
  kanji: string;
  reading: string;
  meaning: string;
  status?: string;
};

type UpdateFlashcardArgs = {
  id: string;
  kanji?: string;
  reading?: string;
  meaning?: string;
  status?: string;
  imageUrl?: string;
};

export const resolvers = {
  Query: {
    flashcard: async (
      _: unknown,
      {
        id,
      }: {
        id: string;
      }
    ) => {
      return await db
        .select()
        .from(flashcardsTable)
        .where(sql`${flashcardsTable.id} = ${id}`);
    },

    allFlashcards: async () => {
      return await db.select().from(flashcardsTable).orderBy(flashcardsTable.created_at);
    },
  },

  Mutation: {
    createFlashcard: async (_: unknown, { id, kanji, reading, meaning, status = "unset" }: CreateFlashcardArgs) => {
      const data = await db
        .insert(flashcardsTable)
        .values({
          id,
          kanji,
          reading,
          meaning,
          status,
        })
        .returning();

      return data[0];
    },

    updateFlashcard: async (_: unknown, { id, ...data }: UpdateFlashcardArgs) => {
      console.log({ data });

      const filteredData = {
        ...Object.fromEntries(Object.entries(data).filter(([, v]) => v !== undefined)),
      };

      const updatedRecords = await db
        .update(flashcardsTable)
        .set(filteredData)
        .where(sql`${flashcardsTable.id} = ${id}`)
        .returning();

      return updatedRecords[0] || null;
    },

    uploadFlashcardImage: async (_: unknown, { id, imageUrl }: UploadFlashcardImgArgs) => {
      try {
        const updatedFlashcard = await db
          .update(flashcardsTable)
          .set({ imageUrl })
          .where(sql`${flashcardsTable.id} = ${id}`)
          .returning();

        if (!updatedFlashcard || updatedFlashcard.length === 0) {
          throw new Error(`Flashcard with id ${id} not found`);
        }

        return updatedFlashcard[0];
      } catch (error) {
        console.log("Error updating flashcard image:", error);

        if (error instanceof Error) {
          return `Failed to update flashcard image: ${error.message}`;
        }

        return "Error occurred while uploading image to cloudinary";
      }
    },

    deleteFlashcard: async (
      _: unknown,
      {
        id,
      }: {
        id: string;
      }
    ) => {
      const deletedFlashcards = await db
        .delete(flashcardsTable)
        .where(sql`${flashcardsTable.id} = ${id}`)
        .returning();

      return deletedFlashcards[0];
    },

    deleteFlashcardImage: async (
      _: unknown,
      {
        id,
      }: {
        id: string;
      }
    ) => {
      try {
        const flashcard = await db
          .select()
          .from(flashcardsTable)
          .where(sql`${flashcardsTable.id} = ${id}`)
          .limit(1);

        if (!flashcard || flashcard.length === 0) {
          throw new Error(`Flashcard with id ${id} not found`);
        }

        await deleteImageFromCloudinary(id);

        const updatedFlashcard = await db
          .update(flashcardsTable)
          .set({ imageUrl: null })
          .where(sql`${flashcardsTable.id} = ${id}`)
          .returning();

        return updatedFlashcard[0];
      } catch (error) {
        console.log("Error removing flashcard image:", error);

        if (error instanceof Error) {
          return `Failed to remove flashcard image: ${error.message}`;
        }

        return "Error occurred while removing image from cloudinary";
      }
    },
  },
};
