import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { CircleX, CopyPlus, Eye, Upload } from "lucide-react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { FlashcardStatus, TFlashcard } from "@/types";
import { ImagePreviewModal } from "@/containers/VocabularyView/ImagePreviewModal/ImagePreviewModal";

type AddCardProps = {
  column: FlashcardStatus;
  onCreateFlashcard: (flashcard: Omit<TFlashcard, "id">) => Promise<unknown>;
};

export const AddCard = ({ column, onCreateFlashcard }: AddCardProps) => {
  const imgRef = useRef<HTMLInputElement>(null);

  const [newCardData, setNewCardData] = useState<Pick<TFlashcard, "kanji" | "reading" | "meaning">>({
    kanji: "",
    reading: "",
    meaning: "",
  });
  const [adding, setAdding] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [, setImageFile] = useState<File | null>(null);
  const [showImagePreview, setShowImagePreview] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const kanji = newCardData?.kanji?.trim().length ? newCardData.kanji.trim() : null;
    const reading = newCardData.reading.trim();
    const meaning = newCardData.meaning.trim();

    if (!newCardData.reading.trim().length || !newCardData.meaning.trim().length) return;

    const newCard: Omit<TFlashcard, "id"> = {
      // id: generateUniqueId(),
      status: column,
      kanji,
      reading,
      meaning,
      imageUrl: null,
    };

    onCreateFlashcard(newCard);
    setAdding(false);
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
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Input name={"kanji" as FlashcardStatus} onChange={handleInputChange} autoFocus placeholder="Kanji" />
            <Input name={"reading" as FlashcardStatus} onChange={handleInputChange} placeholder="Reading" />
            <Textarea name={"meaning" as FlashcardStatus} onChange={handleInputChange} placeholder="Meaning" />
            <Input ref={imgRef} type="file" accept="image/*" className="sr-only" onChange={handleImageChange} />
            {imagePreview ? (
              <Button type="button" className="w-full" onClick={toggleImagePreview}>
                <Eye />
                <span className="ml-2">Preview image</span>
              </Button>
            ) : (
              <Button type="button" className="w-full" onClick={() => imgRef.current?.click()}>
                <Upload />
                <span className="ml-2">Upload image</span>
              </Button>
            )}
          </div>

          <div className="mt-2 flex items-center justify-end gap-1.5">
            <Button onClick={toggleForm} variant="destructive">
              <CircleX />
              <span className="ml-2">Close</span>
            </Button>
            <Button type="submit" variant="success">
              <CopyPlus />
              <span className="ml-2">Add</span>
            </Button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={toggleForm}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <CopyPlus />
        </motion.button>
      )}
    </>
  );
};
