"use server";

import { and, eq } from "drizzle-orm";
import { db } from "../../db";
import { punchCards, restaurants } from "../../schema";

export const getPunchCards = async () => {
	return await db.select().from(punchCards);
};

export const getPunchCardById = async (id: bigint) => {
	return await db
		.select()
		.from(punchCards)
		.where(eq(punchCards.id, id))
		.limit(1);
};

export const getPunchCardsByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(punchCards)
		.where(eq(punchCards.userId, userId));
};

export const getPunchCardsByUserIdWithRestaurants = async (userId: bigint) => {
	return await db
		.select({
			id: punchCards.id,
			userId: punchCards.userId,
			restaurantId: punchCards.restaurantId,
			punches: punchCards.punches,
			completed: punchCards.completed,
			updatedAt: punchCards.updatedAt,
			restaurant: {
				id: restaurants.id,
				name: restaurants.name,
				description: restaurants.description,
				imageUrl: restaurants.imageUrl,
				address: restaurants.address,
				qrCodeUrl: restaurants.qrCodeUrl,
			},
		})
		.from(punchCards)
		.innerJoin(restaurants, eq(punchCards.restaurantId, restaurants.id))
		.where(eq(punchCards.userId, userId));
};

export const getUserPunchCardForRestaurant = async (
	userId: bigint,
	restaurantId: bigint,
) => {
	return await db
		.select()
		.from(punchCards)
		.where(
			and(
				eq(punchCards.userId, userId),
				eq(punchCards.restaurantId, restaurantId),
			),
		)
		.limit(1)
		.then((res) => res[0]);
};

export const getPunchCardsByRestaurantId = async (restaurantId: bigint) => {
	return await db
		.select()
		.from(punchCards)
		.where(eq(punchCards.restaurantId, restaurantId));
};

export const getUserRestaurantPunchCard = async (
	userId: bigint,
	restaurantId: bigint,
) => {
	return await db
		.select()
		.from(punchCards)
		.where(
			and(
				eq(punchCards.userId, userId),
				eq(punchCards.restaurantId, restaurantId),
			),
		)
		.limit(1)
		.then((res) => res[0]);
};

export const createPunchCard = async (data: {
	userId: bigint;
	restaurantId: bigint;
	punches?: number;
	completed?: boolean;
}) => {
	return await db.insert(punchCards).values(data).returning();
};

export const updatePunchCard = async (
	id: bigint,
	data: Partial<{
		punches: number;
		completed: boolean;
	}>,
) => {
	return await db
		.update(punchCards)
		.set(data)
		.where(eq(punchCards.id, id))
		.returning();
};

export const incrementPunchCard = async (id: bigint, increment = 1) => {
	const [card] = await getPunchCardById(id);
	if (!card) return null;

	const newPunches = card.punches + increment;
	return await db
		.update(punchCards)
		.set({
			punches: newPunches,
			completed: card.completed || false, // Keep existing completed state
		})
		.where(eq(punchCards.id, id))
		.returning();
};

export const deletePunchCard = async (id: bigint) => {
	return await db.delete(punchCards).where(eq(punchCards.id, id)).returning();
};
