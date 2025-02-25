// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./src/db/schema.ts", // Where the generated schema will be written
	out: "./drizzle", // Where migrations and other generated files will go
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL || "",
	},
	// Simplify introspection to avoid constraint issues
	introspect: {
		casing: "preserve", // Keep the original casing from the database
	},
});
