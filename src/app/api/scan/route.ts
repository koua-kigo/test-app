import {
	createPunchCard,
	getUserPunchCardForRestaurant,
} from "@/db/models/punch-cards/punch-cards";
import { convertBigInts } from "@/lib/utils";

export async function POST(request: Request) {
	const { qrData, userId } = await request.json();
	console.log("🚀 ~ POST ~ userId:", userId);

	console.log("🚀 ~ POST ~ qrData:", qrData);
	const restaurantId = qrData.split("/").pop();

	console.log("🚀 ~ POST ~ restaurantId:", restaurantId);

	if (restaurantId && userId) {
		const punchCardExists = await getUserPunchCardForRestaurant(
			userId,
			restaurantId,
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
			restaurantId,
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
