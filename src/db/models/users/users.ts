import { eq } from "drizzle-orm";
import { db } from "../../db";
import { users } from "../../schema";
import type { User } from "@/types/db";

export const getUsers = async () => {
	return await db.select().from(users);
};

export const getUserById = async (id: bigint) => {
	return await db
		.select()
		.from(users)
		.where(eq(users.id, id))
		.limit(1)
		.then((res) => res[0]);
};

export const getUserByClerkId = async (
	clerkId: string,
): Promise<User | null> => {
	// @ts-ignore
	// TODO: fix this
	return await db
		.select()
		.from(users)
		.where(eq(users.clerkId, clerkId))
		.limit(1)
		.then((res) => res[0]);
};

export const createUser = async (data: {
	clerkId: string;
	name: string;
	email: string;
	isStaff?: boolean;
	isAdmin?: boolean;
}) => {
	return await db.insert(users).values(data).returning();
};

export const updateUser = async (
	id: bigint,
	data: Partial<{
		name: string;
		isStaff: boolean;
		isAdmin: boolean;
	}>,
) => {
	return await db.update(users).set(data).where(eq(users.id, id)).returning();
};

export const deleteUser = async (id: bigint) => {
	return await db.delete(users).where(eq(users.id, id)).returning();
};
