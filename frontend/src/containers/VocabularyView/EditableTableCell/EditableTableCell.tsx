import { useEffect, useState } from "react";

import { TFlashcard } from "@/types";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";

type TableCellProps = {
  word: TFlashcard;
  keyToUpdate: keyof TFlashcard;
  editedRows: Record<string, TFlashcard>;
  className?: string;
  setEditedRows: React.Dispatch<React.SetStateAction<Record<string, TFlashcard>>>;
};

export const EditableTableCell = ({ word, keyToUpdate, editedRows, className, setEditedRows }: TableCellProps) => {
  const initialValue = word[keyToUpdate];
  const [value, setValue] = useState(initialValue || "");

  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  function onBlur() {
    setEditedRows((prevState) => ({
      ...prevState,
      [word.id]: { ...prevState[word.id], [keyToUpdate]: value },
    }));
  }

  return (
    <TableCell className={className}>
      {editedRows[word.id] ? (
        <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />
      ) : (
        <span>{value}</span>
      )}
    </TableCell>
  );
};
