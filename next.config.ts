import type { NextConfig } from "next";

// Determine if we're in production mode
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	/* config options here */

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
	// Performance optimizations
	// experimental: {
	// Reduces build time and potential failures from dependency conflicts
	// Improve page loading with prefetching
	// ppr: true,
	// },
	// In development, enable React strict mode
	reactStrictMode: true,
	// Improve load times with compression
	compress: true,
	// Improve performance with statically exported pages where possible

	// Improved bundling
	swcMinify: true,

	// Image configuration
	images: {
		domains: ["experiencemaplegrove.com"],
	},
};

export default nextConfig;
