import { act } from "@react-three/fiber";
import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";

import { TFlashcard } from "@/types";
import { ApolloWrapper } from "@/tests/test-utils";
import { UPDATE_FLASHCARD } from "@/lib/gqlMutations";
import { useUpdateFlashcard } from "@/hooks/graphql/useFlashcardMutations";

describe("useCreateFlashcard", () => {
  const flashcardId = "1";

  const updateData: Partial<TFlashcard> = {
    id: flashcardId,
    status: "familiar",
  };

  const updatedFlashcard: TFlashcard = {
    id: flashcardId,
    kanji: "日",
    reading: "ひ",
    meaning: "sun",
    status: "familiar",
    imageUrl: null,
  };

  const updateMock = [
    {
      request: {
        query: UPDATE_FLASHCARD,
        variables: updateData,
      },
      result: {
        data: {
          updateFlashcard: updatedFlashcard,
        },
      },
    },
  ];

  it("should update flashcard successfully", async () => {
    const { result } = renderHook(() => useUpdateFlashcard(), {
      wrapper: ({ children }) => <ApolloWrapper mocks={updateMock}>{children}</ApolloWrapper>,
    });

    let updateResult;
    let error;

    await act(async () => {
      try {
        updateResult = await result.current(updateData as TFlashcard);
      } catch (e) {
        error = e;
      }
    });

    expect(updateResult).toEqual(updatedFlashcard);
    expect(error).toBeUndefined();
  });
});
