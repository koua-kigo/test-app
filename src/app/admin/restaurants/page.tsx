import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { getRestaurants } from "@/db/models";
import type { restaurantSchema } from "@/types/schemas";
import { RestaurantsTable } from "@/components/admin/restaurants-table";
import type { z } from "zod";

// Type for restaurant data
type Restaurant = z.infer<typeof restaurantSchema>;

// Loading component
function RestaurantsLoading() {
	return (
		<div className="w-full p-8 bg-white rounded-lg shadow-md animate-pulse">
			<div className="h-8 bg-gray-200 w-1/4 mb-6" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-3/4 mb-6" />
			<div className="flex justify-end">
				<div className="h-8 bg-gray-200 w-24" />
			</div>
		</div>
	);
}

// Restaurant card component
function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
	console.log("🚀 ~ RestaurantCard ~ restaurant:", restaurant);

	return (
		<div className="bg-white rounded-lg shadow-md p-0 overflow-hidden transition-all hover:shadow-lg">
			<div className="relative h-48 w-full">
				<Image
					src={
						restaurant.imageUrl ||
						"https://via.placeholder.com/400x250?text=Restaurant"
					}
					alt={restaurant.name}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
				<p className="text-gray-600 text-sm mb-2 line-clamp-2">
					{restaurant.description}
				</p>
				<p className="text-gray-500 text-sm mb-4">{restaurant.address}</p>
				<Link
					href={`/admin/restaurants/${restaurant.id.toString()}`}
					className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
				>
					View Details
				</Link>
			</div>
		</div>
	);
}

// Restaurants list component with table
async function RestaurantsList({ restaurants }: { restaurants: Restaurant[] }) {
	// Fetch restaurants from the database

	return <RestaurantsTable restaurants={restaurants} />;
}

// Main page component
export default async function RestaurantsPage() {
	const restaurants = await getRestaurants();

	console.log("🚀 ~ RestaurantsPage ~ restaurants:", restaurants);

	return (
		<>
			<div className="w-full mx-auto px-4 py-8 bg-sidebar rounded-xl shadow-sm mb-4">
				<div className="flex justify-start items-center mb-8 flex-col md:flex-row flex-wrap">
					<h1 className="text-3xl font-bold text-left md:text-center mb-4 md:mb-0">
						Restaurants
					</h1>
					<div className="flex space-x-4 align-middle items-center justify-start">
						<Link
							href="/admin/restaurants/new"
							className="bg-[#ebe6e7] px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors"
						>
							Add Restaurant
						</Link>
						<Link
							href="/admin"
							className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
						>
							Back to Dashboard
						</Link>
					</div>
				</div>

				<div className="mb-8">
					<p className="text-gray-600">
						Manage your partner restaurants. Edit details directly in the table
						below or click on View Details for more options.
					</p>
				</div>
			</div>
			{restaurants.length === 0 ? (
				<div className="text-center py-12">
					<h3 className="text-xl font-medium mb-4">No restaurants found</h3>
					<p className="text-gray-600 mb-6">
						There are no restaurants in the database yet.
					</p>
				</div>
			) : (
				<Suspense fallback={<RestaurantsLoading />}>
					<RestaurantsTable restaurants={restaurants} />
				</Suspense>
			)}
		</>
	);
}
