import { Restaurant } from "@/features/restaurants/Restaurant";
import { UserFacingRestaurantDetail } from "@/features/restaurants/UserFacingRestaurantDetail";

export default function RestaurantPage({ params }: { params: { id: string } }) {
	return <UserFacingRestaurantDetail params={params} />;
}
