import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

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

// For server-side usage
export async function getAuthenticatedSupabaseClient() {
	const { getToken } = auth();
	const supabaseToken = await getToken({ template: "supabase" });

	return createClient(supabaseUrl, supabaseAnonKey, {
		global: {
			headers: { Authorization: `Bearer ${supabaseToken}` },
		},
		realtime: {
			params: {
				eventsPerSecond: 10,
			},
		},
	});
}

// For client-side usage (in component)
export function createClerkSupabaseClient(
	getToken: () => Promise<string | null>,
) {
	return createClient(supabaseUrl, supabaseAnonKey, {
		global: {
			fetch: async (url, options = {}) => {
				const token = await getToken();

				const headers = new Headers(options?.headers);
				if (token) {
					headers.set("Authorization", `Bearer ${token}`);
				}

				return fetch(url, {
					...options,
					headers,
				});
			},
		},
		realtime: {
			params: {
				eventsPerSecond: 10,
			},
		},
	});
}
