import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const flashcardsTable = pgTable("Flashcard", {
  id: text("id").primaryKey(),
  kanji: varchar({ length: 255 }),
  reading: varchar({ length: 255 }).notNull(),
  meaning: varchar({ length: 255 }).notNull(),
  imageUrl: text("image_url"),
  status: varchar({ length: 255 }).default("unset"),
  created_at: timestamp("created_at", { mode: "string" }).default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp("updated_at", { mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});
