import puppeteer, { Browser, Page } from "puppeteer";
import type { Request, Response } from "express";
import { eq } from "drizzle-orm";

import { delay } from "@/utils/common";
import { db } from "@/db"; // Adjust import path as needed
import { flashcardsTable, collectionsTable, collectionFlashcards } from "@/db/schema"; // Adjust import path as needed

interface Word {
  kanji: string;
  reading: string;
  meaning: string;
}

class JapaneseScraper {
  private browser: Browser | null = null;
  private page: Page | null = null;

  async initialize() {
    this.browser = await puppeteer.launch({
      headless: false, // Set to true in production
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-blink-features=AutomationControlled",
        "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      ],
    });

    this.page = await this.browser.newPage();

    // Set viewport and user agent
    await this.page.setViewport({ width: 1366, height: 768 });
    await this.page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    );

    // Add stealth settings
    await this.page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, "webdriver", {
        get: () => false,
      });
    });
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  private formatMeaning(meaning: string): string {
    // Replace [1], [2], etc. with 1), 2), etc.
    return meaning.replace(/\[(\d+)\]/g, "$1)");
  }

  private async createOrGetCollection(name: string, description: string): Promise<string> {
    // Check if collection already exists
    const existingCollection = await db.select().from(collectionsTable).where(eq(collectionsTable.name, name)).limit(1);

    if (existingCollection.length > 0) {
      return existingCollection[0].id;
    }

    // Create new collection
    const newCollection = await db
      .insert(collectionsTable)
      .values({
        name,
        description,
        type: "global",
      })
      .returning({ id: collectionsTable.id });

    return newCollection[0].id;
  }

  async saveWordsToDatabase(words: Word[], collectionName: string, collectionDescription: string): Promise<void> {
    try {
      // Create or get collection
      const collectionId = await this.createOrGetCollection(collectionName, collectionDescription);

      // Clear existing flashcards for this collection (optional - remove if you want to keep existing data)
      // await db.delete(collectionFlashcards).where(eq(collectionFlashcards.collectionId, collectionId));

      // Insert flashcards in batches to avoid memory issues
      const batchSize = 100;
      let insertedCount = 0;

      for (let i = 0; i < words.length; i += batchSize) {
        const batch = words.slice(i, i + batchSize);

        // Insert flashcards first
        const flashcardsData = batch.map((word) => ({
          kanji: word.kanji || null,
          reading: word.reading,
          meaning: this.formatMeaning(word.meaning),
        }));

        const insertedFlashcards = await db
          .insert(flashcardsTable)
          .values(flashcardsData)
          .returning({ id: flashcardsTable.id });

        // Create junction table entries
        const junctionData = insertedFlashcards.map((flashcard) => ({
          collectionId: collectionId,
          flashcardId: flashcard.id,
        }));

        await db.insert(collectionFlashcards).values(junctionData);

        insertedCount += batch.length;

        console.log(`Inserted batch ${Math.floor(i / batchSize) + 1}, total: ${insertedCount}/${words.length}`);
      }

      console.log(`Successfully saved ${insertedCount} words to collection: ${collectionName}`);
    } catch (error) {
      console.error(`Error saving words to database for ${collectionName}:`, error);
      throw error;
    }
  }

  async scrapeWiktionaryJLPT(level: string): Promise<Word[]> {
    if (!this.page) throw new Error("Browser not initialized");

    const words: Word[] = [];
    const url = `https://en.wiktionary.org/wiki/Appendix:JLPT/${level}`;

    console.log(`Scraping ${url}...`);

    try {
      await this.page.goto(url, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });

      // Wait for content to load
      await this.page.waitForSelector("table", { timeout: 10000 });

      // Extract words from the tables
      const pageWords = await this.page.evaluate(() => {
        const words: Word[] = [];

        // Find all tables on the page
        const tables = document.querySelectorAll("table.wikitable, table");

        tables.forEach((table) => {
          const rows = table.querySelectorAll("tr");

          rows.forEach((row, index) => {
            // Skip header rows
            if (index === 0) return;

            const cells = row.querySelectorAll("td");

            if (cells.length >= 3) {
              // First cell: Kanji (might contain links)
              const kanjiCell = cells[0];
              let kanji = "";
              const kanjiLink = kanjiCell.querySelector("a");

              if (kanjiLink) {
                kanji = kanjiLink.textContent?.trim() || "";
              } else {
                kanji = kanjiCell.textContent?.trim() || "";
              }

              // Second cell: Reading (hiragana/katakana)
              const readingCell = cells[1];
              let reading = "";
              const readingLink = readingCell.querySelector("a");

              if (readingLink) {
                reading = readingLink.textContent?.trim() || "";
              } else {
                reading = readingCell.textContent?.trim() || "";
              }

              // Third cell: English meaning
              const meaningCell = cells[2];
              let meaning = meaningCell.textContent?.trim() || "";

              // Clean up the meaning (remove extra whitespace, parentheses content)
              meaning = meaning.replace(/\s+/g, " ").trim();

              // Sometimes the table might have kanji and reading in the same cell
              if (!reading && kanji.includes("(")) {
                const match = kanji.match(/(.+?)\s*\((.+?)\)/);
                if (match) {
                  kanji = match[1].trim();
                  reading = match[2].trim();
                }
              }

              // Add word if we have at least reading and meaning
              if ((kanji || reading) && meaning) {
                words.push({
                  kanji: kanji,
                  reading: reading || kanji,
                  meaning: meaning,
                });
              }
            } else if (cells.length === 2) {
              // Some tables might have only 2 columns (word and meaning)
              const wordCell = cells[0];
              const meaningCell = cells[1];

              const wordText = wordCell.textContent?.trim() || "";
              const meaning = meaningCell.textContent?.trim() || "";

              // Try to extract kanji and reading
              let kanji = "";
              let reading = "";

              if (wordText.includes("(")) {
                const match = wordText.match(/(.+?)\s*\((.+?)\)/);
                if (match) {
                  kanji = match[1].trim();
                  reading = match[2].trim();
                }
              } else {
                // If no parentheses, assume it's just the reading
                reading = wordText;
              }

              if ((kanji || reading) && meaning) {
                words.push({
                  kanji: kanji,
                  reading: reading || kanji,
                  meaning: meaning,
                });
              }
            }
          });
        });

        return words;
      });

      // Remove duplicates
      const uniqueWords = pageWords.reduce((acc: Word[], word) => {
        const key = `${word.kanji}-${word.reading}`;
        if (!acc.find((w) => `${w.kanji}-${w.reading}` === key)) {
          acc.push(word);
        }
        return acc;
      }, []);

      words.push(...uniqueWords);
      console.log(`Found ${uniqueWords.length} unique words for ${level}`);
    } catch (error) {
      console.error(`Error scraping Wiktionary ${level}:`, error);
    }

    return words;
  }

  async scrapeIKnowCommonWords(): Promise<Word[]> {
    if (!this.page) throw new Error("Browser not initialized");

    const words: Word[] = [];
    const baseUrl = "https://iknow.jp/content/japanese";

    console.log(`Scraping iKnow common words from ${baseUrl}...`);

    try {
      await this.page.goto(baseUrl, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });

      // Wait for content to load
      await delay(3000);

      // iKnow requires navigation through course pages
      // First, get all course links
      const courseLinks = await this.page.evaluate(() => {
        const links: string[] = [];
        // Look for Core 6000 or similar courses
        const courseElements = document.querySelectorAll('a[href*="/courses/"]');

        courseElements.forEach((element) => {
          const href = (element as HTMLAnchorElement).href;
          const text = element.textContent?.toLowerCase() || "";
          // Filter for core/common word courses
          if (href && text.includes("core")) {
            links.push(href);
          }
        });
        return links;
      });

      console.log(`Found ${courseLinks.length} relevant courses`);

      // Visit each course and extract vocabulary
      for (const courseLink of courseLinks) {
        console.log(`Visiting course: ${courseLink}`);
        await this.page.goto(courseLink, { waitUntil: "networkidle2" });
        await delay(2000);

        // Extract words from the current page
        const pageWords = await this.page.evaluate(() => {
          const words: Word[] = [];

          const rows = document.querySelectorAll(".items .item");

          if (rows.length > 0) {
            rows.forEach((row) => {
              const kanjiEl = row.querySelector(".cue");
              const kanji = kanjiEl ? kanjiEl.textContent?.trim() : "";

              const readingEl = row.querySelector(".transliteration");
              const reading = readingEl ? readingEl.textContent?.trim() : "";

              const meaningEl = row.querySelector(".response");
              const meaning = meaningEl ? meaningEl.textContent?.trim() : "";

              if ((kanji || reading) && meaning) {
                words.push({
                  kanji: kanji!,
                  reading: reading! || kanji!,
                  meaning: meaning,
                });
              }
            });
          }

          return words;
        });

        words.push(...pageWords);
        console.log(`Found ${pageWords.length} words from this course. Total: ${words.length}`);

        await delay(3000); // Delay between courses
      }
    } catch (error) {
      console.error("Error scraping iKnow:", error);
    }

    return words;
  }
}

