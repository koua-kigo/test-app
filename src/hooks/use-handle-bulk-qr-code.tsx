"use client";

import { useHandleQRCode } from "./use-handle-qr-code";
import type { Restaurant } from "@/types/db";

export const useHandleBulkQRCode = () => {
	return useHandleQRCode({ mode: "bulk" });
};
