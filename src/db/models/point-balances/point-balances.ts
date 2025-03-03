import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { pointBalances } from "@/db/schema";

export const getPointBalances = async () => {
	return await db.select().from(pointBalances);
};

export const getPointBalanceById = async (id: bigint) => {
	return await db
		.select()
		.from(pointBalances)
		.where(eq(pointBalances.id, id))
		.limit(1);
};

export const getPointBalanceByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(pointBalances)
		.where(eq(pointBalances.userId, userId))
		.limit(1);
};

export const createPointBalance = async (data: {
	userId: bigint;
	points?: number;
}) => {
	return await db.insert(pointBalances).values(data).returning();
};

export const updatePointBalance = async (
	id: bigint,
	data: Partial<{
		points: number;
	}>,
) => {
	return await db
		.update(pointBalances)
		.set(data)
		.where(eq(pointBalances.id, id))
		.returning();
};

export const adjustPointBalance = async (
	userId: bigint,
	adjustment: number,
) => {
	const [balance] = await getPointBalanceByUserId(userId);

	if (!balance) {
		// Create new balance with adjustment if none exists
		return await createPointBalance({
			userId,
			points: Math.max(0, adjustment), // Ensure new balance isn't negative
		});
	}

	const newPoints = Math.max(0, balance.points + adjustment); // Ensure balance doesn't go below 0

	return await db
		.update(pointBalances)
		.set({
			points: newPoints,
			updatedAt: new Date(),
		})
		.where(eq(pointBalances.id, balance.id))
		.returning();
};

export const deletePointBalance = async (id: bigint) => {
	return await db
		.delete(pointBalances)
		.where(eq(pointBalances.id, id))
		.returning();
};
