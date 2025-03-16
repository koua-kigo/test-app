"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { User } from "@/types/db";
import { UserPunchCard } from "@/features/users/UserPunchCard";
import {
	usePunchCardSubscription,
	type PunchCardWithRestaurant,
} from "@/hooks/use-punch-card-subscription";

interface UserPunchCardsProps {
	user: unknown;
	initialPunchCards?: PunchCardWithRestaurant[];
}

export function UserPunchCards({
	user,
	initialPunchCards = [],
}: UserPunchCardsProps) {
	// Use the real-time subscription hook
	const { punchCards, isLoading, error } = usePunchCardSubscription(user?.id);

	console.log("🚀 ~ ProfilePage ~ error:", error);

	console.log("🚀 ~ ProfilePage ~ isLoading:", isLoading);

	console.log("🚀 ~ ProfilePage ~ punchCards:", punchCards);

	// Use the data from the subscription or the initial data if still loading
	const displayPunchCards =
		punchCards.length > 0 ? punchCards : initialPunchCards;

	// If loading and no initial punch cards
	if (isLoading && initialPunchCards.length === 0) {
		return (
			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Your Punch Cards</CardTitle>
				</CardHeader>
				<CardContent className="flex justify-center items-center py-8">
					<Spinner size="lg" />
				</CardContent>
			</Card>
		);
	}

	// If error and no punch cards to display
	if (error && displayPunchCards.length === 0) {
		return (
			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Your Punch Cards</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">
						Something went wrong loading your punch cards. Please try again
						later.
					</p>
				</CardContent>
			</Card>
		);
	}

	// If no punch cards
	if (displayPunchCards.length === 0) {
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
					{displayPunchCards.map((punchCard) => (
						<UserPunchCard key={String(punchCard.id)} punchCard={punchCard} />
					))}
				</div>
			</CardContent>
		</Card>
	);
}
