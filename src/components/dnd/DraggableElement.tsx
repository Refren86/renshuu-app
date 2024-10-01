import { motion } from "framer-motion";

// import { StoreName } from "@/lib/db";
import { TFlashcard } from "@/types";
import { DropIndicator } from "./DropIndicator";

type DraggableElementProps = {
  word: TFlashcard;
  onDragStart: (e: React.DragEvent, card: TFlashcard) => void;
};

export const DraggableElement = ({
  word,
  onDragStart,
}: DraggableElementProps) => {
  const { id, column } = word;

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable
        onDragStart={(e) => onDragStart(e as unknown as React.DragEvent, word)}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">
          {word?.kanji} ({word.reading}) {word.meaning}
        </p>
      </motion.div>
    </>
  );
};
