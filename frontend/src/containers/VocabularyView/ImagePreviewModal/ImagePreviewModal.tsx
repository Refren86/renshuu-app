import { SpringDialog } from "@/components/SpringDialog";

type ImagePreviewModalProps = {
  isOpen: boolean;
  image: string | null;
  onClose: () => void;
};

export const ImagePreviewModal = ({ isOpen, image, onClose }: ImagePreviewModalProps) => {
  if (!image) return;

  return (
    <SpringDialog isOpen={isOpen} onClose={onClose}>
      <img className="object-contain" src={image} alt="Preview image" width={300} height={300} />
    </SpringDialog>
  );
};
