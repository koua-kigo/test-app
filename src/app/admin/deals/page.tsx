import { DealFilters } from "@/components/admin/deals/deal-filters";
import { DealsTable } from "@/components/admin/deals/deals-table";
import { getDeals, getRestaurants } from "@/db/models/restaurants/restaurants";

export const metadata = {
	title: "Admin - Deals Management",
	description: "Manage restaurant deals and offers",
};

export default async function DealsAdminPage() {
	const deals = await getDeals();

	console.log("🚀 ~ DealsAdminPage ~ deals:", deals);

	const restaurants = await getRestaurants();

	console.log("🚀 ~ DealsAdminPage ~ restaurants:", restaurants);

	// // Find all deals from all restaurants
	// const allDeals = [];

	// // Extract deals from all restaurants
	// for (const restaurant of restaurants) {
	// 	if (restaurant.deals && restaurant.deals.length > 0) {
	// 		// Filter to only include active deals
	// 		const activeDeals = restaurant.deals
	// 			.filter((deal) => deal.active)
	// 			.map((deal) => ({
	// 				...deal,
	// 				restaurant: {
	// 					id: restaurant.id,
	// 					name: restaurant.name,
	// 					imageUrl: restaurant.imageUrl,
	// 				},
	// 			}));
	// 		// Add restaurant information to each deal
	// 		const dealsWithRestaurant = activeDeals.map((deal) => ({
	// 			...deal,
	// 			restaurant: {
	// 				id: restaurant.id,
	// 				name: restaurant.name,
	// 				imageUrl: restaurant.imageUrl,
	// 			},
	// 		}));

	// 		// Use the deals with restaurant information
	// 		// if (dealsWithRestaurant.length > 0) {
	// 		// 	allDeals.push(...dealsWithRestaurant);
	// 		// }
	// 		if (activeDeals.length > 0) {
	// 			allDeals.push(...activeDeals);
	// 		}
	// 	}
	// }
	return (
		<div className="space-y-6">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div>
					<h2 className="text-2xl font-bold tracking-tight">
						Deals Management
					</h2>
					<p className="text-muted-foreground">
						View and manage special deals and offers for restaurants
					</p>
				</div>
				<div className="flex items-center gap-2">
					<a
						href="/admin/deals/new"
						className="inline-flex h-10 items-center justify-center rounded-md bg-[#818cf8] px-4 py-2 text-sm font-medium text-white hover:bg-[#6366f1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					>
						Add New Deal
					</a>
				</div>
			</div>
			{deals.length > 0 && (
				<>
					<DealFilters restaurants={restaurants} deals={deals} />
					<DealsTable deals={deals} />
				</>
			)}
		</div>
	);
}
