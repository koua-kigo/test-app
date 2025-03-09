"use server";

import { db } from "@/db/db";
import { restaurants } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createRestaurantSchema, restaurantSchema } from "@/types/schemas";
import type { Restaurant } from "@/types/db";

export type RestaurantFormData = z.infer<typeof createRestaurantSchema>;

/**
 * Creates a new restaurant
 */
export async function createRestaurantAction(formData: RestaurantFormData) {
	try {
		const validatedData = createRestaurantSchema.parse(formData);

		await db.insert(restaurants).values(validatedData);

		revalidatePath("/admin/restaurants");
		redirect("/admin/restaurants");
	} catch (error) {
		if (error instanceof z.ZodError) {
			return { success: false, error: error.flatten().fieldErrors };
		}

		return {
			success: false,
			error: { _form: ["Failed to create restaurant"] },
		};
	}
}

/**
 * Updates an existing restaurant
 */
export async function updateRestaurantAction(
	id: bigint,
	data: Partial<RestaurantFormData>,
) {
	try {
		// Validate partial data
		const validatedData = z
			.object({
				name: z.string().optional(),
				description: z.string().optional(),
				imageUrl: z.string().url().optional(),
				address: z.string().optional(),
			})
			.parse(data);

		await db
			.update(restaurants)
			.set(validatedData)
			.where(eq(restaurants.id, id));

		revalidatePath("/admin/restaurants");

		return {
			success: true,
			message: "Restaurant updated successfully",
		};
	} catch (error) {
		if (error instanceof z.ZodError) {
			return { success: false, error: error.flatten().fieldErrors };
		}

		return {
			success: false,
			error: { _form: ["Failed to update restaurant"] },
		};
	}
}

/**
 * Deletes a restaurant
 */
export async function deleteRestaurantAction(id: bigint) {
	try {
		await db.delete(restaurants).where(eq(restaurants.id, id));

		revalidatePath("/admin/restaurants");

		return {
			success: true,
			message: "Restaurant deleted successfully",
		};
	} catch (error) {
		return {
			success: false,
			error: { _form: ["Failed to delete restaurant"] },
		};
	}
}

/**
 * Updates the QR code URL for a restaurant
 */
export async function updateRestaurantQRCodeAction(
	id: bigint,
	qrCodeUrl: string,
) {
	try {
		await db
			.update(restaurants)
			.set({ qrCodeUrl })
			.where(eq(restaurants.id, id));

		revalidatePath("/admin/restaurants");

		return {
			success: true,
			message: "QR code updated successfully",
		};
	} catch (error) {
		return {
			success: false,
			error: { _form: ["Failed to update QR code"] },
		};
	}
}
