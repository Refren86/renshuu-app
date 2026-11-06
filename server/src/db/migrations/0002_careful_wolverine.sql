CREATE TYPE "public"."user_role" AS ENUM('admin', 'subscriber');--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "password_hash" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "user_role" DEFAULT 'subscriber' NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "google_id" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "provider" text DEFAULT 'local' NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_google_id_unique" UNIQUE("google_id");