"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrReader } from "react-qr-reader";
import type { User } from "@/types";
import { useScanQrCode } from "@/hooks/use-scan-qr-code";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, Info } from "lucide-react";

// Dynamically import QR scanner to avoid SSR issues

export function UserScanQrCode({ user }: { user: User }) {
	const { toast } = useToast();
	const [isConnected, setIsConnected] = useState(true);
	const router = useRouter();

	const {
		isScanning,
		checkingPunchCardStatus,
		scanResult,
		toggleScanner,
		handleScan,
		handleError,
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

					<div className="space-y-4">
						<Button
							onClick={toggleScanner}
							className="w-full"
							// disabled={!isConnected}
						>
							{isScanning ? "Stop Scanner" : "Start Scanner"}
						</Button>
						<AnimatePresence>
							{isScanning && (
								<>
									<div className="w-full h-[400px]">
										<QrReader
											videoId="qr-video"
											onResult={handleScan}
											constraints={{
												facingMode: "environment",
											}}
											className="w-full h-full"
										/>
									</div>
									<video
										id="qr-video"
										aria-label="QR code scanner video output"
										controls={false}
									>
										<track
											kind="captions"
											src=""
											label="English captions"
											default
										/>
									</video>
								</>
							)}
						</AnimatePresence>

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

						{checkingPunchCardStatus && (
							<div className="text-center py-2">
								<p>Processing your scan...</p>
							</div>
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
