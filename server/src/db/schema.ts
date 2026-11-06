import { relations, sql } from "drizzle-orm";
import { pgTable, text, timestamp, varchar, uuid, pgEnum, integer } from "drizzle-orm/pg-core";

export const subscriptionTypeEnum = pgEnum("subscription_type", ["free", "basic", "premium"]);
export const collectionTypeEnum = pgEnum("collection_type", ["global", "custom"]);
export const userRoleEnum = pgEnum("user_role", ["admin", "subscriber"]);

export const usersTable = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash"), // for local authentication
  role: userRoleEnum("role").default("subscriber").notNull(),

  // OAuth fields
  googleId: text("google_id").unique(),
  provider: text("provider").notNull().default("local"), // 'local', 'google'

  subscriptionType: subscriptionTypeEnum("subscription_type").default("free").notNull(),
  subscriptionExpiresAt: timestamp("subscription_expires_at"),

  created_at: timestamp("created_at", { mode: "string" }).default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp("updated_at", { mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

export const flashcardsTable = pgTable("flashcard", {
  id: uuid("id").defaultRandom().primaryKey(),
  kanji: varchar("kanji", { length: 255 }),
  reading: varchar("reading", { length: 255 }).notNull(),
  meaning: varchar("meaning", { length: 255 }).notNull(),
  imageUrl: text("image_url"),
  status: varchar("status", { length: 255 }).default("unset"),

  created_at: timestamp("created_at", { mode: "string" }).default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp("updated_at", { mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

export const collectionsTable = pgTable("collection", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  type: collectionTypeEnum("type").default("custom").notNull(),

  created_at: timestamp("created_at", { mode: "string" }).default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp("updated_at", { mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

export const userActiveCollections = pgTable("user_active_collections", {
  userId: uuid("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  collectionId: uuid("collection_id")
    .references(() => collectionsTable.id, { onDelete: "cascade" })
    .notNull(),

  activatedAt: timestamp("activated_at", { mode: "string" }).default(sql`CURRENT_TIMESTAMP`),
  lastStudied: timestamp("last_studied", { mode: "string" }),
});

// User progress tracking for flashcards
export const userFlashcardProgress = pgTable("user_flashcard_progress", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  flashcardId: uuid("flashcard_id")
    .references(() => flashcardsTable.id, { onDelete: "cascade" })
    .notNull(),
  collectionId: uuid("collection_id").references(() => collectionsTable.id, { onDelete: "cascade" }),

  correctCount: integer("correct_count").default(0).notNull(),
  incorrectCount: integer("incorrect_count").default(0).notNull(),
  streakCount: integer("streak_count").default(0).notNull(),

  lastReview: timestamp("last_review", { mode: "string" }),
  created_at: timestamp("created_at", { mode: "string" }).default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp("updated_at", { mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

// Collection-Flashcard junction table
export const collectionFlashcards = pgTable("collection_flashcard", {
  collectionId: uuid("collection_id")
    .references(() => collectionsTable.id, { onDelete: "cascade" })
    .notNull(),
  flashcardId: uuid("flashcard_id")
    .references(() => flashcardsTable.id, { onDelete: "cascade" })
    .notNull(),

  created_at: timestamp("created_at", { mode: "string" }).default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp("updated_at", { mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

// Define relations
export const usersRelations = relations(usersTable, ({ many }) => ({
  activeCollections: many(userActiveCollections),
  progress: many(userFlashcardProgress),
}));

export const collectionsRelations = relations(collectionsTable, ({ many }) => ({
  flashcards: many(collectionFlashcards),
  activeUsers: many(userActiveCollections),
}));

export const flashcardsRelations = relations(flashcardsTable, ({ many }) => ({
  collections: many(collectionFlashcards),
  userProgress: many(userFlashcardProgress),
}));

export const userActiveCollectionsRelations = relations(userActiveCollections, ({ one }) => ({
  user: one(usersTable, {
    fields: [userActiveCollections.userId],
    references: [usersTable.id],
  }),
  collection: one(collectionsTable, {
    fields: [userActiveCollections.collectionId],
    references: [collectionsTable.id],
  }),
}));

export const userFlashcardProgressRelations = relations(userFlashcardProgress, ({ one }) => ({
  user: one(usersTable, {
    fields: [userFlashcardProgress.userId],
    references: [usersTable.id],
  }),
  flashcard: one(flashcardsTable, {
    fields: [userFlashcardProgress.flashcardId],
    references: [flashcardsTable.id],
  }),
  collection: one(collectionsTable, {
    fields: [userFlashcardProgress.collectionId],
    references: [collectionsTable.id],
  }),
}));

export const collectionFlashcardsRelations = relations(collectionFlashcards, ({ one }) => ({
  collection: one(collectionsTable, {
    fields: [collectionFlashcards.collectionId],
    references: [collectionsTable.id],
  }),
  flashcard: one(flashcardsTable, {
    fields: [collectionFlashcards.flashcardId],
    references: [flashcardsTable.id],
  }),
}));

// Type exports
export type User = typeof usersTable.$inferSelect;
export type NewUser = typeof usersTable.$inferInsert;
export type Collection = typeof collectionsTable.$inferSelect;
export type NewCollection = typeof collectionsTable.$inferInsert;
export type Flashcard = typeof flashcardsTable.$inferSelect;
export type NewFlashcard = typeof flashcardsTable.$inferInsert;
export type UserFlashcardProgress = typeof userFlashcardProgress.$inferSelect;
export type NewUserFlashcardProgress = typeof userFlashcardProgress.$inferInsert;
