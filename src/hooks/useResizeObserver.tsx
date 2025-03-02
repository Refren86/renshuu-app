import { useEffect, useMemo } from "react";
import { useLatest } from "./useLatest";

export function useResizeObserver(cb: ResizeObserverCallback) {
  const latestCb = useLatest(cb);

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver((entires, observer) => {
        latestCb.current(entires, observer);
      }),
    [latestCb]
  );

  useEffect(() => () => resizeObserver.disconnect(), [resizeObserver]);

  return resizeObserver;
}
