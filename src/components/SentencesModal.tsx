import axios from "axios";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader } from "./Loader";
import { TFlashcard } from "@/types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

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
  const [pagination, setPagination] = useState({
    page: 1,
    prevPage: false,
    nextPage: false,
  });

  const searchWord = currentFlashcard?.kanji || currentFlashcard?.reading;

  useEffect(() => {
    if (isOpen) {
      fetchSentences();
    }
  }, [isOpen, currentFlashcard]);

  async function fetchSentences() {
    try {
      setIsLoading(true);
      const { results, paging } = await loadExamples(searchWord, 1);
      const { page, prevPage, nextPage } = paging.Sentences;
      setPagination({
        page,
        prevPage,
        nextPage,
      });
      setSentences(results);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleChangePage(moveTo: "prev" | "next") {
    try {
      setIsLoading(true);
      if (moveTo === "next" && pagination.nextPage) {
        const { results, paging } = await loadExamples(
          searchWord,
          pagination.page + 1
        );
        const { page, prevPage, nextPage } = paging.Sentences;
        setPagination({
          page,
          prevPage,
          nextPage,
        });
        setSentences(results);
      } else if (moveTo === "prev" && pagination.prevPage) {
        const { results, paging } = await loadExamples(
          searchWord,
          pagination.page - 1
        );
        const { page, prevPage, nextPage } = paging.Sentences;
        setPagination({
          page,
          prevPage,
          nextPage,
        });
        setSentences(results);
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent
        className="max-h-[1000px] overflow-y-auto max-w-4xl"
        aria-describedby={`${searchWord} sentences`}
      >
        <DialogHeader>
          <DialogTitle className="text-3xl mb-6">
            {searchWord}{" "}
            {currentFlashcard?.kanji && `(${currentFlashcard?.reading})`} -{" "}
            {currentFlashcard?.meaning}
          </DialogTitle>

          <DialogDescription asChild>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="divide-y divide-slate-700">
                {sentences.length > 0 &&
                  sentences.map((sentence) => (
                    <div key={sentence.id} className="text-2xl py-2">
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

        <DialogFooter>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  isActive={pagination.prevPage}
                  onClick={() => handleChangePage("prev")}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  isActive={pagination.nextPage}
                  onClick={() => handleChangePage("next")}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
