"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrReader } from "react-qr-reader";
import type { User } from "@/types";
import { useScanQrCode } from "@/hooks/use-scan-qr-code";

// Dynamically import QR scanner to avoid SSR issues

export function UserScanQrCode({ user }: { user: User }) {
	const { toast } = useToast();
	const [isConnected, setIsConnected] = useState(true);

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
			// Additional success handling if needed
		},
	});

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
							purchase and punche your punch card.
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
							<div className="text-center py-2 bg-green-50 rounded-md p-3">
								<p className="font-medium">Scan processed successfully!</p>
							</div>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
