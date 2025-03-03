/**
 * Helper functions for authentication and authorization
 */

import type { EmailAddress, User } from "@clerk/nextjs/server";
import type { User as DBUser } from "@/types/db";

// List of admin user IDs
// In a real application, you might store this in a database
// or use Clerk's organization features for role management
const ADMIN_USER_IDS = [
	"user_2NM3vax1Cx5dmPSsKvCEyGxfZXn", // Replace with your actual admin user IDs
];

/**
 * Check if a user has admin privileges
 */
export function isAdmin(user: User | unknown | DBUser | null): boolean {
	console.log("🚀 ~ isAdmin ~ user:", user);

	if (!user) return false;
	// @ts-ignore
	return user?.primaryEmailAddress?.emailAddress === "liamhellis@gmail.com";
}

/**
 * Check if a user can access an admin resource
 * This can be extended with more granular permissions as needed
 */
export function canAccessAdminResource(user: string | null): boolean {
	return isAdmin(user);
}

/**
 * Check if a user can edit a specific restaurant
 * This is just an example of how you might implement resource-specific permissions
 */
export function canEditRestaurant(
	user: string | null,
	restaurantId: string,
): boolean {
	// Admin can edit any restaurant
	if (isAdmin(user)) return true;

	// In a real app, you might check if the user is the owner of the restaurant
	// or has been granted specific permissions
	return false;
}
