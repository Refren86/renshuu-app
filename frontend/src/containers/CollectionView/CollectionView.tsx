import debounce from "lodash/debounce";
import { Download, Search } from "lucide-react";
import { useApolloClient } from "@apollo/client";
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { TFlashcard } from "@/types/common";
import { Loader } from "@/components/Loader";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/useToast";
import { Input } from "@/components/ui/input";
import { EditCell } from "./EditCell/EditCell";
import { Wrapper } from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { useDynamicSizeList } from "@/hooks/useDynamicSizeList";
import { EditableTableCell } from "./EditableTableCell/EditableTableCell";
import { AddNewWordForm } from "./AddNewWordForm/AddNewWordForm";
import { Table, TableHeader, TableBody, TableHead, TableRow } from "@/components/ui/table";
import { removeImageFromCloudinary, uploadImageToCloudinary } from "@/lib/requestService";
import { ImageTableCell } from "./ImageTableCell/ImageTableCell";
import { WordDeletionConfirmModal } from "@/components/WordDeletionConfirmModal";
import { ImagePreviewModal } from "./ImagePreviewModal/ImagePreviewModal";
import useFlashcards from "@/hooks/graphql/useFlashcards";
import { Route as collectionRoute } from "@/routes/collection.$collectionId.lazy";
import { GET_COLLECTION_FLASHCARDS } from "@/lib/gqlQueries";

export const CollectionView = () => {
  const { toast } = useToast();
  const apolloClient = useApolloClient();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [editedRows, setEditedRows] = useState<Record<string, TFlashcard>>({});
  const [wordForPreview, setWordForPreview] = useState<TFlashcard | null>(null);
  const [wordToRemove, setWordToRemove] = useState<TFlashcard | null>(null);

  const { collectionId } = collectionRoute.useParams();

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
    collectionFlashcards,
    collectionFlashcardsLoading,
    handleCreateFlashcard,
    handleUpdateFlashcard,
    handleRemoveFlashcard,
    refetchCollectionFlashcards,
  } = useFlashcards({ collectionId });

  const filteredData = useMemo(() => {
    if (!searchQuery) return collectionFlashcards;

    const queryLowerCase = searchQuery.toLowerCase();

    return collectionFlashcards.filter(
      (word) =>
        (word.kanji && word.kanji.includes(queryLowerCase)) ||
        word.reading.includes(queryLowerCase) ||
        word.meaning.toLowerCase().includes(queryLowerCase)
    );
  }, [collectionFlashcards, searchQuery]);

  const { virtualItems, totalHeight, measureElement } = useDynamicSizeList({
    estimateItemHeight: useCallback(() => 72, []),
    itemsCount: filteredData.length,
    getScrollElement: useCallback(
      () => (!collectionFlashcardsLoading ? scrollElementRef.current : null),
      [collectionFlashcardsLoading]
    ),
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
    async (imageFile: File, flashcardId: string, optimistic: boolean = false) => {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("flashcardId", flashcardId);

      const { imageUrl } = await uploadImageToCloudinary(formData);

      if (imageUrl === null) {
        toast({
          description: "Error occurred while uploading image",
          variant: "destructive",
        });
        return;
      }

      if (optimistic) {
        apolloClient.cache.updateQuery(
          { query: GET_COLLECTION_FLASHCARDS, variables: { collectionId } },
          (data: { collectionFlashcards: TFlashcard[] } | null) => {
            if (!data) return data;

            return {
              ...data,
              collectionFlashcards: data.collectionFlashcards.map((card) =>
                card.id === flashcardId ? { ...card, imageUrl: imageUrl } : card
              ),
            };
          }
        );
      }

      if (wordForPreview) {
        setWordForPreview((prev) => {
          if (prev) {
            return { ...prev, imageUrl };
          }

          return prev;
        });
      }
    },
    [wordForPreview, apolloClient, collectionId, setWordForPreview, toast]
  );

  const handleCreateNewFlashcard = useCallback(
    async (newCardData: Pick<TFlashcard, "kanji" | "reading" | "meaning">, imageFile: File | null) => {
      try {
        const kanji = newCardData?.kanji?.trim().length ? newCardData.kanji.trim() : null;
        const reading = newCardData.reading.trim();
        const meaning = newCardData.meaning.trim();

        if (!newCardData.reading.trim().length || !newCardData.meaning.trim().length) return;

        const newCard: Omit<TFlashcard, "id"> = {
          status: "unset",
          kanji,
          reading,
          meaning,
          imageUrl: null,
        };

        const newFlashcard = await handleCreateFlashcard({ collectionId, flashcard: newCard, refetch: !imageFile });

        if (newFlashcard.data && imageFile) {
          await handleImageUpload(imageFile, newFlashcard.data.createFlashcard.id);
          refetchCollectionFlashcards(collectionId);
        }
      } catch (error) {
        console.log("Error adding flashcard: ", error);
      }
    },
    [collectionId, handleCreateFlashcard, handleImageUpload, refetchCollectionFlashcards]
  );

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>, flashcardId: string) => {
    const { files } = e.target;

    console.log(files);

    if (files && files.length > 0) {
      const file = files[0];

      await handleImageUpload(file, flashcardId, true);
    }
  };

  const handleEditFlashcard = async (e: React.MouseEvent<HTMLButtonElement>, word: TFlashcard) => {
    const elName = e.currentTarget.name;

    if (elName === "edit") {
      setEditedRows((prevState) => ({ ...prevState, [word.id]: word }));
      return;
    } else if (elName === "done") {
      await handleUpdateFlashcard({ collectionId, flashcardId: word.id, updateData: editedRows[word.id] });
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
      await handleRemoveFlashcard({ collectionId, flashcardId: wordToRemove.id });

      setWordToRemove(null);
    } catch (error) {
      console.log("Error removing flashcard: ", error);
    }
  };

  const handleImageRemove = async (flashcardId?: string, optimistic: boolean = false) => {
    if (!flashcardId) return;

    try {
      await removeImageFromCloudinary(flashcardId);

      if (optimistic) {
        apolloClient.cache.updateQuery(
          { query: GET_COLLECTION_FLASHCARDS, variables: { collectionId } },
          (data: { collectionFlashcards: TFlashcard[] } | null) => {
            if (!data) return data;

            return {
              ...data,
              collectionFlashcards: data.collectionFlashcards.map((card) =>
                card.id === flashcardId ? { ...card, imageUrl: null } : card
              ),
            };
          }
        );
      }

      setWordForPreview(null);
    } catch (error) {
      console.error("Image delete error: ", error);
    }
  };

  const exportToAnki = useCallback(() => {
    if (!collectionFlashcards || collectionFlashcards.length === 0) return;

    let ankiContent = "";

    collectionFlashcards.forEach((card) => {
      const front = card.kanji || card.reading;

      let back = card.meaning;

      if (card.kanji) {
        back = `${card.reading}<br>${back}`;
      }

      ankiContent += `${front}\t${back}\n`;
    });

    // Create and download file
    const blob = new Blob([ankiContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "japanese_flashcards.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [collectionFlashcards]);

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

              <AddNewWordForm onCreateNewFlashcard={handleCreateNewFlashcard} />
            </div>

            {collectionFlashcardsLoading ? (
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

                <div className="flex items-center justify-between">
                  <Button type="button" onClick={exportToAnki}>
                    <Download />
                    <span className="ml-2">Download as Anki</span>
                  </Button>
                  <p className="text-end mt-6">Total words: {collectionFlashcards.length}</p>
                </div>
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
