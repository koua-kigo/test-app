"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Award, Coffee, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Constant for punch threshold
export const PUNCH_THRESHOLD = 10;

interface PunchCardProps
	extends Omit<React.ComponentProps<typeof motion.div>, "ref"> {
	restaurantName: string;
	restaurantImage?: string;
	restaurantId: string | number | bigint;
	currentPunches: number;
	totalPunches?: number;
	completed?: boolean;
	lastUpdated?: Date | string;
	onAddPunch?: () => void;
}

const PunchCard = React.forwardRef<HTMLDivElement, PunchCardProps>(
	(
		{
			className,
			restaurantName,
			restaurantImage,
			restaurantId,
			currentPunches,
			totalPunches = PUNCH_THRESHOLD,
			completed = false,
			lastUpdated,
			onAddPunch,
			...props
		},
		ref,
	) => {
		const [isAnimating, setIsAnimating] = React.useState(false);
		const [punchPosition, setPunchPosition] = React.useState({ x: 0, y: 0 });

		const handleAddPunch = (e: React.MouseEvent<HTMLButtonElement>) => {
			if (currentPunches >= totalPunches || isAnimating || completed) return;

			// Calculate position for the punch animation
			const rect = e.currentTarget.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			setPunchPosition({ x, y });

			setIsAnimating(true);
			setTimeout(() => {
				setIsAnimating(false);
				onAddPunch?.();
			}, 800);
		};

		return (
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				whileHover={{ y: -5 }}
				className={cn(
					"relative overflow-hidden rounded-xl bg-card shadow-lg",
					"w-full h-full touch-none flex flex-col",
					className,
				)}
				style={{ perspective: 1000 }}
				{...props}
			>
				{/* Restaurant Image */}
				<div className="relative h-36 w-full">
					<Image
						src={restaurantImage || "RWP.jpg"}
						alt={`${restaurantName}`}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>

					<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

					{/* Restaurant Info Overlay */}
					<div className="absolute bottom-0 w-full p-4">
						<h3 className="text-lg font-bold text-white">{restaurantName}</h3>
						{lastUpdated && (
							<p className="text-xs text-white/70">
								Last updated:{" "}
								{typeof lastUpdated === "string"
									? new Date(lastUpdated).toLocaleDateString()
									: lastUpdated.toLocaleDateString()}
							</p>
						)}
					</div>
				</div>

				{/* Punch Card Content */}
				<div className="flex flex-col flex-grow p-4">
					<div className="flex justify-between items-center mb-3">
						<span className="text-sm font-medium text-foreground">
							{currentPunches} of {totalPunches} punches
						</span>
						{completed && (
							<Badge
								variant="secondary"
								className="bg-green-100 text-green-800"
							>
								Completed
							</Badge>
						)}
					</div>

					{/* Punch Grid */}
					<div className="grid grid-cols-5 gap-2 mb-5">
						{Array.from({ length: totalPunches }).map((_, index) => (
							<motion.div
								key={`punch-${index}-${currentPunches > index ? "filled" : "empty"}`}
								className={cn(
									"aspect-square rounded-lg border-2 flex items-center justify-center",
									index < currentPunches
										? "bg-primary/10 border-primary"
										: "bg-muted/50 border-muted",
								)}
								initial={false}
								animate={
									index === currentPunches - 1 && isAnimating
										? { scale: [1, 1.2, 1], rotate: [0, 15, 0] }
										: {}
								}
								transition={{ duration: 0.5 }}
							>
								{index < currentPunches && (
									<motion.div
										initial={{ scale: 0, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{
											type: "spring",
											stiffness: 500,
											damping: 30,
											delay: index === currentPunches - 1 ? 0.2 : 0,
										}}
									>
										<Coffee className="h-5 w-5 text-primary" />
									</motion.div>
								)}
							</motion.div>
						))}
					</div>

					{/* Action Buttons */}
					<div className="mt-auto flex gap-2">
						{!completed ? (
							<motion.button
								className="py-2 px-4 rounded-lg bg-secondary text-secondary-foreground font-medium relative overflow-hidden w-full flex-1"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								onClick={handleAddPunch}
								disabled={isAnimating || completed}
							>
								Add Punch
								<AnimatePresence>
									{isAnimating && (
										<motion.div
											className="absolute bg-primary rounded-full"
											style={{
												left: punchPosition.x,
												top: punchPosition.y,
												width: 10,
												height: 10,
											}}
											initial={{ scale: 0, opacity: 1 }}
											animate={{
												scale: 20,
												opacity: 0,
											}}
											exit={{ opacity: 0 }}
											transition={{ duration: 0.8 }}
										/>
									)}
								</AnimatePresence>
							</motion.button>
						) : (
							<motion.button
								className="py-2 px-4 rounded-lg bg-green-600 text-white font-medium flex items-center justify-center gap-2 flex-1"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Award className="h-5 w-5" />
								<span>Claim Reward</span>
							</motion.button>
						)}

						<Link
							href={`/restaurants/${restaurantId}`}
							className="py-2 px-4 rounded-lg border border-border bg-background hover:bg-muted transition-colors flex items-center justify-center text-sm"
						>
							View Restaurant
						</Link>
					</div>
				</div>
			</motion.div>
		);
	},
);

PunchCard.displayName = "PunchCard";

export { PunchCard };
