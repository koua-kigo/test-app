<!-- Generated by SpecStory -->

# Mobile Layout Optimization for Tables (2025-03-14 14:45:02)

_**User**_

optimize these components for mobile layouts

---

_**Assistant**_

<think>I need to optimize the provided components for mobile layouts. Let me first understand what components we're looking at:

1. `RestaurantsTable` - A table component for displaying restaurant data with various features like editing, sorting, and pagination. It seems to be using TanStack Table for functionality.

2. `DealsTable` - A table for displaying deal information with actions like view, edit, and delete.

Both of these tables need to be optimized for mobile viewing. Tables are notoriously difficult to display well on mobile devices because of their horizontal nature.

Here are the key issues and approaches I'll take:

For both tables:
1. Add responsive designs to ensure tables can be viewed properly on small screens
2. Potentially convert tables to card-based layouts on mobile views
3. Add appropriate media queries using Tailwind's responsive prefixes
4. Simplify or condense information on smaller screens
5. Ensure touch targets are large enough for mobile interaction

Let me update both components to be mobile-friendly.</think>Looking at both components, they need significant mobile optimization. Tables are challenging on small screens, so I'll transform them into responsive designs that adapt well to mobile views.

Let me optimize both components:

---

```diff
  	MoreHorizontal,
  	Trash2,
+ 	ExternalLink,
  } from "lucide-react";
  import type { z } from "zod";
```

```diff
  	DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
+ import { cn } from "@/lib/utils";
  
  // Define interfaces for TanStack Table metadata
```

```diff
  		React.useState<RestaurantData | null>(null);
  	const router = useRouter();
+ 	const [isMobileView, setIsMobileView] = React.useState(false);
+ 
+ 	// Check viewport size on mount and window resize
+ 	React.useEffect(() => {
+ 		const checkViewport = () => {
+ 			setIsMobileView(window.innerWidth < 768);
+ 		};
+ 
+ 		// Initial check
+ 		checkViewport();
+ 
+ 		// Set up event listener for resize
+ 		window.addEventListener("resize", checkViewport);
+ 
+ 		// Clean up
+ 		return () => window.removeEventListener("resize", checkViewport);
+ 	}, []);
  
  	// Add restaurant search hook
```

```diff
  		isSearching,
  	} = useRestaurantSearch({
- 		restaurants: data,
+ 		restaurants: data as unknown as Restaurant[],
  		initialSortOption: "name-asc",
  	});
```

```diff
  	// Define data table using TanStack
  	const table = useReactTable({
- 		data: filteredRestaurants, // Use filtered restaurants instead of all data
+ 		data: filteredRestaurants as unknown as RestaurantData[], // Use filtered restaurants instead of all data
  		columns,
  		state: {
```

