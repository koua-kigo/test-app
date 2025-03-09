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

// Define interfaces for TanStack Table metadata
interface ColumnMeta {
	editable?: boolean;
}

interface TableMeta {
	updateData: (rowIndex: number, columnId: string, value: unknown) => void;
}

// Type for restaurant from schema
type RestaurantData = z.infer<typeof restaurantSchema>;

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
				return <Building className="h-4 w-4 text-gray-500 mr-2" />;
			case "description":
				return <Building className="h-4 w-4 text-gray-500 mr-2" />;
			case "address":
				return <MapPin className="h-4 w-4 text-gray-500 mr-2" />;
			case "imageUrl":
				return <ImageIcon className="h-4 w-4 text-gray-500 mr-2" />;
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
				className="h-8 w-full text-sm"
			/>
			<div className="flex space-x-1">
				<Button
					onClick={onSaveClick}
					size="sm"
					variant="ghost"
					className="h-8 w-8 p-0"
				>
					<Check className="h-4 w-4" />
				</Button>
				<Button
					onClick={onCancelClick}
					size="sm"
					variant="ghost"
					className="h-8 w-8 p-0"
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
				className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
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
						<QrCode className="h-4 w-4 text-gray-500 mr-2" />
						<QRCodeManager restaurant={restaurant} variant="table" />
					</div>
				);
			},
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
								<Button variant="ghost" className="h-8 w-8 p-0">
									<MoreHorizontal className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem
									onClick={() => handleView(restaurant.id.toString())}
								>
									View Details
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => setRestaurantToDelete(restaurant)}
									className="text-red-600"
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

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		state: {
			sorting,
		},
		meta: {
			updateData: (rowIndex, columnId, value) => {
				setData((old) =>
					old.map((row, index) => {
						if (index === rowIndex) {
							return {
								...old[rowIndex],
								[columnId]: value,
							};
						}
						return row;
					}),
				);

				// Save changes to the database after a small delay to allow for multiple quick edits
				const debounceTimeout = setTimeout(() => {
					if (columnId !== "id") {
						handleSave(rowIndex, data[rowIndex]);
					}
				}, 1000);

				return () => clearTimeout(debounceTimeout);
			},
		} as TableMeta,
	});

	return (
		<>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
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
						{table.getRowModel().rows.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
									className="group"
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
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
									className="h-24 text-center"
								>
									No restaurants found.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div>

			{/* Confirmation dialog for restaurant deletion */}
			<AlertDialog
				open={!!restaurantToDelete}
				onOpenChange={(open) => !open && setRestaurantToDelete(null)}
			>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Delete Restaurant</AlertDialogTitle>
						<AlertDialogDescription>
							Are you sure you want to delete the restaurant &quot;
							{restaurantToDelete?.name}&quot;? This action cannot be undone.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction
							onClick={handleDelete}
							className="bg-red-600 hover:bg-red-700"
						>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}
