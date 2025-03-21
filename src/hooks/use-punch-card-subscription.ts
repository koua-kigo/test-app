"use client";

import { useState, useEffect } from "react";
// import { supabase } from "@/db/supabase";
import type { PunchCard } from "@/types/db";
import { getPunchCardsByUserId } from "@/db/models/punch-cards";

export type PunchCardWithRestaurant = {
	id: bigint;
	userId: bigint;
	restaurantId: bigint;
	punches: number;
	completed: boolean;
	updatedAt: string | null;
	restaurant: {
		id: bigint;
		name: string;
		description: string;
		imageUrl: string;
		address: string;
		qrCodeUrl: string | null;
	};
};

/**
 * A hook for subscribing to real-time punch card updates
 * @param userId The user ID to subscribe to punch cards for
 * @returns The updated punch cards array
 */
export function usePunchCardSubscription(userId: bigint) {
	const [punchCards, setPunchCards] = useState<PunchCardWithRestaurant[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	// Fetch initial punch cards
	useEffect(() => {
		const fetchPunchCards = async () => {
			try {
				setIsLoading(true);

				// Call your existing API to get punch cards
				const existingPunchCards: any = await getPunchCardsByUserId(userId);

				console.log("🚀 ~ fetchPunchCards ~ punchCards:", existingPunchCards);
				setPunchCards(existingPunchCards);
			} catch (err) {
				console.error("Error fetching punch cards:", err);
				setError(
					err instanceof Error ? err : new Error("Unknown error occurred"),
				);
			} finally {
				setIsLoading(false);
			}
		};

		if (userId) {
			fetchPunchCards();
		}
	}, [userId]);

	// Set up real-time subscription
	// useEffect(() => {
	// 	if (!userId) return;

	// 	// Convert bigint to string for the subscription
	// 	const userIdStr = userId.toString();

	// 	// Subscribe to punch card changes for this user
	// 	const subscription = supabase
	// 		.channel("punch-cards")
	// 		.on(
	// 			"postgres_changes",
	// 			{
	// 				event: "*", // Listen to all events (insert, update, delete)
	// 				schema: "public",
	// 				table: "punch_cards",
	// 				filter: `user_id=eq.${userIdStr}`,
	// 			},
	// 			async (payload) => {
	// 				console.log("Punch card change received:", payload);

	// 				try {
	// 					// Refresh the entire punch cards list to ensure we have the latest data
	// 					const response = await fetch(`/api/users/${userId}/punch-cards`);

	// 					if (!response.ok) {
	// 						throw new Error("Failed to fetch updated punch cards");
	// 					}

	// 					const data = await response.json();

	// 					if (data.success && data.data) {
	// 						setPunchCards(data.data);
	// 					}
	// 				} catch (err) {
	// 					console.error("Error updating punch cards:", err);
	// 				}
	// 			},
	// 		)
	// 		.subscribe();

	// 	// Clean up subscription on unmount
	// 	return () => {
	// 		supabase.channel("punch-cards").unsubscribe();
	// 	};
	// }, [userId]);

	return {
		punchCards,
		isLoading,
		error,
	};
}
