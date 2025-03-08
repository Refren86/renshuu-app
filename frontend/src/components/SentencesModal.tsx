import { useCallback, useEffect, useState } from "react";
import axios from "axios";
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
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "./ui/pagination";

type SentencesModalProps = {
  isOpen: boolean;
  currentFlashcard: TFlashcard;
  onToggle: () => void;
};

type Sentence = {
  id: string;
  transcriptions: Array<{ html: string }>;
  translations: Array<Array<{ text: string }>>;
  text: string;
};

type PaginationState = {
  page: number;
  prevPage: boolean;
  nextPage: boolean;
};

const API_BASE_URL = "http://localhost:5000/api";

export const SentencesModal: React.FC<SentencesModalProps> = ({ isOpen, currentFlashcard, onToggle }) => {
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    prevPage: false,
    nextPage: false,
  });

  const searchWord = currentFlashcard?.kanji || currentFlashcard?.reading;

  const loadExamples = async (keyword: string = "", page: number = 1) => {
    const { data } = await axios.get(`${API_BASE_URL}/search`, {
      params: { keyword, page },
    });
    return data;
  };

  const fetchSentences = useCallback(
    async (page: number = 1) => {
      try {
        setIsLoading(true);
        const { results, paging } = await loadExamples(searchWord, page);
        const { page: newPage, prevPage, nextPage } = paging.Sentences;
        setPagination({ page: newPage, prevPage, nextPage });
        setSentences(results);
      } catch (error) {
        console.error("Error fetching sentences:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [searchWord]
  );

  useEffect(() => {
    if (isOpen) {
      fetchSentences();
    }
  }, [isOpen, fetchSentences, searchWord]);

  const handleChangePage = (moveTo: "prev" | "next") => {
    const newPage = moveTo === "next" ? pagination.page + 1 : pagination.page - 1;

    if ((moveTo === "next" && pagination.nextPage) || (moveTo === "prev" && pagination.prevPage)) {
      fetchSentences(newPage);
    }
  };

  const renderSentence = (sentence: Sentence) => (
    <div key={sentence.id} className="text-2xl py-2">
      {sentence?.transcriptions?.[0] ? (
        <div className="flex items-start gap-x-3">
          <div
            className="flex-1"
            dangerouslySetInnerHTML={{
              __html: sentence.transcriptions[0].html,
            }}
          />
          <div className="flex-1">
            {sentence.translations
              .flat(2)
              .map((translation: { text: string }) => translation.text)
              .join(" / ")}
          </div>
        </div>
      ) : (
        <div>{sentence.text}</div>
      )}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onToggle}>
      <DialogContent className="max-h-[1000px] overflow-y-auto max-w-4xl" aria-describedby={`${searchWord} sentences`}>
        <DialogHeader>
          <DialogTitle className="text-3xl mb-6">
            {searchWord} {currentFlashcard?.kanji && `(${currentFlashcard?.reading})`} - {currentFlashcard?.meaning}
          </DialogTitle>
          <DialogDescription asChild>
            {isLoading ? <Loader /> : <div className="divide-y divide-slate-700">{sentences.map(renderSentence)}</div>}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="w-32"
                  isActive={pagination.prevPage}
                  onClick={() => handleChangePage("prev")}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className="w-32"
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
