import { users } from "@/db/schema";
import type { User } from "@clerk/nextjs/server";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { eq, lt, gte, ne } from "drizzle-orm";

const connectionString = process.env.DATABASE_URL;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);

export async function createUser(user: User) {
	return await db.insert(users).values({
		clerkId: user.id,
		email: user.emailAddresses[0].emailAddress,
		name: `${user.firstName} ${user.lastName}`,
	});
}

export async function getUserByClerkId(clerkId: string) {
	return await db.select().from(users).where(eq(users.clerkId, clerkId));
}
