"use client";

import * as React from "react";
import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	getPaginationRowModel,
	useReactTable,
	type ColumnDef,
	type Row,
	type Column,
	type Table as TanstackTable,
	type SortingState,
} from "@tanstack/react-table";
import {
	Check,
	X,
	Edit,
	ChevronLeft,
	ChevronRight,
	Image as ImageIcon,
	Building,
	MapPin,
	QrCode,
	MoreHorizontal,
	Trash2,
	ExternalLink,
} from "lucide-react";
import type { z } from "zod";
import type { restaurantSchema } from "@/types/schemas";
import type { Restaurant } from "@/types/db";
import { QRCodeManager } from "@/app/admin/restaurants/qr-code-manager";
import { useRouter } from "next/navigation";
import {
	updateRestaurantAction,
	deleteRestaurantAction,
} from "@/actions/restaurants";
import { toast } from "sonner";
import { useRestaurantSearch } from "@/hooks/useRestaurantSearch";
import { AdminRestaurantSearchBar } from "@/features/restaurants/AdminRestaurantSearchBar";
import { RestaurantQuickView } from "./restaurant-quick-view";

// Styled components imports
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// Define interfaces for TanStack Table metadata
interface ColumnMeta {
	editable?: boolean;
}

interface TableMeta {
	updateData: (rowIndex: number, columnId: string, value: unknown) => void;
}

// Type for restaurant from schema
type RestaurantData = z.infer<typeof restaurantSchema>;

// Add the extended Restaurant type to include deals
type ExtendedRestaurant = Restaurant & {
	punchCardCount?: number;
	deals?: { id: string; title: string; isActive: boolean }[];
};

// Props for editable cells
type EditableCellProps = {
	getValue: () => unknown;
	row: Row<RestaurantData>;
	column: Column<RestaurantData, unknown>;
	table: TanstackTable<RestaurantData>;
};

// Helper function for sorting indicators
const getSortingIcon = (state: "asc" | "desc" | false) => {
	if (state === "asc")
		return <ChevronLeft className="text-gray-500 h-4 w-4 rotate-90" />;
	if (state === "desc")
		return <ChevronLeft className="text-gray-500 h-4 w-4 -rotate-90" />;
	return (
		<div className="flex flex-col h-4">
			<ChevronLeft className="h-2 w-2 rotate-90" />
			<ChevronLeft className="h-2 w-2 -rotate-90" />
		</div>
	);
};

// Editable cell component
const EditableCell = ({ getValue, row, column, table }: EditableCellProps) => {
	const initialValue = getValue();
	const columnId = column.id;
	const [value, setValue] = React.useState(initialValue);
	const [editing, setEditing] = React.useState(false);

	// Update local value when row data changes
	React.useEffect(() => {
		setValue(getValue());
	}, [getValue]);

	const onBlur = () => {
		(table.options.meta as TableMeta).updateData(row.index, columnId, value);
		setEditing(false);
	};

	const onEditClick = () => {
		setEditing(true);
	};

	const onCancelClick = () => {
		setValue(initialValue);
		setEditing(false);
	};

	const onSaveClick = () => {
		(table.options.meta as TableMeta).updateData(row.index, columnId, value);
		setEditing(false);
	};

	// Non-editable columns
	if (
		columnId === "id" ||
		columnId === "qrCodeUrl" ||
		(column.columnDef.meta as ColumnMeta)?.editable === false
	) {
		return <div className="py-2 text-sm">{value?.toString()}</div>;
	}

	// Get appropriate icon based on column
	const getColumnIcon = () => {
		switch (columnId) {
			case "name":
				return <Building className="h-4 w-4 text-sidebar-foreground/50 mr-2" />;
			case "description":
				return <Building className="h-4 w-4 text-sidebar-foreground/50 mr-2" />;
			case "address":
				return <MapPin className="h-4 w-4 text-sidebar-foreground/50 mr-2" />;
			case "imageUrl":
				return (
					<ImageIcon className="h-4 w-4 text-sidebar-foreground/50 mr-2" />
				);
			default:
				return null;
		}
	};

	return editing ? (
		<div className="flex items-center space-x-2">
			<Input
				value={value as string}
				onChange={(e) => setValue(e.target.value)}
				onBlur={onBlur}
				autoFocus
				className="h-8 w-full text-sm bg-background border-sidebar-border focus-visible:ring-sidebar-ring"
			/>
			<div className="flex space-x-1">
				<Button
					onClick={onSaveClick}
					size="sm"
					variant="ghost"
					className="h-8 w-8 p-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
				>
					<Check className="h-4 w-4" />
				</Button>
				<Button
					onClick={onCancelClick}
					size="sm"
					variant="ghost"
					className="h-8 w-8 p-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
				>
					<X className="h-4 w-4" />
				</Button>
			</div>
		</div>
	) : (
		<div className="flex items-center justify-between space-x-2">
			<div className="flex items-center truncate py-2 text-sm">
				{getColumnIcon()}
				<span>{value?.toString()}</span>
			</div>
			<Button
				onClick={onEditClick}
				size="sm"
				variant="ghost"
				className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
			>
				<Edit className="h-4 w-4" />
			</Button>
		</div>
	);
};

