"use server";

import { eq } from "drizzle-orm";
import { db } from "../../db";
import { restaurants, prizes } from "../../schema";
import { getPrizesByRestaurantId } from "@/db/models/prizes";

export const getRestaurants = async () => {
	return await db.select().from(restaurants);
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
