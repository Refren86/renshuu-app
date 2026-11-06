import { Link } from "@tanstack/react-router";

import { TCollection } from "@/types/common";
import { Button } from "@/components/ui/button";
import { CollectionsViewVariant } from "../CollectionsView";

type CollectionCardProps = {
  collection: TCollection;
  variant: CollectionsViewVariant;
};

export const CollectionCard = ({ collection, variant }: CollectionCardProps) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">{collection.name}</h2>
      <p>{collection.description}</p>

      <div className="flex gap-x-4">
        {variant === "manage" && (
          <>
            <Button asChild className="mt-6">
              <Link to="/collection/$collectionId" params={{ collectionId: collection.id }}>
                See collection
              </Link>
            </Button>
            <Button asChild className="mt-6">
              <Link to="/flashcards/$collectionId" params={{ collectionId: collection.id }}>
                Learn vocabulary
              </Link>
            </Button>
          </>
        )}

        {variant === "pick-flashcards" && (
          <Button asChild className="mt-6">
            <Link to="/flashcards/$collectionId" params={{ collectionId: collection.id }}>
              Learn vocabulary
            </Link>
          </Button>
        )}

        {variant === "pick-reviewed" && (
          <Button asChild className="mt-6">
            <Link to="/reviewed-words/$collectionId" params={{ collectionId: collection.id }}>
              View reviewed words
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
