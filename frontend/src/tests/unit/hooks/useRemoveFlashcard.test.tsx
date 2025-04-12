import { act } from "@react-three/fiber";
import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";

import { ApolloWrapper } from "@/tests/test-utils";
import { DELETE_FLASHCARD } from "@/lib/gqlMutations";
import { useRemoveFlashcard } from "@/hooks/graphql/useFlashcardMutations";

describe("useRemoveFlashcard", () => {
  const flashcardId = "1";

  const deleteMock = [
    {
      request: {
        query: DELETE_FLASHCARD,
        variables: { id: flashcardId },
      },
      result: {
        data: {
          deleteFlashcard: { id: flashcardId },
        },
      },
    },
  ];

  it("should delete flashcard successfully", async () => {
    const { result } = renderHook(() => useRemoveFlashcard(), {
      wrapper: ({ children }) => <ApolloWrapper mocks={deleteMock}>{children}</ApolloWrapper>,
    });

    let error;

    await act(async () => {
      try {
        await result.current(flashcardId);
      } catch (e) {
        error = e;
      }
    });

    expect(error).toBeUndefined();
  });
});
