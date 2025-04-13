import { memo, useRef, useState } from "react";
import { CircleX, CopyPlus, Eye, Upload } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FlashcardStatus, TFlashcard } from "@/types";
import { ImagePreviewModal } from "../ImagePreviewModal/ImagePreviewModal";

const initialCardData = { kanji: "", reading: "", meaning: "" };

type AddNewWordFormProps = {
  isLoading: boolean;
  onCreateNewFlashcard: (
    e: React.FormEvent<HTMLFormElement>,
    newCardData: Pick<TFlashcard, "kanji" | "reading" | "meaning">,
    imageFile: File | null
  ) => void;
};

export const AddNewWordForm = memo(({ isLoading, onCreateNewFlashcard }: AddNewWordFormProps) => {
  const imgRef = useRef<HTMLInputElement>(null);

  const [adding, setAdding] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [newCardData, setNewCardData] = useState<Pick<TFlashcard, "kanji" | "reading" | "meaning">>(initialCardData);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setNewCardData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;

    if (files && files.length > 0) {
      const file = files[0];

      const imagePreviewURL = URL.createObjectURL(file);

      setImageFile(file);
      setImagePreview(imagePreviewURL);
    }
  }

  function toggleForm() {
    setAdding((prev) => !prev);
    setImagePreview(null);
    setImageFile(null);
  }

  function toggleImagePreview() {
    setShowImagePreview((prev) => !prev);
  }

  return (
    <>
      <ImagePreviewModal isOpen={showImagePreview} onClose={toggleImagePreview} imageSrc={imagePreview} />
      <form
        className="flex gap-x-4"
        onSubmit={(e) => {
          onCreateNewFlashcard(e, newCardData, imageFile);
          setNewCardData(initialCardData);
          setAdding(false);
        }}
      >
        {adding && (
          <div className="flex gap-x-4">
            <Input name={"kanji" as FlashcardStatus} onChange={handleInputChange} autoFocus placeholder="Kanji" />
            <Input name={"reading" as FlashcardStatus} onChange={handleInputChange} placeholder="Reading" />
            <Input name={"meaning" as FlashcardStatus} onChange={handleInputChange} placeholder="Meaning" />
            <Input ref={imgRef} type="file" accept="image/*" className="sr-only" onChange={handleImageChange} />
            {imagePreview ? (
              <Button type="button" onClick={toggleImagePreview}>
                <Eye />
                <span className="ml-2">Preview image</span>
              </Button>
            ) : (
              <Button type="button" onClick={() => imgRef.current?.click()}>
                <Upload />
                <span className="ml-2">Upload image</span>
              </Button>
            )}
          </div>
        )}

        {adding ? (
          <div className="flex gap-x-4">
            <Button type="button" variant="destructive" onClick={toggleForm}>
              <CircleX />
              <span className="ml-2">Cancel</span>
            </Button>

            <Button variant="success" type="submit" isLoading={isLoading} loadingText="Adding">
              <CopyPlus />
              <span className="ml-2">Add</span>
            </Button>
          </div>
        ) : (
          <Button type="button" onClick={toggleForm}>
            <CopyPlus />
            <span className="ml-2">Add new word</span>
          </Button>
        )}
      </form>
    </>
  );
});
