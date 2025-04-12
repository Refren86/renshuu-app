import { useFlashcardQueries } from "./useFlashcardQueries";
import {
  useCreateFlashcard,
  useFlashcardImages,
  useRemoveFlashcard,
  useUpdateFlashcard,
} from "./useFlashcardMutations";

export function useFlashcards() {
  const { flashcards, loading, error, refetchFlashcards } = useFlashcardQueries();
  const handleCreateFlashcard = useCreateFlashcard();
  const handleUpdateFlashcard = useUpdateFlashcard();
  const handleRemoveFlashcard = useRemoveFlashcard();
  const { handleUploadFlashcardImage, handleRemoveFlashcardImage } = useFlashcardImages();

  return {
    flashcards,
    loading,
    error,
    refetchFlashcards,
    handleCreateFlashcard,
    handleUpdateFlashcard,
    handleRemoveFlashcard,
    handleUploadFlashcardImage,
    handleRemoveFlashcardImage,
  };
}
