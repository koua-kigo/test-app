"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Deal } from "@/types/db";

// This type represents the deal structure as it comes from the database
interface DatabaseDeal {
	id: bigint;
	restaurantId: bigint;
	title?: string;
	content: string;
	active: boolean | null;
	createdAt: string | null;
	updatedAt: string | null;
	name?: string;
	imageUrl?: string;
	restaurant?: {
		id: bigint;
		name: string;
		imageUrl?: string;
	};
}

interface DealsListProps {
	deals: DatabaseDeal[];
	className?: string;
}

export const DealsList = ({ deals, className }: DealsListProps) => {
	const [expandedId, setExpandedId] = useState<string | null>(null);

	// Sort deals by active status (active first) and then by creation date (newest first)
	const sortedDeals = useMemo(() => {
		return [...deals].sort((a, b) => {
			// First sort by active status (active deals first)
			if (a.active && !b.active) return -1;
			if (!a.active && b.active) return 1;

			// Then sort by creation date (newest first)
			const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
			const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
			return dateB - dateA;
		});
	}, [deals]);

	if (!deals || deals.length === 0) {
		return (
			<div className={cn("py-8 text-center", className)}>
				<div className="bg-gray-50 dark:bg-zinc-900/50 rounded-lg p-6 max-w-md mx-auto">
					<Tag className="w-10 h-10 mx-auto text-gray-400 mb-3" />
					<h3 className="text-lg font-medium mb-2">No Deals Available</h3>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						There are currently no special deals or promotions available. Please
						check back later!
					</p>
				</div>
			</div>
		);
	}

	const toggleExpand = (id: string) => {
		setExpandedId(expandedId === id ? null : id);
	};

	return (
		<div className={cn("space-y-4", className)}>
			<div className="flex items-center mb-4">
				<Tag className="mr-2 h-5 w-5 text-blue-500" />
				<h2 className="text-xl font-semibold">Current Deals</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{sortedDeals.map((deal) => (
					<motion.div
						key={`${deal.id.toString()}-${deal.restaurantId.toString()}`}
						layout
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className={cn(
							"overflow-hidden rounded-lg",
							"bg-white dark:bg-zinc-900",
							"shadow-sm",
							"border border-gray-100 dark:border-zinc-800",
							"hover:shadow-md transition-all duration-200",
						)}
					>
						{/* Show restaurant info for each deal */}
						{deal.restaurant && (
							<Link
								href={`/restaurants/${deal.restaurantId}`}
								className="block"
							>
								<div className="flex items-center p-4 border-b border-gray-100 dark:border-zinc-800">
									{deal.restaurant.imageUrl && (
										<div className="relative w-12 h-12 mr-3 overflow-hidden rounded-full flex-shrink-0">
											<Image
												src={"/RWP.jpg"} // deal?.restaurant?.imageUrl ||
												alt={deal?.restaurant?.name || "Restaurant"}
												fill
												className="object-cover"
												sizes="48px"
											/>
										</div>
									)}
									<div>
										<h4 className="font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
											{deal.restaurant.name}
										</h4>
										<p className="text-xs text-gray-500 dark:text-gray-400">
											View restaurant details
										</p>
									</div>
								</div>
							</Link>
						)}

						<div className="p-5">
							<div className="flex justify-between items-start mb-2">
								<h3 className="font-semibold text-gray-900 dark:text-gray-100">
									{deal.title ||
										deal.name ||
										`${deal.content.substring(0, 40)}...`}
								</h3>
								{deal.active ? (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
										Active
									</span>
								) : (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
										Inactive
									</span>
								)}
							</div>

							<div className="mt-2">
								<p
									className={cn(
										"text-gray-700 dark:text-gray-300",
										"text-sm",
										expandedId === deal.id.toString() ? "" : "line-clamp-3",
									)}
								>
									{deal.content}
								</p>
								{deal.content.length > 150 && (
									<button
										type="button"
										onClick={() => toggleExpand(deal.id.toString())}
										className="mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
									>
										{expandedId === deal.id.toString()
											? "Show less"
											: "Read more"}
									</button>
								)}
							</div>

							<div className="mt-4 flex items-center justify-between">
								<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
									<Clock className="mr-1 h-4 w-4" />
									<span>Limited time offer</span>
								</div>

								<Link
									href={`/restaurants/${deal.restaurantId}`}
									className="inline-flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
								>
									View Restaurant <ExternalLink className="ml-1 h-3 w-3" />
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

// Used for displaying skeleton loading state
export const DealsListSkeleton = ({ count = 4 }: { count?: number }) => {
	// Generate stable keys for skeleton items that don't rely on Math.random()
	const skeletonKeys = Array.from({ length: count }).map(
		(_, i) => `deal-skeleton-${i}`,
	);

	return (
		<div className="space-y-4">
			{skeletonKeys.map((key) => (
				<div
					key={key}
					className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm"
				>
					<div className="flex flex-col space-y-2">
						<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse" />
						<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse" />
					</div>
				</div>
			))}
		</div>
	);
};
