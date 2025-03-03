"use client";

import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { saveQRCodeUrl } from "./actions";
import Image from "next/image";

interface Restaurant {
	id: bigint;
	name: string;
	description: string;
	imageUrl: string;
	address: string;
	qrCodeUrl?: string | null;
}

interface QRCodeManagerProps {
	restaurantId: string;
	restaurant: Restaurant;
}

export function QRCodeManager({
	restaurantId,
	restaurant,
}: QRCodeManagerProps) {
	const [generating, setGenerating] = useState(false);
	const [saving, setSaving] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
	const qrRef = useRef<HTMLDivElement>(null);

	const baseUrl =
		typeof window !== "undefined"
			? `${window.location.protocol}//${window.location.host}`
			: "https://your-app-domain.com";

	const qrCodeValue = `/restaurants/${restaurantId}`;

	// Generate QR code and show save/cancel buttons
	const handleGenerate = () => {
		setGenerating(true);
		setError(null);
		setSuccess(false);
	};

	// Cancel QR code generation
	const handleCancel = () => {
		setGenerating(false);
		setError(null);
	};

	// Download QR code as image
	const handleDownload = () => {
		if (!qrCodeDataUrl) return;

		const link = document.createElement("a");
		link.href = qrCodeDataUrl;
		link.download = `${restaurant.name.replace(/\s+/g, "-").toLowerCase()}-qrcode.svg`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	// Save QR code URL to database
	const handleSave = async () => {
		try {
			setSaving(true);
			setError(null);

			// Convert QR code to data URL
			const svgElement = qrRef.current?.querySelector("svg");
			if (!svgElement) {
				throw new Error("QR code not found");
			}

			const svgData = new XMLSerializer().serializeToString(svgElement);
			const dataUrl = `data:image/svg+xml;base64,${btoa(svgData)}`;

			// Save to database
			const result = await saveQRCodeUrl(restaurantId, dataUrl);

			if (result) {
				setSuccess(true);
				setGenerating(false);
				setQrCodeDataUrl(dataUrl);
			} else {
				throw new Error("Failed to save QR code");
			}
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred");
		} finally {
			setSaving(false);
		}
	};

	return (
		<div>
			{restaurant.qrCodeUrl ? (
				<div className="mb-6">
					<p className="text-sm text-gray-600 mb-2">Current QR code:</p>
					<div className="border border-gray-200 rounded-lg p-4 inline-block">
						<Image
							src={restaurant.qrCodeUrl}
							alt="Restaurant QR Code"
							className="w-48 h-48"
							width={192}
							height={192}
						/>
					</div>
				</div>
			) : (
				<p className="text-sm text-gray-600 mb-4">
					No QR code has been generated yet.
				</p>
			)}

			{!generating ? (
				<button
					type="button"
					onClick={handleGenerate}
					className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
				>
					{restaurant.qrCodeUrl ? "Generate New QR Code" : "Generate QR Code"}
				</button>
			) : (
				<div>
					<div
						className="mb-4 p-4 bg-white border border-gray-200 rounded-lg inline-block"
						ref={qrRef}
					>
						<QRCode size={200} value={qrCodeValue} viewBox="0 0 200 200" />
					</div>

					<p className="text-sm text-gray-600 mb-4">
						This QR code links to:{" "}
						<span className="font-mono text-xs">{qrCodeValue}</span>
					</p>

					<div className="flex gap-3">
						<button
							type="button"
							onClick={handleSave}
							disabled={saving}
							className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors disabled:bg-gray-400"
						>
							{saving ? "Saving..." : "Save QR Code"}
						</button>

						<button
							type="button"
							onClick={handleCancel}
							disabled={saving}
							className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition-colors disabled:bg-gray-100"
						>
							Cancel
						</button>
					</div>
				</div>
			)}

			{error && (
				<div className="mt-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md text-sm">
					{error}
				</div>
			)}

			{success && (
				<div className="mt-4">
					<div className="p-3 bg-green-100 border border-green-200 text-green-700 rounded-md text-sm mb-3">
						QR code saved successfully!
					</div>
					<button
						type="button"
						onClick={handleDownload}
						className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700 transition-colors"
					>
						Download QR Code
					</button>
				</div>
			)}
		</div>
	);
}
