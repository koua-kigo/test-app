import {
	createPunchCard,
	getUserPunchCardForRestaurant,
} from "@/db/models/punch-cards/punch-cards";
import { convertBigInts } from "@/lib/utils";
const { auth } = await import("@clerk/nextjs/server");
export async function POST(request: Request) {
	const { qrData, userId } = await request.json();
	// Get the URL from the request

	const url = new URL(request.url);

	const qrCodeUrl = new URL(qrData);

	// Get the current user from Clerk

	// Get path parameters from the URL
	const pathname = qrCodeUrl.pathname;

	const restaurantId = pathname.split("/").filter(Boolean).pop();

	// For dynamic route segments like /api/scan/[id], you can access them from pathSegments
	// Example: if the route is /api/scan/123, then pathSegments would be ['api', 'scan', '123']
	// The last segment would be pathSegments[pathSegments.length - 1]

	// You can also extract route parameters from the URL path
	// For example, if your route is /api/scan/[restaurantId]/[action]
	// You could access them like:
	// const restaurantIdFromPath = pathSegments[2]; // Assuming the structure is ['api', 'scan', 'restaurantId', 'action']
	// const actionFromPath = pathSegments[3];
	// Check if scan parameter is 'true'

	if (restaurantId && userId) {
		const punchCardExists = await getUserPunchCardForRestaurant(
			userId,
			BigInt(restaurantId),
		);
		console.log("🚀 ~ POST ~ punchCardExists:", punchCardExists);
		if (punchCardExists) {
			return Response.json({
				message: "Punch card already exists",
				data: convertBigInts(punchCardExists),
			});
		}
		const punchCard = await createPunchCard({
			userId,
			restaurantId: BigInt(restaurantId),
			punches: 1,
			completed: true,
		}).then((res) => res[0]);

		console.log("🚀 ~ POST ~ punchCard:", punchCard);

		return Response.json({
			message: "Punch card created successfully",
			data: convertBigInts(punchCard),
		});
	}
}
