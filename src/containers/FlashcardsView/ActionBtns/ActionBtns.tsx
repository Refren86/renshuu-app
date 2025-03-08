import React from "react";

import { Button } from "@/components/ui/button";
import { FlashcardStatus, TFlashcard } from "@/types";

type ActionBtnsProps = {
  currentFlashcard: TFlashcard;
  handleClick: (word: TFlashcard, newStatus: FlashcardStatus) => Promise<void>;
  toggleExamplesModal: () => void;
};

export const ActionBtns = React.memo(
  ({ currentFlashcard, handleClick, toggleExamplesModal }: ActionBtnsProps) => {
    return (
      <>
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
      </>
    );
  }
);
