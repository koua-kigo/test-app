import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { LocationProvider } from "@/context/location-context";
import { Analytics } from "@vercel/analytics/react";
import { Nav } from "@/components/nav/nav";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Experience Maple Grove Restaurant Passport",
	description: "Track your restaurant visits and experiences",
	viewport:
		"width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<LocationProvider>
				<html lang="en">
					<body
						className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-[#faf9f6] overflow-x-hidden`}
					>
						<div
							className="absolute inset-0 z-[-1]"
							style={{
								backgroundImage:
									"radial-gradient(#e0e0e0 1px, transparent 1px)",
								backgroundSize: "20px 20px",
							}}
						/>
						<div className="grid-bg" />
						<div className="app relative z-10 h-screen w-screen overflow-x-hidden px-safe py-safe">
							{children}
						</div>
						<Nav />
						<Toaster />
						<Analytics />
					</body>
				</html>
			</LocationProvider>
		</ClerkProvider>
	);
}
