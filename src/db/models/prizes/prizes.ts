import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { prizes } from "@/db/schema";

export const getPrizes = async () => {
	return await db.select().from(prizes);
};

export const getPrizeById = async (id: bigint) => {
	return await db.select().from(prizes).where(eq(prizes.id, id)).limit(1);
};

export const getPrizesByRestaurantId = async (restaurantId: bigint) => {
	return await db
		.select()
		.from(prizes)
		.where(eq(prizes.restaurantId, restaurantId));
};

export const getAvailablePrizes = async () => {
	return await db.select().from(prizes).where(eq(prizes.available, true));
};

export const createPrize = async (data: {
	name: string;
	description: string;
	imageUrl: string;
	type: string;
	restaurantId: bigint;
	requiredPunches: number;
	available?: boolean;
	quantity?: number;
	rules?: Record<string, any>;
}) => {
	return await db.insert(prizes).values(data).returning();
};

export const updatePrize = async (
	id: bigint,
	data: Partial<{
		name: string;
		description: string;
		imageUrl: string;
		type: string;
		requiredPunches: number;
		available: boolean;
		quantity: number;
		rules: Record<string, any>;
	}>,
) => {
	return await db.update(prizes).set(data).where(eq(prizes.id, id)).returning();
};

export const decrementPrizeQuantity = async (id: bigint) => {
	const [prize] = await getPrizeById(id);
	if (!prize || prize.quantity <= 0) return null;

	const newQuantity = prize.quantity - 1;
	const available = newQuantity > 0;

	return await db
		.update(prizes)
		.set({
			quantity: newQuantity,
			available,
		})
		.where(eq(prizes.id, id))
		.returning();
};

export const deletePrize = async (id: bigint) => {
	return await db.delete(prizes).where(eq(prizes.id, id)).returning();
};
