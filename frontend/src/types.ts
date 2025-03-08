export type TFlashcard = {
  id: string;
  kanji: string | null;
  reading: string;
  meaning: string;
  status: FlashcardStatus;
};

export type FlashcardStatus = "unset" | "unrecognized" | "familiar" | "known";
