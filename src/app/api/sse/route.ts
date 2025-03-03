import type { NextRequest } from "next/server";

// Store active connections
const clients = new Set<ReadableStreamDefaultController>();

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
	console.log("🚀 ~ GET ~ request:", request);

	// const body = await request.json();

	// console.log("🚀 ~ GET ~ body:", body);

	const responseStream = new ReadableStream({
		async start(controller) {
			// Add this client to the set
			clients.add(controller);

			// Send initial connection message
			const initialMessage = {
				type: "connection_established",
				payload: {
					message: "SSE connection established",
					timestamp: new Date().toISOString(),
				},
			};
			controller.enqueue(encodeSSE("message", JSON.stringify(initialMessage)));

			// Remove client when connection closes
			request.signal.addEventListener("abort", () => {
				clients.delete(controller);
			});
		},
	});

	return new Response(responseStream, {
		headers: {
			"Content-Type": "text/event-stream",
			"Cache-Control": "no-cache",
			Connection: "keep-alive",
		},
	});
}

export async function POST(request: NextRequest) {
	console.log("🚀 ~ POST ~ request:", request);
	try {
		const body = await request.json();

		console.log("🚀 ~ POST ~ body:", body);

		// Validate the request body
		if (!body.type || !body.payload) {
			return Response.json({ error: "Invalid request body" }, { status: 400 });
		}

		// Handle QR code validation
		if (body.type === "validate_qr") {
			const { userId, restaurantId, punchCardId } = body.payload;

			// Validate required fields
			if (!userId || !restaurantId || !punchCardId) {
				return Response.json(
					{ error: "Missing required fields" },
					{ status: 400 },
				);
			}

			// TODO: Implement actual validation logic with database
			// This is a placeholder for demonstration
			const isValid = true; // In a real app, this would be determined by DB check

			// Create response message
			const responseMessage = {
				type: "validation_result",
				payload: {
					success: isValid,
					message: isValid
						? "Punch added successfully!"
						: "Failed to validate QR code",
					punchCardId,
					userId,
					restaurantId,
					timestamp: new Date().toISOString(),
				},
			};

			// Broadcast to all clients
			broadcastMessage(responseMessage);

			return Response.json({ success: true });
		}

		// Handle other message types
		return Response.json({ success: true });
	} catch (error) {
		console.error("Error processing SSE message:", error);
		return Response.json(
			{ error: "Failed to process message" },
			{ status: 500 },
		);
	}
}

// Broadcast a message to all connected clients
function broadcastMessage(message: unknown) {
	for (const client of clients) {
		client.enqueue(encodeSSE("message", JSON.stringify(message)));
	}
}

// Encode data in SSE format
function encodeSSE(event: string, data: string): Uint8Array {
	const encoder = new TextEncoder();
	return encoder.encode(`event: ${event}\ndata: ${data}\n\n`);
}
