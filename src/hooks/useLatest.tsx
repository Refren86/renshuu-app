import { useInsertionEffect, useRef } from "react";

export function useLatest<T>(value: T) {
  const latestValue = useRef(value);

  useInsertionEffect(() => {
    latestValue.current = value;
  }, []);

  return latestValue;
}