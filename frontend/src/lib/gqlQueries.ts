import { gql } from "@apollo/client";

export const GET_COLLECTION_FLASHCARDS = gql`
  query GetCollectionFlashcards($collectionId: String!) {
    collectionFlashcards(collectionId: $collectionId) {
      id
      kanji
      reading
      meaning
      status
      imageUrl
    }
  }
`;

export const GET_USER_COLLECTIONS = gql`
  query GetUserCollections($userId: String!) {
    userCollections(userId: $userId) {
      id
      name
      description
      type
      created_at
      updated_at
    }
  }
`;
