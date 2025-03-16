"use client";

import { PunchCard, PUNCH_THRESHOLD } from "@/components/ui/punch-card";
import type { PunchCardWithRestaurant as ApiPunchCardWithRestaurant } from "@/types/api";
import type { PunchCardWithRestaurant as HookPunchCardWithRestaurant } from "@/hooks/use-punch-card-subscription";

interface UserPunchCardProps {
	punchCard: ApiPunchCardWithRestaurant | HookPunchCardWithRestaurant;
}

export function UserPunchCard({ punchCard }: UserPunchCardProps) {
	// Convert number | null to number for punches
	const punches = punchCard.punches === null ? 0 : punchCard.punches;
	// Convert boolean | null to boolean for completed
	const completed = punchCard.completed === null ? false : punchCard.completed;
	// Handle lastUpdated which could be string, Date, or null
	const lastUpdated = punchCard.updatedAt || undefined;

	return (
		<PunchCard
			restaurantName={punchCard.restaurant.name}
			restaurantImage={punchCard.restaurant.imageUrl}
			restaurantId={punchCard.restaurantId}
			currentPunches={punches}
			totalPunches={PUNCH_THRESHOLD}
			completed={completed}
			lastUpdated={lastUpdated}
		/>
	);
}
