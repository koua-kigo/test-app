import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { LocationProvider } from "@/context/location-context";
import { Analytics } from "@vercel/analytics/react";
import { Nav } from "@/components/nav/nav";
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
						className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-[#faf9f6]`}
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
						<div className="app relative z-10 h-screen w-screen">
							{children}
						</div>
						<Nav />
						<Analytics />
					</body>
				</html>
			</LocationProvider>
		</ClerkProvider>
	);
}
