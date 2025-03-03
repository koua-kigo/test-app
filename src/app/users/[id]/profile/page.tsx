import { UserButton } from "@clerk/nextjs";
import { getUserByClerkId } from "@/db/models/users/users";
import { auth } from "@clerk/nextjs/server";
import { UserScanQrCode } from "@/features/users/UserScanQrCode";
import { UserPunchCards } from "@/features/users/UserPunchCards";
import { getPunchCardsByUserIdWithRestaurants } from "@/db/models/punch-cards/punch-cards";
import { convertBigInts } from "@/lib/utils";

export default async function ProfilePage() {
	const { userId } = await auth();

	const user = userId ? await getUserByClerkId(userId) : null;
	console.log("🚀 ~ ProfilePage ~ user:", user);

	if (!user) return <div>Not logged in</div>;

	// Fetch user's punch cards with restaurant information
	const punchCards = await getPunchCardsByUserIdWithRestaurants(user.id);
	const serializedPunchCards = convertBigInts(punchCards);

	return (
		<div className="p-6 max-w-4xl mx-auto">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl font-bold">My Profile</h1>
				<UserButton />
			</div>
			<div className="bg-white shadow rounded-lg p-6 mb-6">
				<div className="flex items-center space-x-4">
					<div className="font-medium">
						<div>{user.name}</div>
						<div className="text-sm text-gray-500">{user.email}</div>
					</div>
				</div>
			</div>

			{/* Display user's punch cards */}
			<UserPunchCards punchCards={serializedPunchCards} />

			<UserScanQrCode user={user} />
		</div>
	);
}
