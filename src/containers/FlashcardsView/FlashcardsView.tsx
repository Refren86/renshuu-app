import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

import { addWord, getAllWords } from "@/lib/db";
import { priorityShuffleFlashcards } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Flashcard } from "@/components/Flashcard";
import { FlashcardStatus, TFlashcard } from "@/types";
import { SentencesModal } from "@/components/SentencesModal";

const transitionProps: HTMLMotionProps<"div"> = {
  initial: { x: 600, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -600, opacity: 0 },
  transition: { duration: 0.5 },
};

function FlashcardsView() {
  const { toast } = useToast();

  const [flashcards, setFlashcards] = useState<TFlashcard[]>([]);
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showExamplesModal, setShowExamplesModal] = useState(false);

  const currentFlashcard = flashcards[
    shuffledIndices[currentIndex]
  ] as TFlashcard;

  useEffect(() => {
    retrieveAllWords();
  }, []);

  async function retrieveAllWords() {
    const words = await getAllWords();
    setFlashcards(words);
    setShuffledIndices(priorityShuffleFlashcards(words));
  }

  const handleClick = useCallback(
    async (word: TFlashcard, newStatus: FlashcardStatus) => {
      if (isAnimating) return;

      setCurrentIndex((prevIndex) => {
        if (prevIndex + 1 >= shuffledIndices.length) {
          // When we reach the end, reshuffle with updated statuses
          const updatedFlashcards = structuredClone(flashcards);
          const wordIndex = flashcards.findIndex((w) => w.id === word.id);
          if (wordIndex !== -1) {
            updatedFlashcards[wordIndex] = { ...word, status: newStatus };
          }
          setFlashcards(updatedFlashcards);
          setShuffledIndices(priorityShuffleFlashcards(updatedFlashcards));
          return 0;
        }
        return prevIndex + 1;
      });

      try {
        setIsAnimating(true);
        await addWord({ ...word, status: newStatus });
      } catch (error) {
        console.error("Failed to add word:", error);
      }
    },
    [isAnimating, shuffledIndices.length, flashcards]
  );

  async function handleCopyWord(word: string) {
    try {
      await navigator.clipboard.writeText(word);
      toast({
        description: "Copied to clipboard",
      });
    } catch (error) {
      toast({
        description: `Failed to copy ${word}`,
        variant: "destructive",
      });
    }
  }

  function toggleExamplesModal() {
    setShowExamplesModal((prev) => !prev);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[calc(100dvh-49px)] overflow-hidden">
        <div className="relative w-full max-w-md h-96">
          <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex justify-center items-center"
              {...transitionProps}
            >
              {currentFlashcard && (
                <Flashcard
                  flashcard={currentFlashcard}
                  isAnimating={isAnimating}
                  onCopy={handleCopyWord}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-x-4 mt-12">
          <Button
            onClick={() => handleClick(currentFlashcard, "unrecognized")}
            variant="destructive"
          >
            わからない
          </Button>
          <Button
            onClick={() => handleClick(currentFlashcard, "familiar")}
            variant="secondary"
          >
            まあまあ
          </Button>
          <Button
            onClick={() => handleClick(currentFlashcard, "known")}
            variant="default"
          >
            知っている
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          <Button onClick={toggleExamplesModal}>Show examples</Button>
        </div>
      </div>

      <SentencesModal
        isOpen={showExamplesModal}
        currentFlashcard={currentFlashcard}
        onToggle={toggleExamplesModal}
      />
    </>
  );
}

export default FlashcardsView;
