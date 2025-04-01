import type { Meta, StoryObj } from "@storybook/react";
import { QRCodeManager } from "@/app/admin/restaurants/qr-code-manager";
import * as React from "react";
import { fn } from "@storybook/test";
import type { Restaurant } from "@/types/db";
import type { RefObject } from "react";

// Import the hook types without importing the actual implementation
import type { UseHandleQRCodeProps } from "@/hooks/use-handle-qr-code";

/**
 * The QRCodeManager component allows restaurant administrators to generate,
 * preview, save, and download QR codes for restaurant menus. It provides
 * multiple variants suitable for different UI contexts - default, compact, 
 * and table cell formats.
 */
const meta: Meta<typeof QRCodeManager> = {
  title: "Admin/Restaurants/QRCodeManager",
  component: QRCodeManager,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A multi-functional component for managing restaurant QR codes with generation, previewing, saving, and downloading capabilities.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "compact", "table"],
      description: "The display variant of the QR code manager",
      defaultValue: "default",
    },
    restaurant: {
      control: "object",
      description: "Restaurant data including QR code URL",
    },
  },
  decorators: [
    (Story) => (
      <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock restaurant data
const mockRestaurant: Restaurant = {
  id: BigInt(1),
  name: "Gourmet Delights",
  description: "A fine dining experience with international cuisine",
  imageUrl: "https://example.com/restaurant1.jpg",
  address: "123 Culinary Ave, Foodtown, CA 94123",
  qrCodeUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogd2hpdGUiPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik02NiA2NmgxMHYxMEg2NnptMTAgMGgxMHYxMEg3NnptMTAgMGgxMHYxMEg4NnptMTAgMGgxMHYxMEg5NnptMTAgMGgxMHYxMGgxMHptMTAgMGgxMHYxMGgxMHptLTUwIDEwaDF2MWgtMXptMzAgMGgxdjFoLTF6bS0zMCAxMGgxMHYxMEg2NnptNDAgMGgxMHYxMGgxMHptLTQwIDEwaDF2MWgtMXptNDAgMGgxdjFoLTF6bS00MCAxMGgxMHYxMEg2NnptNDAgMGgxMHYxMGgxMHptLTQwIDEwaDF2MWgtMXptNDAgMGgxdjFoLTF6bS00MCAxMGgxMHYxMEg2NnptMTAgMGgxMHYxMEg3NnptMTAgMGgxMHYxMEg4NnptMTAgMGgxMHYxMEg5NnptMTAgMGgxMHYxMGgxMHptMTAgMGgxMHYxMGgxMHptLTUwIDEwaDF2MWgtMXptMzAgMGgxdjFoLTF6IiBmaWxsPSIjMDAwIi8+PC9zdmc+",
};

const mockRestaurantNoQR: Restaurant = {
  ...mockRestaurant,
  id: BigInt(2),
  name: "Fresh & Fusion",
  description: "Modern fusion cuisine with fresh local ingredients",
  qrCodeUrl: null,
};

// Default mock implementation for the hook
const setupDefaultHook = () => {
  (useHandleQRCode as jest.Mock).mockImplementation(({ restaurant }) => ({
    generating: false,
    saving: false,
    success: false,
    error: null,
    qrRef: React.createRef(),
    qrCodeValue: `/api/restaurants/${restaurant.id}/scan`,
    handleGenerate: fn(),
    handleCancel: fn(),
    handleSave: fn(),
    handleDownload: fn(),
  }));
};

// Setup for generating state
const setupGeneratingHook = () => {
  (useHandleQRCode as jest.Mock).mockImplementation(({ restaurant }) => ({
    generating: true,
    saving: false,
    success: false,
    error: null,
    qrRef: React.createRef(),
    qrCodeValue: `/api/restaurants/${restaurant.id}/scan`,
    handleGenerate: fn(),
    handleCancel: fn(),
    handleSave: fn(),
    handleDownload: fn(),
  }));
};

// Setup for saving state
const setupSavingHook = () => {
  (useHandleQRCode as jest.Mock).mockImplementation(({ restaurant }) => ({
    generating: true,
    saving: true,
    success: false,
    error: null,
    qrRef: React.createRef(),
    qrCodeValue: `/api/restaurants/${restaurant.id}/scan`,
    handleGenerate: fn(),
    handleCancel: fn(),
    handleSave: fn(),
    handleDownload: fn(),
  }));
};

// Setup for success state
const setupSuccessHook = () => {
  (useHandleQRCode as jest.Mock).mockImplementation(({ restaurant }) => ({
    generating: false,
    saving: false,
    success: true,
    error: null,
    qrRef: React.createRef(),
    qrCodeValue: `/api/restaurants/${restaurant.id}/scan`,
    handleGenerate: fn(),
    handleCancel: fn(),
    handleSave: fn(),
    handleDownload: fn(),
  }));
};

// Setup for error state
const setupErrorHook = () => {
  (useHandleQRCode as jest.Mock).mockImplementation(({ restaurant }) => ({
    generating: false,
    saving: false,
    success: false,
    error: "Failed to save QR code. Network error.",
    qrRef: React.createRef(),
    qrCodeValue: `/api/restaurants/${restaurant.id}/scan`,
    handleGenerate: fn(),
    handleCancel: fn(),
    handleSave: fn(),
    handleDownload: fn(),
  }));
};

/**
 * Default view of the QRCodeManager component with an existing QR code.
 * This displays the full-featured variant with options to generate a new QR code.
 */
export const Default: Story = {
  args: {
    restaurant: mockRestaurant,
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "The default view showing a restaurant with an existing QR code.",
      },
    },
  },
  decorators: [
    (Story) => {
      setupDefaultHook();
      return <Story />;
    },
  ],
};

