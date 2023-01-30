import type { DependencyList } from "react";
import { useEffect, useRef, useCallback } from "react";

import type { AnyFunction } from "@/types/utilityTypes";

function useCallbackRef<T extends AnyFunction>(
  callback: T | undefined,
  deps: DependencyList = []
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(((...args) => callbackRef.current?.(...args)) as T, deps);
}

export default useCallbackRef;
