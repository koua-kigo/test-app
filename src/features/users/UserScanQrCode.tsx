"use client";

import { useState, useCallback, useEffect } from "react";
import { toast, useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	useServerSentEvent,
	type SseMessage,
} from "@/hooks/use-server-sent-event";
import dynamic from "next/dynamic";

import { QrReader, useQrReader } from "react-qr-reader";
import type { User } from "@/types";
// import QrScanner from "react-qr-scanner";

// Dynamically import QR scanner to avoid SSR issues

interface QrData {
	userId: string;
	restaurantId: string;
	punchCardId: string;
}

export function UserScanQrCode({ user }: { user: User }) {
	const { toast } = useToast();
	// const router = useRouter();
	const [qrCodeData, setQrCodeData] = useState("");
	const [isScanning, setIsScanning] = useState(false);
	const [isConnected, setIsConnected] = useState(true);
	const [scanResult, setScanResult] = useState<Record<string, string> | null>(
		null,
	);
	// const { isConnected, sendMessage, addMessageListener } =
	// 	useServerSentEvent("/api/sse");

	// Set up SSE message handler
	// useEffect(() => {
	// 	// Add message listener for validation results
	// 	const removeListener = addMessageListener((message: SseMessage) => {
	// 		console.log("🚀 ~ removeListener ~ message:", message);
	// 		if (message.type === "validation_result") {
	// 			const { success, message: resultMessage } = message.payload as {
	// 				success: boolean;
	// 				message: string;
	// 			};

	// 			toast({
	// 				title: success ? "Success" : "Error",
	// 				description: resultMessage,
	// 				variant: success ? "default" : "destructive",
	// 			});

	// 			if (success) {
	// 				console.log("🚀 ~ removeListener ~ success:", success);

	// 				// Refresh the page data after successful validation
	// 				// router.refresh();
	// 			}
	// 		}
	// 	});

	// 	// Clean up listener on unmount
	// 	return removeListener;
	// }, []);

	const requestCameraPermission = useCallback(() => {
		setIsScanning(true);
		// try {
		// 	const stream = await navigator.mediaDevices.getUserMedia({ video: true });
		// 	// Check if permissions need to be updated

		// 	console.log("🚀 ~ requestCameraPermission ~ stream:", stream);

		// 	const tracks = stream.getVideoTracks();
		// 	if (tracks.length > 0 && tracks[0].enabled === false) {
		// 		const permissionResult = await navigator.permissions.query({
		// 			name: "camera" as PermissionName,
		// 		});
		// 		if (permissionResult.state === "prompt") {
		// 			toast({
		// 				title: "Camera Access Required",
		// 				description:
		// 					"Please allow camera access in your browser settings to continue scanning",
		// 				variant: "default",
		// 			});
		// 		}
		// 	}
		// 	// stream.getTracks().forEach((track) => track.stop()); // Clean up stream
		// 	setIsScanning(true);
		// 	// const videoTracks = stream.getVideoTracks();

		// 	// console.log("🚀 ~ requestCameraPermission ~ videoTracks:", videoTracks);

		// 	// console.log(`Using video device: ${videoTracks[0].label}`);
		// 	// stream.onremovetrack = () => {
		// 	// 	console.log("Stream ended");
		// 	// };
		// } catch (err) {
		// 	console.log("🚀 ~ requestCameraPermission ~ err:", err);

		// 	toast({
		// 		title: "Camera Permission Error",
		// 		description: "Please allow camera access to scan QR codes",
		// 		variant: "destructive",
		// 	});
		// 	setIsScanning(false);
		// }
	}, []);

	// const handleScan = (data: any, error: any) => {
	// 	console.log("🚀 ~ UserScanQrCode ~ data:", data);

	// 	console.log("🚀 ~ UserScanQrCode ~ error:", error);

	// 	if (data) {
	// 		console.log("🚀 ~ UserScanQrCode ~ data:", data);
	// 		alert(data.text);
	// 		setQrCodeData(data);
	// 		return data;
	// 	}
	// };

	const handleScan = useCallback(
		(data: string | null) => {
			console.log("🚀 ~ handleScan ~ data:", data);

			if (data && !qrCodeData) {
				const { text } = JSON.parse(data);
				setQrCodeData(text);
			}
		},
		[qrCodeData],
	);

	const checkScanResult = useCallback(async () => {
		if (qrCodeData && !scanResult) {
			// Send scanned QR code data to the API route
			const res = await fetch("/api/scan", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ qrData: qrCodeData, userId: BigInt(user.id) }), // replace with real user ID
			});
			const data = await res.json();

			console.log("🚀 ~ data:", data);
			if (data) {
				setScanResult(data);
				toast({
					title: "Success",
					description: "Scan successful",
					variant: "default",
				});
			}

			console.log("🚀 ~ handleScan ~ res:", res);
		}
	}, [qrCodeData, scanResult, user.id, toast]);

	const handleError = (err: Error) => {
		toast({
			title: "Scanner Error",
			description: err.message,
			variant: "destructive",
		});
	};

	const handleTestSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const data = JSON.parse(testQRData) as QrData;
			sendMessage({
				type: "validate_qr",
				payload: {
					userId: data.userId,
					restaurantId: data.restaurantId,
					punchCardId: data.punchCardId,
				},
			});
		} catch (error) {
			toast({
				title: "Error",
				description: "Invalid QR code data",
				variant: "destructive",
			});
		}
	};

	return (
		<div className="max-w-md mx-auto space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Staff Portal</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="mb-6">
						<p className="text-muted-foreground">
							Scan customer QR codes to validate their purchases and add punches
							to their cards.
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

					<div className="space-y-4">
						<Button
							onClick={requestCameraPermission}
							className="w-full"
							// disabled={!isConnected}
						>
							{isScanning ? "Stop Scanner" : "Start Scanner"}
						</Button>

						{isScanning && (
							<>
								<QrReader
									videoId="qr-video"
									onResult={handleScan}
									style={{ width: "400px", height: "400px" }}
									constraints={{
										facingMode: "user",
									}}
								/>
								<video id="qr-video" />
							</>
						)}
						{/* <QrScanner
							onScan={(data) => {
								console.log("🚀 ~ UserScanQrCode ~ data:", data);
							}}
							delay={1000}
							constraints={{ facingMode: "environment" }}
							facingMode={"user"}
							onError={handleError}
							style={{ width: "400px", height: "400px" }}
						/> */}
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-muted-foreground">
									Or
								</span>
							</div>
						</div>
						{/* 
						<form onSubmit={handleTestSubmit} className="space-y-4">
							<Input
								placeholder="Paste QR code data for testing"
								value={testQRData}
								onChange={(e) => setTestQRData(e.target.value)}
							/>
							<Button type="submit" className="w-full" disabled={!isConnected}>
								Test Punch Card Update
							</Button>
						</form> */}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
