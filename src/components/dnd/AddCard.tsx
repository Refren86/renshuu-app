import { useState } from "react";
import { motion } from "framer-motion";
import { CopyPlus } from "lucide-react";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FlashcardStatus, TFlashcard } from "@/types";

type AddCardProps = {
  column: FlashcardStatus;
  onCreateFlashcard: (flashcard: Omit<TFlashcard, "id">) => Promise<any>;
};

export const AddCard = ({ column, onCreateFlashcard }: AddCardProps) => {
  const [newCardData, setNewCardData] = useState<
    Pick<TFlashcard, "kanji" | "reading" | "meaning">
  >({ kanji: "", reading: "", meaning: "" });
  const [adding, setAdding] = useState(false);

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setNewCardData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const kanji = newCardData?.kanji?.trim().length
      ? newCardData.kanji.trim()
      : null;
    const reading = newCardData.reading.trim();
    const meaning = newCardData.meaning.trim();

    if (
      !newCardData.reading.trim().length ||
      !newCardData.meaning.trim().length
    )
      return;

    const newCard: Omit<TFlashcard, "id"> = {
      // id: generateUniqueId(),
      status: column,
      kanji,
      reading,
      meaning,
    };

    onCreateFlashcard(newCard);
    setAdding(false);
  }

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Input
              name={"kanji" as FlashcardStatus}
              onChange={handleInputChange}
              autoFocus
              placeholder="Kanji"
            />
            <Input
              name={"reading" as FlashcardStatus}
              onChange={handleInputChange}
              placeholder="Reading"
            />
            <Textarea
              name={"meaning" as FlashcardStatus}
              onChange={handleInputChange}
              placeholder="Meaning"
            />
          </div>

          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-red-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <CopyPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <CopyPlus />
        </motion.button>
      )}
    </>
  );
};
