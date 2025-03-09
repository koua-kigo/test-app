"use server";

import {
	createPunchCard,
	getUserPunchCardForRestaurant,
	incrementPunchCard,
} from "@/db/models/punch-cards/punch-cards";
import { getRestaurantById } from "@/db/models/restaurants/restaurants";
import { convertBigInts } from "@/lib/utils";

export async function processQrScan(formData: {
	qrData: string;
	userId: string | number | bigint;
}) {
	const { qrData, userId } = formData;

	try {
		// Parse the QR URL to extract restaurant ID
		const qrCodeUrl = new URL(qrData);
		const pathname = qrCodeUrl.pathname;
		const restaurantId = pathname.split("/").filter(Boolean).pop();

		if (!restaurantId || !userId) {
			return {
				error: "Missing required parameters",
				message: "User ID and restaurant ID are required",
				status: 400,
			};
		}

		// Convert userId to the correct format if needed
		const userIdBigInt =
			typeof userId === "bigint" ? userId : BigInt(userId.toString());

		// Get restaurant details for response
		const restaurant = await getRestaurantById(BigInt(restaurantId));

		// Check if punch card already exists
		const punchCardExists = await getUserPunchCardForRestaurant(
			userIdBigInt,
			BigInt(restaurantId),
		);

		if (punchCardExists) {
			// If punch card exists, increment the punches
			const updatedPunchCard = await incrementPunchCard(
				punchCardExists.id,
				1, // Increment by 1
			);

			return {
				message: "Punch card already exists and was updated",
				data: convertBigInts(updatedPunchCard?.[0] || punchCardExists),
				restaurantName: restaurant?.name || "Restaurant",
				isExisting: true,
			};
		}

		// Create new punch card if it doesn't exist
		const punchCard = await createPunchCard({
			userId: userIdBigInt,
			restaurantId: BigInt(restaurantId),
			punches: 1,
			completed: false, // Set to false initially
		}).then((res) => res[0]);

		return {
			message: "Punch card created successfully",
			data: convertBigInts(punchCard),
			restaurantName: restaurant?.name || "Restaurant",
			isExisting: false,
		};
	} catch (error) {
		console.error("Error processing QR scan:", error);
		return {
			error: "Failed to process QR scan",
			message: (error as Error).message,
			status: 500,
		};
	}
}
