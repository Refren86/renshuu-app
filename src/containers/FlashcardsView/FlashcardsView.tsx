import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

import { priorityShuffleFlashcards } from "@/lib/utils";
import { useToast } from "@/hooks/useToast";
import { Flashcard } from "@/components/Flashcard";
import { FlashcardStatus, TFlashcard } from "@/types";
import { SentencesModal } from "@/components/SentencesModal";
import { useFlashcards } from "@/hooks/useFlashcards";
import { ActionBtns } from "./ActionBtns/ActionBtns";

const transitionProps: HTMLMotionProps<"div"> = {
  initial: { x: 600, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -600, opacity: 0 },
  transition: { duration: 0.5 },
};

function FlashcardsView() {
  const { toast } = useToast();

  const isShuffled = useRef(false);
  const answerClickFnRef = useRef<
    ((word: TFlashcard, newStatus: FlashcardStatus) => Promise<void>) | null
  >(null);
  const toggleExamplesFnRef = useRef<(() => void) | null>(null);

  const { flashcards, handleUpdateFlashcard } = useFlashcards();

  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showExamplesModal, setShowExamplesModal] = useState(false);

  const currentFlashcard = flashcards[shuffledIndices[currentIndex]];

  useEffect(() => {
    if (!isShuffled.current && flashcards.length > 0) {
      setShuffledIndices(priorityShuffleFlashcards(flashcards));
      isShuffled.current = true;
    }
  }, [flashcards]);

  useEffect(() => {
    toggleExamplesFnRef.current = () => {
      setShowExamplesModal((prev) => !prev);
    };
  }, []);

  useEffect(() => {
    answerClickFnRef.current = async (word, newStatus) => {
      if (isAnimating) return;

      setIsAnimating(true);
      try {
        const updatedWord = { ...word, status: newStatus };

        function reshuffleFlashcards(updatedWord: TFlashcard) {
          setCurrentIndex((prevIndex) => {
            if (prevIndex + 1 >= shuffledIndices.length) {
              // When we reach the end, reshuffle with updated statuses
              const updatedFlashcards = structuredClone(flashcards);
              const wordIndex = flashcards.findIndex((w) => w.id === updatedWord.id);
              if (wordIndex !== -1) {
                updatedFlashcards[wordIndex] = updatedWord;
              }
              setShuffledIndices(priorityShuffleFlashcards(updatedFlashcards));
              return 0;
            }
            return prevIndex + 1;
          });
        }

        reshuffleFlashcards(updatedWord);
        await handleUpdateFlashcard(updatedWord);
      } catch (error: unknown) {
        console.error("Update flashcard error: ", error);
        toast({
          description: "Failed to update flashcard. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsAnimating(false);
      }
    };
  }, [flashcards, isAnimating, shuffledIndices.length, handleUpdateFlashcard, toast]);

  const handleClick = useCallback(
    async (word: TFlashcard, newStatus: FlashcardStatus) => {
      answerClickFnRef.current!(word, newStatus);
    },
    []
  );

  const toggleExamplesModal = useCallback(() => {
    toggleExamplesFnRef.current!();
  }, []);

  async function handleCopyWord(word: string) {
    try {
      await navigator.clipboard.writeText(word);
      toast({
        description: "Copied to clipboard",
      });
    } catch (error: unknown) {
      console.error("Copy error: ", error);
      toast({
        description: `Failed to copy ${word}`,
        variant: "destructive",
      });
    }
  }

  // console.log({ shuffledIndices, flashcards });

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

        <ActionBtns
          currentFlashcard={currentFlashcard}
          handleClick={handleClick}
          toggleExamplesModal={toggleExamplesModal}
        />
      </div>

      {showExamplesModal && (
        <SentencesModal
          isOpen={showExamplesModal}
          currentFlashcard={currentFlashcard}
          onToggle={toggleExamplesModal}
        />
      )}
    </>
  );
}

export default FlashcardsView;
