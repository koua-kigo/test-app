// This file will be overwritten by drizzle-kit introspect:pg
// It just serves as a placeholder for the first introspection
import {
	pgTable,
	text,
	bigserial,
	integer,
	boolean,
	timestamp,
	jsonb,
} from "drizzle-orm/pg-core";

/* USERS */
export const users = pgTable("users", {
	id: bigserial("id", { mode: "bigint" }).primaryKey(),
	clerkId: text("clerk_id").notNull().unique(),
	name: text("name").notNull(),
	isStaff: boolean("is_staff").default(false), // e.g., restaurant admin
	isAdmin: boolean("is_admin").default(false), // system admin
});

/* RESTAURANTS */
export const restaurants = pgTable("restaurants", {
	id: bigserial("id", { mode: "bigint" }).primaryKey(),
	name: text("name").notNull(),
	description: text("description").notNull(),
	imageUrl: text("image_url").notNull(),
	address: text("address").notNull(),
	qrCodeUrl: text("qr_code_url"),
});

/* PUNCH CARDS */
export const punchCards = pgTable("punch_cards", {
	id: bigserial("id", { mode: "bigint" }).primaryKey(),
	userId: bigserial("user_id", { mode: "bigint" }).references(() => users.id),
	restaurantId: bigserial("restaurant_id", { mode: "bigint" }).references(
		() => restaurants.id,
	),
	punches: integer("punches").default(0),
	completed: boolean("completed").default(false),
	updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

/* RAFFLE ENTRIES */
export const raffleEntries = pgTable("raffle_entries", {
	id: bigserial("id", { mode: "bigint" }).primaryKey(),
	userId: bigserial("user_id", { mode: "bigint" }).references(() => users.id),
	punchCardId: bigserial("punch_card_id", { mode: "bigint" }).references(
		() => punchCards.id,
	),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

/* PRIZES */
export const prizes = pgTable("prizes", {
	id: bigserial("id", { mode: "bigint" }).primaryKey(),
	name: text("name").notNull(),
	description: text("description").notNull(),
	imageUrl: text("image_url").notNull(),
	type: text("type").notNull(),
	restaurantId: bigserial("restaurant_id", { mode: "bigint" }).references(
		() => restaurants.id,
	),
	requiredPunches: integer("required_punches").notNull(),
	available: boolean("available").default(true),
	quantity: integer("quantity").default(0),
	rules: jsonb("rules").default({}).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

/* PRIZE REDEMPTIONS */
export const prizeRedemptions = pgTable("prize_redemptions", {
	id: bigserial("id", { mode: "bigint" }).primaryKey(),
	userId: bigserial("user_id", { mode: "bigint" }).references(() => users.id),
	prizeId: bigserial("prize_id", { mode: "bigint" }).references(
		() => prizes.id,
	),
	punchCardId: bigserial("punch_card_id", { mode: "bigint" }).references(
		() => punchCards.id,
	),
	status: text("status").notNull(),
	redeemedAt: timestamp("redeemed_at", { withTimezone: true }),
	expiresAt: timestamp("expires_at", { withTimezone: true }),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

/* POINT BALANCES */
export const pointBalances = pgTable("point_balances", {
	id: bigserial("id", { mode: "bigint" }).primaryKey(),
	userId: bigserial("user_id", { mode: "bigint" }).references(() => users.id),
	points: integer("points").notNull().default(0),
	updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

/* POINT TRANSFERS */
export const pointTransfers = pgTable("point_transfers", {
	id: bigserial("id", { mode: "bigint" }).primaryKey(),
	fromUserId: bigserial("from_user_id", { mode: "bigint" }).references(
		() => users.id,
	),
	toUserId: bigserial("to_user_id", { mode: "bigint" }).references(
		() => users.id,
	),
	points: integer("points").notNull(),
	message: text("message"),
	status: text("status").notNull(), // e.g., pending, completed, cancelled
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

/* ACHIEVEMENTS */
export const achievements = pgTable("achievements", {
	id: bigserial("id", { mode: "bigint" }).primaryKey(),
	userId: bigserial("user_id", { mode: "bigint" }).references(() => users.id),
	type: text("type").notNull(), // e.g., first_transfer, transfer_milestone
	data: jsonb("data").default({}).notNull(),
	unlockedAt: timestamp("unlocked_at", { withTimezone: true }).defaultNow(),
});
