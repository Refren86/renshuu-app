import { CircleCheck, CircleX, Pencil } from "lucide-react";

import { TFlashcard } from "@/types";
import { TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type EditCellProps = {
  word: TFlashcard;
  editedRows: Record<string, TFlashcard>;
  className?: string;
  updateData: (wordId: string, updatedWord: TFlashcard) => void;
  setEditedRows: React.Dispatch<
    React.SetStateAction<Record<string, TFlashcard>>
  >;
};

export const EditCell = ({
  word,
  editedRows,
  className,
  updateData,
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
    }
  };

  return (
    <TableCell className={className}>
      {editedRows[word.id] ? (
        <div className="flex gap-x-2">
          <Button onClick={handleEdit} variant="destructive" name="cancel">
            <CircleX className="size-4" />
          </Button>{" "}
          <Button onClick={handleEdit} className="bg-teal-700" name="done">
            <CircleCheck className="size-4" />
          </Button>
        </div>
      ) : (
        <Button onClick={handleEdit} name="edit">
          <Pencil className="size-4" />
        </Button>
      )}
    </TableCell>
  );
};
