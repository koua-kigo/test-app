"use server";

import { sql } from "drizzle-orm";
import { db } from "../../db";
import { punchCards, users, restaurants } from "../../schema";
import type {
	UserLeaderboardEntry,
	RestaurantLeaderboardEntry,
} from "@/types/api";

/**
 * Get top users by punch card count
 */
export const getTopUsersByPunchCardCount = async (
	limit = 10,
): Promise<UserLeaderboardEntry[]> => {
	const result = await db.execute(sql`
    SELECT 
      u.id as "userId", 
      u.name as "userName", 
      COUNT(pc.id) as "punchCardCount",
      RANK() OVER (ORDER BY COUNT(pc.id) DESC) as "rank"
    FROM 
      ${users} u
    JOIN 
      ${punchCards} pc ON u.id = pc.user_id
    GROUP BY 
      u.id, u.name
    ORDER BY 
      "punchCardCount" DESC
    LIMIT ${limit}
  `);

	return result as unknown as UserLeaderboardEntry[];
};

/**
 * Get popular restaurants by punch card count
 */
export const getPopularRestaurantsByPunchCardCount = async (
	limit = 10,
): Promise<RestaurantLeaderboardEntry[]> => {
	const result = await db.execute(sql`
    SELECT 
      r.id as "restaurantId", 
      r.name as "restaurantName", 
      r.image_url as "imageUrl",
      COUNT(pc.id) as "punchCardCount",
      RANK() OVER (ORDER BY COUNT(pc.id) DESC) as "rank"
    FROM 
      ${restaurants} r
    JOIN 
      ${punchCards} pc ON r.id = pc.restaurant_id
    GROUP BY 
      r.id, r.name, r.image_url
    ORDER BY 
      "punchCardCount" DESC
    LIMIT ${limit}
  `);

	return result as unknown as RestaurantLeaderboardEntry[];
};
