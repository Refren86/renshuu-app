import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Wrapper } from "@/components/Wrapper";

import flashcardsData from "@/assets/flashcards.json";

export const HomeView = () => {
  return (
    <section className="mt-8 mb-12">
      <Wrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-primary">#</TableHead>
              <TableHead>単語</TableHead>
              <TableHead>読み方</TableHead>
              <TableHead>意味</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {flashcardsData.map((flashcardData) => {
              return (
                <TableRow key={flashcardData.id}>
                  <TableCell className="font-medium">
                    {flashcardData.id}
                  </TableCell>
                  <TableCell>{flashcardData.kanji}</TableCell>
                  <TableCell>{flashcardData.reading}</TableCell>
                  <TableCell>{flashcardData.meaning}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Wrapper>
    </section>
  );
};
