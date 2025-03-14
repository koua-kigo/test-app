"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
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
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
	QrCode,
	Download,
	Plus,
	X,
	Check,
	AlertTriangle,
	HelpCircle,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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

	const [downloadSupported, setDownloadSupported] = useState(true);

	// Check browser support for download functionality
	useEffect(() => {
		// Safari before 14 and some mobile browsers might have issues with download API
		const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

		// iOS Safari before 14 had issues with download
		const isUnsupportedSafari =
			isSafari && isIOS && /OS 11|OS 12|OS 13/.test(navigator.userAgent);

		setDownloadSupported(!isUnsupportedSafari);
	}, []);

	// Table cell variant
	if (variant === "table") {
		return (
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="flex items-center gap-1 px-2 h-8 touch-manipulation"
					>
						{restaurant.qrCodeUrl ? (
							<>
								<div className="relative w-8 h-8 shrink-0">
									<Image
										src={restaurant.qrCodeUrl}
										alt="QR"
										fill
										className="object-contain"
										sizes="32px"
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
							downloadSupported={downloadSupported}
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
								sizes="64px"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Button
								size="sm"
								variant="outline"
								className="text-xs h-8 min-h-[32px] touch-manipulation"
								onClick={handleGenerate}
							>
								New QR
							</Button>
							{downloadSupported && (
								<Button
									size="sm"
									variant="outline"
									className="text-xs h-8 min-h-[32px] touch-manipulation"
									onClick={handleDownload}
								>
									<Download className="h-3 w-3 mr-1" />
									Download
								</Button>
							)}
						</div>
					</div>
				) : (
					<Button
						size="sm"
						onClick={handleGenerate}
						className="text-xs min-h-[32px] touch-manipulation"
					>
						<QrCode className="h-3 w-3 mr-1" />
						Generate QR
					</Button>
				)}

				{generating && (
					<div className="mt-2 flex flex-col gap-2">
						<div
							className="relative w-24 h-24 mx-auto bg-white p-2 rounded-md shadow-sm"
							ref={qrRef}
						>
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
								className="text-xs h-8 min-h-[32px] touch-manipulation"
							>
								<Check className="h-3 w-3 mr-1" />
								{saving ? "Saving..." : "Save"}
							</Button>
							<Button
								size="sm"
								variant="outline"
								onClick={handleCancel}
								disabled={saving}
								className="text-xs h-8 min-h-[32px] touch-manipulation"
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
				downloadSupported={downloadSupported}
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
	downloadSupported: boolean;
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
	downloadSupported,
}: FullQRManagerProps) => {
	// Alternative download for iOS Safari
	const handleCopyQrValue = () => {
		try {
			navigator.clipboard.writeText(qrCodeValue);
			// Could add a toast notification here
			alert("QR code value copied to clipboard!");
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	// Handle long-press on QR code for Safari/iOS
	const handleLongPress = () => {
		// This is a fallback for iOS Safari
		try {
			const range = document.createRange();
			const textNode = document.createTextNode(qrCodeValue);
			const tempElement = document.createElement("div");
			tempElement.appendChild(textNode);
			document.body.appendChild(tempElement);

			range.selectNodeContents(tempElement);
			const selection = window.getSelection();
			if (selection) {
				selection.removeAllRanges();
				selection.addRange(range);
				document.execCommand("copy");
			}

			document.body.removeChild(tempElement);
			alert("QR code URL copied. You can paste it where needed.");
		} catch (err) {
			console.error("Failed to copy with fallback method:", err);
		}
	};

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
								sizes="(max-width: 640px) 144px, 192px"
								priority
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
				<Button
					onClick={handleGenerate}
					className="flex items-center gap-1 touch-manipulation"
				>
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
							className="flex items-center gap-1 touch-manipulation"
						>
							<Check className="h-4 w-4" />
							{saving ? "Saving..." : "Save QR Code"}
						</Button>

						<Button
							onClick={handleCancel}
							disabled={saving}
							variant="outline"
							className="flex items-center gap-1 touch-manipulation"
						>
							<X className="h-4 w-4" />
							Cancel
						</Button>
					</div>
				</div>
			)}

			{error && (
				<Alert variant="destructive" className="mt-4">
					<AlertTriangle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}

			{success && (
				<div className="mt-4 space-y-3">
					<Alert
						variant="success"
						className="bg-green-50 border-green-200 text-green-700"
					>
						<Check className="h-4 w-4" />
						<AlertTitle>Success</AlertTitle>
						<AlertDescription>QR code saved successfully!</AlertDescription>
					</Alert>

					<div className="flex flex-wrap gap-2">
						{downloadSupported ? (
							<Button
								onClick={handleDownload}
								variant="secondary"
								className="flex items-center gap-1 touch-manipulation"
							>
								<Download className="h-4 w-4" />
								Download QR Code
							</Button>
						) : (
							<>
								<Alert
									variant="warning"
									className="bg-amber-50 border-amber-200"
								>
									<HelpCircle className="h-4 w-4" />
									<AlertTitle>Download Not Supported</AlertTitle>
									<AlertDescription>
										Your browser may not support direct downloads. You can copy
										the URL instead.
									</AlertDescription>
								</Alert>

								<Button
									onClick={handleCopyQrValue}
									variant="secondary"
									className="flex items-center gap-1 touch-manipulation"
								>
									Copy QR Code URL
								</Button>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
