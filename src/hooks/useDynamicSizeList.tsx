import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import { useLatest } from "./useLatest";
import { useResizeObserver } from "./useResizeObserver";
import { isNumber, rafThrottle, scheduleDOMUpdate } from "@/lib/utils";

type Key = string | number;

interface UseDynamicSizeListProps {
  rowsCount: number;
  rowHeight?: (index: number) => number;
  estimateRowHeight?: (index: number) => number;
  getRowKey: (index: number) => Key;
  overscanY?: number;
  scrollingDelay?: number;
  getScrollElement: () => HTMLElement | null;
}

interface DynamicSizeListRow {
  key: Key;
  index: number;
  offsetTop: number;
  height: number;
}

const DEFAULT_OVERSCAN_Y = 3;
const DEFAULT_SCROLLING_DELAY = 150;

function validateProps(props: UseDynamicSizeListProps) {
  const { rowHeight, estimateRowHeight } = props;

  if (!rowHeight && !estimateRowHeight) {
    throw new Error(
      `You must pass either "rowHeight" or "estimateRowHeight" prop`
    );
  }
}

export function useDynamicSizeList(props: UseDynamicSizeListProps) {
  validateProps(props);

  const {
    rowHeight,
    estimateRowHeight,
    getRowKey,
    rowsCount,
    scrollingDelay = DEFAULT_SCROLLING_DELAY,
    overscanY = DEFAULT_OVERSCAN_Y,
    getScrollElement,
  } = props;

  const [rowSizeCache, setRowSizeCache] = useState<Record<Key, number>>({});
  const [virtualRowHeight, setVirtualRowHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // observe the scroll container height and update the row height
  useLayoutEffect(() => {
    const scrollElement = getScrollElement();

    if (!scrollElement) {
      return;
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      if (!entry) {
        return;
      }
      const size = entry.borderBoxSize[0]
        ? {
            height: entry.borderBoxSize[0].blockSize,
          }
        : entry.target.getBoundingClientRect();

      setVirtualRowHeight(size.height);
    });

    resizeObserver.observe(scrollElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [getScrollElement]);

  useLayoutEffect(() => {
    const scrollElement = getScrollElement();

    if (!scrollElement) {
      return;
    }

    const handleScroll = () => {
      const { scrollTop } = scrollElement;
      setScrollTop(scrollTop);
    };

    handleScroll();

    const throttleHandleScroll = rafThrottle(handleScroll);

    scrollElement.addEventListener("scroll", throttleHandleScroll);
    return () =>
      scrollElement.removeEventListener("scroll", throttleHandleScroll);
  }, [getScrollElement]);

  // detects when scrolling has stopped (after a delay)
  useEffect(() => {
    const scrollElement = getScrollElement();

    if (!scrollElement) {
      return;
    }

    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      setIsScrolling(true);

      if (isNumber(timeoutId)) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, scrollingDelay);
    };

    scrollElement.addEventListener("scroll", handleScroll);

    return () => {
      if (isNumber(timeoutId)) {
        clearTimeout(timeoutId);
      }
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [getScrollElement]);

  // calculate the rows that should be rendered based on scroll position
  const { virtualRows, rowStartIndex, rowEndIndex, totalHeight, allRows } =
    useMemo(() => {
      const getRowHeight = (index: number) => {
        if (rowHeight) {
          return rowHeight(index);
        }

        const key = getRowKey(index);
        if (isNumber(rowSizeCache[key])) {
          return rowSizeCache[key]!;
        }

        return estimateRowHeight!(index);
      };

      const rangeStart = scrollTop;
      const rangeEnd = scrollTop + virtualRowHeight;

      let totalHeight = 0;
      let rowStartIndex = 0;
      let rowEndIndex = 0;
      const allRows: DynamicSizeListRow[] = Array(rowsCount);

      for (let index = 0; index < rowsCount; index++) {
        const key = getRowKey(index);
        const row = {
          key,
          index,
          height: getRowHeight(index),
          offsetTop: totalHeight,
        };

        totalHeight += row.height;
        allRows[index] = row;

        if (row.offsetTop + row.height < rangeStart) {
          rowStartIndex++;
        }

        if (row.offsetTop + row.height < rangeEnd) {
          rowEndIndex++;
        }
      }

      rowStartIndex = Math.max(0, rowStartIndex - overscanY);
      rowEndIndex = Math.min(rowsCount - 1, rowEndIndex + overscanY);

      const virtualRows = allRows.slice(rowStartIndex, rowEndIndex + 1);

      return {
        virtualRows: virtualRows,
        rowStartIndex,
        rowEndIndex,
        allRows: allRows,
        totalHeight,
      };
    }, [
      scrollTop,
      overscanY,
      virtualRowHeight,
      rowHeight,
      getRowKey,
      estimateRowHeight,
      rowSizeCache,
      rowsCount,
    ]);

  // keep track of the latest values in a ref to avoid stale closures
  const latestData = useLatest({
    rowSizeCache,
    getRowKey,
    allRows,
    getScrollElement,
    scrollTop,
  });

  // measure the height of individual rows
  const measureRowHeightInner = useCallback(
    (
      element: Element | null,
      resizeObserver: ResizeObserver,
      entry?: ResizeObserverEntry
    ) => {
      if (!element) {
        return;
      }

      if (!element.isConnected) {
        // stop observing if element is no longer in the DOM
        resizeObserver.unobserve(element);
        return;
      }

      const rowIndexAttribute = element.getAttribute("data-row-index") || "";
      const rowIndex = parseInt(rowIndexAttribute, 10);

      if (Number.isNaN(rowIndex)) {
        console.error(
          "Dynamic elements must have a valid `data-row-index` attribute"
        );
        return;
      }
      const { rowSizeCache, getRowKey, allRows, scrollTop } =
        latestData.current;

      const key = getRowKey(rowIndex);
      const isResize = Boolean(entry);

      resizeObserver.observe(element);

      if (!isResize && isNumber(rowSizeCache[key])) {
        return;
      }

      const height =
        entry?.borderBoxSize[0]?.blockSize ??
        element.getBoundingClientRect().height;

      if (rowSizeCache[key] === height) {
        return;
      }

      const row = allRows[rowIndex];

      if (!row) {
        return;
      }

      const delta = height - row.height;

      if (delta !== 0 && scrollTop > row.offsetTop) {
        const element = getScrollElement();
        if (element) {
          scheduleDOMUpdate(() => {
            element.scrollBy(0, delta);
          });
        }
      }

      setRowSizeCache((cache) => ({ ...cache, [key]: height }));
    },
    []
  );

  const rowsResizeObserver = useResizeObserver((entries, observer) => {
    entries.forEach((entry) => {
      measureRowHeightInner(entry.target, observer, entry);
    });
  });

  const measureRow = useCallback(
    (element: Element | null) => {
      measureRowHeightInner(element, rowsResizeObserver);
    },
    [rowsResizeObserver]
  );

  return {
    virtualRows,
    totalHeight,
    rowStartIndex,
    rowEndIndex,
    isScrolling,
    allRows,
    measureRow,
  };
}
