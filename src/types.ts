export type TFlashcard = {
  id: string | null;
  kanji: string | null;
  reading: string;
  meaning: string | null;
  examples?: string[];
};
