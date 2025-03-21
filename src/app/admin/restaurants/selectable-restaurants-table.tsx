"use client";

import { useState } from "react";
import { useHandleBulkQRCode } from "@/hooks/use-handle-bulk-qr-code";
import type { Restaurant } from "@/types/db";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { QRCodeManager } from "./qr-code-manager";
import {
	AlertCircle,
	CheckCircle2,
	Download,
	QrCode,
	Save,
	X,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import Link from "next/link";

interface SelectableRestaurantsTableProps {
	restaurants: Restaurant[];
}

export function SelectableRestaurantsTable({
	restaurants,
}: SelectableRestaurantsTableProps) {
	const {
		selectedRestaurants,
		generating,
		saving,
		success,
		error,
		progress,
		results,
		toggleSelectAll,
		toggleRestaurant,
		handleGenerateAll,
		handleSaveAll,
		handleDownloadAll,
		handleReset,
	} = useHandleBulkQRCode();

	const allSelected =
		restaurants.length > 0 && selectedRestaurants.length === restaurants.length;
	const someSelected =
		selectedRestaurants.length > 0 &&
		selectedRestaurants.length < restaurants.length;
	const hasSelection = selectedRestaurants.length > 0;

	return (
		<div className="space-y-4">
			{/* Toolbar with bulk actions */}
			{hasSelection && (
				<div className="flex items-center justify-between p-2 border rounded-md bg-slate-50">
					<div className="flex items-center gap-1.5">
						<span className="text-sm font-medium">
							{selectedRestaurants.length} restaurant
							{selectedRestaurants.length !== 1 ? "s" : ""} selected
						</span>
					</div>

					<div className="flex items-center gap-2">
						{!generating && !success && (
							<Button
								size="sm"
								onClick={handleGenerateAll}
								disabled={generating}
								className="h-8"
							>
								<QrCode className="h-3.5 w-3.5 mr-1.5" />
								Generate QR Codes
							</Button>
						)}

						{generating && !success && (
							<Button
								size="sm"
								onClick={handleSaveAll}
								disabled={!results.length || saving}
								className="h-8"
							>
								<Save className="h-3.5 w-3.5 mr-1.5" />
								{saving ? "Saving..." : "Save QR Codes"}
							</Button>
						)}

						{success && (
							<>
								<Button
									size="sm"
									onClick={handleDownloadAll}
									variant="outline"
									className="h-8"
								>
									<Download className="h-3.5 w-3.5 mr-1.5" />
									Download All
								</Button>

								<Button
									size="sm"
									variant="ghost"
									onClick={handleReset}
									className="h-8"
								>
									Reset
								</Button>
							</>
						)}
					</div>
				</div>
			)}

			{/* Error and success messages */}
			{error && (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}

			{success && (
				<Alert className="bg-green-50 border-green-200 text-green-700">
					<CheckCircle2 className="h-4 w-4" />
					<AlertTitle>Success</AlertTitle>
					<AlertDescription>
						QR codes have been saved successfully for{" "}
						{results.filter((r) => r.success).length} restaurants!
					</AlertDescription>
				</Alert>
			)}

			{/* Progress indicator for generation */}
			{generating && progress > 0 && (
				<div className="space-y-2">
					<div className="flex justify-between text-sm">
						<span>Generating QR codes...</span>
						<span>{progress}%</span>
					</div>
					<Progress value={progress} className="h-2" />
				</div>
			)}

			{/* Main restaurants table */}
			<div className="border rounded-md">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-12">
								<Checkbox
									checked={allSelected}
									data-state={someSelected ? "indeterminate" : undefined}
									onCheckedChange={(checked) =>
										toggleSelectAll(restaurants, !!checked)
									}
									disabled={generating || saving}
									aria-label="Select all restaurants"
								/>
							</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Address</TableHead>
							<TableHead>QR Code</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{restaurants.map((restaurant) => {
							const isSelected = selectedRestaurants.some(
								(r) => r.id === restaurant.id,
							);
							const resultItem = results.find(
								(r) => r.restaurantId === restaurant.id.toString(),
							);

							return (
								<TableRow key={restaurant.id.toString()}>
									<TableCell className="p-2">
										<Checkbox
											checked={isSelected}
											onCheckedChange={() => toggleRestaurant(restaurant)}
											disabled={generating || saving}
											aria-label={`Select ${restaurant.name}`}
										/>
									</TableCell>
									<TableCell>
										<div className="font-medium">{restaurant.name}</div>
										{"dealCount" in restaurant &&
											typeof restaurant.dealCount === "number" &&
											restaurant.dealCount > 0 && (
												<Badge variant="outline" className="mt-1 text-xs">
													{restaurant.dealCount} deals
												</Badge>
											)}
									</TableCell>
									<TableCell>
										<div className="text-sm text-muted-foreground">
											{restaurant.address}
										</div>
									</TableCell>
									<TableCell>
										{resultItem ? (
											<div className="flex items-center">
												{resultItem.success ? (
													<Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
														<CheckCircle2 className="h-3 w-3 mr-1" />
														Generated
													</Badge>
												) : (
													<Badge
														variant="destructive"
														className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200"
													>
														<X className="h-3 w-3 mr-1" />
														Failed
													</Badge>
												)}
											</div>
										) : (
											<div className="flex items-center">
												{restaurant.qrCodeUrl ? (
													<div className="relative w-8 h-8">
														<Image
															src={restaurant.qrCodeUrl}
															alt="QR"
															fill
															className="object-contain"
															sizes="32px"
														/>
													</div>
												) : (
													<Badge
														variant="outline"
														className="text-muted-foreground"
													>
														No QR
													</Badge>
												)}
											</div>
										)}
									</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end gap-2">
											<QRCodeManager restaurant={restaurant} variant="table" />
											<Button
												variant="ghost"
												size="sm"
												asChild
												className="px-2 h-8"
											>
												<Link href={`/admin/restaurants/${restaurant.id}`}>
													View
												</Link>
											</Button>
										</div>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
