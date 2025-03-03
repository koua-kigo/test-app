import { Webhook } from "svix";
import { headers } from "next/headers";
import type { User, WebhookEvent } from "@clerk/nextjs/server";
import { createUser } from "@/db/models/users";

export async function POST(req: Request) {
	const SIGNING_SECRET = process.env.SIGNING_SECRET;

	if (!SIGNING_SECRET) {
		throw new Error(
			"Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env",
		);
	}

	// Create new Svix instance with secret
	const wh = new Webhook(SIGNING_SECRET);

	// Get headers
	const headerPayload = await headers();
	const svix_id = headerPayload.get("svix-id");
	const svix_timestamp = headerPayload.get("svix-timestamp");
	const svix_signature = headerPayload.get("svix-signature");

	// If there are no headers, error out
	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response("Error: Missing Svix headers", {
			status: 400,
		});
	}

	// Get body
	const payload = await req.json();

	console.log("🚀 ~ POST ~ payload:", payload);
	try {
		const { data, type } = payload;

		if (type === "user.created") {
			const { id: clerkId, email_addresses, first_name, last_name } = data;
			const email = email_addresses[0].email_address;
			const name = `${first_name} ${last_name}`;

			const user = await createUser({
				clerkId,
				name,
				email,
			});

			console.log("🚀 ~ POST ~ user:", user);

			return Response.json({
				message: "User created",
				data: user,
			});
		}
	} catch (err) {
		console.error("Error: Could not verify webhook:", err);
		return new Response("Error: Verification error", {
			status: 400,
		});
	}
}
