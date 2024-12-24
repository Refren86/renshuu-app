import { gql, useQuery, useMutation } from "@apollo/client";
import type { TFlashcard } from "@/types";

const GET_ALL_FLASHCARDS = gql`
  query GetAllFlashcards {
    allFlashcards {
      id
      kanji
      reading
      meaning
      status
    }
  }
`;

const CREATE_FLASHCARD = gql`
  mutation CreateFlashcard(
    $id: String!
    $kanji: String
    $reading: String!
    $meaning: String!
    $status: FlashcardStatus
  ) {
    createFlashcard(
      id: $id
      kanji: $kanji
      reading: $reading
      meaning: $meaning
      status: $status
    ) {
      id
      kanji
      reading
      meaning
      status
    }
  }
`;

const UPDATE_FLASHCARD = gql`
  mutation UpdateFlashcard(
    $id: String!
    $kanji: String
    $reading: String
    $meaning: String
    $status: FlashcardStatus
  ) {
    updateFlashcard(
      id: $id
      kanji: $kanji
      reading: $reading
      meaning: $meaning
      status: $status
    ) {
      id
      kanji
      reading
      meaning
      status
    }
  }
`;

const DELETE_FLASHCARD = gql`
  mutation DeleteFlashcard($id: String!) {
    deleteFlashcard(id: $id) {
      id
    }
  }
`;

export function useFlashcards() {
  const {
    data,
    loading,
    error,
    refetch: refetchFlashcards,
  } = useQuery<{
    allFlashcards: TFlashcard[];
  }>(GET_ALL_FLASHCARDS);

  const [createFlashcard] = useMutation(CREATE_FLASHCARD, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  const [updateFlashcard] = useMutation(UPDATE_FLASHCARD, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  const [deleteFlashcard] = useMutation(DELETE_FLASHCARD, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  const handleCreateFlashcard = async (flashcard: TFlashcard) => {
    try {
      await createFlashcard({
        variables: flashcard,
      });
    } catch (error) {
      console.error("Error creating flashcard:", error);
      throw error;
    }
  };

  const handleUpdateFlashcard = async (updateData: TFlashcard) => {
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
  };

  const handleRemoveFlashcard = async (id: string) => {
    try {
      await deleteFlashcard({
        variables: { id },
      });
    } catch (error) {
      console.error("Error deleting flashcard:", error);
      throw error;
    }
  };

  return {
    flashcards: data?.allFlashcards ?? [],
    loading,
    error,
    refetchFlashcards,
    handleCreateFlashcard,
    handleUpdateFlashcard,
    handleRemoveFlashcard,
  };
}
