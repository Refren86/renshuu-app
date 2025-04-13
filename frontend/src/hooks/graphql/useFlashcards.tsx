import { useGetAllFlashcards } from "./useFlashcardQueries";
import {
  useCreateFlashcard,
  useRemoveFlashcard,
  useRemoveFlashcardImage,
  useUpdateFlashcard,
} from "./useFlashcardMutations";

export default function useFlashcards() {
  const { flashcards, flashcardsLoading, flashcardsError, refetchFlashcards } = useGetAllFlashcards();
  const handleCreateFlashcard = useCreateFlashcard();
  const handleUpdateFlashcard = useUpdateFlashcard();
  const handleRemoveFlashcard = useRemoveFlashcard();
  const handleRemoveFlashcardImage = useRemoveFlashcardImage();

  return {
    flashcards,
    flashcardsLoading,
    flashcardsError,
    refetchFlashcards,
    handleCreateFlashcard,
    handleUpdateFlashcard,
    handleRemoveFlashcard,
    handleRemoveFlashcardImage,
  };
}
