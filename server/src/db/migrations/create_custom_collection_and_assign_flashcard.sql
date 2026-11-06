-- Migration: Assign existing flashcards to a custom collection for my user
-- Date: 2025-08-02
-- Description: Creates a custom collection and assigns all existing flashcards to it

BEGIN;

-- Step 1: Create a custom collection for the user
INSERT INTO collection (id, name, description, type, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'Personal collection',
  'Collection containing my personal flashcards',
  'custom',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

-- Step 2: Get the collection ID we just created (store in a variable for reuse)
-- Note: We'll use a WITH clause to capture the collection ID

WITH new_collection AS (
  SELECT id as collection_id 
  FROM collection 
  WHERE name = 'Personal collection' 
    AND type = 'custom' 
    AND description = 'Collection containing my personal flashcards'
  ORDER BY created_at DESC 
  LIMIT 1
),
-- Step 3: Find all flashcards that are NOT in any collection
unassigned_flashcards AS (
  SELECT f.id as flashcard_id
  FROM flashcard f
  LEFT JOIN collection_flashcard cf ON f.id = cf.flashcard_id
  WHERE cf.flashcard_id IS NULL
)
-- Step 4: Insert junction table entries for all unassigned flashcards
INSERT INTO collection_flashcard (collection_id, flashcard_id, created_at, updated_at)
SELECT 
  nc.collection_id,
  uf.flashcard_id,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
FROM new_collection nc
CROSS JOIN unassigned_flashcards uf;

-- Step 5: Activate this collection for the specified user
WITH target_collection AS (
  SELECT id as collection_id 
  FROM collection 
  WHERE name = 'Personal collection' 
    AND type = 'custom' 
    AND description = 'Collection containing my personal flashcards'
  ORDER BY created_at DESC 
  LIMIT 1
)
INSERT INTO user_active_collections (user_id, collection_id, activated_at)
SELECT 
  'a58c616c-4c17-4945-b3c9-5b95879b32c2'::uuid,
  tc.collection_id,
  CURRENT_TIMESTAMP
FROM target_collection tc;

-- Step 6: (Optional) Display summary of what was done
DO $$
DECLARE
    collection_count INTEGER;
    flashcard_count INTEGER;
    collection_name TEXT;
BEGIN
    -- Get the collection info
    SELECT name INTO collection_name 
    FROM collection 
    WHERE name = 'Personal collection' 
      AND type = 'custom' 
      AND description = 'Collection containing my personal flashcards'
    ORDER BY created_at DESC 
    LIMIT 1;
    
    -- Count flashcards in the new collection
    SELECT COUNT(cf.flashcard_id) INTO flashcard_count
    FROM collection c
    JOIN collection_flashcard cf ON c.id = cf.collection_id
    WHERE c.name = 'Personal collection' 
      AND c.type = 'custom' 
      AND c.description = 'Collection containing my personal flashcards';
    
    -- Display summary
    RAISE NOTICE 'Migration completed successfully!';
    RAISE NOTICE 'Created collection: %', collection_name;
    RAISE NOTICE 'Assigned % flashcards to the collection', flashcard_count;
    RAISE NOTICE 'Activated collection for user: a58c616c-4c17-4945-b3c9-5b95879b32c2';
END $$;

COMMIT;