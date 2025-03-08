import { motion } from "framer-motion";

import { TFlashcard } from "@/types";
import { DropIndicator } from "./DropIndicator";

type DraggableElementProps = {
  word: TFlashcard;
  onDragStart: (e: React.DragEvent, card: TFlashcard) => void;
};

export const DraggableElement = ({ word, onDragStart }: DraggableElementProps) => {
  const { id, status } = word;

  return (
    <>
      <DropIndicator beforeId={id} column={status} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => onDragStart(e as unknown as React.DragEvent, word)}
        className="cursor-move rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-lg text-neutral-100">
          <span className="text-xl">{word?.kanji}</span> ({word.reading}) {word.meaning}
        </p>
      </motion.div>
    </>
  );
};
