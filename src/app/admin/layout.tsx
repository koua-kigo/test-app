import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { auth } from "@clerk/nextjs/server";

import { getUserByClerkId } from "@/db/db";

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { userId, ...rest } = await auth();
	const user = await getUserByClerkId(userId);
	console.log("🚀 ~ userId:", userId);

	console.log("🚀 ~ rest:", rest);

	if (!userId || !isAdmin(user)) {
		// Redirect non-admin users
		redirect("/");
	}

	return (
		<div className="min-h-screen">
			<div className="bg-black text-white p-4">
				<div className="max-w-7xl mx-auto">
					<p className="text-sm">Admin Dashboard</p>
				</div>
			</div>
			<div className="max-w-7xl mx-auto p-4">{children}</div>
		</div>
	);
}
