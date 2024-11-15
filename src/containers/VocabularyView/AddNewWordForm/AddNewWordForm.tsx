import { useState } from "react";
import { CircleCheck, CirclePlus, CircleX } from "lucide-react";

import { addWord } from "@/lib/db";
import { FlashcardStatus, TFlashcard } from "@/types";
import { generateUniqueId } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialCardData = { kanji: "", reading: "", meaning: "" };

type AddNewWordFormProps = {
  setWords: React.Dispatch<React.SetStateAction<TFlashcard[]>>;
};

export const AddNewWordForm = ({ setWords }: AddNewWordFormProps) => {
  const [newCardData, setNewCardData] =
    useState<Pick<TFlashcard, "kanji" | "reading" | "meaning">>(
      initialCardData
    );
  const [adding, setAdding] = useState(false);

  function handleCreateNewWord(e: React.FormEvent<HTMLFormElement>) {
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

    const newCard: TFlashcard = {
      id: generateUniqueId(),
      status: "unset",
      kanji,
      reading,
      meaning,
    };

    setWords((prev) => [...prev, newCard]);
    addWord(newCard);
    setNewCardData(initialCardData);
    setAdding(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setNewCardData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <form className="flex gap-x-4" onSubmit={handleCreateNewWord}>
      {adding && (
        <div className="flex gap-x-4">
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
          <Input
            name={"meaning" as FlashcardStatus}
            onChange={handleInputChange}
            placeholder="Meaning"
          />
        </div>
      )}

      {adding ? (
        <div className="flex gap-x-4">
          <Button
            type="button"
            variant="destructive"
            onClick={() => setAdding(false)}
          >
            <CircleX />
            <span className="ml-2">Cancel</span>
          </Button>

          <Button variant="success" type="submit">
            <CircleCheck />
            <span className="ml-2">Add</span>
          </Button>
        </div>
      ) : (
        <Button type="button" onClick={() => setAdding(true)}>
          <CirclePlus />
          <span className="ml-2">Add new word</span>
        </Button>
      )}
    </form>
  );
};
