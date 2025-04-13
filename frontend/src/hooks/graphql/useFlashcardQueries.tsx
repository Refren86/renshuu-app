import { useQuery } from "@apollo/client";

import type { TFlashcard } from "@/types";
import { GET_ALL_FLASHCARDS } from "@/lib/gqlQueries";

export function useGetAllFlashcards() {
  const {
    data,
    loading,
    error,
    refetch: refetchFlashcards,
  } = useQuery<{
    allFlashcards: TFlashcard[];
  }>(GET_ALL_FLASHCARDS);

  return {
    flashcards: data?.allFlashcards ?? [],
    flashcardsLoading: loading,
    flashcardsError: error,
    refetchFlashcards,
  };
}
