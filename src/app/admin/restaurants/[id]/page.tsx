import { db } from "@/db/db";
import { restaurants, prizes } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import { QRCodeManager } from "./qr-code-manager";

// Loading component
function RestaurantLoading() {
	return (
		<div className="animate-pulse">
			<div className="h-64 bg-gray-200 w-full rounded-lg mb-8" />
			<div className="h-8 bg-gray-200 w-1/2 mb-4" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-3/4 mb-8" />

			<div className="h-6 bg-gray-200 w-1/4 mb-4" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{[...Array(3)].map((_, i) => (
					<div key={i} className="bg-gray-200 h-40 rounded-lg" />
				))}
			</div>
		</div>
	);
}

// Prize card component
function PrizeCard({ prize }: { prize: any }) {
	return (
		<div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
			<div className="relative h-32 w-full mb-3">
				<Image
					src={
						prize.imageUrl || "https://via.placeholder.com/400x250?text=Prize"
					}
					alt={prize.name}
					fill
					className="object-cover rounded"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<h4 className="text-lg font-semibold mb-1">{prize.name}</h4>
			<p className="text-gray-600 text-sm mb-2 line-clamp-2">
				{prize.description}
			</p>
			<div className="flex justify-between items-center">
				<span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
					{prize.requiredPunches} punches
				</span>
				<span
					className={`text-sm font-medium px-2 py-1 rounded ${
						prize.available
							? "bg-green-100 text-green-800"
							: "bg-red-100 text-red-800"
					}`}
				>
					{prize.available ? "Available" : "Unavailable"}
				</span>
			</div>
		</div>
	);
}

// Restaurant detail component
async function RestaurantDetail({ id }: { id: string }) {
	// Fetch restaurant details
	const restaurant = await db
		.select()
		.from(restaurants)
		.where(eq(restaurants.id, BigInt(id)));

	console.log("🚀 ~ RestaurantDetail ~ restaurant:", restaurant);

	if (!restaurant) {
		notFound();
	}

	// Fetch prizes for this restaurant
	const restaurantPrizes = await db
		.select()
		.from(prizes)
		.where(eq(prizes.restaurantId, BigInt(id)));

	console.log("🚀 ~ RestaurantDetail ~ restaurantPrizes:", restaurantPrizes);
	// Get current user auth status
	const { userId } = await auth();
	const isAuthenticated = !!userId;

	return (
		<div>
			<div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
				<Image
					src={
						restaurant.imageUrl ||
						"https://via.placeholder.com/1200x400?text=Restaurant"
					}
					alt={restaurant.name}
					fill
					className="object-cover"
					priority
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-30" />
				<div className="absolute bottom-0 left-0 p-6">
					<h1 className="text-3xl font-bold text-white mb-2">
						{restaurant.name}
					</h1>
					<p className="text-white text-opacity-90">{restaurant.address}</p>
				</div>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">About</h2>
				<p className="text-gray-700">{restaurant.description}</p>
			</div>

			{/* QR Code Section */}
			<div className="mb-8 p-6 border border-gray-200 rounded-lg bg-white">
				<h2 className="text-2xl font-semibold mb-4">QR Code Management</h2>
				<QRCodeManager restaurantId={id} restaurant={restaurant[0]} />
			</div>

			<div className="mb-8">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-semibold">Available Prizes</h2>
					{isAuthenticated && (
						<Link
							href={`/punch-card/${restaurant.id}`}
							className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
						>
							View My Punch Card
						</Link>
					)}
				</div>

				{restaurantPrizes && restaurantPrizes?.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{restaurantPrizes.map((prize) => (
							<PrizeCard key={prize.id.toString()} prize={prize} />
						))}
					</div>
				) : (
					<p className="text-gray-600">
						No prizes available at this restaurant yet.
					</p>
				)}
			</div>

			{!isAuthenticated && (
				<div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
					<h3 className="text-lg font-semibold mb-2">
						Join our rewards program!
					</h3>
					<p className="text-gray-700 mb-4">
						Sign up to start collecting stamps and earning rewards at this
						restaurant.
					</p>
					<div className="flex gap-4">
						<Link
							href="/sign-up"
							className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
						>
							Sign Up
						</Link>
						<Link
							href="/sign-in"
							className="inline-block bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition-colors"
						>
							Sign In
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}

// Main page component
export default async function RestaurantPage({
	params,
}: { params: { id: string } }) {
	console.log("🚀 ~ params:", params);

	const { id } = await params;

	console.log("🚀 ~ id:", id);

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-6">
				<Link
					href="/restaurants"
					className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M19 12H5M12 19l-7-7 7-7" />
					</svg>
					Back to Restaurants
				</Link>
			</div>

			<Suspense fallback={<RestaurantLoading />}>
				<RestaurantDetail id={id.toString()} />
			</Suspense>
		</div>
	);
}
