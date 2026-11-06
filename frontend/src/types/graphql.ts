import { FlashcardStatus, TFlashcard } from "./common";

// createFlashcard
export type CreateFlashcardMutation = {
  createFlashcard: Pick<TFlashcard, "id" | "kanji" | "reading" | "meaning" | "status">;
};

export type CreateFlashcardVariables = {
  collectionId: string;
  kanji: string | null;
  reading: string;
  meaning: string;
  status?: FlashcardStatus;
};

export type UseCreateFlashcardParams = {
  collectionId: string;
  flashcard: Omit<TFlashcard, "id">;
  refetch?: boolean;
};

// updateFlashcard
export type UpdateFlashcardMutation = {
  updateFlashcard: Pick<TFlashcard, "id" | "kanji" | "reading" | "meaning" | "status" | "imageUrl">;
};

export type UpdateFlashcardVariables = {
  flashcardId: string;
  kanji?: string | null;
  reading?: string | null;
  meaning?: string | null;
  status?: FlashcardStatus;
};

export type UseUpdateFlashcardParams = {
  collectionId: string;
  flashcardId: string;
  updateData: Partial<Pick<TFlashcard, "kanji" | "reading" | "meaning" | "status" | "imageUrl">>;
  refetch?: boolean;
};
