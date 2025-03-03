import { Restaurant } from "@/features/restaurants/Restaurant";

export default function RestaurantPage({ params }: { params: { id: string } }) {
	return <Restaurant params={params} />;
}
