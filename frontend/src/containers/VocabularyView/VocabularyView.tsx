import debounce from "lodash/debounce";
import { Search } from "lucide-react";
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { TFlashcard } from "@/types";
import { Loader } from "@/components/Loader";
import { generateUniqueId } from "@/lib/utils";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/useToast";
import { Input } from "@/components/ui/input";
import { EditCell } from "./EditCell/EditCell";
import { Wrapper } from "@/components/Wrapper";
import { useDynamicSizeList } from "@/hooks/useDynamicSizeList";
import { EditableTableCell } from "./EditableTableCell/EditableTableCell";
import { AddNewWordForm } from "./AddNewWordForm/AddNewWordForm";
import { Table, TableHeader, TableBody, TableHead, TableRow } from "@/components/ui/table";
import { removeImageFromCloudinary, uploadImageToCloudinary } from "@/lib/requestService";
import { ImageTableCell } from "./ImageTableCell/ImageTableCell";
import { WordDeletionConfirmModal } from "@/components/WordDeletionConfirmModal";
import { ImagePreviewModal } from "./ImagePreviewModal/ImagePreviewModal";
import useFlashcards from "@/hooks/graphql/useFlashcards";

export const VocabularyView = () => {
  const { toast } = useToast();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [editedRows, setEditedRows] = useState<Record<string, TFlashcard>>({});
  const [isAddingNewFlashcard, setIsAddingNewFlashcard] = useState(false);
  const [wordForPreview, setWordForPreview] = useState<TFlashcard | null>(null);
  const [wordToRemove, setWordToRemove] = useState<TFlashcard | null>(null);

  const debouncedSearch = useRef(
    debounce((value: string) => {
      setSearchQuery(value);
    }, 500)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const {
    flashcards,
    flashcardsLoading,
    handleCreateFlashcard,
    handleUpdateFlashcard,
    handleRemoveFlashcard,
    handleRemoveFlashcardImage,
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
    getScrollElement: useCallback(() => (!flashcardsLoading ? scrollElementRef.current : null), [flashcardsLoading]),
    getItemKey: useCallback((index) => filteredData[index]?.id, [filteredData]),
  });

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.trim();
      debouncedSearch(newValue);
    },
    [debouncedSearch]
  );

  const handleImageUpload = useCallback(
    async (imageFile: File, flashcardId: string) => {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("flashcardId", flashcardId);

      const { imageUrl } = await uploadImageToCloudinary(formData);

      if (imageUrl === null) {
        toast({
          description: "Error ocurred while uploading image",
          variant: "destructive",
        });
        return;
      }

      const { data } = await handleUpdateFlashcard({
        id: flashcardId,
        imageUrl: imageUrl,
      });

      if (wordForPreview) {
        setWordForPreview((prev) => {
          if (prev) {
            return { ...prev, imageUrl: data.uploadFlashcardImage.imageUrl };
          }

          return prev;
        });
      }
    },
    [uploadImageToCloudinary, handleUpdateFlashcard, wordForPreview, setWordForPreview, toast]
  );

  const handleCreateNewFlashcard = useCallback(
    async (
      e: React.FormEvent<HTMLFormElement>,
      newCardData: Pick<TFlashcard, "kanji" | "reading" | "meaning">,
      imageFile: File | null
    ) => {
      try {
        setIsAddingNewFlashcard(true);

        e.preventDefault();

        const kanji = newCardData?.kanji?.trim().length ? newCardData.kanji.trim() : null;
        const reading = newCardData.reading.trim();
        const meaning = newCardData.meaning.trim();

        if (!newCardData.reading.trim().length || !newCardData.meaning.trim().length) return;

        const flashcardId = generateUniqueId();

        const newCard: TFlashcard = {
          id: flashcardId,
          status: "unset",
          kanji,
          reading,
          meaning,
          imageUrl: null,
        };

        await handleCreateFlashcard(newCard);

        if (imageFile) {
          await handleImageUpload(imageFile, flashcardId);
        }
      } catch (error) {
        console.log("Error adding flashcard: ", error);
      } finally {
        setIsAddingNewFlashcard(false);
      }
    },
    [handleCreateFlashcard, handleImageUpload]
  );

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>, flashcardId: string) => {
    const { files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];

      await handleImageUpload(file, flashcardId);
    }
  };

  const handleEditFlashcard = async (e: React.MouseEvent<HTMLButtonElement>, word: TFlashcard) => {
    const elName = e.currentTarget.name;

    if (elName === "edit") {
      setEditedRows((prevState) => ({ ...prevState, [word.id]: word }));
      return;
    } else if (elName === "done") {
      await handleUpdateFlashcard(editedRows[word.id]);
    } else if (elName === "delete") {
      setWordToRemove(word);
    }

    setEditedRows((prevState) => {
      const prevStateCopy = structuredClone(prevState);
      delete prevStateCopy[word.id];
      return prevStateCopy;
    });
  };

  const handleRemoveWord = async () => {
    if (!wordToRemove) return;

    try {
      await removeImageFromCloudinary(wordToRemove.id);
      await handleRemoveFlashcard(wordToRemove.id);

      setWordToRemove(null);
    } catch (error) {
      console.log("Error removing flashcard: ", error);
    }
  };

  const handleImageRemove = async (flashcardId?: string) => {
    if (!flashcardId) return;

    try {
      await removeImageFromCloudinary(flashcardId);
      await handleRemoveFlashcardImage(flashcardId);

      setWordForPreview(null);
    } catch (error) {
      console.error("Image delete error: ", error);
    }
  };

  return (
    <>
      <Layout>
        <section className="pt-8 min-h-[calc(100dvh-49px)]">
          <Wrapper>
            <div className="flex items-center gap-x-4 mb-8">
              <div className="relative">
                <Search className="absolute -translate-y-1/2 left-2 text-muted-foreground top-1/2" />
                <Input ref={inputRef} onChange={handleInputChange} placeholder="Search..." className="pl-10" />
              </div>

              <div className="h-[30px] w-[2px] bg-green-200" />

              <AddNewWordForm isLoading={isAddingNewFlashcard} onCreateNewFlashcard={handleCreateNewFlashcard} />
            </div>

            {flashcardsLoading ? (
              <div className="pt-10">
                <Loader size="lg" />
              </div>
            ) : (
              <>
                <div ref={scrollElementRef} className="h-[800px] overflow-y-auto pr-2">
                  {filteredData.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px]">Kanji</TableHead>
                          <TableHead className="w-[250px]">Reading</TableHead>
                          <TableHead className="w-[200px]">Image</TableHead>
                          <TableHead colSpan={2}>Meaning</TableHead>
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
                              <ImageTableCell
                                word={item}
                                handleChangeImage={handleChangeImage}
                                handleWordPreview={() => setWordForPreview(item)}
                                className="min-w-[200px] max-w-[200px]"
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
                    <h2 className="text-center mt-8 text-3xl font-semibold">List is empty</h2>
                  )}
                </div>

                <p className="text-end mt-6">Total words: {flashcards.length}</p>
              </>
            )}
          </Wrapper>
        </section>
      </Layout>

      <ImagePreviewModal
        isOpen={wordForPreview !== null}
        word={wordForPreview}
        handleImageUpload={handleImageUpload}
        handleImageRemove={handleImageRemove}
        onClose={() => setWordForPreview(null)}
        withControls
      />

      <WordDeletionConfirmModal
        isOpen={wordToRemove !== null}
        onClose={() => setWordToRemove(null)}
        onConfirm={handleRemoveWord}
      />
    </>
  );
};