export function RestaurantsTable({
	restaurants: initialData,
}: {
	restaurants: RestaurantData[];
}) {
	const [data, setData] = React.useState<RestaurantData[]>(initialData);
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [pending, setPending] = React.useState<Record<number, boolean>>({});
	const [restaurantToDelete, setRestaurantToDelete] =
		React.useState<RestaurantData | null>(null);
	const router = useRouter();
	const [isMobileView, setIsMobileView] = React.useState(false);

	// Check viewport size on mount and window resize
	React.useEffect(() => {
		const checkViewport = () => {
			setIsMobileView(window.innerWidth < 768);
		};

		// Initial check
		checkViewport();

		// Set up event listener for resize
		window.addEventListener("resize", checkViewport);

		// Clean up
		return () => window.removeEventListener("resize", checkViewport);
	}, []);

	// Add restaurant search hook
	const {
		filteredRestaurants,
		searchTerm,
		setSearchTerm,
		sortOption,
		setSortOption,
		isSearching,
	} = useRestaurantSearch({
		restaurants: data as unknown as Restaurant[],
		initialSortOption: "name-asc",
	});

	// Update local data when initialData changes
	React.useEffect(() => {
		setData(initialData);
	}, [initialData]);

	// Define columns for the table
	const columns: ColumnDef<RestaurantData>[] = [
		{
			accessorKey: "id",
			header: ({ column }) => (
				<div className="flex items-center gap-0.5">
					ID
					<Button
						size="sm"
						variant="ghost"
						className="h-8 w-8 ml-1 p-0"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						{getSortingIcon(column.getIsSorted())}
					</Button>
				</div>
			),
			cell: ({ row }) => (
				<div className="font-medium text-sm">
					{row.getValue("id")?.toString()}
				</div>
			),
			meta: { editable: false } as ColumnMeta,
		},
		{
			accessorKey: "name",
			header: ({ column }) => (
				<div className="flex items-center gap-0.5">
					Restaurant Name
					<Button
						size="sm"
						variant="ghost"
						className="h-8 w-8 ml-1 p-0"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						{getSortingIcon(column.getIsSorted())}
					</Button>
				</div>
			),
			cell: EditableCell,
		},
		{
			accessorKey: "description",
			header: "Description",
			cell: EditableCell,
		},
		{
			accessorKey: "address",
			header: ({ column }) => (
				<div className="flex items-center gap-0.5">
					Address
					<Button
						size="sm"
						variant="ghost"
						className="h-8 w-8 ml-1 p-0"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						{getSortingIcon(column.getIsSorted())}
					</Button>
				</div>
			),
			cell: EditableCell,
		},
		{
			accessorKey: "imageUrl",
			header: "Image URL",
			cell: EditableCell,
		},
		{
			accessorKey: "qrCodeUrl",
			header: "QR Code",
			cell: ({ row }) => {
				const restaurant = row.original as Restaurant;
				return (
					<div className="flex items-center">
						<QrCode className="h-4 w-4 text-sidebar-foreground/50 mr-2" />
						<QRCodeManager restaurant={restaurant} variant="table" />
					</div>
				);
			},
		},
		{
			accessorKey: "punchCardCount",
			header: ({ column }) => (
				<div className="flex items-center gap-0.5">
					Punch Cards
					<Button
						size="sm"
						variant="ghost"
						className="h-8 w-8 ml-1 p-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						{getSortingIcon(column.getIsSorted())}
					</Button>
				</div>
			),
			cell: ({ row }) => {
				const restaurant = row.original as Restaurant & {
					punchCardCount?: number;
				};
				return (
					<div className="font-medium text-sm">
						{restaurant.punchCardCount || 0}
					</div>
				);
			},
		},
		{
			accessorKey: "dealCount",
			header: ({ column }) => (
				<div className="flex items-center gap-0.5">
					Deals
					<Button
						size="sm"
						variant="ghost"
						className="h-8 w-8 ml-1 p-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						{getSortingIcon(column.getIsSorted())}
					</Button>
				</div>
			),
			accessorFn: (row) => {
				const restaurant = row as ExtendedRestaurant;
				return restaurant.deals?.length || 0;
			},
			cell: ({ row }) => {
				const restaurant = row.original as ExtendedRestaurant;
				return (
					<div className="font-medium text-sm">
						{restaurant.deals?.length || 0}
					</div>
				);
			},
		},
		{
			id: "quickView",
			header: "Quick View",
			cell: ({ row }) => {
				const restaurant = row.original;
				return (
					<div className="flex justify-center">
						<RestaurantQuickView restaurantId={restaurant.id} />
					</div>
				);
			},
			meta: { editable: false } as ColumnMeta,
		},
		{
			id: "navigate",
			header: "Details",
			cell: ({ row }) => {
				const restaurant = row.original;
				return (
					<div className="flex justify-center">
						<Button
							onClick={() => handleView(restaurant.id.toString())}
							size="sm"
							variant="outline"
							className="h-8 rounded-lg bg-background border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
						>
							View Restaurant
						</Button>
					</div>
				);
			},
			meta: { editable: false } as ColumnMeta,
		},
		{
			id: "actions",
			header: "",
			cell: ({ row }) => {
				const restaurant = row.original;
				return (
					<div className="flex justify-end">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									className="h-8 w-8 p-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
								>
									<MoreHorizontal className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								align="end"
								className="bg-background border-sidebar-border"
							>
								<DropdownMenuItem
									onClick={() => handleView(restaurant.id.toString())}
									className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
								>
									View Details
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => setRestaurantToDelete(restaurant)}
									className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
								>
									Delete
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				);
			},
		},
	];

	// Handle view restaurant details
	const handleView = (id: string) => {
		router.push(`/admin/restaurants/${id}`);
	};

	// Handle saving edited data using server action
	const handleSave = async (rowIndex: number, restaurant: RestaurantData) => {
		try {
			setPending({ ...pending, [rowIndex]: true });

			const { id, ...updateData } = restaurant;

			const result = await updateRestaurantAction(id, updateData);

			if (result.success) {
				toast.success(result.message);
			} else {
				toast.error(result.error?._form?.[0] || "Failed to update restaurant");
				// Reset to original data if update failed
				setData(initialData);
			}
		} catch (error) {
			toast.error("An error occurred while updating the restaurant");
			console.error(error);
		} finally {
			setPending({ ...pending, [rowIndex]: false });
		}
	};

	// Handle restaurant deletion
	const handleDelete = async () => {
		if (!restaurantToDelete) return;

		try {
			const result = await deleteRestaurantAction(restaurantToDelete.id);

			if (result.success) {
				toast.success(result.message);
				// Remove from local state
				setData(data.filter((r) => r.id !== restaurantToDelete.id));
			} else {
				toast.error(result.error?._form?.[0] || "Failed to delete restaurant");
			}
		} catch (error) {
			toast.error("An error occurred while deleting the restaurant");
			console.error(error);
		} finally {
			setRestaurantToDelete(null);
		}
	};

	// Define data table using TanStack
	const table = useReactTable({
		data: filteredRestaurants as unknown as RestaurantData[], // Use filtered restaurants instead of all data
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		meta: {
			updateData: (rowIndex, columnId, value) => {
				// Find actual restaurant by ID to handle filtered restaurants correctly
				const restaurantId = filteredRestaurants[rowIndex].id;
				const dataIndex = data.findIndex((r) => r.id === restaurantId);

				if (dataIndex >= 0) {
					const newData = [...data];
					newData[dataIndex] = {
						...newData[dataIndex],
						[columnId]: value,
					};
					setData(newData);

					// Save changes to the database
					handleSave(dataIndex, newData[dataIndex]);
				}
			},
		} as TableMeta,
	});

	// Render mobile card view for each restaurant
	const renderMobileCards = () => {
		return filteredRestaurants.map((restaurant) => (
			<div
				key={restaurant.id.toString()}
				className="bg-background rounded-lg border border-sidebar-border p-4 mb-4 shadow-sm"
			>
				<div className="flex justify-between items-start mb-3">
					<div>
						<h3 className="font-medium text-base">{restaurant.name}</h3>
						<p className="text-xs text-sidebar-foreground/70">
							ID: {restaurant.id.toString()}
						</p>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="h-8 w-8 p-0">
								<MoreHorizontal className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="end"
							className="bg-background border-sidebar-border"
						>
							<DropdownMenuItem
								onClick={() => handleView(restaurant.id.toString())}
								className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
							>
								View Details
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() =>
									setRestaurantToDelete(restaurant as RestaurantData)
								}
								className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
							>
								Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="space-y-2 text-sm">
					<div className="flex items-start">
						<MapPin className="h-4 w-4 text-sidebar-foreground/50 mr-2 mt-0.5 flex-shrink-0" />
						<p className="text-sidebar-foreground/80">{restaurant.address}</p>
					</div>

					<div className="flex items-start">
						<Building className="h-4 w-4 text-sidebar-foreground/50 mr-2 mt-0.5 flex-shrink-0" />
						<p className="text-sidebar-foreground/80 line-clamp-2">
							{restaurant.description}
						</p>
					</div>
				</div>

				<div className="flex flex-wrap gap-2 mt-3">
					<div className="text-xs bg-sidebar-accent/30 px-2 py-1 rounded-md flex items-center">
						<QrCode className="h-3 w-3 mr-1" />
						<QRCodeManager
							restaurant={restaurant as Restaurant}
							variant="table"
						/>
					</div>

					<div className="text-xs bg-sidebar-accent/30 px-2 py-1 rounded-md">
						Punch Cards:{" "}
						{(restaurant as unknown as ExtendedRestaurant).punchCardCount || 0}
					</div>

					<div className="text-xs bg-sidebar-accent/30 px-2 py-1 rounded-md">
						Deals:{" "}
						{(restaurant as unknown as ExtendedRestaurant).deals?.length || 0}
					</div>
				</div>

				<div className="flex justify-between mt-4 pt-3 border-t border-sidebar-border">
					<RestaurantQuickView restaurantId={restaurant.id} />
					<Button
						onClick={() => handleView(restaurant.id.toString())}
						size="sm"
						variant="outline"
						className="rounded-lg text-xs h-8 px-3 flex items-center gap-1 bg-background hover:bg-sidebar-accent"
					>
						<ExternalLink className="h-3 w-3" />
						View
					</Button>
				</div>
			</div>
		));
	};

	return (
		<div className="space-y-4 p-4 bg-sidebar rounded-xl shadow-sm">
			<AdminRestaurantSearchBar
				searchTerm={searchTerm}
				onSearchChange={setSearchTerm}
				sortOption={sortOption}
				onSortChange={setSortOption}
			/>

			{/* Mobile card view */}
			<div className={cn(isMobileView ? "block" : "hidden")}>
				{filteredRestaurants.length > 0 ? (
					renderMobileCards()
				) : (
					<div className="bg-background rounded-lg border border-sidebar-border p-8 text-center">
						<Building className="h-10 w-10 text-sidebar-foreground/30 mx-auto mb-2" />
						{isSearching ? (
							<p>No restaurants found matching your search</p>
						) : (
							<p>No restaurants available</p>
						)}
					</div>
				)}
			</div>

			{/* Desktop table view */}
			<div
				className={cn(
					"rounded-xl border border-sidebar-border shadow-sm overflow-hidden",
					isMobileView ? "hidden" : "block",
				)}
			>
				<div className="w-full overflow-x-auto">
					<Table className="bg-background w-full">
						<TableHeader
							className="bg-sidebar/50"
							style={{ borderBottom: "1px solid var(--sidebar-border)" }}
						>
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<TableHead
											key={header.id}
											className="text-sidebar-foreground px-4 py-3"
										>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									))}
								</TableRow>
							))}
						</TableHeader>
						<TableBody>
							{table.getRowModel().rows?.length ? (
								table.getRowModel().rows.map((row) => (
									<TableRow
										key={row.id}
										data-state={row.getIsSelected() && "selected"}
										className="group border-b-1 border-sidebar-border hover:bg-sidebar/10"
										style={{ borderBottom: "1px solid var(--sidebar-border)" }}
									>
										{row.getVisibleCells().map((cell) => (
											<TableCell key={cell.id} className="px-4 py-3">
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</TableCell>
										))}
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className="h-24 text-center py-8"
									>
										<div className="flex flex-col items-center justify-center text-sidebar-foreground/70">
											<Building className="h-10 w-10 text-sidebar-foreground/30 mb-2" />
											{isSearching ? (
												<p>No restaurants found matching your search</p>
											) : (
												<p>No restaurants available</p>
											)}
										</div>
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
			</div>

			{/* Pagination controls - work for both mobile and desktop */}
			<div className="flex items-center justify-between py-4">
				<div className="text-xs text-sidebar-foreground/70">
					Page {table.getState().pagination.pageIndex + 1} of{" "}
					{table.getPageCount()}
				</div>
				<div className="flex items-center space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
						className="rounded-lg px-3 bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
					>
						Previous
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
						className="rounded-lg px-3 bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
					>
						Next
					</Button>
				</div>
			</div>

			{/* Confirmation dialog for restaurant deletion */}
			<AlertDialog
				open={!!restaurantToDelete}
				onOpenChange={(open) => !open && setRestaurantToDelete(null)}
			>
				<AlertDialogContent className="bg-background border-sidebar-border">
					<AlertDialogHeader>
						<AlertDialogTitle className="text-foreground">
							Delete Restaurant
						</AlertDialogTitle>
						<AlertDialogDescription className="text-foreground/70">
							Are you sure you want to delete the restaurant &quot;
							{restaurantToDelete?.name}&quot;? This action cannot be undone.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel className="bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground border-sidebar-border">
							Cancel
						</AlertDialogCancel>
						<AlertDialogAction
							onClick={handleDelete}
							className="bg-red-600 hover:bg-red-700 text-white"
						>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
