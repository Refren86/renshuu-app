import { useState } from "react";
import { motion } from "framer-motion";
import { CopyPlus } from "lucide-react";

import { TFlashcard } from "@/types";

type TSetCards = React.Dispatch<React.SetStateAction<TFlashcard[]>>;

type AddCardProps = {
  column: string;
  setCards: TSetCards;
};

export const AddCard = ({ column, setCards }: AddCardProps) => {
  const [kanji, setKanji] = useState("");
  const [reading, setReading] = useState("");
  const [meaning, setMeaning] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!reading.trim().length || !meaning.trim().length) return;

    const newCard = {
      column,
      kanji: kanji.trim(),
      reading: reading.trim(),
      meaning: meaning.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setKanji(e.target.value)}
            autoFocus
            placeholder="Kanji"
            className="w-full rounded border border-primary bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-primary/80 focus:outline-0"
          />
          <textarea
            onChange={(e) => setReading(e.target.value)}
            placeholder="Reading"
            className="w-full rounded border border-primary bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-primary/80 focus:outline-0"
          />
          <textarea
            onChange={(e) => setMeaning(e.target.value)}
            placeholder="Meaning"
            className="w-full rounded border border-primary bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-primary/80 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
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
