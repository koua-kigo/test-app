import {
	pgTable,
	bigserial,
	text,
	unique,
	boolean,
	foreignKey,
	jsonb,
	timestamp,
	integer,
	uniqueIndex,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const restaurants = pgTable("restaurants", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	name: text().notNull(),
	description: text().notNull(),
	imageUrl: text("image_url").notNull(),
	address: text().notNull(),
	qrCodeUrl: text("qr_code_url"),
});

export const users = pgTable(
	"users",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		clerkId: text("clerk_id").notNull(),
		name: text().notNull(),
		isStaff: boolean("is_staff").default(false),
		isAdmin: boolean("is_admin").default(false),
		email: text().notNull(),
		phone: text(),
	},
	(table) => [
		unique("users_clerk_id_unique").on(table.clerkId),
		unique("users_email_key").on(table.email),
		unique("users_phone_key").on(table.phone),
	],
);

export const achievements = pgTable(
	"achievements",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		userId: bigserial("user_id", { mode: "bigint" }).notNull(),
		type: text().notNull(),
		data: jsonb().default({}).notNull(),
		unlockedAt: timestamp("unlocked_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "achievements_user_id_users_id_fk",
		}),
	],
);

export const pointBalances = pgTable(
	"point_balances",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		userId: bigserial("user_id", { mode: "bigint" }).notNull(),
		points: integer().default(0).notNull(),
		updatedAt: timestamp("updated_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "point_balances_user_id_users_id_fk",
		}),
	],
);

export const pointTransfers = pgTable(
	"point_transfers",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		fromUserId: bigserial("from_user_id", { mode: "bigint" }).notNull(),
		toUserId: bigserial("to_user_id", { mode: "bigint" }).notNull(),
		points: integer().notNull(),
		message: text(),
		status: text().notNull(),
		createdAt: timestamp("created_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.fromUserId],
			foreignColumns: [users.id],
			name: "point_transfers_from_user_id_users_id_fk",
		}),
		foreignKey({
			columns: [table.toUserId],
			foreignColumns: [users.id],
			name: "point_transfers_to_user_id_users_id_fk",
		}),
	],
);

export const prizeRedemptions = pgTable(
	"prize_redemptions",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		userId: bigserial("user_id", { mode: "bigint" }).notNull(),
		prizeId: bigserial("prize_id", { mode: "bigint" }).notNull(),
		punchCardId: bigserial("punch_card_id", { mode: "bigint" }).notNull(),
		status: text().notNull(),
		redeemedAt: timestamp("redeemed_at", {
			withTimezone: true,
			mode: "string",
		}),
		expiresAt: timestamp("expires_at", { withTimezone: true, mode: "string" }),
		createdAt: timestamp("created_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.prizeId],
			foreignColumns: [prizes.id],
			name: "prize_redemptions_prize_id_prizes_id_fk",
		}),
		foreignKey({
			columns: [table.punchCardId],
			foreignColumns: [punchCards.id],
			name: "prize_redemptions_punch_card_id_punch_cards_id_fk",
		}),
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "prize_redemptions_user_id_users_id_fk",
		}),
	],
);

export const prizes = pgTable(
	"prizes",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		name: text().notNull(),
		description: text().notNull(),
		imageUrl: text("image_url").notNull(),
		type: text().notNull(),
		restaurantId: bigserial("restaurant_id", { mode: "bigint" }).notNull(),
		requiredPunches: integer("required_punches").notNull(),
		available: boolean().default(true),
		quantity: integer().default(0),
		rules: jsonb().default({}).notNull(),
		createdAt: timestamp("created_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.restaurantId],
			foreignColumns: [restaurants.id],
			name: "prizes_restaurant_id_restaurants_id_fk",
		}),
	],
);

export const raffleEntries = pgTable(
	"raffle_entries",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		userId: bigserial("user_id", { mode: "bigint" }).notNull(),
		punchCardId: bigserial("punch_card_id", { mode: "bigint" }).notNull(),
		createdAt: timestamp("created_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.punchCardId],
			foreignColumns: [punchCards.id],
			name: "raffle_entries_punch_card_id_punch_cards_id_fk",
		}),
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "raffle_entries_user_id_users_id_fk",
		}),
	],
);

export const punchCards = pgTable(
	"punch_cards",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		userId: bigserial("user_id", { mode: "bigint" }).notNull(),
		restaurantId: bigserial("restaurant_id", { mode: "bigint" }).notNull(),
		punches: integer().default(0),
		completed: boolean().default(false),
		updatedAt: timestamp("updated_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		uniqueIndex("unique_restaurant_user_idx").on(
			table.userId,
			table.restaurantId,
		),
		foreignKey({
			columns: [table.restaurantId],
			foreignColumns: [restaurants.id],
			name: "punch_cards_restaurant_id_restaurants_id_fk",
		}),
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "punch_cards_user_id_users_id_fk",
		}),
	],
);
