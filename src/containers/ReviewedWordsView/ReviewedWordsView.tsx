import { useEffect, useState } from "react";

import { TFlashcard } from "@/types";
import { getAllWords } from "@/lib/db";
import { Column } from "@/components/dnd/Column";
import { BurnBarrel } from "@/components/dnd/BurnBarrel";
import { Wrapper } from "@/components/Wrapper";

export const ReviewedWordsView = () => {
  const [allWords, setAllWords] = useState<TFlashcard[]>([]);

  useEffect(() => {
    loadAllWords();
  }, []);

  async function loadAllWords() {
    try {
      const words = await getAllWords()
      setAllWords(words);
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
          column="unrecognized"
          headingColor="text-red-300"
          setCards={setAllWords}
        />
        <Column
          title="五分五分単語"
          cards={allWords}
          column="familiar"
          headingColor="text-blue-300"
          setCards={setAllWords}
        />
        <Column
          title="知っている単語"
          cards={allWords}
          column="known"
          headingColor="text-emerald-300"
          setCards={setAllWords}
        />
        <BurnBarrel setCards={setAllWords} />
      </div>
    </Wrapper>
  );
};
