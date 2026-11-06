import { useCallback } from "react";
import { useMutation } from "@apollo/client";

import type { TCollection } from "@/types/common";
import { CREATE_COLLECTION } from "@/lib/gqlMutations";
import { GET_USER_COLLECTIONS } from "@/lib/gqlQueries";

type CreateCollectionMutation = {
  createCollection: TCollection;
};

type CreateCollectionVariables = {
  userId: string;
  name: string;
  description?: string;
};

export function useCreateCollection() {
  const [createCollectionMutation] = useMutation<CreateCollectionMutation, CreateCollectionVariables>(
    CREATE_COLLECTION
  );

  return useCallback(
    async ({ userId, name, description }: CreateCollectionVariables) => {
      try {
        return await createCollectionMutation({
          variables: { userId, name, description },
          refetchQueries: [{ query: GET_USER_COLLECTIONS, variables: { userId } }],
        });
      } catch (error) {
        console.error("Error creating collection:", error);
        throw error;
      }
    },
    [createCollectionMutation]
  );
}
