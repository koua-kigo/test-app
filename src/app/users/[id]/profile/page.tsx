import { UserButton } from "@/components/UserButton";
import { UserScanQrCode } from "@/features/users/UserScanQrCode";
import { getUserByClerkId } from "@/db";
import { auth } from "@clerk/nextjs/server";
export default async function ProfilePage() {
	const { userId, sessionClaims } = await auth();

	console.log("🚀 ~ ProfilePage ~ userId:", userId);

	console.log("🚀 ~ ProfilePage ~ userId:", userId);

	const user = userId ? await getUserByClerkId(userId) : null;
	console.log("🚀 ~ ProfilePage ~ user:", user);

	if (!user) return <div>Not logged in</div>;

	return (
		<div className="p-6 max-w-4xl mx-auto">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl font-bold">My Profile</h1>
				<UserButton />
			</div>
			<div className="bg-white shadow rounded-lg p-6">
				<div className="flex items-center space-x-4">
					<div className="font-medium">
						<div>{user.name}</div>
						<div className="text-sm text-gray-500">{user.email}</div>
					</div>
				</div>
			</div>
			<UserScanQrCode user={user} />
		</div>
	);
}
