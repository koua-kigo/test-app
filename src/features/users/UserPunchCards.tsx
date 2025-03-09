"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { User } from "@/types/db";
import { UserPunchCard } from "@/features/users/UserPunchCard";

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
	punchCards: User["punchCards"];
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
						<UserPunchCard key={punchCard.id} punchCard={punchCard} />
					))}
				</div>
			</CardContent>
		</Card>
	);
}
