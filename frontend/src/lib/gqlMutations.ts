import { gql } from "@apollo/client";

export const CREATE_FLASHCARD = gql`
  mutation CreateFlashcard(
    $collectionId: String!
    $kanji: String
    $reading: String!
    $meaning: String!
    $status: FlashcardStatus
  ) {
    createFlashcard(collectionId: $collectionId, kanji: $kanji, reading: $reading, meaning: $meaning, status: $status) {
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
    $flashcardId: String!
    $kanji: String
    $reading: String
    $meaning: String
    $status: FlashcardStatus
    $imageUrl: String
  ) {
    updateFlashcard(
      flashcardId: $flashcardId
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
  mutation DeleteFlashcard($collectionId: String!, $flashcardId: String!) {
    deleteFlashcard(collectionId: $collectionId, flashcardId: $flashcardId)
  }
`;

export const CREATE_COLLECTION = gql`
  mutation CreateCollection($userId: String!, $name: String!, $description: String) {
    createCollection(userId: $userId, name: $name, description: $description) {
      id
      name
      description
      type
      created_at
      updated_at
    }
  }
`;
