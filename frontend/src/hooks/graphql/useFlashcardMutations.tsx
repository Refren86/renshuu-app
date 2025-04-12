import { useCallback } from "react";
import { useMutation } from "@apollo/client";

import {
  CREATE_FLASHCARD,
  UPDATE_FLASHCARD,
  DELETE_FLASHCARD,
  UPLOAD_FLASHCARD_IMAGE,
  DELETE_FLASHCARD_IMAGE,
} from "@/lib/gqlMutations";
import { GET_ALL_FLASHCARDS } from "@/lib/gqlQueries";
import type { TFlashcard } from "@/types";

export function useCreateFlashcard() {
  const [createFlashcard] = useMutation(CREATE_FLASHCARD, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  return useCallback(
    async (flashcard: Omit<TFlashcard, "id">) => {
      try {
        await createFlashcard({
          variables: flashcard,
        });
      } catch (error) {
        console.error("Error creating flashcard:", error);
        throw error;
      }
    },
    [createFlashcard]
  );
}

export function useUpdateFlashcard() {
  const [updateFlashcard] = useMutation(UPDATE_FLASHCARD, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  return useCallback(
    async (updateData: Partial<TFlashcard> & Pick<TFlashcard, "id">) => {
      const { id, ...rest } = updateData;

      try {
        const { data } = await updateFlashcard({
          variables: {
            id,
            ...rest,
          },
        });

        return data.updateFlashcard;
      } catch (error) {
        console.error("Error updating flashcard:", error);
        throw error;
      }
    },
    [updateFlashcard]
  );
}

export function useRemoveFlashcard() {
  const [deleteFlashcard] = useMutation(DELETE_FLASHCARD, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  return useCallback(
    async (id: string) => {
      try {
        await deleteFlashcard({
          variables: { id },
        });
      } catch (error) {
        console.error("Error deleting flashcard:", error);
        throw error;
      }
    },
    [deleteFlashcard]
  );
}

export function useFlashcardImages() {
  const [uploadFlashcardImage] = useMutation(UPLOAD_FLASHCARD_IMAGE, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  const [deleteFlashcardImage] = useMutation(DELETE_FLASHCARD_IMAGE, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  const handleUploadFlashcardImage = useCallback(
    async ({ id, imageUrl }: { id: string; imageUrl: string }) => {
      try {
        const uploadImgRes = await uploadFlashcardImage({
          variables: {
            id,
            imageUrl,
          },
        });

        return uploadImgRes;
      } catch (error) {
        console.error("Error uploading flashcard image:", error);
        throw error;
      }
    },
    [uploadFlashcardImage]
  );

  const handleRemoveFlashcardImage = useCallback(
    async (id: string) => {
      try {
        await deleteFlashcardImage({
          variables: { id },
        });
      } catch (error) {
        console.error("Error deleting flashcard image:", error);
        throw error;
      }
    },
    [deleteFlashcardImage]
  );

  return {
    handleUploadFlashcardImage,
    handleRemoveFlashcardImage,
  };
}
