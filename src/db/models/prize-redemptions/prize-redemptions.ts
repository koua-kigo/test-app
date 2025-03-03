import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { prizeRedemptions } from "@/db/schema";

export const getPrizeRedemptions = async () => {
	return await db.select().from(prizeRedemptions);
};

export const getPrizeRedemptionById = async (id: bigint) => {
	return await db
		.select()
		.from(prizeRedemptions)
		.where(eq(prizeRedemptions.id, id))
		.limit(1);
};

export const getPrizeRedemptionsByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(prizeRedemptions)
		.where(eq(prizeRedemptions.userId, userId));
};

export const getPrizeRedemptionsByPrizeId = async (prizeId: bigint) => {
	return await db
		.select()
		.from(prizeRedemptions)
		.where(eq(prizeRedemptions.prizeId, prizeId));
};

export const getPrizeRedemptionsByPunchCardId = async (punchCardId: bigint) => {
	return await db
		.select()
		.from(prizeRedemptions)
		.where(eq(prizeRedemptions.punchCardId, punchCardId));
};

export const getPrizeRedemptionsByStatus = async (status: string) => {
	return await db
		.select()
		.from(prizeRedemptions)
		.where(eq(prizeRedemptions.status, status));
};

export const createPrizeRedemption = async (data: {
	userId: bigint;
	prizeId: bigint;
	punchCardId: bigint;
	status: string;
	redeemedAt?: Date;
	expiresAt?: Date;
}) => {
	return await db.insert(prizeRedemptions).values(data).returning();
};

export const updatePrizeRedemption = async (
	id: bigint,
	data: Partial<{
		status: string;
		redeemedAt: Date | null;
		expiresAt: Date | null;
	}>,
) => {
	return await db
		.update(prizeRedemptions)
		.set(data)
		.where(eq(prizeRedemptions.id, id))
		.returning();
};

export const deletePrizeRedemption = async (id: bigint) => {
	return await db
		.delete(prizeRedemptions)
		.where(eq(prizeRedemptions.id, id))
		.returning();
};