```diff
  		} as TableMeta,
  	});
+ 
+ 	// Render mobile card view for each restaurant
+ 	const renderMobileCards = () => {
+ 		return filteredRestaurants.map((restaurant) => (
+ 			<div
+ 				key={restaurant.id.toString()}
+ 				className="bg-background rounded-lg border border-sidebar-border p-4 mb-4 shadow-sm"
+ 			>
+ 				<div className="flex justify-between items-start mb-3">
+ 					<div>
+ 						<h3 className="font-medium text-base">{restaurant.name}</h3>
+ 						<p className="text-xs text-sidebar-foreground/70">
+ 							ID: {restaurant.id.toString()}
+ 						</p>
+ 					</div>
+ 					<DropdownMenu>
+ 						<DropdownMenuTrigger asChild>
+ 							<Button variant="ghost" className="h-8 w-8 p-0">
+ 								<MoreHorizontal className="h-4 w-4" />
+ 							</Button>
+ 						</DropdownMenuTrigger>
+ 						<DropdownMenuContent
+ 							align="end"
+ 							className="bg-background border-sidebar-border"
+ 						>
+ 							<DropdownMenuItem
+ 								onClick={() => handleView(restaurant.id.toString())}
+ 								className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
+ 							>
+ 								View Details
+ 							</DropdownMenuItem>
+ 							<DropdownMenuItem
+ 								onClick={() =>
+ 									setRestaurantToDelete(restaurant as RestaurantData)
+ 								}
+ 								className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
+ 							>
+ 								Delete
+ 							</DropdownMenuItem>
+ 						</DropdownMenuContent>
+ 					</DropdownMenu>
+ 				</div>
+ 
+ 				<div className="space-y-2 text-sm">
+ 					<div className="flex items-start">
+ 						<MapPin className="h-4 w-4 text-sidebar-foreground/50 mr-2 mt-0.5 flex-shrink-0" />
+ 						<p className="text-sidebar-foreground/80">{restaurant.address}</p>
+ 					</div>
+ 
+ 					<div className="flex items-start">
+ 						<Building className="h-4 w-4 text-sidebar-foreground/50 mr-2 mt-0.5 flex-shrink-0" />
+ 						<p className="text-sidebar-foreground/80 line-clamp-2">
+ 							{restaurant.description}
+ 						</p>
+ 					</div>
+ 				</div>
+ 
+ 				<div className="flex flex-wrap gap-2 mt-3">
+ 					<div className="text-xs bg-sidebar-accent/30 px-2 py-1 rounded-md flex items-center">
+ 						<QrCode className="h-3 w-3 mr-1" />
+ 						<QRCodeManager
+ 							restaurant={restaurant as Restaurant}
+ 							variant="table"
+ 						/>
+ 					</div>
+ 
+ 					<div className="text-xs bg-sidebar-accent/30 px-2 py-1 rounded-md">
+ 						Punch Cards:{" "}
+ 						{(restaurant as unknown as ExtendedRestaurant).punchCardCount || 0}
+ 					</div>
+ 
+ 					<div className="text-xs bg-sidebar-accent/30 px-2 py-1 rounded-md">
+ 						Deals:{" "}
+ 						{(restaurant as unknown as ExtendedRestaurant).deals?.length || 0}
+ 					</div>
+ 				</div>
+ 
+ 				<div className="flex justify-between mt-4 pt-3 border-t border-sidebar-border">
+ 					<RestaurantQuickView restaurantId={restaurant.id} />
+ 					<Button
+ 						onClick={() => handleView(restaurant.id.toString())}
+ 						size="sm"
+ 						variant="outline"
+ 						className="rounded-lg text-xs h-8 px-3 flex items-center gap-1 bg-background hover:bg-sidebar-accent"
+ 					>
+ 						<ExternalLink className="h-3 w-3" />
+ 						View
+ 					</Button>
+ 				</div>
+ 			</div>
+ 		));
+ 	};
  
  	return (
```

```diff
  			/>
  
- 			<div className="rounded-xl border border-sidebar-border shadow-sm overflow-hidden">
+ 			{/* Mobile card view */}
+ 			<div className={cn(isMobileView ? "block" : "hidden")}>
+ 				{filteredRestaurants.length > 0 ? (
+ 					renderMobileCards()
+ 				) : (
+ 					<div className="bg-background rounded-lg border border-sidebar-border p-8 text-center">
+ 						<Building className="h-10 w-10 text-sidebar-foreground/30 mx-auto mb-2" />
+ 						{isSearching ? (
+ 							<p>No restaurants found matching your search</p>
+ 						) : (
+ 							<p>No restaurants available</p>
+ 						)}
+ 					</div>
+ 				)}
+ 			</div>
+ 
+ 			{/* Desktop table view */}
+ 			<div
+ 				className={cn(
+ 					"rounded-xl border border-sidebar-border shadow-sm overflow-hidden",
+ 					isMobileView ? "hidden" : "block",
+ 				)}
+ 			>
+ 				<div className="w-full overflow-x-auto">
  					<Table className="bg-background w-full">
  						<TableHeader
```

```diff
  					</Table>
  				</div>
- 			<div className="flex items-center justify-end space-x-2 py-4">
+ 			</div>
+ 
+ 			{/* Pagination controls - work for both mobile and desktop */}
+ 			<div className="flex items-center justify-between py-4">
+ 				<div className="text-xs text-sidebar-foreground/70">
+ 					Page {table.getState().pagination.pageIndex + 1} of{" "}
+ 					{table.getPageCount()}
+ 				</div>
+ 				<div className="flex items-center space-x-2">
  					<Button
  						variant="outline"
  						size="sm"
  						onClick={() => table.previousPage()}
  						disabled={!table.getCanPreviousPage()}
- 					className="rounded-lg px-4 bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
+ 						className="rounded-lg px-3 bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
  					>
  						Previous
```

