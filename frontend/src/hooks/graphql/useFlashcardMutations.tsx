import { useCallback } from "react";
import { useMutation } from "@apollo/client";

import type { TFlashcard } from "@/types";
import { GET_ALL_FLASHCARDS } from "@/lib/gqlQueries";
import { CREATE_FLASHCARD, UPDATE_FLASHCARD, DELETE_FLASHCARD, DELETE_FLASHCARD_IMAGE } from "@/lib/gqlMutations";

export function useCreateFlashcard() {
  const [createFlashcard] = useMutation(CREATE_FLASHCARD, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  return useCallback(
    async (flashcard: Omit<TFlashcard, "id">) => {
      try {
        return await createFlashcard({
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

export function useRemoveFlashcardImage() {
  const [deleteFlashcardImage] = useMutation(DELETE_FLASHCARD_IMAGE, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  return useCallback(
    async (id: string) => {
      try {
        const { data } = await deleteFlashcardImage({
          variables: { id },
        });

        console.log("Remove img data: ", data);

        return data.deleteFlashcardImage;
      } catch (error) {
        console.error("Error deleting flashcard image:", error);
        throw error;
      }
    },
    [deleteFlashcardImage]
  );
}
