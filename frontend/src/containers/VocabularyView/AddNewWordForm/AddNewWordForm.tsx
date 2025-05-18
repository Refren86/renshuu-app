import { FormEvent, memo, useRef, useState } from "react";
import { CircleX, CopyPlus, Eye, Upload } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FlashcardStatus, TFlashcard } from "@/types";
import { ImagePreviewModal } from "../ImagePreviewModal/ImagePreviewModal";

const initialCardData = { kanji: "", reading: "", meaning: "" };

type AddNewWordFormProps = {
  onCreateNewFlashcard: (
    newCardData: Pick<TFlashcard, "kanji" | "reading" | "meaning">,
    imageFile: File | null
  ) => Promise<void>;
};

export const AddNewWordForm = memo(({ onCreateNewFlashcard }: AddNewWordFormProps) => {
  const imgRef = useRef<HTMLInputElement>(null);

  const [formVisible, setFormVisible] = useState(false);
  const [isAddingNewFlashcard, setIsAddingNewFlashcard] = useState(false);
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
    setFormVisible((prev) => !prev);
    setImagePreview(null);
    setImageFile(null);
  }

  function toggleImagePreview() {
    setShowImagePreview((prev) => !prev);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsAddingNewFlashcard(true);
      await onCreateNewFlashcard(newCardData, imageFile);
      setNewCardData(initialCardData);
      setFormVisible(false);
    } finally {
      setIsAddingNewFlashcard(false);
    }
  }

  return (
    <>
      <ImagePreviewModal isOpen={showImagePreview} onClose={toggleImagePreview} imageSrc={imagePreview} />
      <form className="flex gap-x-4" onSubmit={handleSubmit}>
        {formVisible && (
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

        {formVisible ? (
          <div className="flex gap-x-4">
            <Button type="button" variant="destructive" onClick={toggleForm}>
              <CircleX />
              <span className="ml-2">Cancel</span>
            </Button>

            <Button variant="success" type="submit" isLoading={isAddingNewFlashcard} loadingText="Adding">
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
