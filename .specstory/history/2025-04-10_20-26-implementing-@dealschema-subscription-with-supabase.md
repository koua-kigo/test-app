<!-- Generated by SpecStory -->

# Implementing @dealSchema Subscription with Supabase (2025-04-10 15:26:48)

_**User**_

update the existing code to implement the @dealSchema subscription through @Supabase . use code below:
---


---

_**Assistant**_



---

I'll create a new hook called `useDealsSubscription` that subscribes to real-time deal updates from Supabase, similar to the existing `usePunchCardSubscription` hook but for restaurant deals.

---

```diff
- 
-   "use client";
- 
- import { useState, useEffect } from "react";
- 
- import type { PunchCard } from "@/types/db";
- import { getPunchCardsByUserId } from "@/db/models/punch-cards";
- import { supabaseClient } from "@/db/supabase-client";
- 
- export type PunchCardWithRestaurant = {
- 	id: bigint;
- 	userId: bigint;
- 	restaurantId: bigint;
- 	punches: number;
- 	completed: boolean;
- 	updatedAt: string | null;
+ 'use client'
+ 
+ import {useState, useEffect} from 'react'
+ import {supabaseClient} from '@/db/supabase-client'
+ import {z} from 'zod'
+ 
+ // Import or redefine the dealSchema
+ export const dealSchema = z.object({
+   id: z.bigint(),
+   name: z.string(),
+   description: z.string(),
+   imageUrl: z.string().url(),
+   restaurantId: z.bigint(),
+ })
+ 
+ export type Deal = z.infer<typeof dealSchema>
+ 
+ export type DealWithRestaurant = Deal & {
    restaurant: {
- 		id: bigint;
- 		name: string;
- 		description: string;
- 		imageUrl: string;
- 		address: string;
- 		qrCodeUrl: string | null;
- 	};
- };
+     id: bigint
+     name: string
+     description: string
+     imageUrl: string
+     address: string
+     qrCodeUrl: string | null
+   }
+ }
  
  /**
-  * A hook for subscribing to real-time punch card updates
-  * @param userId The user ID to subscribe to punch cards for
-  * @returns The updated punch cards array
+  * A hook for subscribing to real-time restaurant deals updates
+  * @param restaurantId Optional restaurant ID to filter deals
+  * @returns The updated deals array with loading and error states
   */
- export function usePunchCardSubscription(userId: bigint) {
- 	const [punchCards, setPunchCards] = useState<PunchCardWithRestaurant[]>([]);
- 	const [isLoading, setIsLoading] = useState(true);
- 	const [error, setError] = useState<Error | null>(null);
+ export function useDealsSubscription(restaurantId?: bigint) {
+   const [deals, setDeals] = useState<DealWithRestaurant[]>([])
+   const [isLoading, setIsLoading] = useState(true)
+   const [error, setError] = useState<Error | null>(null)
  
- 	// Fetch initial punch cards
+   // Fetch initial deals
    useEffect(() => {
- 		const fetchPunchCards = async () => {
+     const fetchDeals = async () => {
        try {
- 				setIsLoading(true);
+         setIsLoading(true)
+ 
+         // Create the API URL with optional restaurant filter
+         const apiUrl = restaurantId
+           ? `/api/deals?restaurantId=${restaurantId}`
+           : '/api/deals'
  
- 				// Use the client-side API endpoint to get punch cards
- 				const response = await fetch(`/api/punch-cards?userId=${userId}`);
+         // Use the client-side API endpoint to get deals
+         const response = await fetch(apiUrl)
  
          if (!response.ok) {
- 					throw new Error("Failed to fetch punch cards");
+           throw new Error('Failed to fetch deals')
          }
  
- 				const { success, data, error } = await response.json();
+         const {success, data, error} = await response.json()
  
          if (!success) {
- 					throw new Error(error || "Failed to fetch punch cards");
+           throw new Error(error || 'Failed to fetch deals')
          }
  
- 				console.log("🚀 ~ fetchPunchCards ~ punchCards:", data);
- 				setPunchCards(data);
+         console.log('🚀 ~ fetchDeals ~ deals:', data)
+         setDeals(data)
        } catch (err) {
- 				console.error("Error fetching punch cards:", err);
+         console.error('Error fetching deals:', err)
          setError(
- 					err instanceof Error ? err : new Error("Unknown error occurred"),
- 				);
+           err instanceof Error ? err : new Error('Unknown error occurred')
+         )
        } finally {
- 				setIsLoading(false);
+         setIsLoading(false)
        }
- 		};
- 
- 		if (userId) {
- 			fetchPunchCards();
      }
- 	}, [userId]);
+ 
+     fetchDeals()
+   }, [restaurantId])
  
    // Set up real-time subscription
    useEffect(() => {
- 		if (!userId) return;
- 
- 		// Convert bigint to string for the subscription
- 		const userIdStr = userId.toString();
- 
- 		// Subscribe to punch card changes for this user
- 		const subscription = supabaseClient
- 			.channel("punch-cards")
+     // Prepare filter if restaurantId is provided
+     const filter = restaurantId
+       ? `restaurant_id=eq.${restaurantId.toString()}`
+       : undefined
+ 
+     // Subscribe to INSERT events on restaurant_deals table
+     const insertChannel = supabaseClient
+       .channel('deals-insert-channel')
+       .on(
+         'postgres_changes',
+         {
+           event: 'INSERT',
+           schema: 'public',
+           table: 'restaurant_deals',
+           filter,
+         },
+         async (payload) => {
+           console.log('Deal INSERT received:', payload)
+           await refreshDeals()
+         }
+       )
+       .subscribe()
+ 
+     // Subscribe to UPDATE events on restaurant_deals table
+     const updateChannel = supabaseClient
+       .channel('deals-update-channel')
        .on(
- 				"postgres_changes",
+         'postgres_changes',
          {
- 					event: "*", // Listen to all events (insert, update, delete)
- 					schema: "public",
- 					table: "punch_cards",
- 					filter: `user_id=eq.${userIdStr}`,
+           event: 'UPDATE',
+           schema: 'public',
+           table: 'restaurant_deals',
+           filter,
+         },
+         async (payload) => {
+           console.log('Deal UPDATE received:', payload)
+           await refreshDeals()
+         }
+       )
+       .subscribe()
+ 
+     // Subscribe to DELETE events on restaurant_deals table
+     const deleteChannel = supabaseClient
+       .channel('deals-delete-channel')
+       .on(
+         'postgres_changes',
+         {
+           event: 'DELETE',
+           schema: 'public',
+           table: 'restaurant_deals',
+           filter,
          },
          async (payload) => {
- 					console.log("Punch card change received:", payload);
- 
- 					try {
- 						// Refresh the data using the API endpoint
- 						const response = await fetch(`/api/punch-cards?userId=${userId}`);
+           console.log('Deal DELETE received:', payload)
+           await refreshDeals()
+         }
+       )
+       .subscribe()
+ 
+     // Helper function to refresh deals data
+     const refreshDeals = async () => {
+       try {
+         const apiUrl = restaurantId
+           ? `/api/deals?restaurantId=${restaurantId}`
+           : '/api/deals'
+ 
+         const response = await fetch(apiUrl)
  
          if (!response.ok) {
- 							throw new Error("Failed to fetch updated punch cards");
+           throw new Error('Failed to fetch updated deals')
          }
  
- 						const { success, data, error } = await response.json();
+         const {success, data, error} = await response.json()
  
          if (!success) {
- 							throw new Error(error || "Failed to fetch updated punch cards");
+           throw new Error(error || 'Failed to fetch updated deals')
          }
  
- 						setPunchCards(data);
+         setDeals(data)
        } catch (err) {
- 						console.error("Error updating punch cards:", err);
+         console.error('Error updating deals:', err)
        }
- 				},
- 			)
- 			.subscribe();
- 		console.log("🚀 ~ useEffect ~ subscription:", subscription);
- 		// Clean up subscription on unmount
+     }
+ 
+     // Clean up subscriptions on unmount
      return () => {
- 			subscription.unsubscribe();
- 		};
- 	}, [userId]);
+       insertChannel.unsubscribe()
+       updateChannel.unsubscribe()
+       deleteChannel.unsubscribe()
+     }
+   }, [restaurantId])
  
    return {
- 		punchCards,
+     deals,
      isLoading,
      error,
- 	};
+   }
  }
  
```

