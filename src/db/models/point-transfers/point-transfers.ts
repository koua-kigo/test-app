import { eq, or } from "drizzle-orm";
import { db } from "@/db/db";
import { pointTransfers } from "@/db/schema";

export const getPointTransfers = async () => {
	return await db.select().from(pointTransfers);
};

export const getPointTransferById = async (id: bigint) => {
	return await db
		.select()
		.from(pointTransfers)
		.where(eq(pointTransfers.id, id))
		.limit(1);
};

export const getPointTransfersByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(pointTransfers)
		.where(
			or(
				eq(pointTransfers.fromUserId, userId),
				eq(pointTransfers.toUserId, userId),
			),
		);
};

export const getSentPointTransfers = async (fromUserId: bigint) => {
	return await db
		.select()
		.from(pointTransfers)
		.where(eq(pointTransfers.fromUserId, fromUserId));
};

export const getReceivedPointTransfers = async (toUserId: bigint) => {
	return await db
		.select()
		.from(pointTransfers)
		.where(eq(pointTransfers.toUserId, toUserId));
};

export const getPointTransfersByStatus = async (status: string) => {
	return await db
		.select()
		.from(pointTransfers)
		.where(eq(pointTransfers.status, status));
};

export const createPointTransfer = async (data: {
	fromUserId: bigint;
	toUserId: bigint;
	points: number;
	message?: string;
	status: string;
}) => {
	return await db.insert(pointTransfers).values(data).returning();
};

export const updatePointTransfer = async (
	id: bigint,
	data: Partial<{
		status: string;
		message: string;
	}>,
) => {
	return await db
		.update(pointTransfers)
		.set(data)
		.where(eq(pointTransfers.id, id))
		.returning();
};

export const deletePointTransfer = async (id: bigint) => {
	return await db
		.delete(pointTransfers)
		.where(eq(pointTransfers.id, id))
		.returning();
};
