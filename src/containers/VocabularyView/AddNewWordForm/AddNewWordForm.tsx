import { memo, useState } from "react";
import { CircleCheck, CirclePlus, CircleX } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FlashcardStatus, TFlashcard } from "@/types";

const initialCardData = { kanji: "", reading: "", meaning: "" };

type AddNewWordFormProps = {
  onCreateNewFlashcard: (
    e: React.FormEvent<HTMLFormElement>,
    newCardData: Pick<TFlashcard, "kanji" | "reading" | "meaning">
  ) => void;
};

export const AddNewWordForm = memo(
  ({ onCreateNewFlashcard }: AddNewWordFormProps) => {
    const [newCardData, setNewCardData] =
      useState<Pick<TFlashcard, "kanji" | "reading" | "meaning">>(
        initialCardData
      );
    const [adding, setAdding] = useState(false);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = e.target;
      setNewCardData((prevState) => ({ ...prevState, [name]: value }));
    }

    return (
      <form
        className="flex gap-x-4"
        onSubmit={(e) => {
          onCreateNewFlashcard(e, newCardData);
          setNewCardData(initialCardData);
        }}
      >
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
  }
);
