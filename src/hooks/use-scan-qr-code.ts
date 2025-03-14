"use client";

import { useState, useCallback, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import type { OnResultFunction } from "react-qr-reader";
import { processQrScan } from "@/actions/scan-actions";

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

// Define a type for scan result
interface ScanResult {
	message: string;
	data: Record<string, unknown>;
	restaurantName?: string;
	isExisting?: boolean;
	error?: string;
	status?: number;
}

// Define error types for better handling
type ScanErrorType =
	| "CAMERA_PERMISSION_DENIED"
	| "CAMERA_NOT_FOUND"
	| "CAMERA_IN_USE"
	| "CAMERA_UNAVAILABLE"
	| "QR_SCAN_ERROR"
	| "NETWORK_ERROR"
	| "UNKNOWN_ERROR";

interface ScanError {
	type: ScanErrorType;
	message: string;
	originalError?: Error;
}

export interface UseScanQrCodeOptions {
	userId?: string | number;
	onScanSuccess?: (result: ScanResult) => void;
	onScanError?: (error: ScanError) => void;
}

export interface UseScanQrCodeReturn {
	qrCodeData: string;
	isScanning: boolean;
	checkingPunchCardStatus: boolean;
	scanResult: ScanResult | null;
	error: ScanError | null;
	toggleScanner: () => void;
	handleScan: OnResultFunction;
	handleError: (err: Error | string, type?: ScanErrorType) => void;
	reset: () => void;
	hasCameraSupport: boolean;
}

export function useScanQrCode({
	userId,
	onScanSuccess,
	onScanError,
}: UseScanQrCodeOptions): UseScanQrCodeReturn {
	const [qrCodeData, setQrCodeData] = useState<string>("");
	const [isScanning, setIsScanning] = useState<boolean>(false);
	const [checkingPunchCardStatus, setCheckingPunchCardStatus] =
		useState<boolean>(false);
	const [scanResult, setScanResult] = useState<ScanResult | null>(null);
	const [error, setError] = useState<ScanError | null>(null);
	const [hasCameraSupport, setHasCameraSupport] = useState<boolean>(true);
	const [scanAttempts, setScanAttempts] = useState<number>(0);
	const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

	// Check camera support when component mounts
	useEffect(() => {
		const checkCameraSupport = async () => {
			if (
				typeof navigator === "undefined" ||
				!navigator.mediaDevices ||
				!navigator.mediaDevices.getUserMedia
			) {
				setHasCameraSupport(false);
				return;
			}

			try {
				// Safari requires a user gesture to access camera on iOS
				// We just check if the API exists here
				setHasCameraSupport(true);
			} catch (err) {
				console.error("Camera support check failed:", err);
				setHasCameraSupport(false);
			}
		};

		checkCameraSupport();
	}, []);

	// Clean up media stream when unmounting or stopping scanner
	useEffect(() => {
		return () => {
			if (mediaStream) {
				mediaStream.getTracks().forEach((track) => track.stop());
			}
		};
	}, [mediaStream]);

	// Handle camera access issues in Safari that may require retry
	useEffect(() => {
		if (
			isScanning &&
			scanAttempts > 0 &&
			scanAttempts < 3 &&
			error?.type?.includes("CAMERA_")
		) {
			const retryTimeout = setTimeout(() => {
				// This helps with Safari's permission model
				setIsScanning(false);
				setTimeout(() => setIsScanning(true), 500);
			}, 1000);

			return () => clearTimeout(retryTimeout);
		}
	}, [isScanning, scanAttempts, error]);

	// Toggle scanner on/off
	const toggleScanner = useCallback(() => {
		setError(null);

		// If turning off the scanner, clean up media stream
		if (isScanning && mediaStream) {
			mediaStream.getTracks().forEach((track) => track.stop());
			setMediaStream(null);
		}

		setIsScanning((prev) => !prev);
		if (!isScanning) {
			// Reset scan attempts when starting scanner
			setScanAttempts(0);
		}
	}, [isScanning, mediaStream]);

	// Handle scanning errors with categorization
	const handleError = useCallback(
		(err: Error | string, type: ScanErrorType = "UNKNOWN_ERROR") => {
			const errorMessage = typeof err === "string" ? err : err.message;
			const scanError: ScanError = {
				type,
				message: errorMessage,
				originalError: typeof err === "object" ? err : undefined,
			};

			// Categorize error based on message if not specified
			if (type === "UNKNOWN_ERROR" && typeof err === "object") {
				const msg = err.message.toLowerCase();
				if (
					msg.includes("permission") ||
					msg.includes("denied") ||
					msg.includes("not allowed")
				) {
					scanError.type = "CAMERA_PERMISSION_DENIED";
				} else if (msg.includes("not found") || msg.includes("no camera")) {
					scanError.type = "CAMERA_NOT_FOUND";
				} else if (msg.includes("in use") || msg.includes("already using")) {
					scanError.type = "CAMERA_IN_USE";
				} else if (msg.includes("network") || msg.includes("connection")) {
					scanError.type = "NETWORK_ERROR";
				}
			}

			setError(scanError);

			// For retryable errors, increment attempt counter
			if (
				[
					"CAMERA_PERMISSION_DENIED",
					"CAMERA_IN_USE",
					"CAMERA_UNAVAILABLE",
				].includes(scanError.type)
			) {
				setScanAttempts((prev) => prev + 1);
			}

			if (onScanError) {
				onScanError(scanError);
			} else {
				toast.error("Scanner Error", {
					description: getErrorUserMessage(scanError),
				});
			}
		},
		[onScanError],
	);

	// Get user-friendly error message
	const getErrorUserMessage = (error: ScanError): string => {
		switch (error.type) {
			case "CAMERA_PERMISSION_DENIED":
				return "Please allow camera access to scan QR codes";
			case "CAMERA_NOT_FOUND":
				return "No camera found on your device";
			case "CAMERA_IN_USE":
				return "Camera is already in use by another application";
			case "CAMERA_UNAVAILABLE":
				return "Camera is temporarily unavailable";
			case "NETWORK_ERROR":
				return "Network error occurred while processing scan";
			case "QR_SCAN_ERROR":
				return "Failed to scan QR code. Please try again";
			default:
				return error.message || "An unknown error occurred";
		}
	};

	// Get camera with retry for Safari compatibility
	const getCamera = useCallback(async (): Promise<MediaStream | null> => {
		if (!hasCameraSupport) return null;

		try {
			// Release any existing stream first
			if (mediaStream) {
				mediaStream.getTracks().forEach((track) => track.stop());
			}

			// Safari has issues with exact constraints, so use simpler ones
			const isSafari = /^((?!chrome|android).)*safari/i.test(
				navigator.userAgent,
			);

			const constraints: MediaStreamConstraints = {
				video: isSafari
					? { facingMode: "environment" }
					: {
							facingMode: "environment",
							width: { ideal: 1280 },
							height: { ideal: 720 },
						},
			};

			const stream = await navigator.mediaDevices.getUserMedia(constraints);
			setMediaStream(stream);
			return stream;
		} catch (err) {
			const error =
				err instanceof Error ? err : new Error("Failed to access camera");

			if (error.message.includes("Permission")) {
				handleError(error, "CAMERA_PERMISSION_DENIED");
			} else if (error.message.includes("in use")) {
				handleError(error, "CAMERA_IN_USE");
			} else {
				handleError(error, "CAMERA_UNAVAILABLE");
			}

			return null;
		}
	}, [hasCameraSupport, handleError, mediaStream]);

	// Handle successful scan
	const handleScan: OnResultFunction = useCallback(
		(result, error) => {
			if (error) {
				handleError(error, "QR_SCAN_ERROR");
				return;
			}

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
					setError(null);

					// Stop all video tracks
					if (mediaStream) {
						mediaStream.getTracks().forEach((track) => track.stop());
						setMediaStream(null);
					}
				}
			} catch (err) {
				handleError(
					err instanceof Error ? err : new Error("Error parsing QR code"),
					"QR_SCAN_ERROR",
				);
			}
		},
		[qrCodeData, handleError, mediaStream],
	);

	// Process scan result using Server Action
	const checkScanResult = useCallback(async () => {
		if (!qrCodeData || !userId) return;

		try {
			setCheckingPunchCardStatus(true);

			// Use the server action directly instead of fetch
			const data = await processQrScan({
				qrData: qrCodeData,
				userId,
			});

			if (data) {
				setScanResult(data as ScanResult);
				setCheckingPunchCardStatus(false);
				setError(null);

				toast.success("Success", {
					description: "Scan successful",
				});

				onScanSuccess?.(data as ScanResult);
			}
		} catch (error) {
			handleError(
				error instanceof Error ? error : new Error("Failed to process scan"),
				"NETWORK_ERROR",
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
		setError(null);

		// Clean up media stream
		if (mediaStream) {
			mediaStream.getTracks().forEach((track) => track.stop());
			setMediaStream(null);
		}
	}, [mediaStream]);

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
		error,
		toggleScanner,
		handleScan,
		handleError,
		reset,
		hasCameraSupport,
	};
}