export const scrapperService = {
  scrapeJLPTWord: async (_: Request, res: Response): Promise<void> => {
    const scraper = new JapaneseScraper();

    try {
      await scraper.initialize();

      const results: Record<string, Word[]> = {};
      const stats: Record<string, number> = {};
      const levels = ["N5", "N4", "N3", "N2", "N1"];

      for (const level of levels) {
        console.log(`\n=== Starting ${level} ===`);

        try {
          results[level] = await scraper.scrapeWiktionaryJLPT(level);
          stats[level] = results[level].length;

          // Save to database instead of file
          await scraper.saveWordsToDatabase(results[level], level, `JLPT ${level} vocabulary words`);

          console.log(`Saved ${results[level].length} ${level} words to database`);

          // Delay between levels
          await delay(3000);
        } catch (error) {
          console.error(`Error scraping ${level}:`, error);
          results[level] = [];
          stats[level] = 0;
        }
      }

      // Expected counts for reference
      const expectedCounts = {
        N5: 800,
        N4: 1500,
        N3: 3000,
        N2: 3000,
        N1: 4000,
      };

      res.json({
        success: true,
        message: "JLPT scraping completed and saved to database",
        stats: stats,
        expected: expectedCounts,
        completeness: Object.entries(stats).map(([level, count]) => ({
          level,
          percentage: Math.round((count / expectedCounts[level as keyof typeof expectedCounts]) * 100),
        })),
        totals: {
          allWords: Object.values(stats).reduce((sum, count) => sum + count, 0),
        },
      });
    } catch (error) {
      console.error("Scraping error:", error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      await scraper.close();
    }
  },

  scrapeCommonWords: async (_: Request, res: Response): Promise<void> => {
    const scraper = new JapaneseScraper();

    try {
      await scraper.initialize();

      console.log("Starting common words scraping from iKnow...");
      const words = await scraper.scrapeIKnowCommonWords();

      // Limit to 6000 words and save to database
      const limitedWords = words.slice(0, 6000);
      await scraper.saveWordsToDatabase(
        limitedWords,
        "6000 Most Common Words",
        "The 6000 most common Japanese words for daily communication"
      );

      console.log(`Saved ${limitedWords.length} common words to database`);

      res.json({
        success: true,
        message: "Common words scraped successfully and saved to database",
        count: limitedWords.length,
        source: words.length > 0 ? "iKnow" : "Alternative sources",
      });
    } catch (error) {
      console.error("Common words scraping error:", error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      await scraper.close();
    }
  },
};
