"use server";

import { db } from "@/db/db";
import { restaurants } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createRestaurantSchema } from "@/types/schemas";
import { z } from "zod";
import { createRestaurant } from "@/db/models/restaurants";
import { revalidatePath } from "next/cache";

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

// Function to create a new restaurant
export async function createRestaurantAction(
	formData: z.infer<typeof createRestaurantSchema>,
): Promise<{ success: boolean; error?: string }> {
	try {
		// Validate the input data
		const validatedData = createRestaurantSchema.parse(formData);

		// Create the restaurant
		const result = await createRestaurant(validatedData);

		// Revalidate the restaurants page
		revalidatePath("/admin/restaurants");

		return { success: true };
	} catch (error) {
		console.error("Error creating restaurant:", error);
		let errorMessage = "An unexpected error occurred";

		if (error instanceof z.ZodError) {
			errorMessage = error.errors.map((e) => e.message).join(", ");
		} else if (error instanceof Error) {
			errorMessage = error.message;
		}

		return { success: false, error: errorMessage };
	}
}
