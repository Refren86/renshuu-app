import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function rafThrottle<Fn extends (...args: any[]) => any>(cb: Fn) {
  let rafId: number | null = null;
  let latestArgs: Parameters<Fn>;

  return function throttled(...args: Parameters<Fn>) {
    latestArgs = args;

    if (isNumber(rafId)) {
      return;
    }

    rafId = requestAnimationFrame(() => {
      cb(...latestArgs);
      rafId = null;
    });
  };
}

let rafScheduled = false;
const tasks: (() => void)[] = [];

export function scheduleDOMUpdate(cb: () => void) {
  tasks.push(cb);
  if (rafScheduled) {
    return;
  }
  rafScheduled = true;
  requestAnimationFrame(() => {
    const tasksToRun = tasks.slice();
    tasks.length = 0;
    tasksToRun.forEach((task) => task());
    rafScheduled = false;
  });
}