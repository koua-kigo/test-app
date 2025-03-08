"use client";

import { useState, useCallback, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import type { OnResultFunction } from "react-qr-reader";

interface QrData {
	userId: string;
	restaurantId: string;
	punchCardId: string;
}

// Define a more specific type for QR result objects
interface QrResultObject {
	data?: string;
	content?: string;
	[key: string]: unknown;
}

export interface UseScanQrCodeOptions {
	userId?: string | number;
	onScanSuccess?: (result: Record<string, string>) => void;
}

export interface UseScanQrCodeReturn {
	qrCodeData: string;
	isScanning: boolean;
	checkingPunchCardStatus: boolean;
	scanResult: Record<string, string> | null;
	toggleScanner: () => void;
	handleScan: OnResultFunction;
	handleError: (err: Error) => void;
	reset: () => void;
}

export function useScanQrCode({
	userId,
	onScanSuccess,
}: UseScanQrCodeOptions): UseScanQrCodeReturn {
	const [qrCodeData, setQrCodeData] = useState<string>("");
	const [isScanning, setIsScanning] = useState<boolean>(false);
	const [checkingPunchCardStatus, setCheckingPunchCardStatus] =
		useState<boolean>(false);
	const [scanResult, setScanResult] = useState<Record<string, string> | null>(
		null,
	);

	// Toggle scanner on/off
	const toggleScanner = useCallback(() => {
		setIsScanning((prev) => !prev);
	}, []);

	// Handle successful scan
	const handleScan: OnResultFunction = useCallback(
		(result, error) => {
			if (qrCodeData || !result) {
				return;
			}

			try {
				// Safely extract data regardless of QR library's result format
				let scannedText = "";

				if (typeof result === "string") {
					// Handle string results
					scannedText = result;
				} else if (result && typeof result === "object") {
					// First cast to unknown for safety, then to our interface
					const resultObj = result as unknown;

					// Try accessing common QR code data properties
					if (
						resultObj &&
						typeof resultObj === "object" &&
						"data" in resultObj &&
						typeof (resultObj as { data: unknown }).data === "string"
					) {
						scannedText = (resultObj as { data: string }).data;
					} else if (
						resultObj &&
						typeof resultObj === "object" &&
						"content" in resultObj &&
						typeof (resultObj as { content: unknown }).content === "string"
					) {
						scannedText = (resultObj as { content: string }).content;
					} else {
						// If we have the result but can't extract text in expected ways,
						// use JSON stringification as fallback (might be lossy)
						try {
							scannedText = JSON.stringify(result);
						} catch {
							// If even stringification fails, we have no usable data
							console.warn("QR scan succeeded but data format is unrecognized");
						}
					}
				}

				if (scannedText) {
					setQrCodeData(scannedText);
					setIsScanning(false);
					setCheckingPunchCardStatus(true);

					// Stop all video tracks
					navigator.mediaDevices
						.getUserMedia({ video: true })
						.then((stream) => {
							for (const track of stream.getTracks()) {
								track.stop();
							}
						});
				}
			} catch (err) {
				handleError(
					err instanceof Error ? err : new Error("Error parsing QR code"),
				);
			}
		},
		[qrCodeData],
	);

	// Handle scanning errors
	const handleError = useCallback((err: Error) => {
		toast({
			title: "Scanner Error",
			description: err.message,
			variant: "destructive",
		});
	}, []);

	// Process scan result
	const checkScanResult = useCallback(async () => {
		if (!qrCodeData) return;

		try {
			const res = await fetch("/api/scan", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ qrData: qrCodeData, userId }),
			});

			const data = await res.json();

			if (data) {
				setScanResult(data);
				setCheckingPunchCardStatus(false);

				toast({
					title: "Success",
					description: "Scan successful",
					variant: "default",
				});

				onScanSuccess?.(data);
			}
		} catch (error) {
			handleError(
				error instanceof Error ? error : new Error("Failed to process scan"),
			);
			setCheckingPunchCardStatus(false);
		}
	}, [qrCodeData, userId, handleError, onScanSuccess]);

	// Reset the scanner state
	const reset = useCallback(() => {
		setQrCodeData("");
		setIsScanning(false);
		setCheckingPunchCardStatus(false);
		setScanResult(null);
	}, []);

	// Check scan result when QR code data is available
	useEffect(() => {
		if (qrCodeData && !scanResult) {
			checkScanResult();
		}
	}, [checkScanResult, qrCodeData, scanResult]);

	return {
		qrCodeData,
		isScanning,
		checkingPunchCardStatus,
		scanResult,
		toggleScanner,
		handleScan,
		handleError,
		reset,
	};
}
