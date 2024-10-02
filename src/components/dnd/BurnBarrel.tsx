import { useRef, useState } from "react";
import { Flame, Trash2 } from "lucide-react";

import { TFlashcard } from "@/types";
import { deleteWord } from "@/lib/db";
import { SpringDialog } from "../SpringDialog";

type TSetCards = React.Dispatch<React.SetStateAction<TFlashcard[]>>;

type BurnBarrelProps = {
  setCards: TSetCards;
};

export const BurnBarrel = ({ setCards }: BurnBarrelProps) => {
  const cardId = useRef<string | null>(null);
  const [active, setActive] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setShowConfirmationDialog(true);
    cardId.current = e.dataTransfer.getData("cardId");
    setActive(false);
  };

  const handleCloseConfirmationDialog = () => {
    setShowConfirmationDialog(false);
  };

  const handleDeleteCard = () => {
    const id = cardId.current;

    if (!id) return;

    setCards((pv) => pv.filter((c) => c.id !== id));
    deleteWord(id);
    handleCloseConfirmationDialog();
  };

  return (
    <>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
          active
            ? "border-red-800 bg-red-800/20 text-red-500"
            : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
        }`}
      >
        {active ? (
          <Flame className="animate-bounce pointer-events-none size-10" />
        ) : (
          <Trash2 className="size-8" />
        )}
      </div>

      <SpringDialog
        isOpen={showConfirmationDialog}
        onClose={handleCloseConfirmationDialog}
        onConfirm={handleDeleteCard}
      />
    </>
  );
};