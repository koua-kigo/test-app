/**
 * Type definitions for database models
 */

/**
 * User model
 */
export type User = {
	id: bigint;
	clerkId: string;
	name: string;
	isStaff?: boolean | undefined;
	isAdmin?: boolean | undefined;
	email: string;
	phone?: string | null;
};

/**
 * Restaurant model
 */
export type Restaurant = {
	id: bigint;
	name: string;
	description: string;
	imageUrl: string;
	address: string;
	qrCodeUrl: string | null;
};

/**
 * Punch card model
 */
export type PunchCard = {
	id: bigint;
	userId: bigint;
	restaurantId: bigint;
	punches: number;
	completed: boolean;
	updatedAt: Date;
};

/**
 * Raffle entry model
 */
export type RaffleEntry = {
	id: bigint;
	userId: bigint;
	punchCardId: bigint;
	createdAt: Date;
};

/**
 * Prize rules type
 */
export type PrizeRules = {
	expirationDays?: number;
	usageLimit?: number;
	terms?: string;
	[key: string]: unknown;
};

/**
 * Prize model
 */
export type Prize = {
	id: bigint;
	name: string;
	description: string;
	imageUrl: string;
	type: string;
	restaurantId: bigint;
	requiredPunches: number;
	available: boolean;
	quantity: number;
	rules: PrizeRules;
	createdAt: Date;
};

export interface RestaurantDetailPayload extends Restaurant {
	prizes: Prize[];
}

/**
 * Prize redemption status type
 */
export type RedemptionStatus = "pending" | "redeemed" | "expired" | "cancelled";

/**
 * Prize redemption model
 */
export type PrizeRedemption = {
	id: bigint;
	userId: bigint;
	prizeId: bigint;
	punchCardId: bigint;
	status: RedemptionStatus;
	redeemedAt: Date | null;
	expiresAt: Date | null;
	createdAt: Date;
};

/**
 * Point balance model
 */
export type PointBalance = {
	id: bigint;
	userId: bigint;
	points: number;
	updatedAt: Date;
};

/**
 * Point transfer status type
 */
export type TransferStatus = "pending" | "completed" | "cancelled";

/**
 * Point transfer model
 */
export type PointTransfer = {
	id: bigint;
	fromUserId: bigint;
	toUserId: bigint;
	points: number;
	message: string | null;
	status: TransferStatus;
	createdAt: Date;
};

/**
 * Achievement type enum
 */
export type AchievementType =
	| "first_transfer"
	| "transfer_milestone"
	| "punch_card_complete"
	| "prize_redemption";

/**
 * Achievement data type
 */
export type AchievementData = {
	milestone?: number;
	restaurantId?: bigint;
	prizeId?: bigint;
	[key: string]: unknown;
};

/**
 * Achievement model
 */
export type Achievement = {
	id: bigint;
	userId: bigint;
	type: AchievementType;
	data: AchievementData;
	unlockedAt: Date;
};
