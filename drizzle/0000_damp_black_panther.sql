CREATE TABLE "achievements" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" bigserial,
	"type" text NOT NULL,
	"data" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"unlocked_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "point_balances" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" bigserial,
	"points" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "point_transfers" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"from_user_id" bigserial,
	"to_user_id" bigserial,
	"points" integer NOT NULL,
	"message" text,
	"status" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "prize_redemptions" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" bigserial,
	"prize_id" bigserial,
	"punch_card_id" bigserial,
	"status" text NOT NULL,
	"redeemed_at" timestamp with time zone,
	"expires_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "prizes" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text NOT NULL,
	"type" text NOT NULL,
	"restaurant_id" bigserial,
	"required_punches" integer NOT NULL,
	"available" boolean DEFAULT true,
	"quantity" integer DEFAULT 0,
	"rules" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "punch_cards" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" bigserial,
	"restaurant_id" bigserial,
	"punches" integer DEFAULT 0,
	"completed" boolean DEFAULT false,
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "raffle_entries" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"user_id" bigserial,
	"punch_card_id" bigserial,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "restaurants" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text NOT NULL,
	"address" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"clerk_id" text NOT NULL,
	"name" text NOT NULL,
	"is_staff" boolean DEFAULT false,
	"is_admin" boolean DEFAULT false,
	CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id")
);
--> statement-breakpoint
ALTER TABLE "achievements" ADD CONSTRAINT "achievements_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "point_balances" ADD CONSTRAINT "point_balances_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "point_transfers" ADD CONSTRAINT "point_transfers_from_user_id_users_id_fk" FOREIGN KEY ("from_user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "point_transfers" ADD CONSTRAINT "point_transfers_to_user_id_users_id_fk" FOREIGN KEY ("to_user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prize_redemptions" ADD CONSTRAINT "prize_redemptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prize_redemptions" ADD CONSTRAINT "prize_redemptions_prize_id_prizes_id_fk" FOREIGN KEY ("prize_id") REFERENCES "public"."prizes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prize_redemptions" ADD CONSTRAINT "prize_redemptions_punch_card_id_punch_cards_id_fk" FOREIGN KEY ("punch_card_id") REFERENCES "public"."punch_cards"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prizes" ADD CONSTRAINT "prizes_restaurant_id_restaurants_id_fk" FOREIGN KEY ("restaurant_id") REFERENCES "public"."restaurants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "punch_cards" ADD CONSTRAINT "punch_cards_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "punch_cards" ADD CONSTRAINT "punch_cards_restaurant_id_restaurants_id_fk" FOREIGN KEY ("restaurant_id") REFERENCES "public"."restaurants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "raffle_entries" ADD CONSTRAINT "raffle_entries_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "raffle_entries" ADD CONSTRAINT "raffle_entries_punch_card_id_punch_cards_id_fk" FOREIGN KEY ("punch_card_id") REFERENCES "public"."punch_cards"("id") ON DELETE no action ON UPDATE no action;