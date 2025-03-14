"use server";

import { eq } from "drizzle-orm";
import { db } from "../../db";
import { restaurants, prizes, punchCards, restaurantDeals } from "../../schema";
import { getPrizesByRestaurantId } from "@/db/models/prizes";

export const getRestaurants = async (page = 1, limit = 12) => {
	// Get restaurants with pagination and only load essential relations
	const offset = (page - 1) * limit;
	const restaurantsList = await db.query.restaurants.findMany({
		limit,
		offset,
		with: {
			deals: {
				columns: {
					id: true,
				},
			},
			prizes: {
				columns: {
					id: true,
				},
			},
			punchCards: {
				columns: {
					id: true,
				},
			},
		},
	});

	// Add count metadata to each restaurant
	return restaurantsList.map((restaurant) => ({
		...restaurant,
		punchCardCount: restaurant?.punchCards?.length || 0,
		dealCount: restaurant?.deals?.length || 0,
		prizeCount: restaurant?.prizes?.length || 0,
	}));
};

export const getDeals = async () => {
	return await db.query.restaurantDeals.findMany({
		with: {
			restaurant: true,
		},
	});
};

export const getRestaurantById = async (id: bigint) => {
	return await db
		.select()
		.from(restaurants)
		.where(eq(restaurants.id, id))
		.limit(1)
		.then((res) => res[0]);
};

export const getRestaurantByIdWithPrizesAndDeals = async (id: bigint) => {
	const restaurant = await db.query.restaurants.findFirst({
		where: eq(restaurants.id, id),
		with: {
			prizes: true,
			deals: true,
		},
	});

	// Removed console.log for production performance

	if (!restaurant) {
		return null;
	}

	return restaurant;
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
