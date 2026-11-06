import { useState } from "react";
import { Plus } from "lucide-react";

import { Layout } from "@/components/Layout";
import { Wrapper } from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";
import useCollections from "@/hooks/graphql/useCollections";
import { CollectionCard } from "./CollectionCard/CollectionCard";
import { CreateCollectionDialog } from "./CreateCollectionDialog/CreateCollectionDialog";

export type CollectionsViewVariant = "manage" | "pick-flashcards" | "pick-reviewed";

type CollectionsViewProps = {
  variant?: CollectionsViewVariant;
};

export const CollectionsView = ({ variant = "manage" }: CollectionsViewProps) => {
  const { toast } = useToast();
  const { user } = useAuth();

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const { globalCollections, userCollections, handleCreateCollection } = useCollections({ userId: user?.id });

  const handleCreate = async (name: string, description: string) => {
    if (!user) return;

    try {
      await handleCreateCollection({ userId: user.id, name, description });
    } catch (error) {
      console.error("Error creating collection: ", error);
      toast({
        description: "Failed to create collection. Please try again.",
        variant: "destructive",
      });
    }
  };

  const allCollections = [...userCollections, ...globalCollections];

  return (
    <Layout>
      <section className="pt-8 min-h-[calc(100dvh-49px)]">
        <Wrapper>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">{variant === "manage" ? "Your Collections" : "Select a collection"}</h1>

            {variant === "manage" && (
              <Button onClick={() => setIsCreateDialogOpen(true)}>
                <Plus />
                <span className="ml-2">New collection</span>
              </Button>
            )}
          </div>

          {allCollections.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allCollections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} variant={variant} />
              ))}
            </div>
          ) : (
            <h2 className="text-center mt-8 text-3xl font-semibold">No collections yet</h2>
          )}
        </Wrapper>
      </section>

      <CreateCollectionDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onCreate={handleCreate}
      />
    </Layout>
  );
};
