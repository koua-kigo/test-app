"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Plus } from "lucide-react";
import {
	createRestaurantDeal,
	getRestaurantByIdWithAll,
} from "@/db/models/restaurants/restaurants";
import type { Restaurant, Prize, PunchCard } from "@/types/db";
import { useToast } from "@/hooks/use-toast";
import { BentoGrid } from "@/components/kokonutui/bento-grid";
import {
	Utensils,
	Award,
	CreditCard,
	Users,
	CalendarClock,
	BadgeCheck,
	Tag,
	PlusCircle,
} from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { DealsList, EmptyDeals } from "./restaurant-deals-display";

// Define the BentoItem interface to match the BentoGrid component's expected types
interface BentoItem {
	id: string;
	title: string;
	description: string | ReactNode;
	icon: ReactNode;
	status?: string;
	tags?: string[];
	meta?: string;
	hasPersistentHover?: boolean;
}

// Define types for deal
export interface Deal {
	id?: string;
	restaurantId: bigint;
	title: string;
	content: string;
	isActive: boolean;
}

// Define a type for the detailed restaurant with associated data
interface DetailedRestaurant extends Restaurant {
	prizes: Prize[];
	punchCards: PunchCard[];
	punchCardCount: number;
	deals?: Deal[]; // Add deals to the restaurant data
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
	const [isDealDialogOpen, setIsDealDialogOpen] = useState(false);
	const [newDeal, setNewDeal] = useState({
		title: "",
		content: "",
		isActive: true,
	});

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
						// Initialize deals with mock data if it doesn't exist
						deals: data.deals || [
							{
								id: "deal-1",
								title: "Happy Hour",
								description: "50% off on all drinks from 5PM to 7PM",
								isActive: true,
								createdAt: new Date(),
								expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
							},
							{
								id: "deal-2",
								title: "Weekend Special",
								description: "Buy one get one free on desserts on weekends",
								isActive: true,
								createdAt: new Date(),
								expiresAt: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
							},
						],
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
		setRestaurantData(null);
	};

	// Handle opening the deal creation dialog
	const handleOpenDealDialog = () => {
		setIsDealDialogOpen(true);
	};

	// Handle creating a new deal
	const handleCreateDeal = async () => {
		if (!restaurantData) return;

		// Create a new deal with the form data
		const deal = {
			restaurantId: BigInt(restaurantData.id),
			title: newDeal.title,
			content: newDeal.content,
			active: newDeal.isActive,
		};

		const createdDeal = await createRestaurantDeal(deal).then((res) => res[0]);

		console.log("🚀 ~ handleCreateDeal ~ createdDeal:", createdDeal);
		// Add the new deal to the restaurant data
		const updatedRestaurant: DetailedRestaurant = {
			...restaurantData,
			// @ts-ignore
			deals: [...(restaurantData.deals || []), createdDeal],
		};

		// Update the restaurant data
		setRestaurantData(updatedRestaurant);

		console.log(
			"🚀 ~ awaitcreateRestaurantDeal ~ updatedRestaurant:",
			updatedRestaurant,
		);
		// Reset the form and close the dialog
		setNewDeal({
			title: "",
			content: "",
			isActive: true,
		});
		setIsDealDialogOpen(false);

		// Show a success toast
		toast({
			title: "Success",
			description: "New deal created successfully",
			variant: "default",
		});
	};

	// Convert restaurant data to bento grid items
	const getBentoItems = () => {
		if (!restaurantData) return [];

		// Create base item for restaurant info
		const items: BentoItem[] = [
			{
				id: `restaurant-${restaurantData.id.toString()}`,
				title: restaurantData.name,
				description: restaurantData.description || "No description available",
				icon: <Utensils className="w-4 h-4 text-orange-500" />,
				status: "Active",
				tags: ["Restaurant"],
				meta: `ID: ${restaurantData.id.toString()}`,
				hasPersistentHover: true,
			},
		];

		// Add prizes summary item
		if (restaurantData.prizes.length > 0) {
			items.push({
				id: `prizes-${restaurantData.id.toString()}`,
				title: "Available Prizes",
				description: `${restaurantData.prizes.length} prizes available for customers`,
				icon: <Award className="w-4 h-4 text-yellow-500" />,
				status: "Active",
				tags: ["Prizes", "Rewards"],
				meta: `${restaurantData.prizes.length} total`,
				hasPersistentHover: false,
			});
		}

		// Add deals section
		if (restaurantData.deals && restaurantData.deals.length > 0) {
			const activeDeals = restaurantData.deals.filter(
				(deal) => deal.isActive,
			).length;

			items.push({
				id: `deals-${restaurantData.id.toString()}`,
				title: "Restaurant Deals",
				description: (
					<DealsList
						deals={restaurantData.deals}
						activeDeals={activeDeals}
						onCreateDeal={handleOpenDealDialog}
					/>
				),
				icon: <Tag className="w-4 h-4 text-blue-500" />,
				status: "Active",
				tags: ["Deals", "Promotions"],
				meta: `${activeDeals} active`,
				hasPersistentHover: false,
			});
		} else {
			// If no deals, show a card to create the first one
			items.push({
				id: `deals-empty-${restaurantData.id.toString()}`,
				title: "Restaurant Deals",
				description: <EmptyDeals onCreateDeal={handleOpenDealDialog} />,
				icon: <Tag className="w-4 h-4 text-blue-500" />,
				status: "Empty",
				tags: ["Deals", "Promotions"],
				hasPersistentHover: false,
			});
		}

		// Add punch cards summary item
		if (restaurantData.punchCards.length > 0) {
			const activeCards = restaurantData.punchCards.filter(
				(card) => !card.completed,
			).length;
			items.push({
				id: `punch-cards-${restaurantData.id.toString()}`,
				title: "Punch Cards",
				description: `${activeCards} active punch cards, ${restaurantData.punchCards.length - activeCards} completed`,
				icon: <CreditCard className="w-4 h-4 text-blue-500" />,
				status: "Active",
				tags: ["Cards", "Loyalty"],
				meta: `${restaurantData.punchCards.length} total`,
				hasPersistentHover: false,
			});
		}

		// Add user engagement item
		const uniqueUsers = new Set(
			restaurantData.punchCards.map((card) => card.userId),
		).size;
		items.push({
			id: `engagement-${restaurantData.id.toString()}`,
			title: "Customer Engagement",
			description: `${uniqueUsers} unique customers have punch cards`,
			icon: <Users className="w-4 h-4 text-purple-500" />,
			status: "Analytics",
			tags: ["Users", "Engagement"],
			meta: `${uniqueUsers} users`,
			hasPersistentHover: false,
		});

		// Add recent activity item
		const recentCards = restaurantData.punchCards.filter((card) => {
			const updatedDate = new Date(card.updatedAt);
			const thirtyDaysAgo = new Date();
			thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
			return updatedDate > thirtyDaysAgo;
		}).length;

		items.push({
			id: `activity-${restaurantData.id.toString()}`,
			title: "Recent Activity",
			description: `${recentCards} punch cards updated in the last 30 days`,
			icon: <CalendarClock className="w-4 h-4 text-green-500" />,
			status: "Active",
			tags: ["Recent", "Activity"],
			meta: "Last 30 days",
			hasPersistentHover: false,
		});

		// Add completion rate item
		const completedCards = restaurantData.punchCards.filter(
			(card) => card.completed,
		).length;
		const completionRate =
			restaurantData.punchCards.length > 0
				? Math.round((completedCards / restaurantData.punchCards.length) * 100)
				: 0;

		items.push({
			id: `completion-${restaurantData.id.toString()}`,
			title: "Completion Rate",
			description: `${completionRate}% of punch cards have been completed`,
			icon: <BadgeCheck className="w-4 h-4 text-indigo-500" />,
			status: "Metrics",
			tags: ["Completion", "Analytics"],
			meta: `${completedCards} completed`,
			hasPersistentHover: false,
		});

		return items;
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

			{isOpen && restaurantData && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
					<div className="relative bg-white dark:bg-gray-900 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-auto">
						<div className="sticky top-0 p-4 flex justify-between items-center border-b dark:border-gray-800 bg-white dark:bg-gray-900 z-10">
							<h2 className="text-xl font-bold">
								{restaurantData.name} Overview
							</h2>
							<Button variant="ghost" size="sm" onClick={handleClose}>
								Close
							</Button>
						</div>
						<div className="p-1">
							<BentoGrid items={getBentoItems()} />
						</div>
					</div>
				</div>
			)}

			{/* Dialog for creating a new deal */}
			<Dialog open={isDealDialogOpen} onOpenChange={setIsDealDialogOpen}>
				<DialogContent className="sm:max-w-[500px]">
					<DialogHeader>
						<DialogTitle>Create New Deal</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="title" className="text-right">
								Deal Title
							</Label>
							<Input
								id="title"
								placeholder="Happy Hour, Weekend Special, etc."
								className="col-span-3"
								value={newDeal.title}
								onChange={(e) =>
									setNewDeal({ ...newDeal, title: e.target.value })
								}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="description" className="text-right">
								Description
							</Label>
							<Textarea
								id="description"
								placeholder="Describe what the deal offers..."
								className="col-span-3"
								value={newDeal.content}
								onChange={(e) =>
									setNewDeal({ ...newDeal, content: e.target.value })
								}
							/>
						</div>

						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="isActive" className="text-right">
								Active
							</Label>
							<div className="col-span-3 flex items-center space-x-2">
								<Checkbox
									id="isActive"
									checked={newDeal.isActive}
									onCheckedChange={(checked: boolean) =>
										setNewDeal({ ...newDeal, isActive: checked })
									}
								/>
								<label
									htmlFor="isActive"
									className="text-sm text-gray-500 dark:text-gray-400"
								>
									Make this deal active immediately
								</label>
							</div>
						</div>
					</div>
					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={() => setIsDealDialogOpen(false)}
						>
							Cancel
						</Button>
						<Button
							type="button"
							onClick={handleCreateDeal}
							disabled={!newDeal.title || !newDeal.content}
						>
							Create Deal
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
