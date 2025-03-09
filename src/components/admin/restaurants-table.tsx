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
} from "lucide-react";
import type { z } from "zod";
import type { restaurantSchema } from "@/types/schemas";
import type { Restaurant } from "@/types/db";
import { QRCodeManager } from "@/app/admin/restaurants/qr-code-manager";

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
		(column.columnDef.meta as ColumnMeta)?.editable === false
	) {
		return <div className="py-2 text-sm">{value?.toString()}</div>;
	}

	// Get appropriate icon based on column
	const getColumnIcon = () => {
		switch (columnId) {
			case "name":
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
			header: ({ column }) => (
				<div className="flex items-center gap-0.5">
					Image URL
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
			id: "actions",
			header: "Actions",
			cell: ({ row }) => {
				const restaurant = row.original;
				const isPending = pending[row.index] || false;

				return (
					<div className="flex items-center space-x-2">
						<Button
							onClick={() => handleSave(row.index, restaurant)}
							disabled={isPending}
							size="sm"
							variant={isPending ? "outline" : "default"}
							className="h-8 text-xs"
						>
							{isPending ? "Saving..." : "Save"}
						</Button>
						<Button
							onClick={() => handleView(restaurant.id.toString())}
							size="sm"
							variant="outline"
							className="h-8 text-xs"
						>
							View
						</Button>
						<Button size="sm" variant="ghost" className="h-8 w-8 ml-2 p-0">
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</div>
				);
			},
		},
	];

	// Function to handle saving a restaurant
	const handleSave = async (rowIndex: number, restaurant: RestaurantData) => {
		try {
			setPending((prev) => ({ ...prev, [rowIndex]: true }));

			const response = await fetch(`/api/restaurants/${restaurant.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: restaurant.name,
					description: restaurant.description,
					address: restaurant.address,
					imageUrl: restaurant.imageUrl,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to update restaurant");
			}

			// Show success badge or notification here
			console.log("Restaurant updated successfully");
		} catch (error) {
			console.error("Error updating restaurant:", error);
			// Show error badge or notification here
		} finally {
			setPending((prev) => ({ ...prev, [rowIndex]: false }));
		}
	};

	// Function to handle viewing a restaurant
	const handleView = (id: string) => {
		window.location.href = `/admin/restaurants/${id}`;
	};

	// Create the table instance
	const table = useReactTable<RestaurantData>({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSorting,
		state: {
			sorting,
		},
		meta: {
			updateData: (rowIndex: number, columnId: string, value: unknown) => {
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
			},
		} as TableMeta,
	});

	return (
		<div className="w-full">
			<div className="rounded-md border border-gray-200 bg-white">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id} className="bg-gray-50">
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										className="py-3.5 text-left text-sm font-medium text-gray-700"
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
							table.getRowModel().rows.map((row, i, arr) => (
								<React.Fragment key={row.id}>
									<TableRow
										className="group hover:bg-gray-50"
										data-state={row.getIsSelected() && "selected"}
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
									{i < arr.length - 1 && (
										<tr className="border-row">
											<td colSpan={columns.length} className="p-0">
												<div className="border-t border-gray-100" />
											</td>
										</tr>
									)}
								</React.Fragment>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center text-sm text-gray-500"
								>
									No restaurants found
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-between space-x-2 py-4">
				<div className="text-sm text-gray-500">
					Page {table.getState().pagination.pageIndex + 1} of{" "}
					{table.getPageCount()}
				</div>
				<div className="flex items-center space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
						className="h-8"
					>
						<ChevronLeft className="h-4 w-4 mr-1" />
						Previous
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
						className="h-8"
					>
						Next
						<ChevronRight className="h-4 w-4 ml-1" />
					</Button>
				</div>
			</div>
		</div>
	);
}
