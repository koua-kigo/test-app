import type { Meta, StoryObj } from "@storybook/react";
import { SelectableRestaurantsTable } from "@/app/admin/restaurants/selectable-restaurants-table";
import * as React from "react";
import type { Restaurant } from "@/types/db";
import { useHandleBulkQRCode } from "@/hooks/use-handle-bulk-qr-code";

// Mock restaurant data
const mockRestaurants: Restaurant[] = [
	{
		id: 1,
		name: "Bella Italia",
		address: "123 Main St, New York, NY 10001",
		qrCodeUrl:
			"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-1",
		dealCount: 3,
	},
	{
		id: 2,
		name: "Golden Dragon",
		address: "456 Park Ave, New York, NY 10002",
		qrCodeUrl: null,
		dealCount: 0,
	},
	{
		id: 3,
		name: "Seaside Grill",
		address: "789 Ocean Blvd, Miami, FL 33139",
		qrCodeUrl:
			"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-3",
		dealCount: 5,
	},
	{
		id: 4,
		name: "Urban Spice",
		address: "321 Downtown St, Chicago, IL 60601",
		qrCodeUrl:
			"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-4",
		dealCount: 2,
	},
	{
		id: 5,
		name: "Farm to Table",
		address: "987 Country Rd, Portland, OR 97205",
		qrCodeUrl: null,
		dealCount: 1,
	},
];

