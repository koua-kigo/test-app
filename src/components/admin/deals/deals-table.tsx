"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Edit, Trash2, Eye } from "lucide-react";
import type { Deal } from "@/types/db";
import { deleteRestaurantDeal } from "@/db/models/restaurants/restaurants";
import { useRouter } from "next/navigation";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

// Define the type for the deals with restaurant name
type DealWithRestaurant = Deal & {
	restaurant?: {
		name: string;
		id?: bigint;
	};
};

export function DealsTable({ deals }: { deals: DealWithRestaurant[] }) {
	const [isDeleting, setIsDeleting] = useState<bigint | null>(null);
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
	const [dealToDelete, setDealToDelete] = useState<bigint | null>(null);
	const router = useRouter();
	const { toast } = useToast();

	// Function to handle deal deletion
	const handleDelete = async (id: bigint) => {
		setDealToDelete(id);
		setShowDeleteConfirm(true);
	};

	const confirmDelete = async () => {
		if (!dealToDelete) return;

		try {
			setIsDeleting(dealToDelete);
			await deleteRestaurantDeal(dealToDelete);
			toast({
				title: "Deal deleted",
				description: "The deal has been successfully deleted.",
			});
			router.refresh(); // Refresh the page to update the deals list
		} catch (error) {
			console.error("Error deleting deal:", error);
			toast({
				title: "Error",
				description: "Failed to delete the deal. Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsDeleting(null);
			setShowDeleteConfirm(false);
			setDealToDelete(null);
		}
	};

	const cancelDelete = () => {
		setShowDeleteConfirm(false);
		setDealToDelete(null);
	};

	return (
		<>
			<div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
				<div className="overflow-x-auto">
					<table className="w-full min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50 text-xs font-medium uppercase text-gray-500">
							<tr>
								<th scope="col" className="px-6 py-3 text-left">
									Deal
								</th>
								<th scope="col" className="px-6 py-3 text-left">
									Restaurant
								</th>
								<th scope="col" className="px-6 py-3 text-left">
									Status
								</th>
								<th scope="col" className="px-6 py-3 text-left">
									Created
								</th>
								<th scope="col" className="px-6 py-3 text-left">
									Last Updated
								</th>
								<th scope="col" className="px-6 py-3 text-right">
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 bg-white">
							{deals.length > 0 ? (
								deals.map((deal) => (
									<tr key={String(deal.id)} className="hover:bg-gray-50">
										<td className="whitespace-nowrap px-6 py-4">
											<div className="flex items-center space-x-3">
												<div className="h-10 w-10 flex-shrink-0 relative overflow-hidden rounded-md">
													{deal.imageUrl ? (
														<Image
															src={deal.imageUrl}
															alt={deal.title}
															fill
															className="object-cover"
														/>
													) : (
														<div className="h-full w-full bg-gray-200 flex items-center justify-center">
															<span className="text-gray-500 text-xs">
																No image
															</span>
														</div>
													)}
												</div>
												<div>
													<p className="font-medium text-gray-900">
														{deal.title}
													</p>
													<p className="text-sm text-gray-500 truncate max-w-[200px]">
														{deal.content}
													</p>
												</div>
											</div>
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											<span className="font-medium">
												{deal.restaurant?.name}
											</span>
										</td>
										<td className="whitespace-nowrap px-6 py-4">
											<span
												className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
													deal.active
														? "bg-green-100 text-green-800"
														: "bg-red-100 text-red-800"
												}`}
											>
												{deal.active ? "Active" : "Inactive"}
											</span>
										</td>
										<td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
											{new Date(deal.createdAt).toLocaleDateString()}
										</td>
										<td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
											{new Date(deal.updatedAt).toLocaleDateString()}
										</td>
										<td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
											<div className="flex justify-end space-x-2">
												<Link
													href={`/admin/deals/${deal.id}`}
													className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
													title="View"
												>
													<Eye size={18} />
												</Link>
												<Link
													href={`/admin/deals/${deal.id}/edit`}
													className="rounded p-1 text-blue-500 hover:bg-blue-100 hover:text-blue-700"
													title="Edit"
												>
													<Edit size={18} />
												</Link>
												<button
													type="button"
													onClick={() => handleDelete(deal.id)}
													disabled={isDeleting === deal.id}
													className="rounded p-1 text-red-500 hover:bg-red-100 hover:text-red-700 disabled:opacity-50"
													title="Delete"
												>
													<Trash2 size={18} />
												</button>
											</div>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td
										colSpan={6}
										className="px-6 py-4 text-center text-sm text-gray-500"
									>
										No deals found.{" "}
										<Link
											href="/admin/deals/new"
											className="text-blue-500 hover:underline"
										>
											Create one
										</Link>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

				{/* Pagination could be added here */}
				<div className="border-t border-gray-200 px-4 py-3 sm:px-6">
					<div className="flex flex-1 justify-between sm:hidden">
						<button
							type="button"
							className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							Previous
						</button>
						<button
							type="button"
							className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
						>
							Next
						</button>
					</div>
					<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
						<div>
							<p className="text-sm text-gray-700">
								Showing <span className="font-medium">1</span> to{" "}
								<span className="font-medium">{deals.length}</span> of{" "}
								<span className="font-medium">{deals.length}</span> results
							</p>
						</div>
						<div>
							<nav
								className="isolate inline-flex -space-x-px rounded-md shadow-sm"
								aria-label="Pagination"
							>
								<button
									type="button"
									className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								>
									<span className="sr-only">Previous</span>
									&laquo;
								</button>
								<button
									type="button"
									aria-current="page"
									className="relative z-10 inline-flex items-center bg-[#818cf8] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									1
								</button>
								<button
									type="button"
									className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								>
									<span className="sr-only">Next</span>
									&raquo;
								</button>
							</nav>
						</div>
					</div>
				</div>
			</div>

			{/* Delete confirmation dialog */}
			<AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This will permanently delete this deal. This action cannot be
							undone.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel onClick={cancelDelete}>Cancel</AlertDialogCancel>
						<AlertDialogAction
							onClick={confirmDelete}
							className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
						>
							{isDeleting ? "Deleting..." : "Delete"}
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}
