"use client";

import { useState, useEffect, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrReader } from "react-qr-reader";
import type { User } from "@/types";
import { useScanQrCode } from "@/hooks/use-scan-qr-code";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
	CheckCircle,
	Info,
	Camera,
	AlertTriangle,
	RefreshCw,
} from "lucide-react";

// Dynamically import QR scanner to avoid SSR issues

export function UserScanQrCode({ user }: { user: User }) {
	const router = useRouter();
	const qrContainerRef = useRef<HTMLDivElement>(null);
	const [browserSupported, setBrowserSupported] = useState(true);
	const [isConnected, setIsConnected] = useState(true);

	// Check for browser compatibility
	useEffect(() => {
		// Check if running in browser
		if (typeof window === "undefined") return;

		const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
		const isOlderSafari =
			isIOS &&
			(/OS 11|OS 12|OS 13/.test(navigator.userAgent) ||
				!window.navigator.mediaDevices);

		// Set browser compatibility based on checks
		setBrowserSupported(!isOlderSafari);

		// Check online status
		setIsConnected(navigator.onLine);

		// Listen for online/offline events
		const handleOnline = () => setIsConnected(true);
		const handleOffline = () => setIsConnected(false);

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	const {
		isScanning,
		checkingPunchCardStatus,
		scanResult,
		error,
		toggleScanner,
		handleScan,
		handleError,
		reset,
		hasCameraSupport,
	} = useScanQrCode({
		userId: typeof user.id === "bigint" ? user.id.toString() : user.id,
		onScanSuccess: (result) => {
			console.log("Scan successful:", result);
			// Show appropriate toast based on result
			toast({
				title: result.isExisting ? "Punch Card Found!" : "Punch Card Created!",
				description: result.isExisting
					? "You already have a punch card for this restaurant."
					: "Your punch card has been created successfully.",
				variant: "default",
			});

			// Redirect to user profile after a short delay
			setTimeout(() => {
				router.push(`/users/${user.id}/profile`);
			}, 2000);
		},
		onScanError: (scanError) => {
			// Error is already handled in the hook, but we can add custom behavior here
			console.error("Scan error:", scanError);
		},
	});

	// Effect to automatically redirect after successful scan
	useEffect(() => {
		if (scanResult) {
			// Give user time to see the success message before redirecting
			const redirectTimeout = setTimeout(() => {
				router.push(`/users/${user.id}/profile`);
			}, 2000);

			return () => clearTimeout(redirectTimeout);
		}
	}, [scanResult, router, user.id]);

	// Handle permission retry
	const handleRetry = () => {
		reset();
		// Short delay before restarting scanner
		setTimeout(() => toggleScanner(), 500);
	};

	// Check if we need to show compatibility warning
	const showCompatibilityWarning = !browserSupported || !hasCameraSupport;

	// Get appropriate error message for the current error
	const getErrorContent = () => {
		if (!error) return null;

		switch (error.type) {
			case "CAMERA_PERMISSION_DENIED":
				return (
					<Alert variant="warning" className="mb-4 animate-in">
						<AlertTriangle className="h-4 w-4" />
						<AlertTitle>Camera Permission Required</AlertTitle>
						<AlertDescription>
							<p>
								Please allow camera access to scan QR codes. You may need to
								update your browser settings.
							</p>
							<Button
								onClick={handleRetry}
								variant="outline"
								size="sm"
								className="mt-2"
							>
								<RefreshCw className="mr-2 h-4 w-4" />
								Try Again
							</Button>
						</AlertDescription>
					</Alert>
				);
			case "CAMERA_NOT_FOUND":
			case "CAMERA_UNAVAILABLE":
				return (
					<Alert variant="destructive" className="mb-4">
						<AlertTriangle className="h-4 w-4" />
						<AlertTitle>Camera Unavailable</AlertTitle>
						<AlertDescription>
							No camera was found or it's currently unavailable. Please check
							your device.
						</AlertDescription>
					</Alert>
				);
			case "NETWORK_ERROR":
				return (
					<Alert variant="destructive" className="mb-4">
						<AlertTriangle className="h-4 w-4" />
						<AlertTitle>Network Error</AlertTitle>
						<AlertDescription>
							<p>Please check your internet connection and try again.</p>
							{!isConnected && (
								<p className="font-bold mt-1">You appear to be offline.</p>
							)}
						</AlertDescription>
					</Alert>
				);
			default:
				return (
					<Alert variant="destructive" className="mb-4">
						<AlertTriangle className="h-4 w-4" />
						<AlertTitle>Error</AlertTitle>
						<AlertDescription>{error.message}</AlertDescription>
					</Alert>
				);
		}
	};

	return (
		<div className="max-w-md space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>QR Code Scanner</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="mb-6">
						<p className="text-muted-foreground">
							Scan QR codes from participating restaurants to validate your
							purchase and punch your punch card.
						</p>
						<div className="mt-2">
							<span
								className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
									isConnected
										? "bg-green-100 text-green-700"
										: "bg-red-100 text-red-700"
								}`}
							>
								{isConnected ? "Connected" : "Disconnected"}
							</span>
						</div>
					</div>

					{/* Compatibility Warning */}
					{showCompatibilityWarning && (
						<Alert variant="warning" className="mb-4">
							<AlertTriangle className="h-4 w-4" />
							<AlertTitle>Compatibility Issue</AlertTitle>
							<AlertDescription>
								{!browserSupported
									? "Your browser may not fully support the QR scanner. Please try using Chrome or the latest Safari."
									: "Camera access is not available on your device or browser."}
							</AlertDescription>
						</Alert>
					)}

					{/* Error message display */}
					{error && getErrorContent()}

					<div className="space-y-4">
						<Button
							onClick={toggleScanner}
							className="w-full touch-manipulation"
							disabled={
								!isConnected ||
								(isScanning && !error) ||
								checkingPunchCardStatus
							}
						>
							{isScanning ? (
								<>
									<Camera className="mr-2 h-5 w-5 animate-pulse" />
									Stop Scanner
								</>
							) : (
								<>
									<Camera className="mr-2 h-5 w-5" />
									Start Scanner
								</>
							)}
						</Button>

						<AnimatePresence>
							{isScanning && !error && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="w-full relative"
									ref={qrContainerRef}
								>
									<div className="w-full h-[350px] rounded-lg overflow-hidden touch-none">
										<QrReader
											videoId="qr-video"
											onResult={handleScan}
											constraints={{
												facingMode: "environment",
											}}
											className="w-full h-full"
											scanDelay={500} // Add delay to reduce CPU usage
										/>
									</div>
									<div className="absolute inset-0 border-2 border-primary/30 rounded-lg pointer-events-none" />
									<video
										id="qr-video"
										aria-label="QR code scanner video output"
										controls={false}
										className="hidden"
										playsInline // Important for iOS Safari
									>
										<track
											kind="captions"
											src="/empty.vtt"
											label="English captions"
											default
										/>
									</video>
									<p className="text-xs text-center mt-2 text-muted-foreground">
										Position the QR code within the scanner
									</p>
								</motion.div>
							)}
						</AnimatePresence>

						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-muted-foreground">
									Status
								</span>
							</div>
						</div>

						{checkingPunchCardStatus && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-center py-2 bg-gray-50 p-4 rounded-md"
							>
								<div className="flex items-center justify-center">
									<RefreshCw className="h-5 w-5 mr-2 animate-spin" />
									<p className="font-medium">Processing your scan...</p>
								</div>
							</motion.div>
						)}

						{scanResult && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								className="mb-4"
							>
								<Alert variant={scanResult.isExisting ? "info" : "success"}>
									<div className="flex items-start">
										{scanResult.isExisting ? (
											<Info className="h-5 w-5 text-blue-600 mr-2" />
										) : (
											<CheckCircle className="h-5 w-5 text-green-600 mr-2" />
										)}
										<div>
											<AlertTitle>
												{scanResult.isExisting
													? "Punch Card Found"
													: "Punch Card Created"}
											</AlertTitle>
											<AlertDescription>
												{scanResult.isExisting ? (
													<>
														You already have a punch card for this restaurant.
														Redirecting to your profile...
													</>
												) : (
													<>
														Your punch card has been created successfully.
														Redirecting to your profile...
													</>
												)}
											</AlertDescription>
										</div>
									</div>
								</Alert>
							</motion.div>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
