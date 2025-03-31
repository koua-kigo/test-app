// Restaurant Data Enricher
// This script reads restaurant data from CSV and uses firecrawl_search to find:
// - Name
// - Address
// - Geo coordinates
// - Images
// - Enhanced descriptions

const fs = require("fs");
const path = require("path");
const Papa = require("papaparse");
const axios = require("axios");

// Start research with real-time updates
// const onActivity = (activity) => {
// 	console.log(`[${activity.type}] ${activity.message}`);
// };

// // Run deep research
// const results = await firecrawl.deepResearch(
// 	"What are the latest developments in quantum computing?",
// 	params,
// 	onActivity,
// );

// const options = {
//   method: 'POST',
//   headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
//   body: '{"query":"<string>","limit":5,"tbs":"<string>","lang":"en","country":"us","location":"<string>","timeout":60000,"scrapeOptions":{}}'
// };

// fetch('https://api.firecrawl.dev/v1/search', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// Configuration - adjust as needed
const CONFIG = {
	inputFile: path.join(__dirname, "restaurants.csv"),
	outputJsonFile: path.join(__dirname, "enriched_restaurants.json"),
	outputCsvFile: path.join(__dirname, "enriched_restaurants.csv"),
	location: "Maple Grove MN",
	batchSize: 10, // Save after every X restaurants
	delayBetweenSearches: 2000, // Milliseconds
	firecrawlApiEndpoint:
		process.env.FIRECRAWL_API_ENDPOINT || "https://api.firecrawl.dev/v1/search",
	firecrawlApiKey: process.env.FIRECRAWL_API_KEY || "your-api-key-here",
};

// Main function to process all restaurants
async function processRestaurants() {
	console.log(`Starting restaurant data enrichment process...`);

	try {
		// Read and parse the CSV file
		const fileContent = fs.readFileSync(CONFIG.inputFile, "utf8");
		const { data: restaurants, errors } = Papa.parse(fileContent, {
			header: true,
			skipEmptyLines: true,
			dynamicTyping: true, // Convert numbers automatically
		});

		if (errors && errors.length > 0) {
			console.error("CSV parsing errors:", errors);
			return;
		}

		console.log(
			`Successfully loaded ${restaurants.length} restaurants from CSV`,
		);

		// Process each restaurant
		const enrichedData = [];

		for (let i = 0; i < restaurants.length; i++) {
			const restaurant = restaurants[i];
			const count = i + 1;

			console.log(
				`Processing ${count}/${restaurants.length}: ${restaurant.name}`,
			);

			try {
				// Add delay between requests (except for the first one)
				if (i > 0) {
					await new Promise((resolve) =>
						setTimeout(resolve, CONFIG.delayBetweenSearches),
					);
				}

				// Get enriched data for this restaurant
				const enrichedRestaurant = await enrichRestaurantData(restaurant);
				enrichedData.push(enrichedRestaurant);

				// Save intermediate results after each batch
				if (count % CONFIG.batchSize === 0 || count === restaurants.length) {
					saveJsonData(
						`enriched_restaurants_partial_${count}.json`,
						enrichedData,
					);
				}
			} catch (error) {
				console.error(`Error processing "${restaurant.name}":`, error.message);

				// Add restaurant with error info
				enrichedData.push({
					...restaurant,
					error: error.message,
					address: null,
					latitude: null,
					longitude: null,
					imageUrl: null,
				});
			}
		}

		// Save final results
		saveJsonData(CONFIG.outputJsonFile, enrichedData);
		saveCsvData(CONFIG.outputCsvFile, enrichedData);

		console.log("Processing complete!");
		return enrichedData;
	} catch (error) {
		console.error("Fatal error:", error);
		throw error;
	}
}

