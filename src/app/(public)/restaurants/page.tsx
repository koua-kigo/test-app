import Link from "next/link";
import Image from "next/image";

import { getRestaurants } from "@/db/models/restaurants/restaurants";
import type { Restaurant } from "@/types/db";
import { RestaurantsList } from "@/features/restaurants/RestaurantList";

export interface RestaurantsPageProps {
	searchParams: {
		deals?: string;
	};
}

export default async function RestaurantsPage({
	searchParams,
}: RestaurantsPageProps) {
	const restaurants = await getRestaurants();
	const hasDeals = searchParams.deals === "true";

	// Apply default sorting (A-Z by name)
	const sortedRestaurants = [...restaurants].sort((a, b) =>
		a.name.localeCompare(b.name),
	);

	return (
		<div className="px-4 py-8 h-full w-full overflow-auto">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold">Restaurants</h1>
				<Link
					href="/"
					className="text-blue-600 hover:text-blue-800 transition-colors"
				>
					Back to Home
				</Link>
			</div>

			<div className="mb-8">
				<p className="text-gray-600">
					Explore our partner restaurants and start collecting stamps on your
					food passport!
				</p>
			</div>

			<RestaurantsList
				restaurants={sortedRestaurants}
				initialHasDeals={hasDeals}
			/>
		</div>
	);
}
