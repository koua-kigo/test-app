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

// Function to save multiple QR codes at once for bulk generation
export async function saveBulkQRCodeUrls(
	restaurantQRCodes: { restaurantId: string; qrCodeUrl: string }[],
): Promise<{
	success: boolean;
	results: { restaurantId: string; success: boolean }[];
}> {
	const results: { restaurantId: string; success: boolean }[] = [];

	try {
		// Process each QR code in sequence
		for (const { restaurantId, qrCodeUrl } of restaurantQRCodes) {
			try {
				await db
					.update(restaurants)
					.set({ qrCodeUrl })
					.where(eq(restaurants.id, BigInt(restaurantId)));

				results.push({ restaurantId, success: true });
			} catch (error) {
				console.error(
					`Error saving QR code URL for restaurant ${restaurantId}:`,
					error,
				);
				results.push({ restaurantId, success: false });
			}
		}

		// Revalidate the restaurants page to show updates
		revalidatePath("/admin/restaurants");

		// Consider the operation successful if at least one QR code was saved
		return {
			success: results.some((result) => result.success),
			results,
		};
	} catch (error) {
		console.error("Error in bulk QR code generation:", error);
		return { success: false, results };
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
