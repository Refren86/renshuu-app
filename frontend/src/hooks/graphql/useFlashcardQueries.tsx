import { useQuery } from "@apollo/client";

import type { TFlashcard } from "@/types";
import { GET_ALL_FLASHCARDS } from "@/lib/gqlQueries";

export function useFlashcardQueries() {
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
    loading,
    error,
    refetchFlashcards,
  };
}
