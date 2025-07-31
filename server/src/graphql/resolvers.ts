import { sql } from "drizzle-orm";

import { db } from "../db";
import { flashcardsTable } from "../db/schema";
import { GraphQLContext } from "./context";

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
      },
      context: GraphQLContext
    ) => {
      context.requireAuth();

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
    createFlashcard: async (
      _: unknown,
      { id, kanji, reading, meaning, status = "unset" }: CreateFlashcardArgs,
      context: GraphQLContext
    ) => {
      context.requireAuth();

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

    updateFlashcard: async (_: unknown, { id, ...data }: UpdateFlashcardArgs, context: GraphQLContext) => {
      context.requireAuth();

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

    deleteFlashcard: async (
      _: unknown,
      {
        id,
      }: {
        id: string;
      },
      context: GraphQLContext
    ) => {
      context.requireAuth();

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
      },
      context: GraphQLContext
    ) => {
      context.requireAuth();

      try {
        const flashcard = await db
          .select()
          .from(flashcardsTable)
          .where(sql`${flashcardsTable.id} = ${id}`)
          .limit(1);

        if (!flashcard || flashcard.length === 0) {
          throw new Error(`Flashcard with id ${id} not found`);
        }

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
