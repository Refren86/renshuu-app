import { TFlashcard } from "@/types";

const dbName = "VocabularyDB";
const dbVersion = 1;
const storeName = "Words";

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request: IDBOpenDBRequest = indexedDB.open(dbName, dbVersion);

    request.onerror = (event: Event) => reject("Error opening database");

    request.onsuccess = (event: Event) => resolve(request.result);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;

      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: "id" });
      }
    };
  });
};

const findWordById = async (id: string): Promise<TFlashcard | null> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.get(id);

    request.onerror = () => reject("Error getting word");
    request.onsuccess = () => resolve(request.result || null);
  });
};

const addWord = async (word: TFlashcard): Promise<IDBValidKey> => {
  const db = await openDB();
  // Check if a word with the same ID exists
  const existingWord = await findWordById(word.id);

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    const request = existingWord ? store.put(word) : store.add(word);

    request.onerror = () => reject("Error adding/updating word");
    request.onsuccess = () => resolve(request.result);
  });
};

const getWord = async (id: string): Promise<TFlashcard | undefined> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.get(id);

    request.onerror = () => reject("Error getting word");
    request.onsuccess = () => resolve(request.result);
  });
};

const updateWord = async (word: TFlashcard): Promise<IDBValidKey> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    const request = store.put(word);

    request.onerror = () => reject("Error updating word");
    request.onsuccess = () => resolve(request.result);
  });
};

const deleteWord = async (id: string): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readwrite");
    const store = transaction.objectStore(storeName);
    const request = store.delete(id);

    request.onerror = () => reject("Error deleting word");
    request.onsuccess = () => resolve();
  });
};

const getAllWords = async (): Promise<TFlashcard[]> => {
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