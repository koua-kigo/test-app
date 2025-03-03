"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserPunchCard() {
	return (
		<div className="max-w-md mx-auto">
			<Card>
				<CardHeader>
					<CardTitle>Your Punch Card</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">
						Your punch card details will appear here.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
