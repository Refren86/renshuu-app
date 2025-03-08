import { CircleCheck, CircleX, Pencil, Trash2 } from "lucide-react";

import { TFlashcard } from "@/types";
import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";

type EditCellProps = {
  word: TFlashcard;
  editedRows: Record<string, TFlashcard>;
  className?: string;
  onEdit: (e: React.MouseEvent<HTMLButtonElement>, word: TFlashcard) => void;
};

export const EditCell = ({ word, editedRows, className, onEdit }: EditCellProps) => {
  return (
    <TableCell className={className}>
      {editedRows[word.id] ? (
        <div className="flex gap-x-2">
          <Button name="cancel" onClick={(e) => onEdit(e, word)} variant="destructive">
            <CircleX className="size-4" />
          </Button>{" "}
          <Button name="done" variant="success" onClick={(e) => onEdit(e, word)}>
            <CircleCheck className="size-4" />
          </Button>
        </div>
      ) : (
        <div className="flex gap-x-2">
          <Button name="edit" onClick={(e) => onEdit(e, word)}>
            <Pencil className="size-4" />
          </Button>
          <Button name="delete" variant="destructive" onClick={(e) => onEdit(e, word)}>
            <Trash2 className="size-4" />
          </Button>
        </div>
      )}
    </TableCell>
  );
};
