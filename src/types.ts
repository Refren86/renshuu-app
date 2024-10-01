export type TFlashcard = {
  id: string;
  kanji: string | null;
  reading: string;
  meaning: string | null;
  column?: string;
};
