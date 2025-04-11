import { NextResponse } from "next/server";
import { getRaffleEntries } from "@/db/models/raffle-entries";
import { db } from "@/db/db";
import { restaurants, punchCards } from "@/db/drizzle/schema";
import { sql } from "drizzle-orm";

export async function GET() {
	try {
		// Fetch raffle entries with joined data using the model function
		const raffleEntriesData = await getRaffleEntries();

		// If we need restaurant information, we need to fetch it separately
		// since the basic getRaffleEntries() doesn't include relations
		const entriesWithDetails = await db.query.raffleEntries.findMany({
			with: {
				punchCard: {
					with: {
						restaurant: true,
					},
				},
				user: true,
			},
		});

		// Transform the data for the UI
		const formattedData = entriesWithDetails.map((entry) => ({
			id: entry.id,
			name: `Raffle Entry #${entry.id}`,
			description: `Created at ${new Date(entry.createdAt).toLocaleString()} for punch card ${entry.punchCardId}`,
			imageUrl: "/images/raffle-placeholder.jpg", // Default image since we don't have prize info
			restaurantId: entry.punchCard.restaurantId,
			restaurant: entry.punchCard.restaurant || {
				id: 0,
				name: "Unknown Restaurant",
				description: "",
				imageUrl: "/images/restaurant-placeholder.jpg",
				address: "",
				qrCodeUrl: null,
			},
		}));

		return NextResponse.json({ success: true, data: formattedData });
	} catch (error) {
		console.error("Unexpected error in raffle entries API:", error);
		return NextResponse.json(
			{ success: false, error: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
