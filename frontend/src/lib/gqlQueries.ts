import { gql } from "@apollo/client";

export const GET_ALL_FLASHCARDS = gql`
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
