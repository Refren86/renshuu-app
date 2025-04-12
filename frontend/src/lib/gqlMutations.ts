import { gql } from "@apollo/client";

export const CREATE_FLASHCARD = gql`
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

export const UPDATE_FLASHCARD = gql`
  mutation UpdateFlashcard(
    $id: String!
    $kanji: String
    $reading: String
    $meaning: String
    $status: FlashcardStatus
    $imageUrl: String
  ) {
    updateFlashcard(
      id: $id
      kanji: $kanji
      reading: $reading
      meaning: $meaning
      status: $status
      imageUrl: $imageUrl
    ) {
      id
      kanji
      reading
      meaning
      status
      imageUrl
    }
  }
`;

export const DELETE_FLASHCARD = gql`
  mutation DeleteFlashcard($id: String!) {
    deleteFlashcard(id: $id) {
      id
    }
  }
`;

export const UPLOAD_FLASHCARD_IMAGE = gql`
  mutation UploadFlashcardImage($id: String!, $imageUrl: String!) {
    uploadFlashcardImage(id: $id, imageUrl: $imageUrl) {
      id
      imageUrl
    }
  }
`;

export const DELETE_FLASHCARD_IMAGE = gql`
  mutation DeleteFlashcardImage($id: String!) {
    deleteFlashcardImage(id: $id) {
      id
    }
  }
`;
