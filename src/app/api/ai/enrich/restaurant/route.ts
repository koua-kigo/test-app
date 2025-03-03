import { OpenAI } from "openai";
import { StreamingTextResponse, OpenAIStream } from "ai";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema for validating request body
const requestSchema = z.object({
	restaurantName: z.string().min(1, "Restaurant name is required"),
	location: z.string().optional(),
});

// Type for the restaurant data
type RestaurantData = {
	name: string;
	address?: string;
	website?: string;
	phone?: string;
	rating?: number;
	reviews?: string[];
	images?: string[];
	hours?: Record<string, string>;
	cuisine?: string[];
	priceRange?: string;
};

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: NextRequest) {
	try {
		// Parse and validate request body
		const body = await req.json();
		const result = requestSchema.safeParse(body);

		if (!result.success) {
			return NextResponse.json({ error: result.error }, { status: 400 });
		}

		const { restaurantName, location } = result.data;

		// Construct search query
		const searchQuery = location
			? `${restaurantName} restaurant in ${location}`
			: `${restaurantName} restaurant`;

		// Perform web search
		const searchResponse = await openai.chat.completions.create({
			model: "o3-mini",
			stream: true,
			messages: [
				{
					role: "system",
					content: `You are a restaurant data researcher assistant. Your task is to search for and compile comprehensive information about a restaurant.
          Return the data in a structured JSON format with the following fields:
          - name: The restaurant's name
          - address: Full address
          - website: Official website URL
          - phone: Contact phone number
          - rating: Overall rating (0-5)
          - reviews: Array of up to 5 notable customer reviews
          - images: Array of image URLs related to the restaurant
          - hours: Object with days of the week and operating hours
          - cuisine: Array of cuisine types
          - priceRange: Price category (e.g., "$", "$$", "$$$", "$$$$")
          
          If any information is unavailable, omit that field. Be thorough and accurate.`,
				},
				{
					role: "user",
					content: `Search for information about "${searchQuery}" and provide comprehensive details.`,
				},
			],
			tools: [
				{
					type: "function",
					function: {
						name: "search_web",
						description: "Search the web for restaurant information",
						parameters: {
							type: "object",
							properties: {
								query: {
									type: "string",
									description: "The search query",
								},
							},
							required: ["query"],
						},
					},
				},
			],
			tool_choice: "auto",
		});

		// Create a streaming response
		const stream = OpenAIStream(searchResponse, {
			onCompletion: async (completion) => {
				// Optional: Log or process the complete response when done
				console.log("Restaurant data enrichment complete");
			},
		});

		// Return a streaming response
		return new StreamingTextResponse(stream);
	} catch (error) {
		console.error("Error enriching restaurant data:", error);
		return NextResponse.json(
			{ error: "Failed to enrich restaurant data" },
			{ status: 500 },
		);
	}
}
