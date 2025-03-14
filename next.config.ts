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
		// Always optimize images for better performance
		unoptimized: false,
		// Add image quality optimization
		quality: 80,
		// Set default image sizes to reduce CLS
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		formats: ['image/webp', 'image/avif'],
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
	// Performance optimizations
	experimental: {
		// Reduces build time and potential failures from dependency conflicts
		skipTrailingSlashRedirect: true,
		// Enable optimizations
		optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-dialog'],
		// Improve page loading with prefetching
		ppr: true,
	},
	// In development, enable React strict mode
	reactStrictMode: true,
	// Improve load times with compression
	compress: true,
	// Improve performance with statically exported pages where possible
	output: 'export',
	// Improved bundling
	swcMinify: true,
};

export default nextConfig;
