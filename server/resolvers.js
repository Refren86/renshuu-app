const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    flashcard: async (_, { id }) => {
      return await prisma.flashcard.findUnique({
        where: { id },
      });
    },

    allFlashcards: async () => {
      return prisma.flashcard.findMany({
        orderBy: {
          id: 'asc'
        }
      });
    },
  },

  Mutation: {
    createFlashcard: async (
      _,
      { kanji, reading, meaning, status = "unset" }
    ) => {
      return await prisma.flashcard.create({
        data: {
          kanji,
          reading,
          meaning,
          status,
        },
      });
    },

    updateFlashcard: async (_, { id, ...data }) => {
      return await prisma.flashcard.update({
        where: { id },
        data: {
          ...Object.fromEntries(
            Object.entries(data).filter(([_, v]) => v !== undefined)
          ),
        },
      });
    },

    deleteFlashcard: async (_, { id }) => {
      return await prisma.flashcard.delete({
        where: { id },
      });
    },

    seedFlashcards: async (_, { flashcards }) => {
      // Using transaction to ensure all-or-nothing operation
      return await prisma.$transaction(
        flashcards.map((flashcard) =>
          prisma.flashcard.upsert({
            where: { id: flashcard.id },
            update: flashcard,
            create: flashcard,
          })
        )
      );
    },
  },
};

module.exports = { resolvers };