---

I've implemented the `useDealsSubscription` hook which subscribes to real-time updates for restaurant deals using Supabase. This hook:

1. Fetches initial deals from an API endpoint
2. Sets up real-time subscriptions for INSERT, UPDATE, and DELETE events on the restaurant_deals table
3. Refreshes the deals data whenever changes are detected
4. Provides loading and error states

Key features:
- Optional restaurantId parameter to filter deals by restaurant
- Separate channels for each event type (insert, update, delete)
- Proper cleanup of all subscriptions when the component unmounts
- Type definitions based on the dealSchema

Now you can use this hook in any component to get real-time updates of restaurant deals:

```tsx
const { deals, isLoading, error } = useDealsSubscription();
// Or with a specific restaurant
const { deals, isLoading, error } = useDealsSubscription(restaurantId);
```

---

_**User**_

The deals subscription should not subscribe to any particular restaurants deals but to all deal inserts

---

_**Assistant**_



---

I'll update the hook to subscribe to all deal inserts without filtering by restaurant.

---

```diff
  
  /**
-  * A hook for subscribing to real-time restaurant deals updates
-  * @param restaurantId Optional restaurant ID to filter deals
+  * A hook for subscribing to real-time restaurant deals updates for all restaurants
   * @returns The updated deals array with loading and error states
   */
- export function useDealsSubscription(restaurantId?: bigint) {
+ export function useDealsSubscription() {
    const [deals, setDeals] = useState<DealWithRestaurant[]>([])
    const [isLoading, setIsLoading] = useState(true)
```

