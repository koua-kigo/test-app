"use client";

import type React from "react";
import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import Image from "next/image";
import { useHandleQRCode } from "@/hooks/use-handle-qrCode";
import type { Restaurant } from "@/types/db";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
	DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QrCode, Download, Plus, X, Check } from "lucide-react";

type QRCodeVariant = "default" | "compact" | "table";

interface QRCodeManagerProps {
	restaurant: Restaurant;
	variant?: QRCodeVariant;
}

export function QRCodeManager({
	restaurant,
	variant = "default",
}: QRCodeManagerProps) {
	const {
		generating,
		saving,
		success,
		error,
		qrRef,
		qrCodeValue,
		handleGenerate,
		handleCancel,
		handleSave,
		handleDownload,
	} = useHandleQRCode({ restaurant });

	// Table cell variant
	if (variant === "table") {
		return (
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="flex items-center gap-1 px-2 h-8"
					>
						{restaurant.qrCodeUrl ? (
							<>
								<div className="relative w-8 h-8 shrink-0">
									<Image
										src={restaurant.qrCodeUrl}
										alt="QR"
										fill
										className="object-contain"
									/>
								</div>
								<span className="text-xs truncate">View QR</span>
							</>
						) : (
							<>
								<Plus className="h-4 w-4" />
								<span className="text-xs">Generate QR</span>
							</>
						)}
					</Button>
				</DialogTrigger>
				<DialogContent className="max-w-md p-6">
					<DialogHeader>
						<DialogTitle>QR Code Manager</DialogTitle>
					</DialogHeader>
					<div className="space-y-4">
						<FullQRManager
							restaurant={restaurant}
							generating={generating}
							saving={saving}
							success={success}
							error={error}
							qrRef={qrRef}
							qrCodeValue={qrCodeValue}
							handleGenerate={handleGenerate}
							handleCancel={handleCancel}
							handleSave={handleSave}
							handleDownload={handleDownload}
						/>
					</div>
				</DialogContent>
			</Dialog>
		);
	}

	// Compact variant for smaller spaces
	if (variant === "compact") {
		return (
			<div className="flex flex-col sm:flex-row gap-2 items-center">
				{restaurant.qrCodeUrl ? (
					<div className="flex flex-col sm:flex-row gap-3 items-center">
						<div className="relative w-16 h-16 shrink-0">
							<Image
								src={restaurant.qrCodeUrl}
								alt="QR Code"
								fill
								className="object-contain"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Button
								size="sm"
								variant="outline"
								className="text-xs h-8"
								onClick={handleGenerate}
							>
								New QR
							</Button>
							<Button
								size="sm"
								variant="outline"
								className="text-xs h-8"
								onClick={handleDownload}
							>
								<Download className="h-3 w-3 mr-1" />
								Download
							</Button>
						</div>
					</div>
				) : (
					<Button size="sm" onClick={handleGenerate} className="text-xs">
						<QrCode className="h-3 w-3 mr-1" />
						Generate QR
					</Button>
				)}

				{generating && (
					<div className="mt-2 flex flex-col gap-2">
						<div className="relative w-24 h-24 mx-auto" ref={qrRef}>
							<QRCode
								size={96}
								value={qrCodeValue}
								viewBox="0 0 96 96"
								className="w-full h-full"
							/>
						</div>
						<div className="flex justify-center gap-2">
							<Button
								size="sm"
								onClick={handleSave}
								disabled={saving}
								className="text-xs h-8"
							>
								<Check className="h-3 w-3 mr-1" />
								{saving ? "Saving..." : "Save"}
							</Button>
							<Button
								size="sm"
								variant="outline"
								onClick={handleCancel}
								disabled={saving}
								className="text-xs h-8"
							>
								<X className="h-3 w-3 mr-1" />
								Cancel
							</Button>
						</div>
					</div>
				)}

				{error && (
					<div className="mt-2 p-2 bg-red-100 border border-red-200 text-red-700 rounded-md text-xs">
						{error}
					</div>
				)}
			</div>
		);
	}

	// Default full-featured variant
	return (
		<div className="w-full max-w-md">
			<FullQRManager
				restaurant={restaurant}
				generating={generating}
				saving={saving}
				success={success}
				error={error}
				qrRef={qrRef}
				qrCodeValue={qrCodeValue}
				handleGenerate={handleGenerate}
				handleCancel={handleCancel}
				handleSave={handleSave}
				handleDownload={handleDownload}
			/>
		</div>
	);
}

// Extracted full QR manager component to avoid duplication
interface FullQRManagerProps {
	restaurant: Restaurant;
	generating: boolean;
	saving: boolean;
	success: boolean;
	error: string | null;
	qrRef: React.RefObject<HTMLDivElement | null>;
	qrCodeValue: string;
	handleGenerate: () => void;
	handleCancel: () => void;
	handleSave: () => void;
	handleDownload: () => void;
}

const FullQRManager = ({
	restaurant,
	generating,
	saving,
	success,
	error,
	qrRef,
	qrCodeValue,
	handleGenerate,
	handleCancel,
	handleSave,
	handleDownload,
}: FullQRManagerProps) => {
	return (
		<div className="space-y-4">
			{restaurant.qrCodeUrl ? (
				<div className="mb-4">
					<p className="text-sm text-gray-600 mb-2">Current QR code:</p>
					<div className="border border-gray-200 rounded-lg p-4 inline-block">
						<div className="relative w-36 h-36 sm:w-48 sm:h-48">
							<Image
								src={restaurant.qrCodeUrl}
								alt="Restaurant QR Code"
								fill
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			) : (
				<p className="text-sm text-gray-600 mb-4">
					No QR code has been generated yet.
				</p>
			)}

			{!generating ? (
				<Button onClick={handleGenerate} className="flex items-center gap-1">
					<QrCode className="h-4 w-4" />
					{restaurant.qrCodeUrl ? "Generate New QR Code" : "Generate QR Code"}
				</Button>
			) : (
				<div className="space-y-4">
					<div
						className="mb-4 p-4 bg-white border border-gray-200 rounded-lg inline-block"
						ref={qrRef}
					>
						<QRCode
							size={200}
							value={qrCodeValue}
							viewBox="0 0 200 200"
							className="w-full h-full max-w-[200px]"
						/>
					</div>

					<p className="text-sm text-gray-600 mb-4">
						This QR code links to:{" "}
						<span className="font-mono text-xs break-all">{qrCodeValue}</span>
					</p>

					<div className="flex flex-wrap gap-3">
						<Button
							onClick={handleSave}
							disabled={saving}
							className="flex items-center gap-1"
						>
							<Check className="h-4 w-4" />
							{saving ? "Saving..." : "Save QR Code"}
						</Button>

						<Button
							onClick={handleCancel}
							disabled={saving}
							variant="outline"
							className="flex items-center gap-1"
						>
							<X className="h-4 w-4" />
							Cancel
						</Button>
					</div>
				</div>
			)}

			{error && (
				<div className="mt-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md text-sm">
					{error}
				</div>
			)}

			{success && (
				<div className="mt-4 space-y-3">
					<div className="p-3 bg-green-100 border border-green-200 text-green-700 rounded-md text-sm">
						QR code saved successfully!
					</div>
					<Button
						onClick={handleDownload}
						variant="secondary"
						className="flex items-center gap-1"
					>
						<Download className="h-4 w-4" />
						Download QR Code
					</Button>
				</div>
			)}
		</div>
	);
};
