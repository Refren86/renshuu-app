import { act } from "@react-three/fiber";
import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";

import { TFlashcard } from "@/types";
import { ApolloWrapper } from "@/tests/test-utils";
import { CREATE_FLASHCARD } from "@/lib/gqlMutations";
import { useCreateFlashcard } from "@/hooks/graphql/useFlashcardMutations";

describe("useCreateFlashcard", () => {
  const newFlashcard: Omit<TFlashcard, "id"> & { id: string } = {
    id: "3",
    kanji: "水",
    reading: "みず",
    meaning: "water",
    status: "unrecognized",
    imageUrl: null,
  };

  const createMock = [
    {
      request: {
        query: CREATE_FLASHCARD,
        variables: newFlashcard,
      },
      result: {
        data: {
          createFlashcard: newFlashcard,
        },
      },
    },
  ];

  it("should create flashcard successfully", async () => {
    const { result } = renderHook(() => useCreateFlashcard(), {
      wrapper: ({ children }) => <ApolloWrapper mocks={createMock}>{children}</ApolloWrapper>,
    });

    let error;

    await act(async () => {
      try {
        await result.current(newFlashcard);
      } catch (e) {
        error = e;
      }
    });

    expect(error).toBeUndefined();
  });
});
