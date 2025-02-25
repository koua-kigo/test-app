"use client";

import { useUser } from "@clerk/nextjs";
import { UserButton } from "@/components/UserButton";

export default function ProfilePage() {
	const { user } = useUser();

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
						<div>
							{user.firstName} {user.lastName}
						</div>
						<div className="text-sm text-gray-500">
							{user.emailAddresses[0].emailAddress}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
