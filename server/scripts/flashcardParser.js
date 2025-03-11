import fs from "node:fs";
import path from "path";

const pathToInitialFile = path.join(process.cwd(), "/src/assets/単語.md");
const pathToParsedFile = path.join(process.cwd(), "/src/assets/flashcards.json");

async function parseFlashcards() {
  try {
    const data = await fs.readFileSync(pathToInitialFile, "utf8");
    console.log({ data });
    const lines = data.split("\n");
    const flashcards = lines
      .map((line) => {
        const idMatch = line.match(/^(\d+)\./); // Match the id number before the dot
        const kanjiReadingMeaningMatch = line.match(/^(\d+)\.\s*(\S+)\s+\((.*?)\)\s+-\s+(.*)$/); // Match the id, kanji, reading, and meaning
        const noKanjiMatch = line.match(/^(\d+)\.\s*(\S+)\s+-\s+(.*)$/); // Match id, reading (without parentheses), and meaning

        if (kanjiReadingMeaningMatch) {
          return {
            id: kanjiReadingMeaningMatch[1],
            kanji: kanjiReadingMeaningMatch[2],
            reading: kanjiReadingMeaningMatch[3],
            meaning: kanjiReadingMeaningMatch[4],
            status: "unset", // "unset" | "unrecognized" | "familiar" | "known"
          };
        }

        if (noKanjiMatch) {
          return {
            id: noKanjiMatch[1],
            kanji: null,
            reading: noKanjiMatch[2],
            meaning: noKanjiMatch[3],
            status: "unset", // "unset" | "unrecognized" | "familiar" | "known"
          };
        }

        return null; // Return null for lines that don't match the expected pattern
      })
      .filter((card) => card !== null); // Filter out null values

    console.log({ flashcards });

    fs.writeFileSync(pathToParsedFile, JSON.stringify(flashcards, null, 2));
  } catch (error) {
    console.log("Error: ", error);
  }
}

parseFlashcards();