/**
 * QRCodeManager when no QR code has been generated yet.
 * Shows the initial state with just a generate button.
 */
export const NoQRCode: Story = {
  args: {
    restaurant: mockRestaurantNoQR,
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "The initial state when no QR code has been generated yet.",
      },
    },
  },
  decorators: [
    (Story) => {
      setupDefaultHook();
      return <Story />;
    },
  ],
};

/**
 * Compact variant of the QRCodeManager.
 * Uses less space and has condensed controls, suitable for smaller UI areas.
 */
export const CompactVariant: Story = {
  args: {
    restaurant: mockRestaurant,
    variant: "compact",
  },
  parameters: {
    docs: {
      description: {
        story: "A space-efficient variant with condensed controls.",
      },
    },
  },
  decorators: [
    (Story) => {
      setupDefaultHook();
      return <Story />;
    },
  ],
};

/**
 * Table cell variant of the QRCodeManager.
 * Designed to fit within a table cell, showing either a mini QR preview or a Generate button.
 */
export const TableVariant: Story = {
  args: {
    restaurant: mockRestaurant,
    variant: "table",
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal variant designed to fit within a table cell.",
      },
    },
  },
  decorators: [
    (Story) => {
      setupDefaultHook();
      return <Story />;
    },
  ],
};

/**
 * QRCodeManager in the generating state.
 * Shows the preview of the newly generated QR code with save and cancel options.
 */
export const GeneratingState: Story = {
  args: {
    restaurant: mockRestaurant,
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "The component state during QR code generation showing the preview and action buttons.",
      },
    },
  },
  decorators: [
    (Story) => {
      setupGeneratingHook();
      return <Story />;
    },
  ],
};

/**
 * QRCodeManager in the saving state.
 * Shows the QR code being saved with a loading indicator.
 */
export const SavingState: Story = {
  args: {
    restaurant: mockRestaurant,
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "The component state when saving a QR code to the database.",
      },
    },
  },
  decorators: [
    (Story) => {
      setupSavingHook();
      return <Story />;
    },
  ],
};

/**
 * QRCodeManager with a success message.
 * Shows the state after successfully saving a QR code with download options.
 */
export const SuccessState: Story = {
  args: {
    restaurant: mockRestaurant,
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "The success state after saving a QR code showing download options.",
      },
    },
  },
  decorators: [
    (Story) => {
      setupSuccessHook();
      return <Story />;
    },
  ],
};

/**
 * QRCodeManager with an error message.
 * Shows how errors are displayed to the user.
 */
export const ErrorState: Story = {
  args: {
    restaurant: mockRestaurant,
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "The error state showing how errors are presented to the user.",
      },
    },
  },
  decorators: [
    (Story) => {
      setupErrorHook();
      return <Story />;
    },
  ],
};

/**
 * Mobile view of the QRCodeManager component.
 * Shows how the component adapts to smaller viewports.
 */
export const MobileView: Story = {
  args: {
    restaurant: mockRestaurant,
    variant: "default",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "The QRCodeManager as displayed on mobile devices with responsive adaptations.",
      },
    },
  },
  decorators: [
    (Story) => {
      setupDefaultHook();
      return <Story />;
    },
  ],
};

/**
 * Tablet view of the QRCodeManager component.
 * Shows the intermediate responsive layout.
 */
export const TabletView: Story = {
  args: {
    restaurant: mockRestaurant,
    variant: "default",
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story: "The QRCodeManager as displayed on tablet devices.",
      },
    },
  },
  decorators: [
    (Story) => {
      setupDefaultHook();
      return <Story />;
    },
  ],
};

/**
 * Multiple QR code managers in a realistic admin dashboard layout.
 * Shows how the component might be used in a real application.
 */
export const InDashboardLayout: Story = {
  render: () => {
    setupDefaultHook();
    
    const restaurantList: Restaurant[] = [
      mockRestaurant,
      mockRestaurantNoQR,
      {
        ...mockRestaurant,
        id: BigInt(3),
        name: "Coastal Seafood",
        description: "Fresh seafood caught daily from local waters",
        qrCodeUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogd2hpdGUiPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik02NiA2NmgxMHYxMEg2NnptMTAgMGgxMHYxMEg3NnptMT"

