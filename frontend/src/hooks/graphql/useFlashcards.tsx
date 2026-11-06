import { useGetCollectionFlashcards } from "./useFlashcardQueries";
import { useCreateFlashcard, useRemoveFlashcard, useUpdateFlashcard } from "./useFlashcardMutations";

type UseCollectionFlashcardsProps = {
  collectionId: string;
};

export default function useFlashcards({ collectionId }: UseCollectionFlashcardsProps) {
  const { collectionFlashcards, collectionFlashcardsLoading, collectionFlashcardsError, refetchCollectionFlashcards } =
    useGetCollectionFlashcards(collectionId);

  const handleCreateFlashcard = useCreateFlashcard();
  const handleUpdateFlashcard = useUpdateFlashcard();
  const handleRemoveFlashcard = useRemoveFlashcard();

  return {
    collectionFlashcards,
    collectionFlashcardsLoading,
    collectionFlashcardsError,
    refetchCollectionFlashcards,
    handleCreateFlashcard,
    handleUpdateFlashcard,
    handleRemoveFlashcard,
  };
}
