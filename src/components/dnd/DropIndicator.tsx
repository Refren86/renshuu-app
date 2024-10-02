import { FlashcardStatus } from "@/types";

type DropIndicatorProps = {
  beforeId: string;
  column: FlashcardStatus;
};

export const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || '-1'}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-primary opacity-0"
    />
  );
};