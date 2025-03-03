import {
	createPunchCard,
	getUserPunchCardForRestaurant,
} from "@/db/models/punch-cards/punch-cards";

export async function POST(request: Request) {
	console.log("🚀 ~ POST ~ request:", request);

	const restaurantId = request.url.match(/restaurants\/(\d+)\/scan/)?.[1] ?? "";

	console.log("🚀 ~ POST ~ restaurantId:", restaurantId);

	const { body } = await request.json();
	console.log("🚀 ~ POST ~ body:", body);
	try {
		if (restaurantId && body?.userId && body?.qrData) {
			const { qrData, userId } = body;
			console.log("🚀 ~ POST ~ qrData:", qrData);

			console.log("🚀 ~ POST ~ userId:", userId);

			const punchCardExists = await getUserPunchCardForRestaurant(
				BigInt(userId),
				BigInt(restaurantId),
			);

			if (punchCardExists) {
				return Response.json({
					message: "Punch card already exists",
					data: null,
				});
			}
			const punchCard = await createPunchCard({
				userId: BigInt(userId),
				restaurantId: BigInt(restaurantId),
				punches: 1,
				completed: true,
			}).then((res) => res[0]);

			return Response.json({
				message: "Punch card created successfully",
				data: punchCard,
			});
		}

		return Response.json({
			message: "Missing Data",
			data: null,
		});
	} catch (error) {
		return Response.error();
	}
}
