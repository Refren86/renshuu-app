import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import { useLatest } from "./useLatest";
import { isNumber, rafThrottle, scheduleDOMUpdate } from "@/lib/utils";
import { useResizeObserver } from "./useResizeObserver";

type Key = string | number;

type UseDynamicSizeListProps = {
  itemsCount: number;
  itemHeight?: (index: number) => number;
  estimateItemHeight?: (index: number) => number;
  getItemKey: (index: number) => Key;
  overscan?: number;
  scrollingDelay?: number;
  getScrollElement: () => HTMLElement | null;
};

type DynamicSizeListItem = {
  key: Key;
  index: number;
  offsetTop: number;
  height: number;
};

const DEFAULT_OVERSCAN = 3;
const DEFAULT_SCROLLING_DELAY = 150;

function validateProps(props: UseDynamicSizeListProps) {
  const { itemHeight, estimateItemHeight } = props;

  if (!itemHeight && !estimateItemHeight) {
    throw new Error(
      `You must pass either "itemHeight" or "estimateItemHeight" prop`
    );
  }
}

export function useDynamicSizeList(props: UseDynamicSizeListProps) {
  validateProps(props);

  const {
    itemHeight,
    estimateItemHeight,
    getItemKey,
    itemsCount,
    scrollingDelay = DEFAULT_SCROLLING_DELAY,
    overscan = DEFAULT_OVERSCAN,
    getScrollElement,
  } = props;

  const [measurementCache, setMeasurementCache] = useState<Record<Key, number>>(
    {}
  );
  const [listHeight, setListHeight] = useState(0);
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
      const height =
        entry.borderBoxSize[0]?.blockSize ??
        entry.target.getBoundingClientRect().height;

      setListHeight(height);
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
  const { virtualItems, startIndex, endIndex, totalHeight, allItems } =
    useMemo(() => {
      const getItemHeight = (index: number) => {
        if (itemHeight) {
          return itemHeight(index);
        }

        const key = getItemKey(index);

        if (isNumber(measurementCache[key])) {
          return measurementCache[key]!;
        }

        return estimateItemHeight!(index);
      };

      const rangeStart = scrollTop;
      const rangeEnd = scrollTop + listHeight;

      let totalHeight = 0;
      let startIndex = -1;
      let endIndex = -1;
      const allRows: DynamicSizeListItem[] = Array(itemsCount);

      for (let index = 0; index < itemsCount; index++) {
        const key = getItemKey(index);
        const row = {
          key,
          index: index,
          height: getItemHeight(index),
          offsetTop: totalHeight,
        };

        totalHeight += row.height;
        allRows[index] = row;

        if (row.offsetTop + row.height < rangeStart) {
          startIndex++;
        }

        if (row.offsetTop + row.height < rangeEnd) {
          endIndex++;
        }
      }

      startIndex = Math.max(0, startIndex - overscan);
      endIndex = Math.min(itemsCount - 1, endIndex + overscan);

      const virtualRows = allRows.slice(startIndex, endIndex + 1);

      return {
        virtualItems: virtualRows,
        startIndex,
        endIndex,
        allItems: allRows,
        totalHeight,
      };
    }, [
      scrollTop,
      overscan,
      listHeight,
      itemHeight,
      getItemKey,
      estimateItemHeight,
      measurementCache,
      itemsCount,
    ]);

  // keep track of the latest values in a ref to avoid stale closures
  const latestData = useLatest({
    measurementCache,
    getItemKey,
    allItems,
    getScrollElement,
    scrollTop,
  });

  const measureElementInner = useCallback(
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

      const indexAttribute = element.getAttribute("data-index") || "";
      const index = parseInt(indexAttribute, 10);

      if (Number.isNaN(index)) {
        console.error(
          "Dynamic elements must have a valid `data-index` attribute"
        );
        return;
      }
      const { measurementCache, getItemKey, allItems, scrollTop } =
        latestData.current;

      const key = getItemKey(index);
      const isResize = Boolean(entry);

      resizeObserver.observe(element);

      if (!isResize && isNumber(measurementCache[key])) {
        return;
      }

      const height =
        entry?.borderBoxSize[0]?.blockSize ??
        element.getBoundingClientRect().height;

      if (measurementCache[key] === height) {
        return;
      }

      const item = allItems[index]!;
      const delta = height - item.height;

      if (delta !== 0 && scrollTop > item.offsetTop) {
        const element = getScrollElement();
        if (element) {
          scheduleDOMUpdate(() => {
            element.scrollBy(0, delta);
          });
        }
      }

      setMeasurementCache((cache) => ({ ...cache, [key]: height }));
    },
    []
  );

  const rowsResizeObserver = useResizeObserver((entries, observer) => {
    entries.forEach((entry) => {
      measureElementInner(entry.target, observer, entry);
    });
  });

  const measureElement = useCallback(
    (element: Element | null) => {
      measureElementInner(element, rowsResizeObserver);
    },
    [rowsResizeObserver]
  );

  return {
    virtualItems,
    totalHeight,
    startIndex,
    endIndex,
    isScrolling,
    allItems,
    measureElement,
  };
}