```diff
          setIsLoading(true)
  
-         // Create the API URL with optional restaurant filter
-         const apiUrl = restaurantId
-           ? `/api/deals?restaurantId=${restaurantId}`
-           : '/api/deals'
- 
-         // Use the client-side API endpoint to get deals
-         const response = await fetch(apiUrl)
+         // Use the client-side API endpoint to get all deals
+         const response = await fetch('/api/deals')
  
          if (!response.ok) {
```

```diff
  
      fetchDeals()
-   }, [restaurantId])
+   }, [])
  
    // Set up real-time subscription
    useEffect(() => {
-     // Prepare filter if restaurantId is provided
-     const filter = restaurantId
-       ? `restaurant_id=eq.${restaurantId.toString()}`
-       : undefined
- 
      // Subscribe to INSERT events on restaurant_deals table
      const insertChannel = supabaseClient
```

```diff
            schema: 'public',
            table: 'restaurant_deals',
-           filter,
          },
          async (payload) => {
+           console.log('🚀 ~ payload:', payload)
            console.log('Deal INSERT received:', payload)
            await refreshDeals()
```

```diff
            schema: 'public',
            table: 'restaurant_deals',
-           filter,
          },
          async (payload) => {
            console.log('🚀 ~ payload:', payload)
- 
            console.log('Deal UPDATE received:', payload)
            await refreshDeals()
```

```diff
            schema: 'public',
            table: 'restaurant_deals',
-           filter,
          },
          async (payload) => {
```

```diff
      const refreshDeals = async () => {
        try {
-         const apiUrl = restaurantId
-           ? `/api/deals?restaurantId=${restaurantId}`
-           : '/api/deals'
- 
-         const response = await fetch(apiUrl)
+         const response = await fetch('/api/deals')
  
          if (!response.ok) {
```

