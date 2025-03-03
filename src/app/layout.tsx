import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { LocationProvider } from "@/context/location-context";
import { Analytics } from "@vercel/analytics/react";
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
						className={`${geistSans.variable} ${geistMono.variable} antialiased `}
					>
						{children}
						<Analytics />
					</body>
				</html>
			</LocationProvider>
		</ClerkProvider>
	);
}
