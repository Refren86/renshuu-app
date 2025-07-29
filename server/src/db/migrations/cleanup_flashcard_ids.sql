-- This script converts all Flashcard IDs to UUID format before running the main migration

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Step 1: Create a mapping table to track old ID to new UUID conversions
CREATE TABLE IF NOT EXISTS flashcard_id_migration_map (
    old_id TEXT PRIMARY KEY,
    new_id UUID DEFAULT gen_random_uuid() NOT NULL
);

-- Step 2: Insert all existing IDs into the mapping table
-- This will generate new UUIDs for each existing ID
INSERT INTO flashcard_id_migration_map (old_id)
SELECT DISTINCT id::TEXT FROM "Flashcard"
ON CONFLICT (old_id) DO NOTHING;

-- Step 3: Add a temporary UUID column to the Flashcard table
ALTER TABLE "Flashcard" ADD COLUMN IF NOT EXISTS temp_uuid_id UUID;

-- Step 4: Populate the temporary UUID column using our mapping
UPDATE "Flashcard" 
SET temp_uuid_id = m.new_id
FROM flashcard_id_migration_map m
WHERE "Flashcard".id::TEXT = m.old_id;

-- Step 5: Drop the old id column and rename the temp column
ALTER TABLE "Flashcard" DROP COLUMN id;
ALTER TABLE "Flashcard" RENAME COLUMN temp_uuid_id TO id;

-- Step 6: Add primary key constraint to the new UUID id column
ALTER TABLE "Flashcard" ADD PRIMARY KEY (id);

-- Step 7: Update any other tables that reference the old Flashcard IDs
-- (Add these statements if you have other tables referencing Flashcard.id)
-- Example:
-- UPDATE some_related_table 
-- SET flashcard_id = m.new_id::TEXT
-- FROM flashcard_id_migration_map m 
-- WHERE some_related_table.flashcard_id = m.old_id;

-- Step 8: Clean up - drop the mapping table
DROP TABLE flashcard_id_migration_map;

-- Verify the result
SELECT 'Conversion completed. Total flashcards:' as status, COUNT(*) as count FROM "Flashcard";