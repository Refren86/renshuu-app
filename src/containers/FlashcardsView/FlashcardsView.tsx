import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

import { shuffleArray } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Flashcard } from "@/components/Flashcard";

import flashcardsData from "@/assets/flashcards.json";
import axios from "axios";

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

  useEffect(() => {
    setShuffledIndices(shuffleArray([...Array(flashcardsData.length).keys()]));
  }, []);

  const handleClick = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 1 >= shuffledIndices.length) {
        setShuffledIndices(
          shuffleArray([...Array(flashcardsData.length).keys()])
        );
        return 0;
      }
      return prevIndex + 1;
    });
  }, [isAnimating, shuffledIndices.length]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "Space") {
        handleClick();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick]);

  const currentFlashcard = flashcardsData[shuffledIndices[currentIndex]];

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

  async function loadExamples() {
    const { data } = await axios.get(
      `https://tatoeba.org/en/api_v0/search?from=jpn&to=eng&query=${encodeURIComponent(currentFlashcard.kanji || currentFlashcard.reading)}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(data);
  }

  return (
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
        <Button onClick={handleClick} variant="destructive">
          わからない
        </Button>
        <Button onClick={handleClick} variant="outline">
          まあまあ
        </Button>
        <Button onClick={handleClick} variant="default">
          知っている
        </Button>
      </div>

      <div className="flex justify-center">
        <Button onClick={loadExamples}>Show examples</Button>
      </div>
    </div>
  );
}

export default FlashcardsView;
