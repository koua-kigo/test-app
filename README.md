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

# Restaurant Passport App

A digital punch card and loyalty system built with Next.js, TypeScript, Tailwind CSS, ShadCN UI, and Supabase.

## Features

- Digital Punch Cards: Users earn punches at participating restaurants
- Real-time updates: Instantly see punch card updates via Supabase real-time subscriptions
- Role-Based Authorization: User, Restaurant Admin, System Admin roles
- QR Code Validation: Staff can scan a user's QR code to add a punch instantly
- Prizes & Raffles: Prize management, redemption tracking, and raffle entries
- Points & Achievements: Gamified point transfer system with achievements
- Analytics Dashboard: Restaurant-level analytics for punch cards, user activity, and prize redemptions

## Getting Started

### Prerequisites

- Bun (1.2.4 or higher)
- Node.js (v18 or higher)
- Supabase account (for real-time subscriptions)

### Setup

1. Clone the repository
2. Install dependencies:

   ```
   bun install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Update the required environment variables:

     ```
     # Supabase for real-time subscriptions
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     
     # Database
     DATABASE_URL=your-database-url
     
     # Clerk Authentication
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
     CLERK_SECRET_KEY=your-clerk-secret-key
     ```

4. Run the development server:

   ```
   bun dev
   ```

## Real-time Punch Card Subscriptions

The app uses Supabase real-time features to provide instant updates to users when their punch cards change:

1. When a user's punch card is updated (e.g., a new punch is added), Supabase sends a real-time notification
2. The client automatically refreshes the punch card data without requiring a page reload
3. Users see their updated punch cards in real-time

### Implementation

The real-time subscription is implemented using:

- `usePunchCardSubscription` hook: Manages the subscription to punch card changes
- Supabase client: Connects to Supabase real-time API
- API routes: Fetch the latest punch card data when changes occur

## Development

### Using Bun

This project uses Bun as the package manager and runtime. Common commands:

- `bun install`: Install dependencies
- `bun dev`: Start development server
- `bun build`: Build for production
- `bun start`: Start production server
- `bun lint`: Run linting

### Database

Database migrations are managed with Drizzle:

- `bun drizzle:generate`: Generate migrations
- `bun drizzle:migrate`: Apply migrations
