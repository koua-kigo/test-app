// src/db/seed.ts
import { db } from "./db"; // Your Drizzle DB instance
import { restaurants, users, prizes, punchCards } from "./schema"; // Your table schemas
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

async function main() {
	console.log("Seeding database...");

	// Clear existing data (optional)
	// await db.delete(restaurants).execute();

	// Seed restaurants
	await db
		.insert(restaurants)
		.values([
			{
				name: "Pasta Paradise",
				description:
					"Authentic Italian pasta dishes made with fresh ingredients.",
				imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
				address: "123 Main St, Foodville, CA",
			},
			{
				name: "Burger Bliss",
				description:
					"Gourmet burgers with unique toppings and homemade sauces.",
				imageUrl:
					"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
				address: "456 Oak Ave, Tasteville, CA",
			},
			// Add more restaurants as needed
		])
		.execute();

	// Seed other tables as needed
	console.log("Seed completed successfully");
}

main()
	.catch((e) => {
		console.error("Seed failed");
		console.error(e);
		process.exit(1);
	})
	.finally(() => {
		process.exit(0);
	});
