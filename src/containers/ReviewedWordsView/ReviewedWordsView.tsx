import { useEffect, useState } from "react";

import { TFlashcard } from "@/types";
import { getAllWords } from "@/lib/db";
import { Column } from "@/components/dnd/Column";
import { BurnBarrel } from "@/components/dnd/BurnBarrel";
import { Wrapper } from "@/components/Wrapper";

// await addWord(storeType, word);

export const ReviewedWordsView = () => {
  const [allWords, setAllWords] = useState<TFlashcard[]>([]);

  useEffect(() => {
    loadAllWords();
  }, []);

  async function loadAllWords() {
    try {
      const [known, familiar, unknown] = await Promise.all([
        getAllWords("KnownWords"),
        getAllWords("FamiliarWords"),
        getAllWords("UnknownWords"),
      ]);

      const columns = ["unknown", "familiar", "known"];
      const allWords = [...known, ...familiar, ...unknown].map((word) => ({
        ...word,
        column: columns[Math.floor(Math.random() * 3)],
      }));

      setAllWords(allWords);
    } catch (error) {
      console.error("Failed to load words:", error);
    }
  }

  return (
    <Wrapper>
      <div className="py-12 min-h-[calc(100dvh-49px)] grid grid-cols-4 gap-x-6">
        <Column
          title="知らない単語"
          cards={allWords}
          column="unknown"
          headingColor="text-neutral-500"
          setCards={setAllWords}
        />
        <Column
          title="五分五分単語"
          cards={allWords}
          column="familiar"
          headingColor="text-blue-200"
          setCards={setAllWords}
        />
        <Column
          title="知っている単語"
          cards={allWords}
          column="known"
          headingColor="text-emerald-200"
          setCards={setAllWords}
        />
        <BurnBarrel setCards={setAllWords} />
      </div>
    </Wrapper>
  );
};
