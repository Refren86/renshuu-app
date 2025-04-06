import type { TFlashcard } from "@/types";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useCallback } from "react";

const GET_ALL_FLASHCARDS = gql`
  query GetAllFlashcards {
    allFlashcards {
      id
      kanji
      reading
      meaning
      status
      imageUrl
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
    createFlashcard(id: $id, kanji: $kanji, reading: $reading, meaning: $meaning, status: $status) {
      id
      kanji
      reading
      meaning
      status
    }
  }
`;

const UPDATE_FLASHCARD = gql`
  mutation UpdateFlashcard($id: String!, $kanji: String, $reading: String, $meaning: String, $status: FlashcardStatus) {
    updateFlashcard(id: $id, kanji: $kanji, reading: $reading, meaning: $meaning, status: $status) {
      id
      kanji
      reading
      meaning
      status
    }
  }
`;

const UPLOAD_FLASHCARD_IMAGE = gql`
  mutation UploadFlashcardImage($id: String!, $imageUrl: String!) {
    uploadFlashcardImage(id: $id, imageUrl: $imageUrl) {
      id
      imageUrl
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

  const [uploadFlashcardImage] = useMutation(UPLOAD_FLASHCARD_IMAGE, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  const [deleteFlashcard] = useMutation(DELETE_FLASHCARD, {
    refetchQueries: [{ query: GET_ALL_FLASHCARDS }],
  });

  const handleCreateFlashcard = useCallback(
    async (flashcard: Omit<TFlashcard, "id">) => {
      try {
        await createFlashcard({
          variables: flashcard,
        });
      } catch (error) {
        console.error("Error creating flashcard:", error);
        throw error;
      }
    },
    [createFlashcard]
  );

  const handleUpdateFlashcard = useCallback(
    async (updateData: TFlashcard) => {
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

  const handleUploadFlashcardImage = useCallback(
    async ({ id, imageUrl }: { id: string; imageUrl: string }) => {
      try {
        const uploadImgRes = await uploadFlashcardImage({
          variables: {
            id,
            imageUrl,
          },
        });

        return uploadImgRes;
      } catch (error) {
        console.error("Error uploading flashcard image:", error);
        throw error;
      }
    },
    [uploadFlashcardImage]
  );

  const handleRemoveFlashcard = useCallback(
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

  return {
    flashcards: data?.allFlashcards ?? [],
    loading,
    error,
    refetchFlashcards,
    handleCreateFlashcard,
    handleUpdateFlashcard,
    handleUploadFlashcardImage,
    handleRemoveFlashcard,
  };
}
