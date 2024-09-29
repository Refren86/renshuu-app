import { TFlashcard } from "@/types";

// Define the store names
export type StoreName = "KnownWords" | "FamiliarWords" | "UnknownWords";

const dbName = "VocabularyDB";
const dbVersion = 1;
const storeNames: StoreName[] = ["KnownWords", "FamiliarWords", "UnknownWords"];

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request: IDBOpenDBRequest = indexedDB.open(dbName, dbVersion);

    request.onerror = (event: Event) => reject("Error opening database");

    request.onsuccess = (event: Event) => resolve(request.result);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;

      storeNames.forEach((storeName) => {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: "id" });
        }
      });
    };
  });
};

const findWordById = async (
  id: string
): Promise<{ word: TFlashcard; storeName: StoreName } | null> => {
  for (const storeName of storeNames) {
    const word = await getWord(storeName, id);
    if (word) {
      return { word, storeName };
    }
  }

  return null;
};

const addWord = async (
  storeName: StoreName,
  word: TFlashcard
): Promise<IDBValidKey> => {
  const db = await openDB();

  // Check if a word with the same ID exists in any store
  const existingWord = await findWordById(word.id);

  if (existingWord) {
    // If the word exists, update it and move it to the new store if necessary
    const updatedWord = { ...existingWord.word, ...word };

    if (existingWord.storeName !== storeName) {
      // Delete from old store
      await deleteWord(existingWord.storeName, existingWord.word.id);
    }

    // Add/update in new store
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.put(updatedWord);

      request.onerror = () => reject("Error updating word");
      request.onsuccess = () => resolve(request.result);
    });
  } else {
    // If the word doesn't exist, add it to the new store
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.add(word);

      request.onerror = () => reject("Error adding word");
      request.onsuccess = () => resolve(request.result);
    });
  }
};

const getWord = async (
  storeName: StoreName,
  id: string
): Promise<TFlashcard | undefined> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.get(id);

    request.onerror = () => reject("Error getting word");
    request.onsuccess = () => resolve(request.result);
  });
};

const updateWord = async (
  storeName: StoreName,
  word: TFlashcard
): Promise<IDBValidKey> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    const request = store.put(word);

    request.onerror = () => reject("Error updating word");
    request.onsuccess = () => resolve(request.result);
  });
};

// Delete (Remove a word by id)
const deleteWord = async (storeName: StoreName, id: string): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    const request = store.delete(id);

    request.onerror = () => reject("Error deleting word");
    request.onsuccess = () => resolve();
  });
};

// Get all words from a store
const getAllWords = async (storeName: StoreName): Promise<TFlashcard[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    request.onerror = () => reject("Error getting all words");
    request.onsuccess = () => resolve(request.result);
  });
};

export {
  openDB,
  findWordById,
  addWord,
  getWord,
  updateWord,
  deleteWord,
  getAllWords,
};
