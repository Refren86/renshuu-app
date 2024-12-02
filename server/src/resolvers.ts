import { eq, sql } from "drizzle-orm";

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
      const res = await db.select().from(flashcardsTable);

      console.log({ res });

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
      return await db.insert(flashcardsTable).values({
        id,
        kanji,
        reading,
        meaning,
        status,
      });
    },

    updateFlashcard: async (
      _: unknown,
      { id, ...data }: UpdateFlashcardArgs
    ) => {
      return await db
        .update(flashcardsTable)
        .set({
          ...Object.fromEntries(
            Object.entries(data).filter(([_, v]) => v !== undefined)
          ),
        })
        .where(sql`${flashcardsTable.id} = ${id}`);
    },

    deleteFlashcard: async (_: unknown, { id }: FlashcardArgs) => {
      return await db
        .delete(flashcardsTable)
        .where(sql`${flashcardsTable.id} = ${id}`);
    },
  },
};
