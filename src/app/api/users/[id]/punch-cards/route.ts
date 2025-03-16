import { type NextRequest, NextResponse } from "next/server";
import { getPunchCardsByUserId } from "@/db/models/punch-cards/punch-cards";
import { auth } from "@clerk/nextjs/server";
import { convertBigIntToString } from "@/lib/supabase";
import type { ApiResponse } from "@/types/api";

export async function GET(
	request: NextRequest,
	context: { params: { id: string } },
) {
	try {
		// Get the authenticated user from Clerk
		const { userId: clerkId } = await auth();

		// If not authenticated, return 401
		if (!clerkId) {
			return NextResponse.json(
				{ success: false, error: "Unauthorized" } as ApiResponse,
				{ status: 401 },
			);
		}

		// Extract params safely
		const { id } = context.params;

		if (!id) {
			return NextResponse.json(
				{ success: false, error: "User ID is required" } as ApiResponse,
				{ status: 400 },
			);
		}

		const userId = BigInt(id);

		// Get the user's punch cards with restaurant information
		const punchCards = await getPunchCardsByUserId(userId);

		// Convert bigint to string for JSON serialization
		const serializedPunchCards = convertBigIntToString(punchCards);

		return NextResponse.json(
			{
				success: true,
				data: serializedPunchCards,
			} as ApiResponse,
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error fetching punch cards:", error);

		return NextResponse.json(
			{
				success: false,
				error: "Failed to fetch punch cards",
			} as ApiResponse,
			{ status: 500 },
		);
	}
}