// Create more restaurants for pagination example
const lotsOfRestaurants: Restaurant[] = Array(20)
	.fill(0)
	.map((_, index) => ({
		id: index + 1,
		name: `Restaurant ${index + 1}`,
		address: `${100 + index} Example St, Sample City, SC ${10000 + index}`,
		qrCodeUrl:
			index % 3 === 0
				? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-${index + 1}`
				: null,
		dealCount: Math.floor(Math.random() * 5),
	}));

/**
 * The SelectableRestaurantsTable component displays a table of restaurants with the ability to select them
 * for bulk QR code generation and management. It integrates with the useHandleBulkQRCode hook to handle
 * all the state management and actions for QR code operations.
 */
const meta: Meta<typeof SelectableRestaurantsTable> = {
	title: "Admin/Restaurants/SelectableRestaurantsTable",
	component: SelectableRestaurantsTable,
	parameters: {
		layout: "padded",
		docs: {
			description: {
				component:
					"A table component that displays restaurants with checkboxes for selection, enabling bulk QR code operations.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		restaurants: {
			control: "object",
			description: "Array of restaurant objects to display in the table",
		},
	},
	decorators: [
		(Story) => (
			<div className="max-w-4xl mx-auto">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof SelectableRestaurantsTable>;

/**
 * Default state of the restaurants table with a few restaurants.
 */
export const Default: Story = {
	args: {
		restaurants: mockRestaurants,
	},
	parameters: {
		docs: {
			description: {
				story:
					"The default state of the SelectableRestaurantsTable showing a list of restaurants.",
			},
		},
	},
	decorators: [
		(Story) => {
			// Mock the hook for the default state
			(useHandleBulkQRCode as jest.Mock).mockReturnValue({
				selectedRestaurants: [],
				generating: false,
				saving: false,
				success: false,
				error: null,
				progress: 0,
				results: [],
				toggleSelectAll: () => {},
				toggleRestaurant: () => {},
				handleGenerateAll: () => {},
				handleSaveAll: () => {},
				handleDownloadAll: () => {},
				handleReset: () => {},
			});
			return <Story />;
		},
	],
};

/**
 * Empty state when there are no restaurants to display.
 */
export const NoRestaurants: Story = {
	args: {
		restaurants: [],
	},
	parameters: {
		docs: {
			description: {
				story:
					"Shows how the table appears when there are no restaurants to display.",
			},
		},
	},
	decorators: [
		(Story) => {
			(useHandleBulkQRCode as jest.Mock).mockReturnValue({
				selectedRestaurants: [],
				generating: false,
				saving: false,
				success: false,
				error: null,
				progress: 0,
				results: [],
				toggleSelectAll: () => {},
				toggleRestaurant: () => {},
				handleGenerateAll: () => {},
				handleSaveAll: () => {},
				handleDownloadAll: () => {},
				handleReset: () => {},
			});
			return <Story />;
		},
	],
};

/**
 * Shows the table with restaurants selected, displaying the selection toolbar.
 */
export const WithSelection: Story = {
	args: {
		restaurants: mockRestaurants,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Demonstrates the table with some restaurants selected, showing the selection toolbar with available actions.",
			},
		},
	},
	decorators: [
		(Story) => {
			(useHandleBulkQRCode as jest.Mock).mockReturnValue({
				selectedRestaurants: [mockRestaurants[0], mockRestaurants[2]],
				generating: false,
				saving: false,
				success: false,
				error: null,
				progress: 0,
				results: [],
				toggleSelectAll: () => {},
				toggleRestaurant: () => {},
				handleGenerateAll: () => {},
				handleSaveAll: () => {},
				handleDownloadAll: () => {},
				handleReset: () => {},
			});
			return <Story />;
		},
	],
};

/**
 * Shows the table during the QR code generation process with a progress bar.
 */
export const GeneratingQRCodes: Story = {
	args: {
		restaurants: mockRestaurants,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Displays the table during the QR code generation process, showing a progress bar and generation status.",
			},
		},
	},
	decorators: [
		(Story) => {
			(useHandleBulkQRCode as jest.Mock).mockReturnValue({
				selectedRestaurants: [
					mockRestaurants[0],
					mockRestaurants[2],
					mockRestaurants[3],
				],
				generating: true,
				saving: false,
				success: false,
				error: null,
				progress: 65,
				results: [
					{
						restaurantId: "1",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-1-new",
					},
					{
						restaurantId: "3",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-3-new",
					},
				],
				toggleSelectAll: () => {},
				toggleRestaurant: () => {},
				handleGenerateAll: () => {},
				handleSaveAll: () => {},
				handleDownloadAll: () => {},
				handleReset: () => {},
			});
			return <Story />;
		},
	],
};

/**
 * Shows the table with QR codes generated and ready to be saved.
 */
export const ReadyToSave: Story = {
	args: {
		restaurants: mockRestaurants,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Displays the table with QR codes generated and ready to be saved to the database.",
			},
		},
	},
	decorators: [
		(Story) => {
			(useHandleBulkQRCode as jest.Mock).mockReturnValue({
				selectedRestaurants: [
					mockRestaurants[0],
					mockRestaurants[2],
					mockRestaurants[3],
				],
				generating: true,
				saving: false,
				success: false,
				error: null,
				progress: 100,
				results: [
					{
						restaurantId: "1",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-1-new",
					},
					{
						restaurantId: "3",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-3-new",
					},
					{
						restaurantId: "4",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-4-new",
					},
				],
				toggleSelectAll: () => {},
				toggleRestaurant: () => {},
				handleGenerateAll: () => {},
				handleSaveAll: () => {},
				handleDownloadAll: () => {},
				handleReset: () => {},
			});
			return <Story />;
		},
	],
};

/**
 * Shows the table with QR codes being saved to the database.
 */
export const SavingQRCodes: Story = {
	args: {
		restaurants: mockRestaurants,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Demonstrates the table during the saving process for generated QR codes.",
			},
		},
	},
	decorators: [
		(Story) => {
			(useHandleBulkQRCode as jest.Mock).mockReturnValue({
				selectedRestaurants: [
					mockRestaurants[0],
					mockRestaurants[2],
					mockRestaurants[3],
				],
				generating: true,
				saving: true,
				success: false,
				error: null,
				progress: 100,
				results: [
					{
						restaurantId: "1",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-1-new",
					},
					{
						restaurantId: "3",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-3-new",
					},
					{
						restaurantId: "4",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-4-new",
					},
				],
				toggleSelectAll: () => {},
				toggleRestaurant: () => {},
				handleGenerateAll: () => {},
				handleSaveAll: () => {},
				handleDownloadAll: () => {},
				handleReset: () => {},
			});
			return <Story />;
		},
	],
};

/**
 * Shows the table after QR codes have been successfully saved.
 */
export const SuccessState: Story = {
	args: {
		restaurants: mockRestaurants,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Displays the table after QR codes have been successfully generated and saved.",
			},
		},
	},
	decorators: [
		(Story) => {
			(useHandleBulkQRCode as jest.Mock).mockReturnValue({
				selectedRestaurants: [
					mockRestaurants[0],
					mockRestaurants[2],
					mockRestaurants[3],
				],
				generating: false,
				saving: false,
				success: true,
				error: null,
				progress: 100,
				results: [
					{
						restaurantId: "1",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-1-new",
					},
					{
						restaurantId: "3",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-3-new",
					},
					{
						restaurantId: "4",
						success: true,
						qrCodeUrl:
							"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-4-new",
					},
				],
				toggleSelectAll: () => {},
				toggleRestaurant: () => {},
				handleGenerateAll: () => {},
				handleSaveAll: () => {},
				handleDownloadAll: () => {},
				handleReset: () => {},
			});
			return <Story />;
		},
	],
};

/**
 * Shows the table when an error occurs during QR code generation or saving.
 */
export const ErrorState: Story = {
  args: {
    restaurants: mockRestaurants,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the table when an error occurs during QR code generation or saving.",
      },
    },
  },
  decorators: [
    (Story) => {
      (useHandleBulkQRCode as jest.Mock).mockReturnValue({
        selectedRestaurants: [mockRestaurants[0], mockRestaurants[2], mockRestaurants[3]],
        generating: false,
        saving: false,
        success: false,
        error: "Failed to generate QR codes. Please try again later.",
        progress: 65,
        results: [
          { restaurantId: "1", success: true, qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=restaurant-1-new" },
          { restaurantId: "3", success: false, error: "Network error" },
        ],
        toggleSelectAll: () => {},
        toggleRestaurant: () => {},
        handleGenerateAll: () => {},
        handleSaveAll: () => {},
        handleDownloadAll: () => {},
        handleReset: () => {},
      });
      return <Story />;
    },
  ],
};

/**
 * Shows the table with pagination when displaying many restaurants.
 */
export const WithPagination: Story = {
  args: {
    restaurants: lotsOfRestaurants,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the table with pagination controls when displaying a large number of restaurants.",
      },
    },
  },
  decorators: [
    (Story) => {
      (useHandleBulkQRCode as jest.Mock).mockReturnValue({
        selectedRestaurants: [],
        generating: false,
        saving: false,
        success: false,
        error: null,
        progress: 0,
        results: [],
        toggleSelectAll: () => {},
        toggleRestaurant: () => {},
        handleGenerateAll: () => {},
        handleSaveAll: () => {},
        handleDownloadAll: () => {},
        handleReset: () => {},
      });
      return <Story />;
    },
  ],
};
