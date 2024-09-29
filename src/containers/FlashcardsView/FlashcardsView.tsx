import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

import { TFlashcard } from "@/types";
import { shuffleArray } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { StoreName, addWord } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Flashcard } from "@/components/Flashcard";
import { SentencesModal } from "@/components/SentencesModal";

import flashcardsData from "@/assets/flashcards.json";

const transitionProps: HTMLMotionProps<"div"> = {
  initial: { x: 600, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -600, opacity: 0 },
  transition: { duration: 0.5 },
};

function FlashcardsView() {
  const { toast } = useToast();

  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showExamplesModal, setShowExamplesModal] = useState(false);

  const currentFlashcard = flashcardsData[shuffledIndices[currentIndex]];

  useEffect(() => {
    setShuffledIndices(shuffleArray([...Array(flashcardsData.length).keys()]));
  }, []);

  const handleClick = useCallback(
    async (storeName: StoreName, word: TFlashcard) => {
      if (isAnimating) return;

      setCurrentIndex((prevIndex) => {
        if (prevIndex + 1 >= shuffledIndices.length) {
          setShuffledIndices(
            shuffleArray([...Array(flashcardsData.length).keys()])
          );
          return 0;
        }
        return prevIndex + 1;
      });

      try {
        setIsAnimating(true);
        await addWord(storeName, word);
      } catch (error) {
        console.error("Failed to add word:", error);
      }
    },
    [isAnimating, shuffledIndices.length, addWord]
  );

  // useEffect(() => {
  //   function handleKeyDown(event: KeyboardEvent) {
  //     if (event.code === "Space") {
  //       handleClick();
  //     }
  //   }

  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [handleClick]);

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
      <div className="flex flex-col justify-center items-center h-[calc(100dvh-41px)] overflow-hidden">
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
            onClick={() => handleClick("UnknownWords", currentFlashcard)}
            variant="destructive"
          >
            わからない
          </Button>
          <Button
            onClick={() => handleClick("FamiliarWords", currentFlashcard)}
            variant="outline"
          >
            まあまあ
          </Button>
          <Button
            onClick={() => handleClick("KnownWords", currentFlashcard)}
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
