import { useState } from "react";
import { motion } from "framer-motion";
import { CopyPlus } from "lucide-react";

import { addWord } from "@/lib/db";
import { generateUniqueId } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { FlashcardStatus, TFlashcard } from "@/types";

type TSetCards = React.Dispatch<React.SetStateAction<TFlashcard[]>>;

type AddCardProps = {
  column: FlashcardStatus;
  setCards: TSetCards;
};

export const AddCard = ({ column, setCards }: AddCardProps) => {
  const [newCardData, setNewCardData] = useState<
    Pick<TFlashcard, "kanji" | "reading" | "meaning">
  >({ kanji: "", reading: "", meaning: "" });
  const [adding, setAdding] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
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

    const newCard = {
      id: generateUniqueId(),
      status: column,
      kanji,
      reading,
      meaning,
    };

    setCards((pv) => [...pv, newCard]);
    addWord(newCard);
    setAdding(false);
  }

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Textarea
              name={"kanji" as FlashcardStatus}
              onChange={handleInputChange}
              autoFocus
              placeholder="Kanji"
            />
            <Textarea
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
