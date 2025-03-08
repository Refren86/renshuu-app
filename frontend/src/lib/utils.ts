import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { TFlashcard } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 7);
  return `${timestamp}-${randomStr}`;
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = structuredClone(array);
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function priorityShuffleFlashcards(flashcards: TFlashcard[]): number[] {
  // Group flashcards by status
  const unsetCards: number[] = [];
  const unrecognizedCards: number[] = [];
  const familiarCards: number[] = [];
  const knownCards: number[] = [];

  // Populate groups with indices
  flashcards.forEach((card, index) => {
    switch (card.status) {
      case "unset":
        unsetCards.push(index);
        break;
      case "unrecognized":
        unrecognizedCards.push(index);
        break;
      case "familiar":
        familiarCards.push(index);
        break;
      case "known":
        knownCards.push(index);
        break;
    }
  });

  // Shuffle each group independently
  const shuffledUnset = shuffleArray(unsetCards);
  const shuffledUnrecognized = shuffleArray(unrecognizedCards);
  const shuffledFamiliar = shuffleArray(familiarCards);
  const shuffledKnown = shuffleArray(knownCards);

  // Concatenate arrays in priority order
  return [...shuffledUnset, ...shuffledUnrecognized, ...shuffledFamiliar, ...shuffledKnown];
}

export function rafThrottle<Fn extends (...args: unknown[]) => unknown>(cb: Fn) {
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
