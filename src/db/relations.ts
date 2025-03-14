import { relations } from "drizzle-orm/relations";
import {
	users,
	achievements,
	pointBalances,
	pointTransfers,
	prizes,
	prizeRedemptions,
	punchCards,
	restaurants,
	raffleEntries,
	restaurantDeals,
} from "./schema";

export const achievementsRelations = relations(achievements, ({ one }) => ({
	user: one(users, {
		fields: [achievements.userId],
		references: [users.id],
	}),
}));

export const usersRelations = relations(users, ({ many }) => ({
	achievements: many(achievements),
	pointBalances: many(pointBalances),
	pointTransfers_fromUserId: many(pointTransfers, {
		relationName: "pointTransfers_fromUserId_users_id",
	}),
	pointTransfers_toUserId: many(pointTransfers, {
		relationName: "pointTransfers_toUserId_users_id",
	}),
	prizeRedemptions: many(prizeRedemptions),
	raffleEntries: many(raffleEntries),
	punchCards: many(punchCards),
}));

export const pointBalancesRelations = relations(pointBalances, ({ one }) => ({
	user: one(users, {
		fields: [pointBalances.userId],
		references: [users.id],
	}),
}));

export const pointTransfersRelations = relations(pointTransfers, ({ one }) => ({
	user_fromUserId: one(users, {
		fields: [pointTransfers.fromUserId],
		references: [users.id],
		relationName: "pointTransfers_fromUserId_users_id",
	}),
	user_toUserId: one(users, {
		fields: [pointTransfers.toUserId],
		references: [users.id],
		relationName: "pointTransfers_toUserId_users_id",
	}),
}));

export const prizeRedemptionsRelations = relations(
	prizeRedemptions,
	({ one }) => ({
		prize: one(prizes, {
			fields: [prizeRedemptions.prizeId],
			references: [prizes.id],
		}),
		punchCard: one(punchCards, {
			fields: [prizeRedemptions.punchCardId],
			references: [punchCards.id],
		}),
		user: one(users, {
			fields: [prizeRedemptions.userId],
			references: [users.id],
		}),
	}),
);

export const prizesRelations = relations(prizes, ({ one, many }) => ({
	prizeRedemptions: many(prizeRedemptions),
	restaurant: one(restaurants, {
		fields: [prizes.restaurantId],
		references: [restaurants.id],
	}),
}));

export const punchCardsRelations = relations(punchCards, ({ one, many }) => ({
	prizeRedemptions: many(prizeRedemptions),
	raffleEntries: many(raffleEntries),
	restaurant: one(restaurants, {
		fields: [punchCards.restaurantId],
		references: [restaurants.id],
	}),
	user: one(users, {
		fields: [punchCards.userId],
		references: [users.id],
	}),
}));

export const restaurantDealsRelations = relations(
	restaurantDeals,
	({ one }) => ({
		restaurant: one(restaurants, {
			fields: [restaurantDeals.restaurantId],
			references: [restaurants.id],
		}),
	}),
);

export const restaurantsRelations = relations(restaurants, ({ many }) => ({
	deals: many(restaurantDeals),
	punchCards: many(punchCards),
	prizes: many(prizes),
}));

export const raffleEntriesRelations = relations(raffleEntries, ({ one }) => ({
	punchCard: one(punchCards, {
		fields: [raffleEntries.punchCardId],
		references: [punchCards.id],
	}),
	user: one(users, {
		fields: [raffleEntries.userId],
		references: [users.id],
	}),
}));