```diff
        deleteChannel.unsubscribe()
      }
-   }, [restaurantId])
+   }, [])
  
    return {
```

---

I've updated the hook to subscribe to all deal inserts without filtering by any specific restaurant. Here are the changes:

1. Removed the `restaurantId` parameter from the hook function
2. Removed all filtering logic in the Supabase subscriptions (removed the `filter` property)
3. Simplified the API endpoint calls to always fetch all deals using `/api/deals` without any query parameters
4. Updated the dependency arrays in both useEffect hooks to reflect that we no longer depend on a restaurantId

Now the hook will always subscribe to all deal changes (inserts, updates, and deletes) across all restaurants, and the returned `deals` array will contain all restaurant deals in the system. This makes the hook simpler and follows your requirement to subscribe to all deal inserts rather than those for a specific restaurant.

---

_**User**_

add the supporting cod@route.ts deals

---

_**Assistant**_



---

I'll create the API route for dealing with restaurant deals at `src/app/api/deals/route.ts`.

---

```diff
- 
+ import { type NextRequest, NextResponse } from "next/server";
+ import { db } from "@/db";
+ import { and, eq } from "drizzle-orm";
+ import { restaurantDeals, restaurants } from "@/db/schema";
+ 
+ /**
+  * GET /api/deals
+  *
+  * Retrieves all deals or deals for a specific restaurant
+  *
+  * Query parameters:
+  * - restaurantId (optional): Filter deals by restaurant ID
+  */
+ export async function GET(request: NextRequest) {
+ 	try {
+ 		const { searchParams } = new URL(request.url);
+ 		const restaurantId = searchParams.get("restaurantId");
+ 
+ 		let query = db
+ 			.select({
+ 				id: restaurantDeals.id,
+ 				name: restaurantDeals.name,
+ 				description: restaurantDeals.description,
+ 				imageUrl: restaurantDeals.imageUrl,
+ 				restaurantId: restaurantDeals.restaurantId,
+ 				restaurant: {
+ 					id: restaurants.id,
+ 					name: restaurants.name,
+ 					description: restaurants.description,
+ 					imageUrl: restaurants.imageUrl,
+ 					address: restaurants.address,
+ 					qrCodeUrl: restaurants.qrCodeUrl,
+ 				},
+ 			})
+ 			.from(restaurantDeals)
+ 			.innerJoin(restaurants, eq(restaurantDeals.restaurantId, restaurants.id));
+ 
+ 		// If restaurantId is provided, filter by it
+ 		if (restaurantId) {
+ 			const bigintId = BigInt(restaurantId);
+ 			query = query.where(eq(restaurantDeals.restaurantId, bigintId));
+ 		}
+ 
+ 		const deals = await query;
+ 
+ 		return NextResponse.json({
+ 			success: true,
+ 			data: deals,
+ 		});
+ 	} catch (error) {
+ 		console.error("Error fetching deals:", error);
+ 		return NextResponse.json(
+ 			{
+ 				success: false,
+ 				error: "Failed to fetch deals",
+ 			},
+ 			{ status: 500 },
+ 		);
+ 	}
+ }
+ 
+ /**
+  * POST /api/deals
+  *
+  * Creates a new deal
+  *
+  * Body: {
+  *   name: string;
+  *   description: string;
+  *   imageUrl: string;
+  *   restaurantId: bigint;
+  * }
+  */
+ export async function POST(request: NextRequest) {
+ 	try {
+ 		const body = await request.json();
+ 
+ 		// Validate required fields
+ 		if (
+ 			!body.name ||
+ 			!body.description ||
+ 			!body.imageUrl ||
+ 			!body.restaurantId
+ 		) {
+ 			return NextResponse.json(
+ 				{
+ 					success: false,
+ 					error: "Missing required fields",
+ 				},
+ 				{ status: 400 },
+ 			);
+ 		}
+ 
+ 		// Convert restaurantId to BigInt
+ 		const restaurantId = BigInt(body.restaurantId);
+ 
+ 		// Check if restaurant exists
+ 		const restaurantExists = await db
+ 			.select({ id: restaurants.id })
+ 			.from(restaurants)
+ 			.where(eq(restaurants.id, restaurantId))
+ 			.limit(1);
+ 
+ 		if (restaurantExists.length === 0) {
+ 			return NextResponse.json(
+ 				{
+ 					success: false,
+ 					error: "Restaurant not found",
+ 				},
+ 				{ status: 404 },
+ 			);
+ 		}
+ 
+ 		// Create the deal
+ 		const [newDeal] = await db
+ 			.insert(restaurantDeals)
+ 			.values({
+ 				name: body.name,
+ 				description: body.description,
+ 				imageUrl: body.imageUrl,
+ 				restaurantId,
+ 			})
+ 			.returning();
+ 
+ 		return NextResponse.json({
+ 			success: true,
+ 			data: newDeal,
+ 		});
+ 	} catch (error) {
+ 		console.error("Error creating deal:", error);
+ 		return NextResponse.json(
+ 			{
+ 				success: false,
+ 				error: "Failed to create deal",
+ 			},
+ 			{ status: 500 },
+ 		);
+ 	}
+ }
+ 
```

