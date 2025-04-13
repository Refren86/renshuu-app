import { act } from "@react-three/fiber";
import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";

import { ApolloWrapper } from "@/tests/test-utils";
import { DELETE_FLASHCARD_IMAGE } from "@/lib/gqlMutations";
import { useRemoveFlashcardImage } from "@/hooks/graphql/useFlashcardMutations";

describe("useRemoveFlashcardImage", () => {
  const flashcardId = "1";

  const removeFlashcardImageMock = [
    {
      request: {
        query: DELETE_FLASHCARD_IMAGE,
        variables: { id: flashcardId },
      },
      result: {
        data: {
          deleteFlashcardImage: { id: flashcardId },
        },
      },
    },
  ];

  it("should delete flashcard image successfully", async () => {
    const { result } = renderHook(() => useRemoveFlashcardImage(), {
      wrapper: ({ children }) => <ApolloWrapper mocks={removeFlashcardImageMock}>{children}</ApolloWrapper>,
    });

    let removeImageResult;
    let error;

    await act(async () => {
      try {
        removeImageResult = await result.current(flashcardId);
      } catch (e) {
        error = e;
      }
    });

    expect(removeImageResult).toEqual({ id: flashcardId });
    expect(error).toBeUndefined();
  });
});
