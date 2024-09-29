import { useEffect, useState } from "react";

import { TFlashcard } from "@/types";
import { StoreName, addWord, getAllWords } from "@/lib/db";

type DraggableCardData = TFlashcard & { type: StoreName };

export const ReviewedWordsView = () => {
  const [unknownWords, setUnknownWords] = useState<TFlashcard[]>([]);
  const [familiarWords, setFamiliarWords] = useState<TFlashcard[]>([]);
  const [knownWords, setKnownWords] = useState<TFlashcard[]>([]);

  useEffect(() => {
    loadAllWords();
  }, []);

  async function loadAllWords() {
    try {
      const [known, familiar, unknown] = await Promise.all([
        getAllWords("KnownWords"),
        getAllWords("FamiliarWords"),
        getAllWords("UnknownWords"),
      ]);
      setKnownWords(known);
      setFamiliarWords(familiar);
      setUnknownWords(unknown);
    } catch (error) {
      console.error("Failed to load words:", error);
    }
  }

  function handleOnDrag(e: React.DragEvent, cardData: DraggableCardData) {
    e.dataTransfer.setData("cardData", JSON.stringify(cardData));
  }

  async function handleOnDrop(e: React.DragEvent) {
    try {
      const cardData = e.dataTransfer.getData("cardData");
      const parsedCardData = JSON.parse(cardData) as DraggableCardData;

      const { type: storeType, ...word } = parsedCardData;
      await addWord(storeType, word);
    } catch (error) {
      console.log('Failed to add word', error);
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  console.log({ knownWords, familiarWords, unknownWords });

  return (
    <div className="grid grid-cols-3 gap-x-6">
      <div className="rounded-lg border border-primary border-dashed">
        <h2>知らない単語</h2>

        <div className="space-y-4">
          {unknownWords.map((word) => (
            <div
              key={word.id}
              className="border flex justify-center items-center border-gray-700 rounded-md bg-gray-500 text-white"
              draggable
            >
              <p>
                {word?.kanji} ({word.reading})
              </p>
              <p>{word.meaning}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>五分五分単語</h2>
      </div>

      <div>知っている単語</div>
    </div>
  );
};
