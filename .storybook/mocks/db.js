// Mock for database-related functions
// This file will be imported instead of the real db modules in Storybook

export const mockPunchCard = {
	id: 1n,
	userId: 1n,
	restaurantId: 1n,
	punches: 3,
	completed: false,
	updatedAt: new Date().toISOString(),
};

export const mockUser = {
	id: 1n,
	clerkId: "user_123",
	name: "Test User",
	isStaff: false,
	isAdmin: false,
};

export const mockRestaurant = {
	id: 1n,
	name: "Test Restaurant",
	description: "A test restaurant description",
	imageUrl: "/RWP.jpg",
	address: "123 Test St, Test City",
};

// Mock database functions
export const getUserByClerkId = async () => mockUser;
export const getRestaurantById = async () => mockRestaurant;
export const getUserRestaurantPunchCard = async () => mockPunchCard;

// Add more mock functions as needed for your Storybook stories
