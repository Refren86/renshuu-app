import { useRef } from "react";
import { Image, Upload } from "lucide-react";

import { TFlashcard } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";

type ImageTableCellProps = {
  word: TFlashcard;
  className?: string;
  handleWordPreview: () => void;
  handleChangeImage: (e: React.ChangeEvent<HTMLInputElement>, flashcardId: string) => Promise<void>;
};

export const ImageTableCell = ({ word, className, handleWordPreview, handleChangeImage }: ImageTableCellProps) => {
  const imgRef = useRef<HTMLInputElement | null>(null);

  return (
    <TableCell className={className}>
      <Input
        ref={imgRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => handleChangeImage(e, word.id)}
      />
      <Button
        title={word.imageUrl ? "View image" : "Upload image"}
        onClick={() => (word.imageUrl ? handleWordPreview() : imgRef.current?.click())}
      >
        {word.imageUrl ? <Image size={16} /> : <Upload size={16} />}
      </Button>
    </TableCell>
  );
};