---

Now I need to create the schema definition for the restaurant deals table. Let's add it to the database schema file.

---

<details>
            <summary>Searched codebase "database schema drizzle" • **25** results</summary>
        
| File | Lines |
|------|-------|
| `src/db/drizzle/meta/0000_snapshot.json` | L304-380 |
| `src/db/drizzle/meta/0001_snapshot.json` | L304-380 |
| `src/db/drizzle/meta/0002_snapshot.json` | L304-380 |
| `src/db/drizzle/meta/0003_snapshot.json` | L304-380 |
| `src/db/drizzle/meta/0004_snapshot.json` | L304-380 |
| `src/db/drizzle/meta/0000_snapshot.json` | L119-168 |
| `src/db/drizzle/meta/0001_snapshot.json` | L119-168 |
| `src/db/drizzle/meta/0004_snapshot.json` | L119-168 |
| `src/db/drizzle/meta/0003_snapshot.json` | L119-168 |
| `src/db/drizzle/schema.ts` | L1-31 |
| `src/db/drizzle/meta/0002_snapshot.json` | L119-168 |
| `src/db/drizzle/meta/0000_snapshot.json` | L202-257 |
| `src/db/drizzle/meta/0001_snapshot.json` | L202-257 |
| `src/db/drizzle/meta/0004_snapshot.json` | L202-257 |
| `src/db/drizzle/meta/0002_snapshot.json` | L202-257 |
| `src/db/drizzle/meta/0003_snapshot.json` | L202-257 |
| `src/db/drizzle/schema.ts` | L31-47 |
| `src/db/db.ts` | L1-23 |
| `src/db/drizzle/meta/0002_snapshot.json` | L594-678 |
| `src/db/drizzle/meta/0001_snapshot.json` | L545-594 |
| `src/db/drizzle/meta/0000_snapshot.json` | L545-588 |
| `src/db/drizzle/meta/0003_snapshot.json` | L567-639 |
| `src/db/drizzle/schema.ts` | L79-105 |
| `src/db/drizzle/meta/0004_snapshot.json` | L567-639 |
| `src/db/drizzle/meta/0001_snapshot.json` | L594-659 |

</details>

---

Let's find the main database schema file.

---

<details>
            <summary>Searched codebase "schema.ts" • **3** results</summary>
        
| File |
|------|
| `undefined` |
| `undefined` |
| `undefined` |

</details>

---

Let's examine the main database schema file:

---

Could not find file 'src/db/schema.ts'. Did you mean one of:
- src/db/drizzle/schema.ts

---

Read file: src/db/drizzle/schema.ts

---

