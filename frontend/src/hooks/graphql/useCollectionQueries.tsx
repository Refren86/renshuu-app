import { useQuery } from "@apollo/client";

import type { TCollection } from "@/types/common";
import { GET_USER_COLLECTIONS } from "@/lib/gqlQueries";

export function useGetUserCollections(userId?: string) {
  const {
    data,
    loading,
    error,
    refetch: refetchCollections,
  } = useQuery<{
    userCollections: TCollection[];
  }>(GET_USER_COLLECTIONS, {
    variables: { userId },
    skip: !userId,
  });

  const dividedCollections = data?.userCollections?.reduce(
    (acc, collection) => {
      if (collection.type === "global") {
        acc.globalCollections.push(collection);
      } else {
        acc.userCollections.push(collection);
      }

      return acc;
    },
    { globalCollections: [] as TCollection[], userCollections: [] as TCollection[] }
  );

  return {
    collections: data?.userCollections ?? [],
    globalCollections: dividedCollections?.globalCollections ?? [],
    userCollections: dividedCollections?.userCollections ?? [],
    collectionsLoading: loading,
    collectionsError: error,
    refetchCollections,
  };
}
