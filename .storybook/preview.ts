import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { LocationProvider } from "../src/context/location-context";
import { UserProvider } from "../src/context/user-context";
import type { Decorator } from "@storybook/react";
import React from "react";
import { Toaster } from "../src/components/ui/sonner";

// Global decorator to wrap all stories
const withGlobalWrapper: Decorator = (Story) => {
	return (
		<div
			style={{
				padding: "1rem",
				minHeight: "100vh",
				position: "relative",
				backgroundColor: "#faf9f6",
				backgroundImage: "radial-gradient(#e0e0e0 1px, transparent 1px)",
				backgroundSize: "20px 20px",
			}
};
>
			<div style=
{
	position: "relative", zIndex;
	: 10
}
>
				<LocationProvider>
					<UserProvider>
						<Story />
						<Toaster />
					</UserProvider>
				</LocationProvider>
			</div>
		</div>
	)
}

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [withGlobalWrapper],
};

export default preview;