Great, I found the database schema. Now, I'll check if we need to modify the existing `restaurantDeals` table to match our needs.

---

```diff
  		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
  		restaurantId: bigserial("restaurant_id", { mode: "bigint" }).notNull(),
- 		title: text().notNull(),
- 		content: text().notNull(),
+ 		name: text().notNull(),
+ 		description: text().notNull(),
+ 		imageUrl: text("image_url").notNull(),
  		active: boolean().default(true),
  		createdAt: timestamp("created_at", {
```

---

Now let's modify the Schema import in the API route:

---

```diff
  import { db } from "@/db";
  import { and, eq } from "drizzle-orm";
- import { restaurantDeals, restaurants } from "@/db/schema";
+ import { restaurantDeals, restaurants } from "@/db/drizzle/schema";
  
  /**
```

---

Now let's enable the migrations for the schema changes we made:

---

```bash
npm run generate
```

```

> restaurant-passport-app@0.1.0 generate
> node scripts/dev.js generate

node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/liamellis/Desktop/resta
urant-passport-app/scripts/m
odules/commands.js' imported from /Users/liamellis/Desktop/restaurant-passport-a
pp/scripts/dev.js               at finalizeResolution (node:internal/modules/esm
/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:860:10)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:736:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:660:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:643:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:279:
38)
    at ModuleJob._link (node:internal/modules/esm/module_job:137:49) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///Users/liamellis/Desktop/restaurant-passport-app/scripts/modules/
commands.js'
}

Node.js v23.9.0

```

---

Let's check if there's a different command for generating schema migrations:

---

```bash
npm run -w | grep drizzle
```

```
Liams-MacBook-Pro-2021:restaurant-passport-app liamellis$ npm run -w | grep drizzle
npm error No workspaces found:
npm error   --workspace=true
npm error A complete log of this run can be found in: /Users/liamellis/.npm/_logs/2025-04-10T20_45_26_015Z-d
ebug-0.log
Liams-MacBook-Pro-2021:restaurant-passport-app liamellis$
```

---

```bash
npm run
```

```
Liams-MacBook-Pro-2021:restaurant-passport-app liamellis$ npm run
Lifecycle scripts included in restaurant-passport-app@0.1.0:
  start
    bun --bun next start
available via `npm run-script`:
  dev
    bun --bun next dev
  build
    bun --bun next build
  lint
    bun --bun next lint
  storybook
    storybook dev -p 6006
  build:storybook
    storybook build
  new
    plop
  drizzle:generate
    bun drizzle-kit generate --config=./drizzle.config.ts
  drizzle:migrate
    bun drizzle-kit migrate --config=./drizzle.config.ts
  scrape
    bash scripts/run-scraper.sh
  list
    node scripts/dev.js list
  generate
    node scripts/dev.js generate
  parse-prd
    node scripts/dev.js parse-prd
Liams-MacBook-Pro-2021:restaurant-passport-app liamellis$
```

---

Now we'll run the Drizzle migration command to generate migration files based on our schema changes:

---

```bash
bun drizzle-kit generate --config=./drizzle.config.ts
```

```
Liams-MacBook-Pro-2021:restaurant-passport-app liamellis$ bun drizzle-kit generate --config=./drizzle.config
.ts
Reading config file '/Users/liamellis/Desktop/restaurant-passport-app/drizzle.config.ts'

Is name column in restaurant_deals table created or renamed from another column?
❯ + name           create column
  ~ title › name   rename column
  ~ content › name rename column
^C
error: "drizzle-kit" exited with code 1
Liams-MacBook-Pro-2021:restaurant-passport-app liamellis$
```

---

Since we're making column name changes to an existing table, we need to guide the migration process to rename the columns rather than create new ones. Let's run the command again and select the rename options:

---

```bash
echo 'Skip migrations for now and create another file for migration instructions'
```

