import { gql, useQuery, useMutation } from "@apollo/client";
import type { TFlashcard } from "@/types";

type UpdateFlashcardInput = Partial<Omit<TFlashcard, "id">> & { id: string };

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
    $kanji: String
    $reading: String!
    $meaning: String!
    $status: FlashcardStatus
  ) {
    createFlashcard(
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

const SEED_FLASHCARDS = gql`
  mutation SeedFlashcards($flashcards: [FlashcardInput!]!) {
    seedFlashcards(flashcards: $flashcards) {
      id
      kanji
      reading
      meaning
      status
    }
  }
`;

export function useFlashcards() {
  const { data, loading, error, refetch } = useQuery<{
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

  const [seedFlashcards] = useMutation(SEED_FLASHCARDS, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  const create = async (flashcard: Omit<TFlashcard, "id">) => {
    try {
      const { data } = await createFlashcard({
        variables: flashcard,
      });
      return data.createFlashcard;
    } catch (error) {
      console.error("Error creating flashcard:", error);
      throw error;
    }
  };

  const update = async (updateData: UpdateFlashcardInput) => {
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

  const remove = async (id: string) => {
    try {
      const { data } = await deleteFlashcard({
        variables: { id },
      });
      return data.deleteFlashcard;
    } catch (error) {
      console.error("Error deleting flashcard:", error);
      throw error;
    }
  };

  // const seed = async (flashcards: TFlashcard[]) => {
  //   try {
  //     const { data } = await seedFlashcards({
  //       variables: { flashcards },
  //     });

  //     return data.seedFlashcards;
  //   } catch (error) {
  //     console.error("Error seeding flashcards:", error);
  //     throw error;
  //   }
  // };

  const seed = async (flashcards: TFlashcard[]) => {
    try {
      const { data } = await seedFlashcards({
        variables: {
          flashcards: flashcards.map(card => ({
            id: card.id,
            kanji: card.kanji,
            reading: card.reading,
            meaning: card.meaning,
            status: card.status
          }))
        },
      });

      return data.seedFlashcards;
    } catch (error) {
      console.error("Error seeding flashcards:", error);
      throw error;
    }
  };

  return {
    flashcards: data?.allFlashcards ?? [],
    loading,
    error,
    refetch,
    create,
    update,
    remove,
    seed,
  };
}
