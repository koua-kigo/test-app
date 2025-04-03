import { getPunchCardsByUserId } from "@/db/models/punch-cards";
import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
	try {
		const { userId } = await auth();

		if (!userId) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		// Get the user ID from the query parameters
		const url = new URL(req.url);
		const targetUserId = url.searchParams.get("userId");

		if (!targetUserId) {
			return NextResponse.json(
				{ error: "Missing userId parameter" },
				{ status: 400 },
			);
		}

		// Fetch the punch cards for the user
		const punchCards = await getPunchCardsByUserId(BigInt(targetUserId));

		return NextResponse.json({
			success: true,
			data: punchCards,
		});
	} catch (error) {
		console.error("Error fetching punch cards:", error);
		return NextResponse.json(
			{
				success: false,
				error: "Failed to fetch punch cards",
			},
			{ status: 500 },
		);
	}
}
