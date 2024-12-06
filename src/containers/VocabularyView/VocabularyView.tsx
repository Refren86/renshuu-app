import debounce from "lodash/debounce";
import { Search } from "lucide-react";
import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { TFlashcard } from "@/types";
import { Input } from "@/components/ui/input";
import { EditCell } from "./EditCell/EditCell";
import { Wrapper } from "@/components/Wrapper";
import { useDynamicSizeList } from "@/hooks/useDynamicSizeList";
import { EditableTableCell } from "./EditableTableCell/EditableTableCell";
import { AddNewWordForm } from "./AddNewWordForm/AddNewWordForm";
import { useFlashcards } from "@/hooks/useFlashcards";
import { Loader } from "@/components/Loader";
import { generateUniqueId } from "@/lib/utils";

export const VocabularyView = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [editedRows, setEditedRows] = useState<Record<string, TFlashcard>>({});

  const {
    flashcards,
    loading,
    handleCreateFlashcard,
    handleUpdateFlashcard,
    handleRemoveFlashcard,
  } = useFlashcards();

  const filteredData = useMemo(() => {
    if (!searchQuery) return flashcards;

    const queryLowerCase = searchQuery.toLowerCase();

    return flashcards.filter(
      (word) =>
        (word.kanji && word.kanji.includes(queryLowerCase)) ||
        word.reading.includes(queryLowerCase) ||
        word.meaning.toLowerCase().includes(queryLowerCase)
    );
  }, [flashcards, searchQuery]);

  const { virtualItems, totalHeight, measureElement } = useDynamicSizeList({
    estimateItemHeight: useCallback(() => 72, []),
    itemsCount: filteredData.length,
    getScrollElement: useCallback(
      () => (!loading ? scrollElementRef.current : null),
      [loading]
    ),
    getItemKey: useCallback((index) => filteredData[index]?.id, [filteredData]),
  });

  const handleInputChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.trim();

      setSearchQuery(newValue);
    }, 500),
    []
  );

  const handleCreateNewFlashcard = async (
    e: React.FormEvent<HTMLFormElement>,
    newCardData: Pick<TFlashcard, "kanji" | "reading" | "meaning">
  ) => {
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

    console.log({newCard});
    

    await handleCreateFlashcard(newCard);
  };

  const handleEditFlashcard = async (
    e: React.MouseEvent<HTMLButtonElement>,
    word: TFlashcard
  ) => {
    const elName = e.currentTarget.name;

    if (elName === "edit") {
      setEditedRows((prevState) => ({ ...prevState, [word.id]: word }));
      return;
    } else if (elName === "done") {
      await handleUpdateFlashcard(editedRows[word.id]);
    } else if (elName === "delete") {
      await handleRemoveFlashcard(word.id);
    }

    setEditedRows((prevState) => {
      const prevStateCopy = structuredClone(prevState);
      delete prevStateCopy[word.id];
      return prevStateCopy;
    });
  };

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

          <AddNewWordForm onCreateNewFlashcard={handleCreateNewFlashcard} />
        </div>

        {loading ? (
          <div className="pt-10">
            <Loader size="lg" />
          </div>
        ) : (
          <>
            <div
              ref={scrollElementRef}
              className="h-[800px] overflow-y-auto pr-2"
            >
              {filteredData.length > 0 ? (
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">漢字</TableHead>
                      <TableHead className="w-[250px]">読み方</TableHead>
                      <TableHead colSpan={2}>意味</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody
                    className="relative"
                    style={{ height: totalHeight }}
                  >
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
                            onEdit={handleEditFlashcard}
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

            <p className="text-end mt-6">Total words: {flashcards.length}</p>
          </>
        )}
      </Wrapper>
    </section>
  );
};
