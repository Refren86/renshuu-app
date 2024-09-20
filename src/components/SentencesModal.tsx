import axios from "axios";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader } from "./Loader";
import { TFlashcard } from "@/types";

type SentencesModalProps = {
  isOpen: boolean;
  currentFlashcard: TFlashcard;
  onToggle: () => void;
};

async function loadExamples(keyword: string = "", page: number = 1) {
  const { data } = await axios.get(
    `http://localhost:5000/api/search?keyword=${keyword}&page=${page}`
  );
  return data;
}

export const SentencesModal = ({
  isOpen,
  currentFlashcard,
  onToggle,
}: SentencesModalProps) => {
  const [sentences, setSentences] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchWord = currentFlashcard?.kanji || currentFlashcard?.reading;

  useEffect(() => {
    if (isOpen) {
      fetchSentences();
    }
  }, [isOpen, currentFlashcard]);

  async function fetchSentences() {
    try {
      setIsLoading(true);
      const { results } = await loadExamples(searchWord, 1);
      setSentences(results);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-3xl mb-6">
            {searchWord} {currentFlashcard?.kanji && `(${currentFlashcard.reading})`} - {currentFlashcard.meaning}
          </DialogTitle>

          <DialogDescription>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="divide-y divide-slate-700">
                {sentences.length > 0 &&
                  sentences.map((sentence) => (
                    <div className="text-2xl py-2">
                      {sentence?.transcriptions?.[0] ? (
                        <div className="flex items-start gap-x-3">
                          <div
                            className="flex-1"
                            dangerouslySetInnerHTML={{
                              __html: sentence?.transcriptions?.[0]?.html,
                            }}
                          />
                          <div className="flex-1">
                            {sentence.translations
                              .flat(2)
                              .map((translation: any) => translation.text)
                              .join(" / ")}
                          </div>
                        </div>
                      ) : (
                        <div>{sentence.text}</div>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
