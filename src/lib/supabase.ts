import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	realtime: {
		params: {
			eventsPerSecond: 10,
		},
	},
});

// Helper function to convert bigint to string in JSON
export function convertBigIntToString<T>(data: T): T {
	if (data === null || data === undefined) {
		return data;
	}

	if (typeof data === "bigint") {
		return String(data) as unknown as T;
	}

	if (Array.isArray(data)) {
		return data.map(convertBigIntToString) as unknown as T;
	}

	if (typeof data === "object") {
		return Object.fromEntries(
			Object.entries(data).map(([key, value]) => [
				key,
				convertBigIntToString(value),
			]),
		) as unknown as T;
	}

	return data;
}
