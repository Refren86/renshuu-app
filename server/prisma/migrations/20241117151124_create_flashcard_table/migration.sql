-- CreateEnum
CREATE TYPE "FlashcardStatus" AS ENUM ('unset', 'unrecognized', 'familiar', 'known');

-- CreateTable
CREATE TABLE "Flashcard" (
    "id" TEXT NOT NULL,
    "kanji" TEXT,
    "reading" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "status" "FlashcardStatus" NOT NULL DEFAULT 'unset',

    CONSTRAINT "Flashcard_pkey" PRIMARY KEY ("id")
);
