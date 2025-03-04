"use server";

import { db } from "@/db/db";
import { restaurants } from "@/db/schema";
import { eq } from "drizzle-orm";

// Function to convert QR code SVG to a data URL
export async function saveQRCodeUrl(
	restaurantId: string,
	qrCodeUrl: string,
): Promise<boolean> {
	try {
		await db
			.update(restaurants)
			.set({ qrCodeUrl })
			.where(eq(restaurants.id, BigInt(restaurantId)));

		return true;
	} catch (error) {
		console.error("Error saving QR code URL:", error);
		return false;
	}
}
