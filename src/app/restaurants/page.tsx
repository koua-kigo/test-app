import { db } from "@/db/db";
import { restaurants } from "@/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

// Loading component
function RestaurantsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md p-0 overflow-hidden animate-pulse">
          <div className="h-48 bg-gray-200 w-full" />
          <div className="p-4">
            <div className="h-6 bg-gray-200 w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 w-full mb-2" />
            <div className="h-4 bg-gray-200 w-full mb-2" />
            <div className="h-4 bg-gray-200 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Restaurant card component
function RestaurantCard({ restaurant }: { restaurant: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-0 overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={restaurant.imageUrl || "https://via.placeholder.com/400x250?text=Restaurant"}
          alt={restaurant.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{restaurant.description}</p>
        <p className="text-gray-500 text-sm mb-4">{restaurant.address}</p>
        <Link
          href={`/restaurants/${restaurant.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

// Restaurants list component
async function RestaurantsList() {
  // Fetch restaurants from the database
  const restaurantsList = await db.select().from(restaurants).orderBy(desc(restaurants.id));
  
  if (restaurantsList.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-4">No restaurants found</h3>
        <p className="text-gray-600 mb-6">There are no restaurants in the database yet.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurantsList.map((restaurant) => (
        <RestaurantCard key={restaurant.id.toString()} restaurant={restaurant} />
      ))}
    </div>
  );
}

// Main page component
export default function RestaurantsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
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
          Explore our partner restaurants and start collecting stamps on your food passport!
        </p>
      </div>
      
      <Suspense fallback={<RestaurantsLoading />}>
        <RestaurantsList />
      </Suspense>
    </div>
  );
}