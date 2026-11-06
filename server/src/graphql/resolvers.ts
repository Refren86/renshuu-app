import { and, eq, isNotNull, or } from "drizzle-orm";

import { db } from "../db";
import { GraphQLContext } from "./context";
import { collectionFlashcards, collectionsTable, flashcardsTable, userActiveCollections } from "../db/schema";

type CreateFlashcardArgs = {
  collectionId: string;
  id: string;
  kanji: string;
  reading: string;
  meaning: string;
  status?: string;
};

type UpdateFlashcardArgs = {
  flashcardId: string;
  kanji?: string;
  reading?: string;
  meaning?: string;
  status?: string;
  imageUrl?: string;
};

export const resolvers = {
  Query: {
    collectionFlashcards: async (_: unknown, { collectionId }: { collectionId: string }, context: GraphQLContext) => {
      context.requireAuth();

      return await db
        .select({
          id: flashcardsTable.id,
          kanji: flashcardsTable.kanji,
          reading: flashcardsTable.reading,
          meaning: flashcardsTable.meaning,
          imageUrl: flashcardsTable.imageUrl,
          status: flashcardsTable.status,
          created_at: flashcardsTable.created_at,
          updated_at: flashcardsTable.updated_at,
        })
        .from(flashcardsTable)
        .innerJoin(collectionFlashcards, eq(collectionFlashcards.flashcardId, flashcardsTable.id))
        .where(eq(collectionFlashcards.collectionId, collectionId))
        .orderBy(flashcardsTable.created_at);
    },

    flashcard: async (
      _: unknown,
      {
        flashcardId,
      }: {
        flashcardId: string;
      },
      context: GraphQLContext
    ) => {
      context.requireAuth();

      const [flashcard] = await db.select().from(flashcardsTable).where(eq(flashcardsTable.id, flashcardId));

      return flashcard ?? null;
    },

    userCollections: async (_: unknown, { userId }: { userId: string }, context: GraphQLContext) => {
      context.requireAuth();

      return await db
        .select({
          id: collectionsTable.id,
          name: collectionsTable.name,
          description: collectionsTable.description,
          type: collectionsTable.type,
          created_at: collectionsTable.created_at,
          updated_at: collectionsTable.updated_at,
        })
        .from(collectionsTable)
        .leftJoin(
          userActiveCollections,
          and(eq(userActiveCollections.collectionId, collectionsTable.id), eq(userActiveCollections.userId, userId))
        )
        .where(
          or(
            eq(collectionsTable.type, "global"),
            isNotNull(userActiveCollections.userId) // User has this collection active
          )
        )
        .orderBy(collectionsTable.created_at);
    },

    collection: async (
      _: unknown,
      {
        collectionId,
      }: {
        collectionId: string;
      },
      context: GraphQLContext
    ) => {
      context.requireAuth();

      const [collection] = await db.select().from(collectionsTable).where(eq(collectionsTable.id, collectionId));

      return collection ?? null;
    },
  },

  Mutation: {
    createFlashcard: async (
      _: unknown,
      { collectionId, kanji, reading, meaning, status = "unset" }: CreateFlashcardArgs,
      context: GraphQLContext
    ) => {
      context.requireAuth();

      const result = await db.transaction(async (tx) => {
        // 1st - create new flashcard
        const [flashcard] = await tx
          .insert(flashcardsTable)
          .values({
            kanji,
            reading,
            meaning,
            status,
          })
          .returning();

        // 2nd - associate flashcard with collection
        await tx.insert(collectionFlashcards).values({
          collectionId,
          flashcardId: flashcard.id,
        });

        return {
          id: flashcard.id,
          kanji: flashcard.kanji,
          reading: flashcard.reading,
          meaning: flashcard.meaning,
          status: flashcard.status,
        };
      });

      return result;
    },

    updateFlashcard: async (_: unknown, { flashcardId, ...data }: UpdateFlashcardArgs, context: GraphQLContext) => {
      context.requireAuth();

      const filteredData = {
        ...Object.fromEntries(Object.entries(data).filter(([, v]) => v !== undefined)),
      };

      const [updatedFlashcard] = await db
        .update(flashcardsTable)
        .set(filteredData)
        .where(eq(flashcardsTable.id, flashcardId))
        .returning();

      return updatedFlashcard || null;
    },

    deleteFlashcard: async (
      _: unknown,
      {
        collectionId,
        flashcardId,
      }: {
        collectionId: string;
        flashcardId: string;
      },
      context: GraphQLContext
    ) => {
      context.requireAuth();

      await db.transaction(async (tx) => {
        // 1st - remove flashcard from collection
        await tx
          .delete(collectionFlashcards)
          .where(
            and(eq(collectionFlashcards.collectionId, collectionId), eq(collectionFlashcards.flashcardId, flashcardId))
          )
          .returning();

        // 2nd - remove flashcard
        await tx.delete(flashcardsTable).where(eq(flashcardsTable.id, flashcardId));
      });

      return flashcardId;
    },

    createCollection: async (
      _: unknown,
      { userId, name, description }: { userId: string; name: string; description?: string },
      context: GraphQLContext
    ) => {
      context.requireAuth();

      const collection = await db.transaction(async (tx) => {
        const [collection] = await tx
          .insert(collectionsTable)
          .values({
            name,
            description,
            type: "custom",
          })
          .returning();

        await tx.insert(userActiveCollections).values({
          userId,
          collectionId: collection.id,
        });

        return collection;
      });

      return collection;
    },
  },
};