```
Liams-MacBook-Pro-2021:restaurant-passport-app liamellis$ echo 'Skip migrations for now and create another f
ile for migration instructions'
Skip migrations for now and create another file for migration instructions
Liams-MacBook-Pro-2021:restaurant-passport-app liamellis$
```

---

Let's create a migration instructions file to guide how to complete the migration:

---

```diff
- 
+ # Migration Instructions for Restaurant Deals Table
+ 
+ ## Schema Changes Made
+ 
+ We've updated the `restaurantDeals` table in `src/db/drizzle/schema.ts` to match our dealSchema format:
+ 
+ 1. Renamed `title` column to `name`
+ 2. Renamed `content` column to `description`
+ 3. Added new `imageUrl` column
+ 
+ ## Running the Migration
+ 
+ When ready to apply these changes to your database, use the following steps:
+ 
+ 1. Run the Drizzle migration generator:
+ 
+    ```bash
+    bun drizzle-kit generate --config=./drizzle.config.ts
+    ```
+ 
+ 2. When prompted about column changes, select:
+    - For `name` column: `~ title › name rename column`
+    - For `description` column: `~ content › description rename column`
+    - For `imageUrl` column: `+ imageUrl create column`
+ 
+ 3. After the migration files are generated, review them in the `drizzle` folder.
+ 
+ 4. Apply the migrations to your database:
+ 
+    ```bash
+    bun drizzle-kit migrate --config=./drizzle.config.ts
+    ```
+ 
+ ## Data Migration
+ 
+ If you have existing data in the `restaurant_deals` table, you'll need to ensure:
+ 
+ 1. All existing `title` values are copied to the new `name` column
+ 2. All existing `content` values are copied to the new `description` column
+ 3. Populate the new `imageUrl` column for existing records with valid image URLs
+ 
+ You may need to write a SQL script or use a tool like Supabase or pgAdmin to update existing records.
+ 
+ ## Verification
+ 
+ After migration, verify that:
+ 
+ 1. The API endpoints return the correct data structure
+ 2. The real-time subscription still works with the updated schema
+ 3. Any UI components displaying deal data are updated to use the new field names
+ 
+ ## Rollback Plan
+ 
+ If issues arise, you can rollback the changes by:
+ 
+ 1. Renaming the columns back to their original names
+ 2. Running a new migration to apply those changes
+ 3. Restoring data from a backup if necessary
+ 
```

---

Great! I've completed everything needed for the restaurant deals subscription feature:

1. Created a new `useDealsSubscription` hook in `src/hooks/useDealsSubscription.tsx` that:
   - Subscribes to all deal inserts, updates, and deletes via Supabase real-time
   - Refreshes data when changes are detected
   - Provides loading and error states

2. Created a new API route at `src/app/api/deals/route.ts` that:
   - Handles GET requests to fetch all deals or deals for a specific restaurant
   - Handles POST requests to create new deals
   - Includes proper error handling and validation

3. Updated the `restaurantDeals` table schema in `src/db/drizzle/schema.ts` to include the fields we need:
   - Changed `title` to `name`
   - Changed `content` to `description`
   - Added `imageUrl` field

4. Created migration instructions in `MIGRATION_INSTRUCTIONS.md` to guide you through applying these schema changes to your database.

To fully implement this feature, you'll need to:

1. Follow the migration instructions to update your database schema
2. Use the `useDealsSubscription` hook in your components to display deals with real-time updates

Example usage in a component:

```tsx
import { useDealsSubscription } from "@/hooks/useDealsSubscription";

export default function DealsPage() {
  const { deals, isLoading, error } = useDealsSubscription();
  
  if (isLoading) return <div>Loading deals...</div>;
  if (error) return <div>Error loading deals: {error.message}</div>;
  
  return (
    <div>
      <h1>Latest Restaurant Deals</h1>
      <div className="deals-grid">
        {deals.map(deal => (
          <DealCard 
            key={deal.id.toString()} 
            deal={deal} 
          />
        ))}
      </div>
    </div>
  );
}
```

---

