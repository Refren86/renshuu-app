import { useCallback } from "react";
import { useMutation } from "@apollo/client";

import { GET_COLLECTION_FLASHCARDS } from "@/lib/gqlQueries";
import { CREATE_FLASHCARD, UPDATE_FLASHCARD, DELETE_FLASHCARD } from "@/lib/gqlMutations";
import {
  CreateFlashcardMutation,
  CreateFlashcardVariables,
  UpdateFlashcardMutation,
  UpdateFlashcardVariables,
  UseCreateFlashcardParams,
  UseUpdateFlashcardParams,
} from "@/types/graphql";

export function useCreateFlashcard() {
  const [createFlashcardMutation] = useMutation<CreateFlashcardMutation, CreateFlashcardVariables>(CREATE_FLASHCARD);

  return useCallback(
    async ({ collectionId, flashcard, refetch = false }: UseCreateFlashcardParams) => {
      try {
        return await createFlashcardMutation({
          variables: {
            collectionId,
            kanji: flashcard.kanji,
            reading: flashcard.reading,
            meaning: flashcard.meaning,
            status: flashcard.status,
          },
          refetchQueries: refetch
            ? [
                {
                  query: GET_COLLECTION_FLASHCARDS,
                  variables: { collectionId },
                },
              ]
            : undefined,
        });
      } catch (error) {
        console.error("Error creating flashcard:", error);
        throw error;
      }
    },
    [createFlashcardMutation]
  );
}

export function useUpdateFlashcard() {
  const [updateFlashcardMutation] = useMutation<UpdateFlashcardMutation, UpdateFlashcardVariables>(UPDATE_FLASHCARD);

  return useCallback(
    async ({ collectionId, flashcardId, updateData, refetch = true }: UseUpdateFlashcardParams) => {
      try {
        return await updateFlashcardMutation({
          variables: {
            flashcardId,
            ...updateData,
          },
          refetchQueries: refetch
            ? [
                {
                  query: GET_COLLECTION_FLASHCARDS,
                  variables: { collectionId },
                },
              ]
            : undefined,
        });
      } catch (error) {
        console.error("Error creating flashcard:", error);
        throw error;
      }
    },
    [updateFlashcardMutation]
  );
}

export function useRemoveFlashcard() {
  const [deleteFlashcard] = useMutation(DELETE_FLASHCARD);

  return useCallback(
    async ({ collectionId, flashcardId }: { collectionId: string; flashcardId: string }) => {
      try {
        await deleteFlashcard({
          variables: { collectionId, flashcardId },
          refetchQueries: [{ query: GET_COLLECTION_FLASHCARDS, variables: { collectionId } }],
        });
      } catch (error) {
        console.error("Error deleting flashcard:", error);
        throw error;
      }
    },
    [deleteFlashcard]
  );
}
