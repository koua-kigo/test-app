"use client";

import { useState } from "react";
import { RestaurantDetailModal } from "./restaurant-detail-modal";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { getRestaurantByIdWithAll } from "@/db/models/restaurants/restaurants";
import type { Restaurant, Prize, PunchCard } from "@/types/db";
import { useToast } from "@/hooks/use-toast";

// Define a type for the detailed restaurant with associated data
interface DetailedRestaurant extends Restaurant {
	prizes: Prize[];
	punchCards: PunchCard[];
	punchCardCount: number;
}

interface RestaurantQuickViewProps {
	restaurantId: bigint;
}

export function RestaurantQuickView({
	restaurantId,
}: RestaurantQuickViewProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [restaurantData, setRestaurantData] =
		useState<DetailedRestaurant | null>(null);
	const { toast } = useToast();

	const handleOpen = async () => {
		if (!isLoading) {
			setIsLoading(true);

			try {
				const data = await getRestaurantByIdWithAll(restaurantId);
				if (data) {
					// Transform the data to match our expected types
					const transformedData = {
						...data,
						prizes: data.prizes.map((prize) => ({
							...prize,
							// Convert createdAt string to Date safely
							createdAt:
								typeof prize.createdAt === "string"
									? new Date(prize.createdAt)
									: new Date(),
						})),
						punchCards: data.punchCards.map((card) => ({
							...card,
							// Convert updatedAt string to Date safely
							updatedAt:
								typeof card.updatedAt === "string"
									? new Date(card.updatedAt)
									: new Date(),
						})),
					};

					// Now we can safely cast to our expected type
					setRestaurantData(transformedData as unknown as DetailedRestaurant);
					setIsOpen(true);
				} else {
					toast({
						title: "Error",
						description: "Restaurant not found",
						variant: "destructive",
					});
				}
			} catch (error) {
				console.error("Error fetching restaurant data:", error);
				toast({
					title: "Error",
					description: "Failed to load restaurant details",
					variant: "destructive",
				});
			} finally {
				setIsLoading(false);
			}
		}
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Button
				variant="ghost"
				size="icon"
				onClick={handleOpen}
				disabled={isLoading}
				className="h-8 w-8"
			>
				<Eye className="h-4 w-4" />
			</Button>

			{restaurantData && (
				<RestaurantDetailModal
					restaurant={restaurantData}
					isOpen={isOpen}
					onClose={handleClose}
				/>
			)}
		</>
	);
}
