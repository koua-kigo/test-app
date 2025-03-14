# Restaurant Data Scraper

This project scrapes restaurant information from a list of URLs. It extracts:

- Restaurant name
- Address information (particularly in Maple Grove, Minnesota)
- Restaurant image (logo or photo)

## Prerequisites

- Node.js 16 or higher
- npm or yarn package manager

## Installation

1. Clone this repository or download the code
2. Install dependencies:

```bash
npm install
# or
yarn install
```

## How to Use

1. Make sure your `scripts/restaurants.json` file contains an array of restaurant URLs
2. Run the scraper using either:

```bash
# Using npm script
npm start

# Or using the shell script (recommended)
npm run scrape
# or directly
bash scripts/run-scraper.sh
```

3. The scraper will process the URLs in batches and save the results to `restaurant-data.json` in the project root

## Output Format

The output file `restaurant-data.json` contains:

- `scrapedAt`: Timestamp of when the scraping was performed
- `totalScraped`: Total number of URLs processed
- `validResults`: Number of URLs that yielded usable data
- `restaurants`: Array of restaurant data objects with:
  - `name`: The name of the restaurant
  - `address`: The address information found
  - `imageUrl`: URL of a restaurant image (logo or photo)
  - `sourceUrl`: The original URL that was scraped

## Project Structure

```
.
├── scripts/
│   ├── restaurants.json     # List of restaurant URLs to scrape
│   ├── scrape-restaurants.js # Main scraper script
│   └── run-scraper.sh       # Helper shell script
├── restaurant-data.json     # Output file (generated after running)
├── package.json
└── README.md
```

## Limitations

- Some websites may block web scraping or have unusual structures that the scraper can't handle
- The address extraction prioritizes finding information about Maple Grove, MN
- Image extraction attempts to find meaningful restaurant images, but may sometimes fail

## Customization

You can modify the selectors in the `scrapeRestaurantInfo` function to better target specific websites if needed.

## License

MIT

## Project Directory Structure

```
.
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── restaurants/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   ├── admin/
│   │   │   └── deals/
│   │   │       └── [id]/
│   │   │           └── edit/
│   │   │               └── page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── admin/
│   │   │   ├── deals/
│   │   │   │   └── edit-deal-form.tsx
│   │   │   └── restaurants-table.tsx
│   │   └── auth/
│   ├── db/
│   │   ├── models/
│   │   │   └── restaurants/
│   │   │       ├── restaurants.ts
│   │   │       ├── schema.ts
│   │   │       └── types.ts
│   │   ├── migrations/
│   │   └── drizzle.ts
│   ├── features/
│   │   └── restaurants/
│   │       ├── Restaurant.tsx
│   │       └── UserFacingRestaurantDetail.tsx
│   └── public/
│       ├── images/
│       └── svg/
├── .env
├── tailwind.config.js
├── drizzle.config.ts
├── next.config.js
└── package.json
```

Key Notes:

- Next.js app router structure with route groups `(public)`
- Drizzle ORM configuration for database models
- Feature-based organization with colocated components
- Admin/public separation with layout preservation
- TypeScript-first approach with strict type definitions
