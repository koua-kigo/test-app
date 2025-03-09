"use client";

import * as React from "react";
import {
	RiArrowDownSFill,
	RiArrowUpSFill,
	RiCheckboxCircleFill,
	RiExpandUpDownFill,
	RiMore2Line,
} from "@remixicon/react";
import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
	type ColumnDef,
	type SortingState,
} from "@tanstack/react-table";

import * as Avatar from "@/components/ui/avatar";
import * as Button from "@/components/ui/button";
import * as Checkbox from "@/components/ui/checkbox";
import * as FileFormatIcon from "@/components/ui/file-format-icon";
import * as StatusBadge from "@/components/ui/status-badge";
import * as Table from "@/components/ui/table";

type Data = {
	id: string;
	member: {
		name: string;
		email: string;
		image: string;
	};
	title: {
		name: string;
		date: string;
	};
	project: {
		name: string;
		description: string;
		image: [string, string?];
	};
	doc: {
		name: string;
		size: string;
	};
	status: {
		variant: "completed" | "pending" | "failed" | "disabled";
		label: string;
	};
};

const getSortingIcon = (state: "asc" | "desc" | false) => {
	if (state === "asc")
		return <RiArrowUpSFill className="text-text-sub-600 size-5" />;
	if (state === "desc")
		return <RiArrowDownSFill className="text-text-sub-600 size-5" />;
	return <RiExpandUpDownFill className="text-text-sub-600 size-5" />;
};

const columns: ColumnDef<Data>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox.Root
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox.Root
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		id: "member",
		accessorKey: "member.name",
		header: ({ column }) => (
			<div className="flex items-center gap-0.5">
				Member Name
				<button
					type="button"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					{getSortingIcon(column.getIsSorted())}
				</button>
			</div>
		),
		enableSorting: true,
		cell: ({ row }) => (
			<div className="flex items-center gap-3">
				<Avatar.Root size="40">
					<Avatar.Image src={row.original.member.image} />
				</Avatar.Root>
				<div className="flex flex-col gap-0.5">
					<span className="text-label-sm text-text-strong-950">
						{row.original.member.name}
					</span>
					<span className="text-paragraph-xs text-text-sub-600">
						{row.original.member.email}
					</span>
				</div>
			</div>
		),
	},
	{
		id: "title",
		accessorKey: "title.name",
		header: ({ column }) => (
			<div className="flex min-w-36 items-center gap-0.5">
				Title
				<button
					type="button"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					{getSortingIcon(column.getIsSorted())}
				</button>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex flex-col gap-0.5">
				<span className="text-label-sm text-text-strong-950">
					{row.original.title.name}
				</span>
				<span className="text-paragraph-xs text-text-sub-600">
					{row.original.title.date}
				</span>
			</div>
		),
	},
	{
		id: "project",
		accessorKey: "project.name",
		header: ({ column }) => (
			<div className="flex min-w-48 items-center gap-0.5">
				Projects
				<button
					type="button"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					{getSortingIcon(column.getIsSorted())}
				</button>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center gap-3">
				<div className="bg-bg-white-0 shadow-regular-xs ring-stroke-soft-200 flex size-10 shrink-0 items-center justify-center rounded-full ring-1 ring-inset">
					<picture>
						{row.original.project.image.length > 1 && (
							<source
								srcSet={row.original.project.image[1]}
								media="(prefers-color-scheme: dark)"
							/>
						)}
						<img
							src={row.original.project.image[0]}
							alt=""
							width={28}
							height={28}
						/>
					</picture>
				</div>
				<div className="flex flex-col gap-0.5">
					<span className="text-label-sm text-text-strong-950">
						{row.original.project.name}
					</span>
					<span className="text-paragraph-xs text-text-sub-600">
						{row.original.project.description}
					</span>
				</div>
			</div>
		),
	},
	{
		id: "doc",
		accessorKey: "doc.name",
		header: ({ column }) => (
			<div className="flex items-center gap-0.5 whitespace-nowrap">
				Member Documents
				<button
					type="button"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					{getSortingIcon(column.getIsSorted())}
				</button>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center gap-3">
				<FileFormatIcon.Root format="PDF" size="small" color="red" />
				<div className="flex flex-col gap-0.5">
					<span className="text-label-sm text-text-strong-950">
						{row.original.doc.name}
					</span>
					<span className="text-paragraph-xs text-text-sub-600">
						{row.original.doc.size}
					</span>
				</div>
			</div>
		),
	},
	{
		id: "status",
		accessorKey: "status.label",
		header: ({ column }) => (
			<div className="flex items-center gap-0.5">
				Status
				<button
					type="button"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					{getSortingIcon(column.getIsSorted())}
				</button>
			</div>
		),
		cell: ({ row }) => (
			<StatusBadge.Root status={row.original.status.variant}>
				<StatusBadge.Icon as={RiCheckboxCircleFill} />
				{row.original.status.label}
			</StatusBadge.Root>
		),
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => (
			<Button.Root variant="neutral" mode="ghost" size="xsmall">
				<Button.Icon as={RiMore2Line} />
			</Button.Root>
		),
	},
];

export function DataTableDemo() {
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting,
		},
		initialState: {
			sorting: [
				{
					id: "member",
					desc: true,
				},
			],
		},
	});

	return (
		<div className="w-full max-w-[1104px]">
			<Table.Root>
				<Table.Header>
					{table.getHeaderGroups().map((headerGroup) => (
						<Table.Row key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<Table.Head key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</Table.Head>
								);
							})}
						</Table.Row>
					))}
				</Table.Header>
				<Table.Body>
					{table.getRowModel().rows?.length > 0 &&
						table.getRowModel().rows.map((row, i, arr) => (
							<React.Fragment key={row.id}>
								<Table.Row data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<Table.Cell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</Table.Cell>
									))}
								</Table.Row>
								{i < arr.length - 1 && <Table.RowDivider />}
							</React.Fragment>
						))}
				</Table.Body>
			</Table.Root>
		</div>
	);
}
