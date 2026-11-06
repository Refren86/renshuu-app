import { useGetUserCollections } from "./useCollectionQueries";
import { useCreateCollection } from "./useCollectionMutations";

export default function useCollections({ userId }: { userId?: string } = {}) {
  const { collections, globalCollections, userCollections, collectionsLoading, collectionsError, refetchCollections } =
    useGetUserCollections(userId);

  const handleCreateCollection = useCreateCollection();

  return {
    collections,
    globalCollections,
    userCollections,
    collectionsLoading,
    collectionsError,
    refetchCollections,
    handleCreateCollection,
  };
}
