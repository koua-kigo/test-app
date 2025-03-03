"use client";

import { getRestaurantByIdWithPrizes } from "@/db/models/restaurants/restaurants";
import { getUserById } from "@/db/models/users/users";
import { UserScanQrCode } from "@/features/users";
import { GetUserRestaurantPunchCard } from "@/features/users/GetUserPunchCard";
import { UserPunchCard } from "@/features/users/UserPunchCard";
import type { PunchCard, RestaurantDetailPayload, User } from "@/types/db";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
export function RestaurantDetail({
	restaurant: restaurantDetail,
	userPunchCard,
	user,
}: {
	restaurant: RestaurantDetailPayload;
	user: User;
	userPunchCard: PunchCard;
}) {
	console.log("🚀 ~ user:", user);

	console.log("🚀 ~ userPunchCard:", userPunchCard);

	const { prizes, ...restaurant } = restaurantDetail;

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

			<div className="mb-8">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-semibold">Available Prizes</h2>
					{user && userPunchCard ? (
						<>
							<UserPunchCard
								restaurant={restaurant}
								userId={user.id}
								userPunchCard={userPunchCard}
							/>
						</>
					) : (
						<div className="border border-gray-200 rounded-lg p-4 inline-block">
							<Image
								src={restaurant.qrCodeUrl}
								alt="Restaurant QR Code"
								className="w-48 h-48"
								width={192}
								height={192}
							/>
						</div>
					)}
					{user && !userPunchCard && <UserScanQrCode />}
				</div>

				{prizes.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{prizes.map((prize) => (
							<PrizeCard key={prize.id.toString()} prize={prize} />
						))}
					</div>
				) : (
					<p className="text-gray-600">
						No prizes available at this restaurant yet.
					</p>
				)}
			</div>

			{!user && (
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
