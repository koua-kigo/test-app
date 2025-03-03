ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "phone" text;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT IF NOT EXISTS "users_email_unique" UNIQUE("email");