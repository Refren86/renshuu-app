import { useEffect, useRef, useState } from "react";

import { Column } from "@/components/dnd/Column";
import { BurnBarrel } from "@/components/dnd/BurnBarrel";
import { Wrapper } from "@/components/Wrapper";
import { useFlashcards } from "@/hooks/useFlashcards";
import { TFlashcard } from "@/types";

export const ReviewedWordsView = () => {
  const isLoaded = useRef(false);

  const [words, setWords] = useState<TFlashcard[]>([]);

  const { flashcards, handleCreateFlashcard, handleUpdateFlashcard, handleRemoveFlashcard } = useFlashcards();

  useEffect(() => {
    if (flashcards.length > 0 && !isLoaded.current) {
      setWords(flashcards);
      isLoaded.current = true;
    }
  }, [flashcards]);

  return (
    <Wrapper>
      <div className="py-12 min-h-[calc(100dvh-49px)] grid grid-cols-4 gap-x-6">
        <Column
          title="知らない単語"
          cards={words}
          column="unrecognized"
          headingColor="text-red-300"
          onCreateFlashcard={handleCreateFlashcard}
          onUpdateFlashcard={handleUpdateFlashcard}
          setWords={setWords}
        />
        <Column
          title="五分五分単語"
          cards={words}
          column="familiar"
          headingColor="text-blue-300"
          onCreateFlashcard={handleCreateFlashcard}
          onUpdateFlashcard={handleUpdateFlashcard}
          setWords={setWords}
        />
        <Column
          title="知っている単語"
          cards={words}
          column="known"
          headingColor="text-emerald-300"
          onCreateFlashcard={handleCreateFlashcard}
          onUpdateFlashcard={handleUpdateFlashcard}
          setWords={setWords}
        />
        <BurnBarrel onRemoveFlashcard={handleRemoveFlashcard} />
      </div>
    </Wrapper>
  );
};
