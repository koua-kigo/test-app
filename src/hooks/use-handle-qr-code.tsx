"use client";

import {
	saveQRCodeUrl,
	saveBulkQRCodeUrls,
} from "@/app/admin/restaurants/actions";
import type { Restaurant } from "@/types/db";
import { useRef, useState, useCallback } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

type QRCodeResult = {
	restaurantId: string;
	success: boolean;
	qrCodeDataUrl?: string;
};

type UseHandleQRCodeProps =
	| { restaurant: Restaurant; mode: "single" }
	| { restaurants?: Restaurant[]; mode: "bulk" };

export const useHandleQRCode = (props: UseHandleQRCodeProps) => {
	// Shared state
	const [generating, setGenerating] = useState(false);
	const [saving, setSaving] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Single mode state
	const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
	const qrRef = useRef<HTMLDivElement>(null);

	// Bulk mode state
	const [selectedRestaurants, setSelectedRestaurants] = useState<Restaurant[]>(
		[],
	);
	const [progress, setProgress] = useState(0);
	const [results, setResults] = useState<QRCodeResult[]>([]);

	// Get restaurant ID based on mode
	const getRestaurantId = useCallback(() => {
		if (props.mode === "single") {
			return props.restaurant.id;
		}
		return null;
	}, [props]);

	// Construct QR code value
	const qrCodeValue = useCallback((restaurantId: string | number | bigint) => {
		return `/api/restaurants/${restaurantId}/scan`;
	}, []);

	// Generate QR code SVG data URL
	const generateQRCodeDataUrl = useCallback(
		(restaurantId: string | number | bigint) => {
			// Create SVG QR code (simplified example)
			const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" style="background-color: white">
      <rect width="200" height="200" fill="white" />
      <path d="M0,0 L200,0 L200,200 L0,200 Z" fill="white" />
      <path d="M40,40 L50,40 L50,50 L40,50 Z M60,40 L70,40 L70,50 L60,50 Z M80,40 L90,40 L90,50 L80,50 Z M100,40 L110,40 L110,50 L100,50 Z M120,40 L130,40 L130,50 L120,50 Z M140,40 L150,40 L150,50 L140,50 Z M160,40 L170,40 L170,50 L160,50 Z" fill="black" />
      <!-- QR code pattern for ${qrCodeValue(restaurantId)} -->
    </svg>`;

			return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
		},
		[qrCodeValue],
	);

	// Extract SVG data from a reference or data URL
	const extractSvgData = useCallback(
		async (svgElement?: SVGElement | null, dataUrl?: string | null) => {
			// If we have a data URL, try to use it directly
			if (dataUrl) {
				try {
					if (dataUrl.startsWith("data:")) {
						const dataUrlParts = dataUrl.split(",");
						if (dataUrlParts.length === 2) {
							const base64Data = dataUrlParts[1];

							// Handle both base64 and URL-encoded data
							if (dataUrl.includes(";base64,")) {
								return atob(base64Data);
							}
							return decodeURIComponent(base64Data);
						}
					}
				} catch (dataUrlError) {
					console.warn("Error extracting SVG from data URL:", dataUrlError);
					// Fall through to SVG element approach
				}
			}

			// Use SVG element as fallback
			if (svgElement) {
				// Clone SVG to avoid modifying the original
				const clonedSvg = svgElement.cloneNode(true) as SVGElement;

				// Set attributes for better compatibility
				clonedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
				if (!clonedSvg.hasAttribute("width")) {
					clonedSvg.setAttribute("width", "200");
				}
				if (!clonedSvg.hasAttribute("height")) {
					clonedSvg.setAttribute("height", "200");
				}

				// Ensure background is white for better visibility
				clonedSvg.setAttribute("style", "background-color: white");

				// Serialize the SVG
				return new XMLSerializer().serializeToString(clonedSvg);
			}

			throw new Error("No SVG source available");
		},
		[],
	);

	// Single mode: Generate QR code and show save/cancel buttons
	const handleGenerate = useCallback(() => {
		if (props.mode !== "single") return;

		setGenerating(true);
		setError(null);
		setSuccess(false);
	}, [props.mode]);

	// Single mode: Cancel QR code generation
	const handleCancel = useCallback(() => {
		if (props.mode !== "single") return;

		setGenerating(false);
		setError(null);
	}, [props.mode]);

	// Single mode: Download QR code as image
	const handleDownload = useCallback(() => {
		if (props.mode !== "single") return;

		if (!qrCodeDataUrl && !qrRef.current) {
			setError("No QR code found to download");
			return;
		}

		try {
			// Get data URL from existing value or SVG element
			let dataUrl = qrCodeDataUrl;

			if (!dataUrl && qrRef.current) {
				const svgElement = qrRef.current.querySelector("svg");
				if (!svgElement) {
					throw new Error("QR code SVG not found");
				}

				const svgData = new XMLSerializer().serializeToString(svgElement);
				const encodedData = encodeURIComponent(svgData);
				dataUrl = `data:image/svg+xml;charset=utf-8,${encodedData}`;
			}

			if (!dataUrl) {
				throw new Error("Failed to generate QR code data URL");
			}

			// Handle download with browser compatibility
			const isSafari = /^((?!chrome|android).)*safari/i.test(
				navigator.userAgent,
			);

			// Only access props.restaurant when in single mode
			const filename =
				props.mode === "single"
					? `${props.restaurant.name.replace(/\s+/g, "-").toLowerCase()}-qrcode.svg`
					: "qrcode.svg";

			if (isSafari) {
				// Safari doesn't handle the download attribute well, open in new tab
				const newTab = window.open();
				if (newTab) {
					newTab.document.write(`
            <html>
              <head>
                <title>Download QR Code</title>
                <style>
                  body { 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: center; 
                    height: 100vh; 
                    font-family: system-ui, sans-serif;
                  }
                  .instructions {
                    margin: 20px;
                    max-width: 400px;
                    text-align: center;
                  }
                </style>
              </head>
              <body>
                <img src="${dataUrl}" alt="QR Code" width="300" height="300" />
                <div class="instructions">
                  <p>Right-click or long-press the image and select "Save Image As" to download.</p>
                  <p>Filename: ${filename}</p>
                </div>
              </body>
            </html>
          `);
					newTab.document.close();
				} else {
					throw new Error(
						"Could not open download window. Please check your popup blocker settings.",
					);
				}
				return;
			}

			// For other browsers, use the standard approach
			const link = document.createElement("a");
			link.href = dataUrl;
			link.download = filename;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (err) {
			console.error("Download failed:", err);
			setError(
				err instanceof Error ? err.message : "Failed to download QR code",
			);
		}
	}, [props, qrCodeDataUrl]);

	// Single mode: Save QR code URL to database
	const handleSave = useCallback(async () => {
		if (props.mode !== "single") return;

		try {
			setSaving(true);
			setError(null);

			// Make sure we have a valid QR code to save
			if (!qrRef.current) {
				throw new Error("QR code container not found");
			}

			// Get the SVG element
			const svgElement = qrRef.current.querySelector("svg");
			if (!svgElement) {
				throw new Error("QR code SVG not found");
			}

			// Generate data URL
			const svgData = await extractSvgData(svgElement);

			// Use safe encoding for all browsers
			let dataUrl: string;
			try {
				// Modern approach - safer for all characters
				const blob = new Blob([svgData], { type: "image/svg+xml" });
				dataUrl = await new Promise<string>((resolve, reject) => {
					const reader = new FileReader();
					reader.onload = () => resolve(reader.result as string);
					reader.onerror = reject;
					reader.readAsDataURL(blob);
				});
			} catch (blobError) {
				// Fallback to base64 encoding
				console.warn(
					"Blob approach failed, falling back to base64:",
					blobError,
				);
				dataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgData)))}`;
			}

			// Save to database - only access props.restaurant when in single mode
			if (props.mode === "single") {
				const result = await saveQRCodeUrl(
					props.restaurant.id.toString(),
					dataUrl,
				);

				if (result) {
					setSuccess(true);
					setGenerating(false);
					setQrCodeDataUrl(dataUrl);
				} else {
					throw new Error("Failed to save QR code");
				}
			}
		} catch (err) {
			console.error("Save error:", err);
			setError(
				err instanceof Error
					? err.message
					: "An error occurred while saving the QR code",
			);
		} finally {
			setSaving(false);
		}
	}, [props, extractSvgData]);

	// Bulk mode: Toggle selection of a single restaurant
	const toggleRestaurant = useCallback(
		(restaurant: Restaurant) => {
			if (props.mode !== "bulk") return;

			setSelectedRestaurants((prev) => {
				const isSelected = prev.some((r) => r.id === restaurant.id);

				if (isSelected) {
					return prev.filter((r) => r.id !== restaurant.id);
				}
				return [...prev, restaurant];
			});
		},
		[props.mode],
	);

	// Bulk mode: Select/deselect all restaurants
	const toggleSelectAll = useCallback(
		(restaurants: Restaurant[], select: boolean) => {
			if (props.mode !== "bulk") return;

			if (select) {
				setSelectedRestaurants(restaurants);
			} else {
				setSelectedRestaurants([]);
			}
		},
		[props.mode],
	);

	// Bulk mode: Generate QR codes for all selected restaurants
	const handleGenerateAll = useCallback(
		async (restaurants?: Restaurant[]) => {
			if (props.mode !== "bulk") return;

			const restaurantsToProcess = restaurants || selectedRestaurants;

			if (restaurantsToProcess.length === 0) {
				setError("Please select at least one restaurant to generate QR codes");
				return;
			}

			setGenerating(true);
			setError(null);
			setSuccess(false);
			setProgress(0);
			setResults([]);

			try {
				const generatedResults: QRCodeResult[] = [];

				for (let i = 0; i < restaurantsToProcess.length; i++) {
					const restaurant = restaurantsToProcess[i];

					// Generate QR code data URL
					const dataUrl = generateQRCodeDataUrl(restaurant.id);

					generatedResults.push({
						restaurantId: restaurant.id.toString(),
						success: true,
						qrCodeDataUrl: dataUrl,
					});

					// Update progress
					setProgress(
						Math.round(((i + 1) / restaurantsToProcess.length) * 100),
					);
				}

				setResults(generatedResults);

				// If restaurants were passed in, update the internal selection state
				if (restaurants) {
					setSelectedRestaurants(restaurants);
				}
			} catch (error) {
				console.error("Error generating QR codes:", error);
				setError("Failed to generate QR codes");
			}
		},
		[props.mode, selectedRestaurants, generateQRCodeDataUrl],
	);

	// Bulk mode: Save all generated QR codes to the database
	const handleSaveAll = useCallback(async () => {
		if (props.mode !== "bulk") return;

		if (results.length === 0) {
			setError("No QR codes have been generated yet");
			return;
		}

		setSaving(true);
		setError(null);

		try {
			const bulkData = results.map((result) => ({
				restaurantId: result.restaurantId,
				qrCodeUrl: result.qrCodeDataUrl || "",
			}));

			// Filter out any entries without data URLs
			const validBulkData = bulkData.filter((data) => data.qrCodeUrl);

			if (validBulkData.length === 0) {
				throw new Error("No valid QR code data to save");
			}

			const saveResult = await saveBulkQRCodeUrls(validBulkData);

			if (saveResult.success) {
				setSuccess(true);
				setResults((prev) =>
					prev.map((item) => {
						const resultItem = saveResult.results.find(
							(r) => r.restaurantId === item.restaurantId,
						);
						return {
							...item,
							success: resultItem ? resultItem.success : false,
						};
					}),
				);
			} else {
				throw new Error("Failed to save QR codes to database");
			}
		} catch (error) {
			console.error("Error saving QR codes:", error);
			setError(
				error instanceof Error
					? error.message
					: "An error occurred while saving QR codes",
			);
		} finally {
			setSaving(false);
		}
	}, [props.mode, results]);

	// Bulk mode: Download all generated QR codes as a ZIP file
	const handleDownloadAll = useCallback(async () => {
		if (props.mode !== "bulk") return;

		if (results.length === 0) {
			setError("No QR codes available to download");
			return;
		}

		try {
			const zip = new JSZip();
			const qrFolder = zip.folder("qr-codes");

			if (!qrFolder) {
				throw new Error("Failed to create folder in ZIP");
			}

			let successCount = 0;
			const failedItems: string[] = [];

			// Process each result
			for (const result of results) {
				if (!result.qrCodeDataUrl) {
					failedItems.push(
						`Missing QR code data for restaurant ID ${result.restaurantId}`,
					);
					continue;
				}

				const restaurant = selectedRestaurants.find(
					(r) => r.id.toString() === result.restaurantId,
				);
				if (!restaurant) {
					failedItems.push(
						`Could not find restaurant data for ID ${result.restaurantId}`,
					);
					continue;
				}

				try {
					// Use the SVG data directly
					const fileName = `${restaurant.name.replace(/\s+/g, "-").toLowerCase()}-qrcode.svg`;

					// Try to extract SVG data
					try {
						const svgData = await extractSvgData(null, result.qrCodeDataUrl);
						qrFolder.file(fileName, svgData);
						successCount++;
					} catch (dataError) {
						// Fall back to blob approach
						try {
							// Create a blob from the data URL
							const response = await fetch(result.qrCodeDataUrl);
							const blob = await response.blob();

							// Add to zip using the raw blob data
							qrFolder.file(fileName, blob);
							successCount++;
						} catch (blobError) {
							console.error("Blob approach failed:", blobError);
							failedItems.push(
								`Failed to process ${restaurant.name}: ${blobError instanceof Error ? blobError.message : "Unknown error"}`,
							);
						}
					}
				} catch (itemError) {
					console.error(`Error processing ${restaurant.name}:`, itemError);
					failedItems.push(
						`Error processing ${restaurant.name}: ${itemError instanceof Error ? itemError.message : "Unknown error"}`,
					);
				}
			}

			// Generate the ZIP file
			const content = await zip.generateAsync({ type: "blob" });
			saveAs(content, "restaurant-qr-codes.zip");

			// Provide feedback
			if (successCount === 0) {
				setError(
					"Failed to package any QR codes. Please try generating them again.",
				);
			} else if (failedItems.length > 0) {
				console.warn("Some QR codes could not be packaged:", failedItems);
				setError(
					`Downloaded ${successCount} QR codes. ${failedItems.length} could not be included.`,
				);
			}
		} catch (error) {
			console.error("Error downloading QR codes:", error);
			setError(
				`Failed to download QR codes: ${error instanceof Error ? error.message : "Unknown error"}. Check your browser's download permissions.`,
			);
		}
	}, [props.mode, results, selectedRestaurants, extractSvgData]);

	// Bulk mode: Reset the state
	const handleReset = useCallback(() => {
		if (props.mode !== "bulk") return;

		setSelectedRestaurants([]);
		setGenerating(false);
		setSaving(false);
		setSuccess(false);
		setError(null);
		setProgress(0);
		setResults([]);
	}, [props.mode]);

	// Return appropriate props based on mode
	if (props.mode === "single") {
		return {
			qrCodeDataUrl,
			qrCodeValue: qrCodeValue(props.restaurant.id),
			handleGenerate,
			handleCancel,
			handleDownload,
			handleSave,
			generating,
			saving,
			success,
			error,
			qrRef,
		};
	} else {
		return {
			selectedRestaurants,
			generating,
			saving,
			success,
			error,
			progress,
			results,
			toggleSelectAll,
			toggleRestaurant,
			handleGenerateAll,
			handleSaveAll,
			handleDownloadAll,
			handleReset,
		};
	}
};
