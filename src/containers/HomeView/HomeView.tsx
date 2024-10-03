import debounce from "lodash/debounce";
import { Search } from "lucide-react";
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { TFlashcard } from "@/types";
import { getAllWords } from "@/lib/db";
import { Input } from "@/components/ui/input";
import { Wrapper } from "@/components/Wrapper";
import { useDynamicSizeList } from "@/hooks/useDynamicSizeList";

const columnHelper = createColumnHelper<TFlashcard>();

// recommended to wrap in useMemo if used inside component
const columns = [
  columnHelper.accessor("id", {
    header: "#",
    size: 80,
  }),
  columnHelper.accessor("kanji", {
    header: "単語",
    size: 200,
  }),
  columnHelper.accessor("reading", {
    header: "読み方",
    size: 250,
  }),
  columnHelper.accessor("meaning", {
    header: "意味",
  }),
];

export const HomeView = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const [words, setWords] = useState<TFlashcard[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadAllWords();
  }, []);

  const loadAllWords = useCallback(async () => {
    try {
      const allWords = await getAllWords();
      const sortedWords = allWords.toSorted((a, b) => +a.id - +b.id);
      setWords(sortedWords);
    } catch (error) {
      console.log("Error loading words: ", error);
    }
  }, []);

  const filteredData = useMemo(() => {
    if (!searchQuery) return words;

    const queryLowerCase = searchQuery.toLowerCase();

    return words.filter(
      (word) =>
        (word.kanji && word.kanji.includes(queryLowerCase)) ||
        word.reading.includes(queryLowerCase) ||
        word.meaning.toLowerCase().includes(queryLowerCase)
    );
  }, [words, searchQuery]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { virtualRows, totalHeight, measureRow } = useDynamicSizeList({
    estimateRowHeight: useCallback(() => 60, []),
    rowsCount: filteredData.length,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
    getRowKey: useCallback((index) => filteredData[index]?.id, [filteredData]),
  });

  const handleInputChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.trim();

      setSearchQuery(newValue);
    }, 500),
    []
  );

  console.log("Rendered");

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
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id} className="bg-primary">
                    {headerGroup.headers.map((header) => {
                      console.log({ header });
                      return (
                        <TableHead
                          key={header.id}
                          className={`w-[${header.column.columnDef.size}px]`}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
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
                      <TableCell className="min-w-[200px] text-xl max-w-[200px]">
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