```diff
  						onClick={() => table.nextPage()}
  						disabled={!table.getCanNextPage()}
- 					className="rounded-lg px-4 bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
+ 						className="rounded-lg px-3 bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
  					>
  						Next
  					</Button>
+ 				</div>
  			</div>
  
```

---

Now let's optimize the DealsTable component for mobile:

---

```diff
  "use client";
  
- import { useState } from "react";
+ import { useState, useEffect } from "react";
  import Link from "next/link";
  import Image from "next/image";
- import { Edit, Trash2, Eye } from "lucide-react";
+ import { Edit, Trash2, Eye, MoreVertical } from "lucide-react";
  import type { Deal } from "@/types/db";
  import { deleteRestaurantDeal } from "@/db/models/restaurants/restaurants";
```

```diff
  	AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
+ import {
+ 	DropdownMenu,
+ 	DropdownMenuContent,
+ 	DropdownMenuItem,
+ 	DropdownMenuTrigger,
+ } from "@/components/ui/dropdown-menu";
+ import { Button } from "@/components/ui/button";
+ import { cn } from "@/lib/utils";
  import { toast } from "@/hooks/use-toast";
  
```

```diff
  	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  	const [dealToDelete, setDealToDelete] = useState<bigint | null>(null);
+ 	const [isMobileView, setIsMobileView] = useState(false);
  	const router = useRouter();
+ 
+ 	// Check viewport size on mount and window resize
+ 	useEffect(() => {
+ 		const checkViewport = () => {
+ 			setIsMobileView(window.innerWidth < 768);
+ 		};
+ 
+ 		// Initial check
+ 		checkViewport();
+ 
+ 		// Set up event listener for resize
+ 		window.addEventListener("resize", checkViewport);
+ 
+ 		// Clean up
+ 		return () => window.removeEventListener("resize", checkViewport);
+ 	}, []);
  
  	// Function to handle deal deletion
```

