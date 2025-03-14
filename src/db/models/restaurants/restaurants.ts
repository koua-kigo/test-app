"use server";

import { eq } from "drizzle-orm";
import { db } from "../../db";
import { restaurants, prizes, punchCards, restaurantDeals } from "../../schema";
import { getPrizesByRestaurantId } from "@/db/models/prizes";

export const getRestaurants = async () => {
	// Get all restaurants with their punchCards relation loaded
	const restaurantsList = await db.query.restaurants.findMany({
		with: {
			punchCards: true,
			deals: true,
			prizes: true,
		},
	});

	// Add punchCardCount to each restaurant
	return restaurantsList.map((restaurant) => ({
		...restaurant,
		punchCardCount: restaurant?.punchCards?.length,
		dealCount: restaurant?.deals?.length,
		prizeCount: restaurant?.prizes?.length,
	}));
};

export const getRestaurantById = async (id: bigint) => {
	return await db
		.select()
		.from(restaurants)
		.where(eq(restaurants.id, id))
		.limit(1)
		.then((res) => res[0]);
};

export const getRestaurantByIdWithPrizes = async (id: bigint) => {
	const restaurant = await db
		.select()
		.from(restaurants)
		.where(eq(restaurants.id, id))
		.limit(1)
		.then((res) => res[0]);
	if (!restaurant) {
		return null;
	}
	const restaurantPrizes: unknown = await getPrizesByRestaurantId(id);

	return {
		...restaurant,
		prizes: restaurantPrizes,
	};
};

export const getRestaurantByIdWithAll = async (id: bigint) => {
	return await db.query.restaurants.findFirst({
		where: eq(restaurants.id, id),
		with: {
			prizes: true,
			deals: true,
			punchCards: true,
		},
	});
};

export const createRestaurant = async (data: {
	name: string;
	description: string;
	imageUrl: string;
	address: string;
	qrCodeUrl?: string;
}) => {
	return await db.insert(restaurants).values(data).returning();
};

export const updateRestaurant = async (
	id: bigint,
	data: Partial<{
		name: string;
		description: string;
		imageUrl: string;
		address: string;
		qrCodeUrl: string;
	}>,
) => {
	return await db
		.update(restaurants)
		.set(data)
		.where(eq(restaurants.id, id))
		.returning();
};

export const deleteRestaurant = async (id: bigint) => {
	return await db.delete(restaurants).where(eq(restaurants.id, id)).returning();
};

export const createRestaurantDeal = async (data: {
	restaurantId: bigint;
	title: string;
	content: string;
	active: boolean;
}) => {
	return await db.insert(restaurantDeals).values(data).returning();
};

export const updateRestaurantDeal = async (
	id: bigint,
	data: Partial<{
		restaurantId: bigint;
		title: string;
		content: string;
		active: boolean;
	}>,
) => {
	return await db
		.update(restaurantDeals)
		.set(data)
		.where(eq(restaurantDeals.id, id))
		.returning();
};

export const deleteRestaurantDeal = async (id: bigint) => {
	return await db
		.delete(restaurantDeals)
		.where(eq(restaurantDeals.id, id))
		.returning();
};