// Function to enrich a single restaurant
async function enrichRestaurantData(restaurant) {
	const { id, name, description } = restaurant;

	// Create search query
	const query = `${name} restaurant ${CONFIG.location}`;
	console.log(`Searching for: "${query}"`);

	// Search for restaurant information
	const searchResults = await searchFirecrawl(query);

	// Extract information from search results
	const extractedInfo = extractInformation(searchResults, restaurant);

	return {
		id,
		name,
		original_description: description,
		description: extractedInfo.enhancedDescription || description,
		address: extractedInfo.address || null,
		latitude: extractedInfo.coordinates?.lat || null,
		longitude: extractedInfo.coordinates?.lng || null,
		imageUrl: extractedInfo.imageUrl || null,
		searchQuery: query,
	};
}

// Function to search using Firecrawl API
async function searchFirecrawl(query) {
	try {
		const response = await axios.post(
			CONFIG.firecrawlApiEndpoint,
			{
				query: query,
				limit: 5, // Number of results to return
				scrapeOptions: {
					formats: ["markdown"],
					onlyMainContent: true,
				},
			},
			{
				headers: {
					Authorization: `Bearer ${CONFIG.firecrawlApiKey}`,
					"Content-Type": "application/json",
				},
			},
		);

		return response.data;
	} catch (error) {
		console.error("Firecrawl API error:", error.message);
		throw error;
	}
}

// Extract relevant information from search results
function extractInformation(searchResults, restaurant) {
	// Initialize extracted data
	let address = null;
	let coordinates = null;
	let imageUrl = null;
	let enhancedDescription = null;

	// Pattern to match addresses in Maple Grove
	const addressPattern =
		/\d+[^,]+(?:,\s*[^,]+)*,\s*(?:Maple Grove|MN|Minnesota)(?:,\s*MN)?\s*\d{5}/i;

	// Pattern to match coordinates in URLs
	const coordsPattern = /@([-\d.]+),([-\d.]+)/;

	// Process each search result
	if (Array.isArray(searchResults)) {
		for (const result of searchResults) {
			const url = result.url || "";
			const title = result.title || "";
			const content = result.content || result.description || "";

			// Look for address
			if (!address) {
				const contentMatch = content.match(addressPattern);
				const titleMatch = title.match(addressPattern);

				if (contentMatch) {
					address = contentMatch[0];
				} else if (titleMatch) {
					address = titleMatch[0];
				}
			}

			// Look for coordinates in map URLs
			if (!coordinates && (url.includes("map") || url.includes("location"))) {
				const coordsMatch = url.match(coordsPattern);
				if (coordsMatch && coordsMatch.length >= 3) {
					coordinates = {
						lat: Number.parseFloat(coordsMatch[1]),
						lng: Number.parseFloat(coordsMatch[2]),
					};
				}
			}

			// Look for image URL
			if (!imageUrl) {
				if (result.images && result.images.length > 0) {
					imageUrl = result.images[0]; // Use first image
				} else if (
					url.toLowerCase().includes("photo") ||
					url.toLowerCase().includes("image")
				) {
					imageUrl = url;
				}
			}

			// Look for better description
			if (
				!enhancedDescription &&
				content.length > 100 &&
				content.toLowerCase().includes(restaurant.name.toLowerCase())
			) {
				// Extract a reasonable sized description
				const sentences = content
					.split(/[.!?]+/)
					.filter((s) => s.trim().length > 0);
				const relevantSentences = sentences
					.filter(
						(s) =>
							s.toLowerCase().includes(restaurant.name.toLowerCase()) ||
							s.toLowerCase().includes("restaurant"),
					)
					.slice(0, 3);

				if (relevantSentences.length > 0) {
					enhancedDescription = relevantSentences.join(". ") + ".";
				}
			}
		}
	}

	return {
		address,
		coordinates,
		imageUrl,
		enhancedDescription,
	};
}

// Function to save JSON data
function saveJsonData(filename, data) {
	fs.writeFileSync(filename, JSON.stringify(data, null, 2));
	console.log(`Saved JSON data to ${filename}`);
}

// Function to save CSV data
function saveCsvData(filename, data) {
	const csv = Papa.unparse(data);
	fs.writeFileSync(filename, csv);
	console.log(`Saved CSV data to ${filename}`);
}

// Run the script if executed directly
processRestaurants()
	.then(() => console.log("Script completed successfully"))
	.catch((err) => {
		console.error("Script failed:", err);
		process.exit(1);
	});
