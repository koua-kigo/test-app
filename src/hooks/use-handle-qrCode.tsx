"use context";

import { saveQRCodeUrl } from "@/app/admin/restaurants/actions";
import type { Restaurant } from "@/types/db";
import { useRef, useState } from "react";

export const useHandleQRCode = ({ restaurant }: { restaurant: Restaurant }) => {
	const [generating, setGenerating] = useState(false);
	const [saving, setSaving] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
	const qrRef = useRef<HTMLDivElement>(null);

	// Get the base URL from environment or window location
	const getBaseUrl = () => {
		if (typeof window !== "undefined") {
			return window.location.origin;
		}
		return process.env.NEXT_PUBLIC_BASE_URL || "";
	};

	// Construct the QR code value with the appropriate base URL
	const baseUrl = getBaseUrl();
	const qrCodeValue = `${baseUrl}/restaurants/${restaurant?.id}?scan=true`;

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
			const result = await saveQRCodeUrl(restaurant?.id.toString(), dataUrl);

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

	return {
		qrCodeDataUrl,
		qrCodeValue,
		handleGenerate,
		handleCancel,
		handleDownload,
		handleSave,
		generating,
		saving,
		success,
		error,
		qrRef,
	};
};
