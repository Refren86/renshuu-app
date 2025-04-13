import { useState } from "react";

import { AddCard } from "./AddCard";
import { DropIndicator } from "./DropIndicator";
import { FlashcardStatus, TFlashcard } from "@/types";
import { DraggableElement } from "./DraggableElement";

type TSetWords = React.Dispatch<React.SetStateAction<TFlashcard[]>>;

type ColumnProps = {
  title: string;
  headingColor: string;
  cards: TFlashcard[];
  column: FlashcardStatus;
  onCreateFlashcard: (flashcard: Omit<TFlashcard, "id">) => Promise<void>;
  onUpdateFlashcard: (updateData: TFlashcard) => Promise<void>;
  setWords: TSetWords;
};

export const Column = ({
  title,
  headingColor,
  cards,
  column,
  onCreateFlashcard,
  onUpdateFlashcard,
  setWords,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: React.DragEvent, card: TFlashcard) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    // Determine the ID of the card before which the dragged card should be inserted
    const before = (element as HTMLElement).dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);

      if (!cardToTransfer) return;

      cardToTransfer = { ...cardToTransfer, status: column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      onUpdateFlashcard(cardToTransfer);
      setWords(copy);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (elements?: Element[]) => {
    const indicators = elements || getIndicators();

    indicators.forEach((indicator) => {
      (indicator as HTMLElement).style.opacity = "0";
    });
  };

  const highlightIndicator = (e: React.DragEvent) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    (el.element as HTMLElement).style.opacity = "1";
  };

  const getNearestIndicator = (e: React.DragEvent, indicators: Element[]) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((card) => card.status === column);

  return (
    <div className="w-full shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">{filteredCards.length}</span>
      </div>

      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full max-h-[800px] overflow-y-auto pt-1 px-1 overflow-x-hidden w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        <AddCard column={column} onCreateFlashcard={onCreateFlashcard} />
        {filteredCards.map((card) => {
          return <DraggableElement key={card.id} word={card} onDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId="-1" column={column} />
      </div>
    </div>
  );
};
