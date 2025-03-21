"use client";

import { useHandleQRCode as useConsolidatedQRCode } from "./use-handle-qr-code";
import type { Restaurant } from "@/types/db";

export const useHandleQRCode = ({ restaurant }: { restaurant: Restaurant }) => {
	return useConsolidatedQRCode({ restaurant, mode: "single" });
};
