import { useCallback } from "react";
import { useQuery } from "@apollo/client";

import type { TFlashcard } from "@/types/common";
import { GET_COLLECTION_FLASHCARDS } from "@/lib/gqlQueries";

export function useGetCollectionFlashcards(collectionId: string) {
  const { data, loading, error, refetch } = useQuery<{
    collectionFlashcards: TFlashcard[];
  }>(GET_COLLECTION_FLASHCARDS, {
    variables: { collectionId },
    skip: !collectionId,
  });

  const refetchCollectionFlashcards = useCallback(
    (collectionId: string) => {
      refetch({
        variables: { collectionId },
      });
    },
    [refetch]
  );

  return {
    collectionFlashcards: data?.collectionFlashcards ?? [],
    collectionFlashcardsLoading: loading,
    collectionFlashcardsError: error,
    refetchCollectionFlashcards,
  };
}
