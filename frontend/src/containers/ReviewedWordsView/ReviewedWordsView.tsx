import { useCallback, useEffect, useRef, useState } from "react";

import { TFlashcard } from "@/types";
import { useToast } from "@/hooks/useToast";
import { Loader } from "@/components/Loader";
import { Layout } from "@/components/Layout";
import { Wrapper } from "@/components/Wrapper";
import { generateUniqueId } from "@/lib/utils";
import { Column } from "@/components/dnd/Column";
import { BurnBarrel } from "@/components/dnd/BurnBarrel";
import useFlashcards from "@/hooks/graphql/useFlashcards";
import { uploadImageToCloudinary } from "@/lib/requestService";

export const ReviewedWordsView = () => {
  const { toast } = useToast();
  const isLoaded = useRef(false);

  const [words, setWords] = useState<TFlashcard[]>([]);
  const [wordForPreview, setWordForPreview] = useState<TFlashcard | null>(null);

  const { flashcards, flashcardsLoading, handleCreateFlashcard, handleUpdateFlashcard, handleRemoveFlashcard } =
    useFlashcards();

  useEffect(() => {
    if (flashcards.length > 0 && !isLoaded.current) {
      setWords(flashcards);
      isLoaded.current = true;
    }
  }, [flashcards]);

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
    [wordForPreview, handleUpdateFlashcard, setWordForPreview, toast]
  );

  const handleCreateNewFlashcard = useCallback(
    async (newCardData: Pick<TFlashcard, "kanji" | "reading" | "meaning" | "status">, imageFile: File | null) => {
      try {
        const { kanji, reading, meaning, status } = newCardData;

        if (!newCardData.reading.trim().length || !newCardData.meaning.trim().length) return;

        const flashcardId = generateUniqueId();

        const newCard: TFlashcard = {
          id: flashcardId,
          status,
          kanji,
          reading,
          meaning,
          imageUrl: null,
        };

        const { data: createFlashcardData } = await handleCreateFlashcard(newCard);

        if (createFlashcardData) {
          setWords((prev) => [...prev, createFlashcardData.createFlashcard]);
        }

        if (imageFile) {
          await handleImageUpload(imageFile, flashcardId);
        }
      } catch (error) {
        console.log("Error adding flashcard: ", error);
      }
    },
    [handleCreateFlashcard, handleImageUpload]
  );

  return (
    <Layout>
      <Wrapper>
        <div className="py-12 min-h-[calc(100dvh-49px)]">
          {flashcardsLoading ? (
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
                onUpdateFlashcard={handleUpdateFlashcard}
                setWords={setWords}
              />
              <Column
                title="Familiar words"
                cards={words}
                column="familiar"
                headingColor="text-blue-300"
                onCreateFlashcard={handleCreateNewFlashcard}
                onUpdateFlashcard={handleUpdateFlashcard}
                setWords={setWords}
              />
              <Column
                title="Known words"
                cards={words}
                column="known"
                headingColor="text-emerald-300"
                onCreateFlashcard={handleCreateNewFlashcard}
                onUpdateFlashcard={handleUpdateFlashcard}
                setWords={setWords}
              />
              <BurnBarrel onRemoveFlashcard={handleRemoveFlashcard} />
            </div>
          )}
        </div>
      </Wrapper>
    </Layout>
  );
};
