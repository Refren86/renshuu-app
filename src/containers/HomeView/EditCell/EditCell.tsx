import { CircleCheck, CircleX, Pencil, Trash2 } from "lucide-react";

import { TFlashcard } from "@/types";
import { TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type EditCellProps = {
  word: TFlashcard;
  editedRows: Record<string, TFlashcard>;
  className?: string;
  updateData: (wordId: string, updatedWord: TFlashcard) => void;
  removeWord: (wordId: string) => void;
  setEditedRows: React.Dispatch<
    React.SetStateAction<Record<string, TFlashcard>>
  >;
};

export const EditCell = ({
  word,
  editedRows,
  className,
  updateData,
  removeWord,
  setEditedRows,
}: EditCellProps) => {
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const elName = e.currentTarget.name;

    if (elName === "cancel") {
      setEditedRows((prevState) => {
        const prevStateCopy = structuredClone(prevState);
        delete prevStateCopy[word.id];
        return prevStateCopy;
      });
    } else if (elName === "edit") {
      setEditedRows((prevState) => ({ ...prevState, [word.id]: word }));
    } else if (elName === "done") {
      updateData(word.id, editedRows[word.id]);
    } else if (elName === "delete") {
      removeWord(word.id);
    }
  };

  return (
    <TableCell className={className}>
      {editedRows[word.id] ? (
        <div className="flex gap-x-2">
          <Button onClick={handleEdit} variant="destructive" name="cancel">
            <CircleX className="size-4" />
          </Button>{" "}
          <Button onClick={handleEdit} variant="success" name="done">
            <CircleCheck className="size-4" />
          </Button>
        </div>
      ) : (
        <div className="flex gap-x-2">
          <Button onClick={handleEdit} name="edit">
            <Pencil className="size-4" />
          </Button>
          <Button variant="destructive" onClick={handleEdit} name="delete">
            <Trash2 className="size-4" />
          </Button>
        </div>
      )}
    </TableCell>
  );
};
