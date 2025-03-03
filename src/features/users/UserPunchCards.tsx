"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type PunchCardWithRestaurant = {
	id: bigint;
	userId: bigint;
	restaurantId: bigint;
	punches: number | null;
	completed: boolean | null;
	updatedAt: string | null;
	restaurant: {
		id: bigint;
		name: string;
		description: string;
		imageUrl: string;
		address: string;
		qrCodeUrl: string | null;
	};
};

export function UserPunchCards({
	punchCards,
}: {
	punchCards: PunchCardWithRestaurant[];
}) {
	// Default punch threshold (can be made dynamic later)
	const PUNCH_THRESHOLD = 10;

	if (!punchCards || punchCards.length === 0) {
		return (
			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Your Punch Cards</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">
						You don't have any punch cards yet. Visit a restaurant to get
						started!
					</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="mb-6">
			<CardHeader>
				<CardTitle>Your Punch Cards</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{punchCards.map((punchCard) => (
						<motion.div
							key={String(punchCard.id)}
							className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
							whileHover={{ y: -5 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
						>
							<div className="relative w-full">
								<Image
									src={punchCard.restaurant.imageUrl}
									alt={punchCard.restaurant.name}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
								<div className="p-4">
									<h3 className="text-black font-semibold truncate">
										{punchCard.restaurant.name}
									</h3>
									<p className="text-white/80 text-sm truncate">
										{/* {punchCard.restaurant.address} */}
									</p>
								</div>
							</div>

							<div className="p-4">
								<div className="flex justify-between items-center mb-2">
									<div className="flex items-center gap-2">
										<span className="font-medium">
											Punches: {punchCard.punches ?? 0}/{PUNCH_THRESHOLD}
										</span>
										{punchCard.completed && (
											<Badge
												variant="secondary"
												className="bg-green-100 text-green-800"
											>
												Completed
											</Badge>
										)}
									</div>
									<span className="text-xs text-gray-500">
										Last updated:{" "}
										{new Date(punchCard.updatedAt ?? "").toLocaleDateString()}
									</span>
								</div>

								<Progress
									value={((punchCard.punches ?? 0) / PUNCH_THRESHOLD) * 100}
									className="h-2 mb-3"
								/>

								<Link
									href={`/restaurants/${punchCard.restaurant.id}`}
									className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
								>
									View Restaurant →
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
