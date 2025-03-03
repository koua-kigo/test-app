import { and, eq } from "drizzle-orm";
import { db } from "../../db";
import { achievements } from "../../schema";

export const getAchievements = async () => {
	return await db.select().from(achievements);
};

export const getAchievementById = async (id: bigint) => {
	return await db
		.select()
		.from(achievements)
		.where(eq(achievements.id, id))
		.limit(1);
};

export const getAchievementsByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(achievements)
		.where(eq(achievements.userId, userId));
};

export const getAchievementsByType = async (type: string) => {
	return await db
		.select()
		.from(achievements)
		.where(eq(achievements.type, type));
};

export const getUserAchievementByType = async (
	userId: bigint,
	type: string,
) => {
	return await db
		.select()
		.from(achievements)
		.where(and(eq(achievements.userId, userId), eq(achievements.type, type)))
		.limit(1);
};

export const createAchievement = async (data: {
	userId: bigint;
	type: string;
	data?: Record<string, any>;
	unlockedAt?: Date;
}) => {
	return await db.insert(achievements).values(data).returning();
};

export const updateAchievement = async (
	id: bigint,
	data: Partial<{
		data: Record<string, any>;
		unlockedAt: Date;
	}>,
) => {
	return await db
		.update(achievements)
		.set(data)
		.where(eq(achievements.id, id))
		.returning();
};

export const deleteAchievement = async (id: bigint) => {
	return await db
		.delete(achievements)
		.where(eq(achievements.id, id))
		.returning();
};
