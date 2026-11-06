import { useCallback, useEffect, useRef, useState } from "react";

import { TFlashcard } from "@/types/common";
import { useToast } from "@/hooks/useToast";
import { Loader } from "@/components/Loader";
import { Layout } from "@/components/Layout";
import { Wrapper } from "@/components/Wrapper";
import { Column } from "@/components/dnd/Column";
import { BurnBarrel } from "@/components/dnd/BurnBarrel";
import useFlashcards from "@/hooks/graphql/useFlashcards";
import { uploadImageToCloudinary } from "@/lib/requestService";
import { Route as reviewedWordsRoute } from "@/routes/reviewed-words.$collectionId.lazy";

export const ReviewedWordsView = () => {
  const { toast } = useToast();
  const isLoaded = useRef(false);

  const { collectionId } = reviewedWordsRoute.useParams();

  const [words, setWords] = useState<TFlashcard[]>([]);
  const [wordForPreview, setWordForPreview] = useState<TFlashcard | null>(null);

  const {
    collectionFlashcards,
    collectionFlashcardsLoading,
    handleCreateFlashcard,
    handleUpdateFlashcard,
    handleRemoveFlashcard,
  } = useFlashcards({ collectionId });

  useEffect(() => {
    if (collectionFlashcards.length > 0 && !isLoaded.current) {
      setWords(collectionFlashcards);
      isLoaded.current = true;
    }
  }, [collectionFlashcards]);

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

      await handleUpdateFlashcard({
        collectionId,
        flashcardId,
        updateData: { imageUrl },
        refetch: false,
      });

      setWords((prev) => prev.map((word) => (word.id === flashcardId ? { ...word, imageUrl } : word)));

      if (wordForPreview) {
        setWordForPreview((prev) => (prev ? { ...prev, imageUrl } : prev));
      }
    },
    [wordForPreview, collectionId, handleUpdateFlashcard, setWordForPreview, toast]
  );

  const handleCreateNewFlashcard = useCallback(
    async (newCardData: Pick<TFlashcard, "kanji" | "reading" | "meaning" | "status">, imageFile: File | null) => {
      try {
        if (!newCardData.reading.trim().length || !newCardData.meaning.trim().length) return;

        const { data: createFlashcardData } = await handleCreateFlashcard({
          collectionId,
          flashcard: { ...newCardData, imageUrl: null },
          refetch: false,
        });

        if (createFlashcardData) {
          const newFlashcard = { ...createFlashcardData.createFlashcard, imageUrl: null };
          setWords((prev) => [...prev, newFlashcard]);

          if (imageFile) {
            await handleImageUpload(imageFile, newFlashcard.id);
          }
        }
      } catch (error) {
        console.log("Error adding flashcard: ", error);
      }
    },
    [collectionId, handleCreateFlashcard, handleImageUpload]
  );

  const handleUpdateWord = useCallback(
    async (updateData: TFlashcard) => {
      await handleUpdateFlashcard({
        collectionId,
        flashcardId: updateData.id,
        updateData,
        refetch: false,
      });
    },
    [collectionId, handleUpdateFlashcard]
  );

  const handleRemoveWord = useCallback(
    async (flashcardId: string) => {
      await handleRemoveFlashcard({ collectionId, flashcardId });
      setWords((prev) => prev.filter((word) => word.id !== flashcardId));
    },
    [collectionId, handleRemoveFlashcard]
  );

  return (
    <Layout>
      <Wrapper>
        <div className="py-12 min-h-[calc(100dvh-49px)]">
          {collectionFlashcardsLoading ? (
            <div className="pt-10">
              <Loader size="lg" />
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-x-6">
              <Column
                title="Unknown words"
                cards={words}
                column="unrecognized"
                headingColor="text-red-300"
                onCreateFlashcard={handleCreateNewFlashcard}
                onUpdateFlashcard={handleUpdateWord}
                setWords={setWords}
              />
              <Column
                title="Familiar words"
                cards={words}
                column="familiar"
                headingColor="text-blue-300"
                onCreateFlashcard={handleCreateNewFlashcard}
                onUpdateFlashcard={handleUpdateWord}
                setWords={setWords}
              />
              <Column
                title="Known words"
                cards={words}
                column="known"
                headingColor="text-emerald-300"
                onCreateFlashcard={handleCreateNewFlashcard}
                onUpdateFlashcard={handleUpdateWord}
                setWords={setWords}
              />
              <BurnBarrel onRemoveFlashcard={handleRemoveWord} />
            </div>
          )}
        </div>
      </Wrapper>
    </Layout>
  );
};
