"use client";

import { useSidebar } from "@/components/admin/SidebarContext";
import { AdminSidebar } from "@/components/admin/Sidebar";

export function AdminContent({ children }: { children: React.ReactNode }) {
	const { collapsed } = useSidebar();

	return (
		<>
			{/* Sidebar */}
			<AdminSidebar />

			{/* Main content area */}
			<div
				className={`transition-all duration-300 min-h-screen ${
					collapsed ? "md:ml-20" : "md:ml-64"
				}`}
			>
				{/* Header */}
				<header className="bg-white shadow-xs">
					<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
						<h1 className="text-lg font-semibold text-gray-900">
							Admin Dashboard
						</h1>
					</div>
				</header>

				{/* Main content */}
				<main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					{children}
				</main>
			</div>
		</>
	);
}
