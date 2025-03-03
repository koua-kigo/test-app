import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function toBigInt(value: string | number) {
	return BigInt(value);
}

export function toNumber(value: string | number) {
	return Number(value);
}

export function convertBigInts<T>(
	obj: T,
	dataType: "number" | "string" = "number",
): T {
	// Handle arrays
	if (Array.isArray(obj)) {
		return obj.map((item) => convertBigInts(item, dataType)) as unknown as T;
	}

	// Handle objects
	if (obj && typeof obj === "object" && !Array.isArray(obj)) {
		return Object.entries(obj).reduce((acc, [key, value]) => {
			acc[key as keyof typeof acc] =
				typeof value === "bigint"
					? dataType === "number"
						? Number(value)
						: value.toString()
					: value instanceof Object
						? convertBigInts(value, dataType)
						: value;
			return acc;
		}, {} as T);
	}

	// Return primitive values as is
	return obj;
}
