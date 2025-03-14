import Link from "next/link";
import { DealsList, DealsListSkeleton } from "@/features/deals";
import { getRestaurants } from "@/db/models/restaurants/restaurants";
import { Suspense } from "react";

export const metadata = {
	title: "Special Deals | Restaurant Passport",
	description:
		"View all current special offers and deals from our partner restaurants",
};

export default async function DealsPage() {
	const restaurants = await getRestaurants();

	// Find all deals from all restaurants
	const allDeals = [];

	// Extract deals from all restaurants
	for (const restaurant of restaurants) {
		if (restaurant.deals && restaurant.deals.length > 0) {
			// Filter to only include active deals
			const activeDeals = restaurant.deals
				.filter((deal) => deal.active)
				.map((deal) => ({
					...deal,
					restaurant: {
						id: restaurant.id,
						name: restaurant.name,
						imageUrl: restaurant.imageUrl,
					},
				}));
			// Add restaurant information to each deal
			const dealsWithRestaurant = activeDeals.map((deal) => ({
				...deal,
				restaurant: {
					id: restaurant.id,
					name: restaurant.name,
					imageUrl: restaurant.imageUrl,
				},
			}));

			// Use the deals with restaurant information
			// if (dealsWithRestaurant.length > 0) {
			// 	allDeals.push(...dealsWithRestaurant);
			// }
			if (activeDeals.length > 0) {
				allDeals.push(...activeDeals);
			}
		}
	}

	return (
		<div className="px-4 py-8 h-full w-full overflow-auto">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold">Special Deals</h1>
				<div className="flex gap-3">
					<Link
						href="/restaurants"
						className="text-blue-600 hover:text-blue-800 transition-colors"
					>
						View Restaurants
					</Link>
					<Link
						href="/"
						className="text-blue-600 hover:text-blue-800 transition-colors"
					>
						Back to Home
					</Link>
				</div>
			</div>

			<div className="mb-8">
				<p className="text-gray-600">
					Discover special offers and deals from our partner restaurants. Save
					money while collecting stamps on your food passport!
				</p>
			</div>

			<Suspense fallback={<DealsListSkeleton />}>
				<DealsList deals={allDeals} />
			</Suspense>
		</div>
	);
}
