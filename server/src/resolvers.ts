import { sql } from "drizzle-orm";

import { db } from "./db";
import { flashcardsTable } from "./db/schema";

type FlashcardArgs = {
  id: number;
};

type CreateFlashcardArgs = {
  id: string;
  kanji: string;
  reading: string;
  meaning: string;
  status?: string;
};

type UpdateFlashcardArgs = {
  id: number;
  kanji?: string;
  reading?: string;
  meaning?: string;
  status?: string;
};

export const resolvers = {
  Query: {
    flashcard: async (_: unknown, { id }: FlashcardArgs) => {
      return await db
        .select()
        .from(flashcardsTable)
        .where(sql`${flashcardsTable.id} = ${id}`);
    },

    allFlashcards: async () => {
      return await db
        .select()
        .from(flashcardsTable)
        .orderBy(flashcardsTable.created_at);
    },
  },

  Mutation: {
    createFlashcard: async (
      _: unknown,
      { id, kanji, reading, meaning, status = "unset" }: CreateFlashcardArgs
    ) => {
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

    updateFlashcard: async (
      _: unknown,
      { id, ...data }: UpdateFlashcardArgs
    ) => {
      const filteredData = {
        ...Object.fromEntries(
          Object.entries(data).filter(([_, v]) => v !== undefined)
        ),
      };

      const updatedRecords = await db
        .update(flashcardsTable)
        .set(filteredData)
        .where(sql`${flashcardsTable.id} = ${id}`)
        .returning();

      return updatedRecords[0] || null;
    },

    deleteFlashcard: async (_: unknown, { id }: FlashcardArgs) => {
      const deletedFlashcards = await db
        .delete(flashcardsTable)
        .where(sql`${flashcardsTable.id} = ${id}`)
        .returning();

      return deletedFlashcards[0];
    },
  },
};
