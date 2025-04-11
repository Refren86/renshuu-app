import { useRef } from "react";
import { Trash2, Upload } from "lucide-react";

import { TFlashcard } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SpringDialog } from "@/components/SpringDialog";

type ImagePreviewModalProps = {
  isOpen: boolean;
  word?: TFlashcard | null;
  imageSrc?: string | null;
  withControls?: boolean;
  onClose: () => void;
  handleImageUpload?: (imageFile: File, flashcardId: string) => Promise<void>;
  handleImageRemove?: (flashcardId?: string) => Promise<void>;
};

export const ImagePreviewModal = ({
  isOpen,
  word,
  imageSrc,
  withControls = false,
  onClose,
  handleImageUpload,
  handleImageRemove,
}: ImagePreviewModalProps) => {
  const imgRef = useRef<HTMLInputElement>(null);

  if (!imageSrc && !word) return;

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>, flashcardId?: string) => {
    if (!handleImageUpload || !flashcardId) return;

    try {
      const { files } = e.target;

      if (files && files.length > 0) {
        const file = files[0];

        await handleImageUpload(file, flashcardId);
      }
    } catch (error) {
      console.error("Image upload error: ", error);
    }
  };

  return (
    <SpringDialog isOpen={isOpen} onClose={onClose}>
      <div className="relative z-10">
        {withControls && (
          <div className="flex justify-end items-center gap-x-2 mb-2">
            <Input
              ref={imgRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => handleChangeImage(e, word?.id)}
            />
            <Button
              type="button"
              title="Upload new image"
              onClick={() => {
                imgRef.current?.click();
              }}
            >
              <Upload className="size-4" />
            </Button>

            <Button
              title="Remove image"
              variant="destructive"
              onClick={() => {
                if (handleImageRemove && word) {
                  handleImageRemove(word.id);
                }
              }}
            >
              <Trash2 className="size-4" />
            </Button>
          </div>
        )}

        <img
          className="object-contain"
          src={word?.imageUrl || imageSrc || ""}
          alt="Preview image"
          width={300}
          height={300}
        />
      </div>
    </SpringDialog>
  );
};
