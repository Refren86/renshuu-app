import debounce from "lodash/debounce";
import { Search } from "lucide-react";
import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Wrapper } from "@/components/Wrapper";
import { useDynamicSizeList } from "@/hooks/useDynamicSizeList";

import flashcardsData from "@/assets/flashcards.json";

export const HomeView = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    if (!searchQuery) return flashcardsData;

    const queryLowerCase = searchQuery.toLowerCase();

    return flashcardsData.filter(
      (item) =>
        (item.kanji && item.kanji.includes(queryLowerCase)) ||
        item.reading.includes(queryLowerCase) ||
        item.meaning.toLowerCase().includes(queryLowerCase)
    );
  }, [searchQuery]);

  const { virtualRows, totalHeight, measureRow } = useDynamicSizeList({
    estimateRowHeight: useCallback(() => 60, []),
    rowsCount: filteredData.length,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
    getRowKey: useCallback((index) => filteredData[index].id, [filteredData]),
  });

  const handleInputChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, 500);

  return (
    <section className="mt-8 mb-12">
      <Wrapper>
        <div className="relative max-w-[500px]">
          <Search className="absolute -translate-y-1/2 left-2 text-muted-foreground top-1/2" />
          <Input
            ref={inputRef}
            onChange={handleInputChange}
            placeholder="Search..."
            className="pl-10"
          />
        </div>

        <div ref={scrollElementRef} className="h-[800px] overflow-y-auto mt-8">
          {filteredData.length > 0 ? (
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-primary">
                  <TableHead className="w-[80px]">#</TableHead>
                  <TableHead className="w-[200px]">単語</TableHead>
                  <TableHead className="w-[250px]">読み方</TableHead>
                  <TableHead>意味</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="relative" style={{ height: totalHeight }}>
                {virtualRows.map((virtualRow) => {
                  const item = filteredData[virtualRow.index];

                  return (
                    <TableRow
                      key={item?.id}
                      data-row-index={virtualRow.index}
                      ref={measureRow}
                      className="absolute top-0"
                      style={{
                        transform: `translateY(${virtualRow.offsetTop}px)`,
                      }}
                    >
                      <TableCell className="min-w-[80px] max-w-[80px]">
                        {item?.id}
                      </TableCell>
                      <TableCell className="min-w-[200px] max-w-[200px]">
                        {item?.kanji}
                      </TableCell>
                      <TableCell className="min-w-[250px] max-w-[250px]">
                        {item?.reading}
                      </TableCell>
                      <TableCell className="w-full">{item?.meaning}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <h2 className="text-center mt-8 text-3xl font-semibold">
              何も見つからなかった
            </h2>
          )}
        </div>
      </Wrapper>
    </section>
  );
};
