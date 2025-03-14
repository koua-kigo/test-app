import { Restaurant } from "@/features/restaurants/Restaurant";
import { UserFacingRestaurantDetail } from "@/features/restaurants/UserFacingRestaurantDetail";

export default async function RestaurantPage({
	params,
}: { params: Promise<{ id: string }> }) {
	const resolvedParams = await params;
	return <UserFacingRestaurantDetail params={resolvedParams} />;
}
