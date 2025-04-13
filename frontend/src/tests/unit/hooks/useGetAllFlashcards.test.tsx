import { describe, it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

import { ApolloWrapper } from "@/tests/test-utils";
import { GET_ALL_FLASHCARDS } from "@/lib/gqlQueries";
import { useGetAllFlashcards } from "@/hooks/graphql/useFlashcardQueries";

describe("useFlashcardQueries", () => {
  const mockFlashcards = [
    { id: "1", kanji: "日", reading: "ひ", meaning: "sun", status: "unset", imageUrl: null },
    {
      id: "2",
      kanji: "月",
      reading: "つき",
      meaning: "moon",
      status: "known",
      imageUrl: "https://example.com/moon.jpg",
    },
  ];

  const successMocks = [
    {
      request: {
        query: GET_ALL_FLASHCARDS,
      },
      result: {
        data: {
          allFlashcards: mockFlashcards,
        },
      },
    },
  ];

  it("should fetch flashcards successfully", async () => {
    const { result } = renderHook(() => useGetAllFlashcards(), {
      wrapper: ({ children }) => <ApolloWrapper mocks={successMocks}>{children}</ApolloWrapper>,
    });

    await waitFor(() => expect(result.current.flashcardsLoading).toBe(false));

    expect(result.current.flashcards).toEqual(mockFlashcards);
    expect(result.current.flashcardsError).toBe(undefined);
  });
});
