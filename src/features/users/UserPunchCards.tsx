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
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface UserPunchCardsProps {
	user: User | Record<string, unknown>;
	initialPunchCards?: PunchCardWithRestaurant[];
}

export function UserPunchCards({
	user,
	initialPunchCards = [],
}: UserPunchCardsProps) {
	const searchParams = useSearchParams();
	const highlightId = searchParams.get("highlight");
	const [highlightedCardId, setHighlightedCardId] = useState<string | null>(
		null,
	);

	// Use static data display if we can't get the user ID
	const [useFallbackData, setUseFallbackData] = useState(false);

	// Extract user ID safely, ensuring it's a bigint
	const userId = (() => {
		try {
			if (user && typeof user === "object" && "id" in user) {
				const id = user.id;
				// If id is already a bigint, use it
				if (typeof id === "bigint") return id;
				// If id is a number or string, convert to bigint
				if (typeof id === "number" || typeof id === "string") {
					return BigInt(id.toString());
				}
			}
			setUseFallbackData(true);
			return undefined;
		} catch (e) {
			setUseFallbackData(true);
			return undefined;
		}
	})();

	// Use the real-time subscription hook only when we have a valid bigint userId
	const { punchCards, isLoading, error } = !userId
		? { punchCards: [], isLoading: false, error: null }
		: usePunchCardSubscription(userId);

	// Use the data from the subscription or the initial data
	const displayPunchCards =
		useFallbackData || punchCards.length === 0 ? initialPunchCards : punchCards;

	// Set the highlighted card when we have punch cards and a highlight parameter
	useEffect(() => {
		if (highlightId && displayPunchCards.length > 0) {
			// Find the punch card with the matching restaurant ID
			const matchingCard = displayPunchCards.find(
				(card) => String(card.restaurantId) === highlightId,
			);

			if (matchingCard) {
				setHighlightedCardId(String(matchingCard.id));

				// Auto-scroll to the highlighted card
				setTimeout(() => {
					const element = document.getElementById(
						`punch-card-${matchingCard.id}`,
					);
					if (element) {
						element.scrollIntoView({ behavior: "smooth", block: "center" });
					}
				}, 500);

				// Remove the highlight after 5 seconds
				setTimeout(() => {
					setHighlightedCardId(null);
				}, 5000);
			}
		}
	}, [highlightId, displayPunchCards]);

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
					{displayPunchCards.map((punchCard) => {
						const isHighlighted = String(punchCard.id) === highlightedCardId;
						return (
							<div
								id={`punch-card-${punchCard.id}`}
								key={String(punchCard.id)}
								className={
									isHighlighted
										? "ring-2 ring-primary ring-offset-2 rounded-lg transition-all"
										: ""
								}
							>
								<UserPunchCard punchCard={punchCard} />
								{isHighlighted && (
									<div className="text-center mt-2 p-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
										New punch added!
									</div>
								)}
							</div>
						);
					})}
				</div>
			</CardContent>
		</Card>
	);
}
