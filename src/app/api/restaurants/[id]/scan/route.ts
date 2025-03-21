import {
	createPunchCard,
	getUserPunchCardForRestaurant,
	incrementPunchCard,
} from "@/db/models/punch-cards/punch-cards";
import { getRestaurantById } from "@/db/models/restaurants/restaurants";
import { PUNCH_THRESHOLD } from "@/components/ui/punch-card";
import type { PunchCard } from "@/types/db";

// NEW: Helper to safely serialize data with BigInt conversion
const safeJson = (data: unknown) =>
	JSON.stringify(data, (_, value) =>
		typeof value === "bigint" ? value.toString() : value,
	);

export async function POST(request: Request) {
	console.log("🚀 ~ POST ~ request:", request);

	try {
		// Extract restaurant ID from URL
		const restaurantId =
			request.url.match(/restaurants\/(\d+)\/scan/)?.[1] ?? "";
		console.log("🚀 ~ POST ~ restaurantId:", restaurantId);

		// Parse request body
		const body = await request.json();
		console.log("🚀 ~ POST ~ body:", body);

		if (!restaurantId || !body?.userId) {
			return new Response(
				safeJson({
					message: "Missing required data",
					error: "Restaurant ID and user ID are required",
				}),
				{ status: 400, headers: { "Content-Type": "application/json" } },
			);
		}

		const userId: string | number = body.userId;
		console.log("🚀 ~ POST ~ userId:", userId);

		// Get restaurant details
		const restaurant = await getRestaurantById(BigInt(restaurantId));
		if (!restaurant) {
			return new Response(
				safeJson({
					message: "Restaurant not found",
					error: "The restaurant does not exist",
				}),
				{ status: 404, headers: { "Content-Type": "application/json" } },
			);
		}

		// Check if punch card already exists
		const existingPunchCard = await getUserPunchCardForRestaurant(
			BigInt(userId),
			BigInt(restaurantId),
		);

		console.log("🚀 ~ POST ~ existingPunchCard:", existingPunchCard);

		let punchCardData: PunchCard | null = null;
		let isExisting = false;

		if (existingPunchCard) {
			// Increment existing punch card
			isExisting = true;
			const incrementResult = await incrementPunchCard(existingPunchCard.id);

			// incrementPunchCard can return null if the card doesn't exist, but we already checked
			if (!incrementResult || incrementResult.length === 0) {
				throw new Error("Failed to increment punch card");
			}

			// Extract the card from the array
			// @ts-ignore
			punchCardData = incrementResult[0];
			console.log("🚀 ~ POST ~ incrementedCard:", punchCardData);
		} else {
			// Create new punch card
			const createResult = await createPunchCard({
				userId: BigInt(userId),
				restaurantId: BigInt(restaurantId),
				punches: 1,
				completed: false,
			});

			if (!createResult || createResult.length === 0) {
				throw new Error("Failed to create punch card");
			}

			punchCardData = createResult[0];
			console.log("🚀 ~ POST ~ newCard:", punchCardData);
		}

		if (!punchCardData) {
			throw new Error("Punch card data is missing");
		}

		// Check if the punch card is now completed
		const isCompleted = (punchCardData.punches ?? 0) >= PUNCH_THRESHOLD;

		// If completed, update the punch card
		if (isCompleted && !punchCardData.completed) {
			// Here you would add logic to mark the card as completed
			// and create a raffle entry if needed
		}

		return new Response(
			safeJson({
				message: isExisting
					? "Punch added to existing card"
					: "New punch card created",
				data: {
					...punchCardData,
					restaurantId,
					restaurantName: restaurant.name,
					punches: punchCardData.punches ?? 0,
				},
				isExisting,
				restaurantName: restaurant.name,
				status: 200,
			}),
			{
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (error) {
		console.error("Error in scan route:", error);
		return new Response(
			safeJson({
				message: "Failed to process scan",
				error: error instanceof Error ? error.message : "Unknown error",
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
}
