import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { raffleEntries } from "@/db/drizzle/schema";

export const getRaffleEntries = async () => {
	return await db.select().from(raffleEntries);
};

export const getRaffleEntryById = async (id: bigint) => {
	return await db
		.select()
		.from(raffleEntries)
		.where(eq(raffleEntries.id, id))
		.limit(1);
};

export const getRaffleEntriesByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(raffleEntries)
		.where(eq(raffleEntries.userId, userId));
};

export const getRaffleEntriesByPunchCardId = async (punchCardId: bigint) => {
	return await db
		.select()
		.from(raffleEntries)
		.where(eq(raffleEntries.punchCardId, punchCardId));
};

export const createRaffleEntry = async (data: {
	userId: bigint;
	punchCardId: bigint;
}) => {
	return await db.insert(raffleEntries).values(data).returning();
};

export const deleteRaffleEntry = async (id: bigint) => {
	return await db
		.delete(raffleEntries)
		.where(eq(raffleEntries.id, id))
		.returning();
};
