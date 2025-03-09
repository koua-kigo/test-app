"use client";

import { PunchCard, PUNCH_THRESHOLD } from "@/components/ui/punch-card";
import type { PunchCardWithRestaurant } from "@/types/api";

interface UserPunchCardProps {
	punchCard: PunchCardWithRestaurant;
}

export function UserPunchCard({ punchCard }: UserPunchCardProps) {
	return (
		<PunchCard
			restaurantName={punchCard.restaurant.name}
			restaurantImage={punchCard.restaurant.imageUrl}
			restaurantId={punchCard.restaurantId}
			currentPunches={punchCard.punches}
			totalPunches={PUNCH_THRESHOLD}
			completed={punchCard.completed}
			lastUpdated={punchCard.updatedAt}
		/>
	);
}
