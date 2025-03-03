"use client";

import { useState } from "react";
import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	RowData,
	getPaginationRowModel,
	type SortingState,
	getSortedRowModel,
	type Row,
	type Column,
	type Table as TanstackTable,
} from "@tanstack/react-table";
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
import { Check, X, Edit, ChevronLeft, ChevronRight } from "lucide-react";
import type { restaurantSchema } from "@/types/schemas";
import type { z } from "zod";

// Declare the type for our restaurant
type Restaurant = z.infer<typeof restaurantSchema>;

// Create a custom cell type that includes editing capabilities
type EditableCellProps = {
	getValue: () => unknown;
	row: Row<Restaurant>;
	column: Column<Restaurant, unknown>;
	table: TanstackTable<Restaurant>;
};

// Default column definition
const defaultColumn: Partial<ColumnDef<Restaurant>> = {
	cell: ({ getValue }) => <div className="py-2">{getValue() as string}</div>,
};

// Editable cell component
const EditableCell = ({ getValue, row, column, table }: EditableCellProps) => {
	const initialValue = getValue();
	const columnId = column.id;
	const [value, setValue] = useState(initialValue);
	const [editing, setEditing] = useState(false);

	const onBlur = () => {
		table.options.meta?.updateData(row.index, columnId, value);
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
		table.options.meta?.updateData(row.index, columnId, value);
		setEditing(false);
	};

	// If the column is not editable or it's the id column, just show the value
	if (columnId === "id" || column.columnDef.meta?.editable === false) {
		return <div className="py-2">{value?.toString()}</div>;
	}

	return editing ? (
		<div className="flex items-center space-x-2">
			<Input
				value={value as string}
				onChange={(e) => setValue(e.target.value)}
				onBlur={onBlur}
				autoFocus
				className="h-8 w-full"
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
			<div className="truncate py-2">{value?.toString()}</div>
			<Button
				onClick={onEditClick}
				size="sm"
				variant="ghost"
				className="h-8 w-8 p-0"
			>
				<Edit className="h-4 w-4" />
			</Button>
		</div>
	);
};

// Define the meta type for the table
type TableMeta = {
	updateData: (rowIndex: number, columnId: string, value: unknown) => void;
};

export function RestaurantsTable({
	restaurants: initialData,
}: { restaurants: Restaurant[] }) {
	const [data, setData] = useState<Restaurant[]>(initialData);
	const [sorting, setSorting] = useState<SortingState>([]);
	const [pending, setPending] = useState<Record<number, boolean>>({});

	// Define columns for the table
	const columns: ColumnDef<Restaurant>[] = [
		{
			accessorKey: "id",
			header: "ID",
			cell: ({ row }) => (
				<div className="font-medium">{row.getValue("id")?.toString()}</div>
			),
			meta: {
				editable: false,
			},
		},
		{
			accessorKey: "name",
			header: "Name",
			cell: EditableCell,
		},
		{
			accessorKey: "description",
			header: "Description",
			cell: EditableCell,
		},
		{
			accessorKey: "address",
			header: "Address",
			cell: EditableCell,
		},
		{
			accessorKey: "imageUrl",
			header: "Image URL",
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
							variant="default"
						>
							{isPending ? "Saving..." : "Save"}
						</Button>
						<Button
							onClick={() => handleView(restaurant.id.toString())}
							size="sm"
							variant="outline"
						>
							View
						</Button>
					</div>
				);
			},
		},
	];

	// Function to handle saving a restaurant
	const handleSave = async (rowIndex: number, restaurant: Restaurant) => {
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

			// Success feedback could be added here
			console.log("Restaurant updated successfully");
		} catch (error) {
			console.error("Error updating restaurant:", error);
			// Error feedback could be added here
		} finally {
			setPending((prev) => ({ ...prev, [rowIndex]: false }));
		}
	};

	// Function to handle viewing a restaurant
	const handleView = (id: string) => {
		window.location.href = `/admin/restaurants/${id}`;
	};

	// Create the table instance
	const table = useReactTable<Restaurant>({
		data,
		columns,
		defaultColumn,
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
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No restaurants found
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<div className="flex items-center justify-end space-x-2 py-4 px-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>
		</div>
	);
}
