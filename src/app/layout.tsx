import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { LocationProvider } from "@/context/location-context";

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
					</body>
				</html>
			</LocationProvider>
		</ClerkProvider>
	);
}
// background-color: #e5e5f7;
// opacity: 0.2;
// background-size: 6px 6px;
// background-image: repeating-linear-gradient(45deg, #8f8a91 0, #8f8a91 0.6000000000000001px, #e5e5f7 0, #e5e5f7 50%);
// [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]
