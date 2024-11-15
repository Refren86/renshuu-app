import debounce from "lodash/debounce";
import { Search } from "lucide-react";
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { TFlashcard } from "@/types";
import { Input } from "@/components/ui/input";
import { EditCell } from "./EditCell/EditCell";
import { Wrapper } from "@/components/Wrapper";
import { deleteWord, getAllWords, updateWord } from "@/lib/db";
import { useDynamicSizeList } from "@/hooks/useDynamicSizeList";
import { EditableTableCell } from "./EditableTableCell/EditableTableCell";
import { AddNewWordForm } from "./AddNewWordForm/AddNewWordForm";

export const VocabularyView = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const [words, setWords] = useState<TFlashcard[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editedRows, setEditedRows] = useState<Record<string, TFlashcard>>({});

  useEffect(() => {
    loadAllWords();
  }, []);

  const loadAllWords = useCallback(async () => {
    try {
      const allWords = await getAllWords();
      const sortedWords = allWords.toSorted((a, b) => +a.id - +b.id);
      setWords(sortedWords);
    } catch (error) {
      console.log("Error loading words: ", error);
    }
  }, []);

  const filteredData = useMemo(() => {
    if (!searchQuery) return words;

    const queryLowerCase = searchQuery.toLowerCase();

    return words.filter(
      (word) =>
        (word.kanji && word.kanji.includes(queryLowerCase)) ||
        word.reading.includes(queryLowerCase) ||
        word.meaning.toLowerCase().includes(queryLowerCase)
    );
  }, [words, searchQuery]);

  const updateData = useCallback(
    (wordId: string, updatedWord: TFlashcard) => {
      setWords((words) => {
        const wordsCopy = structuredClone(words);
        const wordIdx = wordsCopy.findIndex((word) => word.id === wordId);
        wordsCopy.splice(wordIdx, 1, updatedWord);
        return wordsCopy;
      });
      setEditedRows((prevState) => {
        const prevStateCopy = structuredClone(prevState);
        delete prevStateCopy[wordId];
        return prevStateCopy;
      });
      updateWord(updatedWord);
    },
    [setWords, setEditedRows]
  );

  const removeWord = useCallback(
    (wordId: string) => {
      setWords((words) => {
        const wordsCopy = structuredClone(words);
        const wordIdx = wordsCopy.findIndex((word) => word.id === wordId);
        wordsCopy.splice(wordIdx, 1);
        return wordsCopy;
      });
      setEditedRows((prevState) => {
        const prevStateCopy = structuredClone(prevState);
        delete prevStateCopy[wordId];
        return prevStateCopy;
      });
      deleteWord(wordId);
    },
    [setWords, setEditedRows]
  );

  const { virtualItems, totalHeight, measureElement } = useDynamicSizeList({
    estimateItemHeight: useCallback(() => 72, []),
    itemsCount: filteredData.length,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
    getItemKey: useCallback((index) => filteredData[index]?.id, [filteredData]),
  });

  const handleInputChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.trim();

      setSearchQuery(newValue);
    }, 500),
    []
  );

  return (
    <section className="pt-8 min-h-[calc(100dvh-49px)]">
      <Wrapper>
        <div className="flex items-center gap-x-4 mb-8">
          <div className="relative">
            <Search className="absolute -translate-y-1/2 left-2 text-muted-foreground top-1/2" />
            <Input
              ref={inputRef}
              onChange={handleInputChange}
              placeholder="Search..."
              className="pl-10"
            />
          </div>

          <div className="h-[30px] w-[2px] bg-green-200" />

          <AddNewWordForm setWords={setWords} />
        </div>

        <div ref={scrollElementRef} className="h-[800px] overflow-y-auto pr-2">
          {filteredData.length > 0 ? (
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">ID</TableHead>
                  <TableHead className="w-[200px]">漢字</TableHead>
                  <TableHead className="w-[250px]">読み方</TableHead>
                  <TableHead colSpan={2}>意味</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="relative" style={{ height: totalHeight }}>
                {virtualItems.map((virtualRow) => {
                  const item = filteredData[virtualRow.index];

                  return (
                    <TableRow
                      key={item?.id}
                      data-index={virtualRow.index}
                      ref={measureElement}
                      className="absolute top-0"
                      style={{
                        transform: `translateY(${virtualRow.offsetTop}px)`,
                      }}
                    >
                      <TableCell className="min-w-[120px] max-w-[120px]">
                        <span>{item?.id}</span>
                      </TableCell>
                      <EditableTableCell
                        keyToUpdate="kanji"
                        word={item}
                        editedRows={editedRows}
                        setEditedRows={setEditedRows}
                        className="min-w-[200px] text-xl max-w-[200px]"
                      />
                      <EditableTableCell
                        keyToUpdate="reading"
                        word={item}
                        editedRows={editedRows}
                        setEditedRows={setEditedRows}
                        className="min-w-[250px] max-w-[250px]"
                      />
                      <EditableTableCell
                        keyToUpdate="meaning"
                        word={item}
                        editedRows={editedRows}
                        setEditedRows={setEditedRows}
                        className="w-full"
                      />
                      <EditCell
                        word={item}
                        editedRows={editedRows}
                        className="min-w-[150px] max-w-[150px]"
                        setEditedRows={setEditedRows}
                        updateData={updateData}
                        removeWord={removeWord}
                      />
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <h2 className="text-center mt-8 text-3xl font-semibold">
              何も見つからなかった
            </h2>
          )}
        </div>

        <p className="text-end mt-6 ">Total words: {words.length}</p>
      </Wrapper>
    </section>
  );
};
