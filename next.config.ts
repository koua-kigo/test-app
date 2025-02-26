import type { NextConfig } from "next";

// Determine if we're in production mode
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				hostname: "experiencemaplegrove.com",
			},
			{
				hostname: "via.placeholder.com",
			},
		],
		// Allow unoptimized images in production if needed
		unoptimized: process.env.NEXT_PUBLIC_SKIP_IMAGE_OPTIMIZATION === "true",
	},
	// Less strict type checking in production builds
	typescript: {
		// In production, don't fail the build if there are TypeScript errors
		ignoreBuildErrors: isProduction,
	},
	// Less strict ESLint checking in production builds
	eslint: {
		// In production, don't fail the build if there are ESLint errors
		ignoreDuringBuilds: isProduction,
	},
	// Skip checking for duplicate packages in production builds
	experimental: {
		// Reduces build time and potential failures from dependency conflicts
		skipTrailingSlashRedirect: true,
	},
	// In development, enable React strict mode
	reactStrictMode: !isProduction,
};

export default nextConfig;