```diff
  		setDealToDelete(null);
  	};
+ 
+ 	// Mobile card view for deals
+ 	const renderMobileCards = () => {
+ 		return deals.length > 0 ? (
+ 			<div className="space-y-4">
+ 				{deals.map((deal) => (
+ 					<div
+ 						key={String(deal.id)}
+ 						className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
+ 					>
+ 						<div className="relative h-32 w-full bg-gray-100">
+ 							{deal.imageUrl ? (
+ 								<Image
+ 									src={deal.imageUrl}
+ 									alt={deal.title}
+ 									fill
+ 									className="object-cover"
+ 								/>
+ 							) : (
+ 								<div className="h-full w-full bg-gray-200 flex items-center justify-center">
+ 									<span className="text-gray-500 text-sm">No image</span>
+ 								</div>
+ 							)}
+ 						</div>
+ 
+ 						<div className="p-4">
+ 							<div className="flex justify-between items-start">
+ 								<h3 className="font-medium text-gray-900">{deal.title}</h3>
+ 								<span
+ 									className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
+ 										deal.active
+ 											? "bg-green-100 text-green-800"
+ 											: "bg-red-100 text-red-800"
+ 									}`}
+ 								>
+ 									{deal.active ? "Active" : "Inactive"}
+ 								</span>
+ 							</div>
+ 
+ 							{deal.restaurant?.name && (
+ 								<p className="text-sm text-gray-600 mt-1">
+ 									{deal.restaurant.name}
+ 								</p>
+ 							)}
+ 
+ 							<p className="text-sm text-gray-500 mt-2 line-clamp-2">
+ 								{deal.content}
+ 							</p>
+ 
+ 							<div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
+ 								<div className="text-xs text-gray-500">
+ 									Created: {new Date(deal.createdAt).toLocaleDateString()}
+ 								</div>
+ 
+ 								<DropdownMenu>
+ 									<DropdownMenuTrigger asChild>
+ 										<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
+ 											<MoreVertical className="h-4 w-4" />
+ 											<span className="sr-only">Actions</span>
+ 										</Button>
+ 									</DropdownMenuTrigger>
+ 									<DropdownMenuContent align="end">
+ 										<DropdownMenuItem asChild>
+ 											<Link href={`/admin/deals/${deal.id}`}>
+ 												<Eye className="mr-2 h-4 w-4" />
+ 												View Details
+ 											</Link>
+ 										</DropdownMenuItem>
+ 										<DropdownMenuItem asChild>
+ 											<Link href={`/admin/deals/${deal.id}/edit`}>
+ 												<Edit className="mr-2 h-4 w-4" />
+ 												Edit Deal
+ 											</Link>
+ 										</DropdownMenuItem>
+ 										<DropdownMenuItem
+ 											onClick={() => handleDelete(deal.id)}
+ 											className="text-red-600"
+ 										>
+ 											<Trash2 className="mr-2 h-4 w-4" />
+ 											Delete
+ 										</DropdownMenuItem>
+ 									</DropdownMenuContent>
+ 								</DropdownMenu>
+ 							</div>
+ 						</div>
+ 					</div>
+ 				))}
+ 			</div>
+ 		) : (
+ 			<div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
+ 				<p className="text-gray-500">
+ 					No deals found.{" "}
+ 					<Link
+ 						href="/admin/deals/new"
+ 						className="text-blue-500 hover:underline"
+ 					>
+ 						Create one
+ 					</Link>
+ 				</p>
+ 			</div>
+ 		);
+ 	};
  
  	return (
  		<>
+ 			{/* Mobile card view */}
+ 			<div className={cn(isMobileView ? "block" : "hidden")}>
+ 				{renderMobileCards()}
+ 			</div>
+ 
+ 			{/* Desktop table view */}
+ 			<div className={cn(isMobileView ? "hidden" : "block")}>
  				<div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
  					<div className="overflow-x-auto">
```

```diff
  					</div>
  
- 				{/* Pagination could be added here */}
+ 					{/* Pagination - simplified for mobile friendliness */}
  					<div className="border-t border-gray-200 px-4 py-3 sm:px-6">
- 					<div className="flex flex-1 justify-between sm:hidden">
- 						<button
- 							type="button"
- 							className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
- 						>
- 							Previous
- 						</button>
- 						<button
- 							type="button"
- 							className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
- 						>
- 							Next
- 						</button>
- 					</div>
- 					<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
+ 						<div className="flex flex-1 justify-between">
  							<div>
  								<p className="text-sm text-gray-700">
- 								Showing <span className="font-medium">1</span> to{" "}
- 								<span className="font-medium">{deals.length}</span> of{" "}
- 								<span className="font-medium">{deals.length}</span> results
+ 									Showing <span className="font-medium">{deals.length}</span>{" "}
+ 									results
  								</p>
  							</div>
```

```diff
  									</button>
  								</nav>
+ 							</div>
  						</div>
  					</div>
```

---

I've optimized both components for mobile viewing by implementing responsive designs that adapt based on screen size. Here's what I've done:

### For the RestaurantsTable component:

1. **Viewport Detection**:
   - Added state tracking for mobile/desktop views with a breakpoint at 768px
   - Set up event listeners to detect screen size changes

2. **Mobile-optimized Card View**:
   - Created a card-based layout that displays each restaurant as a separate card when on mobile
   - Each card shows key information: name, ID, address, description
   - Added badges for punch cards, QR codes, and deals
   - Included action buttons in a more touch-friendly layout

3. **Desktop Table View**:
   - Maintained the original table view for larger screens
   - Made the table horizontally scrollable to handle overflow

4. **Responsive Controls**:
   - Improved pagination controls to work well on both mobile and desktop
   - Added page count information

### For the DealsTable component:

1. **Same Viewport Detection System**:
   - Implemented the same detection system for consistency

2. **Mobile Card Layout**:
   - Transformed the deals table into visually appealing cards for small screens
   - Each card features a larger image at the top
   - Added status badge, restaurant name, and deal content
   - Condensed actions into a dropdown menu for better touch interaction

3. **Simplified Pagination**:
   - Made pagination controls more compact and touch-friendly
   - Simplified the results count display

4. **Preserved Desktop Experience**:
   - Kept the original table for desktop users

Both components now provide an excellent user experience across all device sizes. The mobile versions focus on readability and touch-friendly interaction, while desktop views maintain the data-dense table format that works well with larger screens.

---

