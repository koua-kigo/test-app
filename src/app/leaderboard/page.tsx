import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	getTopUsersByPunchCardCount,
	getPopularRestaurantsByPunchCardCount,
} from "@/db/models/leaderboard/leaderboard";
import { convertBigInts } from "@/lib/utils";
import { UserLeaderboard } from "@/components/leaderboard/user-leaderboard";
import { RestaurantLeaderboard } from "@/components/leaderboard/restaurant-leaderboard";
import RaffleStatus from "@/features/users/lottery-status";

export const metadata = {
	title: "Leaderboard | Restaurant Passport",
	description: "View top users and popular restaurants",
};

export default async function LeaderboardPage() {
	// Fetch leaderboard data
	const topUsers = await getTopUsersByPunchCardCount(10);
	const popularRestaurants = await getPopularRestaurantsByPunchCardCount(10);

	// Convert BigInt values to strings for serialization
	const serializedTopUsers = convertBigInts(topUsers);
	const serializedPopularRestaurants = convertBigInts(popularRestaurants);

	return (
		<div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
			<h1 className="text-3xl font-bold mb-6">Leaderboard</h1>

			<Tabs defaultValue="users" className="w-full">
				<TabsList className="grid w-full grid-cols-3 mb-8">
					<TabsTrigger value="users">Top Users</TabsTrigger>
					<TabsTrigger value="restaurants">Popular Restaurants</TabsTrigger>
					<TabsTrigger value="raffle">Raffle Status</TabsTrigger>
				</TabsList>

				<TabsContent value="users">
					<Card>
						<CardHeader>
							<CardTitle>Top Users</CardTitle>
							<CardDescription>Users with the most punch cards</CardDescription>
						</CardHeader>
						<CardContent>
							<UserLeaderboard users={serializedTopUsers} />
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="restaurants">
					<Card>
						<CardHeader>
							<CardTitle>Popular Restaurants</CardTitle>
							<CardDescription>
								Restaurants with the most punch cards
							</CardDescription>
						</CardHeader>
						<CardContent>
							<RestaurantLeaderboard
								restaurants={serializedPopularRestaurants}
							/>
						</CardContent>
					</Card>
				</TabsContent>
				
				<TabsContent value="raffle">
					<Card>
						<CardHeader>
							<CardTitle>Current Raffle</CardTitle>
							<CardDescription>
								Check your raffle entry status
							</CardDescription>
						</CardHeader>
						<CardContent>
							<RaffleStatus />
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}