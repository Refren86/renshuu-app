import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SpringDialog } from "@/components/SpringDialog";

type CreateCollectionDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, description: string) => Promise<void>;
};

export const CreateCollectionDialog = ({ isOpen, onClose, onCreate }: CreateCollectionDialogProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => {
    setName("");
    setDescription("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim().length) return;

    setIsSubmitting(true);
    try {
      await onCreate(name.trim(), description.trim());
      handleClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SpringDialog isOpen={isOpen} onClose={handleClose}>
      <form onSubmit={handleSubmit} className="mt-8 p-6 rounded-lg bg-muted min-w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Create collection</h2>

        <Input label="Name" placeholder="e.g. N5" value={name} onChange={(e) => setName(e.target.value)} autoFocus />

        <div>
          <label className="block text-sm font-medium text-white mb-2">Description</label>
          <Textarea
            placeholder="What is this collection about?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button type="submit" isLoading={isSubmitting} className="w-full">
          Create
        </Button>
      </form>
    </SpringDialog>
  );
};
