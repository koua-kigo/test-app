import type { Meta, StoryObj } from "@storybook/nextjs";
import { UserPunchCards } from "@/features/users/UserPunchCards";
import { RaffleSuccessAnimation } from "@/components/raffle/RaffleSuccessAnimation";
import type { PunchCardWithRestaurant } from "@/hooks/use-punch-card-subscription";
import type { RaffleEntry } from "@/types/db";
import Image from "next/image";

// Mock data for the profile page stories
const mockUser = {
  id: BigInt(1),
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
};

const mockRestaurants = [
  {
    id: BigInt(1),
    name: "Bella Italia",
    address: "123 Main St, New York, NY 10001",
    imageUrl: "/restaurant-images/bella-italia.jpg",
  },
  {
    id: BigInt(2),
    name: "Golden Dragon",
    address: "456 Park Ave, New York, NY 10002",
    imageUrl: "/restaurant-images/golden-dragon.jpg",
  },
  {
    id: BigInt(3),
    name: "Seaside Grill",
    address: "789 Ocean Blvd, Miami, FL 33139",
    imageUrl: "/restaurant-images/seaside-grill.jpg",
  },
];

const mockPunchCards: PunchCardWithRestaurant[] = [
  {
    id: BigInt(1),
    userId: BigInt(1),
    restaurantId: BigInt(1),
    punches: 9,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    restaurant: mockRestaurants[0],
  },
  {
    id: BigInt(2),
    userId: BigInt(1),
    restaurantId: BigInt(2),
    punches: 10,
    completed: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    restaurant: mockRestaurants[1],
  },
  {
    id: BigInt(3),
    userId: BigInt(1),
    restaurantId: BigInt(3),
    punches: 5,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    restaurant: mockRestaurants[2],
  },
];

const mockRaffleEntry: RaffleEntry = {
  id: BigInt(1),
  userId: BigInt(1),
  punchCardId: BigInt(2),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// Profile page layout component for stories
const ProfilePageLayout = ({ 
  children, 
  showRaffleAnimation = false, 
  raffleEntry = null 
}: { 
  children: React.ReactNode;
  showRaffleAnimation?: boolean;
  raffleEntry?: any;
}) => (
  <div className="p-6 sm:pb-12 max-w-4xl mx-auto">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">My Collection</h1>
      <div className="bg-gray-200 rounded-full px-4 py-2">
        <span className="text-sm">User Menu</span>
      </div>
    </div>
    
    <div
      className="rounded-md p-[2px] mb-8 shadow-sm"
      style={{ backgroundColor: "#eee", padding: "2px" }}
    >
      <div className="bg-white p-3 flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <div className="font-medium">
            <div>{mockUser.name}</div>
            <div className="text-sm text-gray-500">{mockUser.email}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mb-8">
      <Image
        src="/shop-dine-play-large.png"
        alt="Eat Shop Dine Play"
        width={512}
        height={200}
        className="w-full h-auto mx-auto display-block"
        style={{
          height: "auto",
          width: "100%",
          objectFit: "scale-down",
        }}
      />
    </div>

    {/* Show standalone raffle animation for QR scan success */}
    {showRaffleAnimation && raffleEntry && (
      <RaffleSuccessAnimation raffleEntry={raffleEntry} />
    )}

    {children}

    <button
      className="bold text-white w-full mx-auto mt-8 sm:w-min px-6 py-3 rounded-md"
      style={{ background: "#208F54" }}
    >
      Where to go Next?
    </button>
  </div>
);

/**
 * Profile page stories showing different states of the user's punch card collection
 * and QR scan success animations.
 */
const meta: Meta<typeof ProfilePageLayout> = {
  title: "Pages/Users/ProfilePage",
  component: ProfilePageLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "User profile page showing punch card collection, progress, and QR scan success animations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showRaffleAnimation: {
      control: "boolean",
      description: "Whether to show the QR scan success animation",
    },
    raffleEntry: {
      control: "object",
      description: "Raffle entry data for the animation",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfilePageLayout>;

/**
 * Default profile page state
 */
export const Default: Story = {
  args: {
    showRaffleAnimation: false,
    raffleEntry: null,
  },
  render: (args) => (
    <ProfilePageLayout {...args}>
      <UserPunchCards
        user={mockUser}
        initialPunchCards={mockPunchCards}
        showRaffleAnimation={false}
        raffleEntry={null}
      />
    </ProfilePageLayout>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default profile page showing user's punch card collection.",
      },
    },
  },
};

/**
 * Profile page with QR scan success animation
 */
export const QRScanSuccess: Story = {
  args: {
    showRaffleAnimation: true,
    raffleEntry: {
      ...mockRaffleEntry,
      restaurant: mockRestaurants[1],
    },
  },
  render: (args) => (
    <ProfilePageLayout {...args}>
      <UserPunchCards
        user={mockUser}
        initialPunchCards={mockPunchCards}
        showRaffleAnimation={args.showRaffleAnimation}
        raffleEntry={args.raffleEntry}
      />
    </ProfilePageLayout>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Profile page showing the celebratory animation after a successful QR code scan that completed a punch card and entered the user into a raffle.",
      },
    },
  },
};

/**
 * Profile page after completing first restaurant
 */
export const FirstCompletion: Story = {
  args: {
    showRaffleAnimation: true,
    raffleEntry: {
      ...mockRaffleEntry,
      restaurant: mockRestaurants[0],
    },
  },
  render: (args) => (
    <ProfilePageLayout {...args}>
      <UserPunchCards
        user={mockUser}
        initialPunchCards={[
          {
            id: BigInt(1),
            userId: BigInt(1),
            restaurantId: BigInt(1),
            punches: 10,
            completed: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: mockRestaurants[0],
          },
        ]}
        showRaffleAnimation={args.showRaffleAnimation}
        raffleEntry={args.raffleEntry}
      />
    </ProfilePageLayout>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Profile page showing the animation when user completes their very first restaurant punch card.",
      },
    },
  },
};

/**
 * Profile page with near-complete collection
 */
export const NearCompletion: Story = {
  args: {
    showRaffleAnimation: false,
    raffleEntry: null,
  },
  render: (args) => (
    <ProfilePageLayout {...args}>
      <UserPunchCards
        user={mockUser}
        initialPunchCards={[
          ...mockPunchCards,
          {
            id: BigInt(4),
            userId: BigInt(1),
            restaurantId: BigInt(4),
            punches: 8,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: {
              id: BigInt(4),
              name: "Urban Spice",
              address: "321 Downtown St, Chicago, IL 60601",
              imageUrl: "/restaurant-images/urban-spice.jpg",
            },
          },
          {
            id: BigInt(5),
            userId: BigInt(1),
            restaurantId: BigInt(5),
            punches: 7,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: {
              id: BigInt(5),
              name: "Farm to Table",
              address: "987 Country Rd, Portland, OR 97205",
              imageUrl: "/restaurant-images/farm-to-table.jpg",
            },
          },
          {
            id: BigInt(6),
            userId: BigInt(1),
            restaurantId: BigInt(6),
            punches: 9,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: {
              id: BigInt(6),
              name: "Sunset Cafe",
              address: "555 Beach Ave, San Diego, CA 92101",
              imageUrl: "/restaurant-images/sunset-cafe.jpg",
            },
          },
        ]}
        showRaffleAnimation={args.showRaffleAnimation}
        raffleEntry={args.raffleEntry}
      />
    </ProfilePageLayout>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Profile page showing a user who is very close to completing their collection (6/8 restaurants).",
      },
    },
  },
};

/**
 * Empty profile page for new user
 */
export const NewUser: Story = {
  args: {
    showRaffleAnimation: false,
    raffleEntry: null,
  },
  render: (args) => (
    <ProfilePageLayout {...args}>
      <UserPunchCards
        user={mockUser}
        initialPunchCards={[]}
        showRaffleAnimation={false}
        raffleEntry={null}
      />
    </ProfilePageLayout>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Profile page for a new user who hasn't visited any restaurants yet.",
      },
    },
  },
};

/**
 * Profile page with completing final restaurant animation
 */
export const FinalRestaurantCompletion: Story = {
  args: {
    showRaffleAnimation: true,
    raffleEntry: {
      id: BigInt(8),
      userId: BigInt(1),
      punchCardId: BigInt(8),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      restaurant: {
        id: BigInt(8),
        name: "Coastal Kitchen",
        address: "777 Harbor Dr, Seattle, WA 98101",
        imageUrl: "/restaurant-images/coastal-kitchen.jpg",
      },
    },
  },
  render: (args) => (
    <ProfilePageLayout {...args}>
      <UserPunchCards
        user={mockUser}
        initialPunchCards={[
          // Show all 8 restaurants completed
          {
            id: BigInt(1),
            userId: BigInt(1),
            restaurantId: BigInt(1),
            punches: 10,
            completed: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: mockRestaurants[0],
          },
          {
            id: BigInt(2),
            userId: BigInt(1),
            restaurantId: BigInt(2),
            punches: 10,
            completed: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: mockRestaurants[1],
          },
          {
            id: BigInt(3),
            userId: BigInt(1),
            restaurantId: BigInt(3),
            punches: 10,
            completed: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: mockRestaurants[2],
          },
          {
            id: BigInt(4),
            userId: BigInt(1),
            restaurantId: BigInt(4),
            punches: 10,
            completed: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: {
              id: BigInt(4),
              name: "Urban Spice",
              address: "321 Downtown St, Chicago, IL 60601",
              imageUrl: "/restaurant-images/urban-spice.jpg",
            },
          },
          {
            id: BigInt(5),
            userId: BigInt(1),
            restaurantId: BigInt(5),
            punches: 10,
            completed: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: {
              id: BigInt(5),
              name: "Farm to Table",
              address: "987 Country Rd, Portland, OR 97205",
              imageUrl: "/restaurant-images/farm-to-table.jpg",
            },
          },
          {
            id: BigInt(6),
            userId: BigInt(1),
            restaurantId: BigInt(6),
            punches: 10,
            completed: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: {
              id: BigInt(6),
              name: "Sunset Cafe",
              address: "555 Beach Ave, San Diego, CA 92101",
              imageUrl: "/restaurant-images/sunset-cafe.jpg",
            },
          },
          {
            id: BigInt(7),
            userId: BigInt(1),
            restaurantId: BigInt(7),
            punches: 10,
            completed: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: {
              id: BigInt(7),
              name: "Mountain View Diner",
              address: "111 Peak Rd, Denver, CO 80201",
              imageUrl: "/restaurant-images/mountain-view.jpg",
            },
          },
          {
            id: BigInt(8),
            userId: BigInt(1),
            restaurantId: BigInt(8),
            punches: 10,
            completed: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            restaurant: {
              id: BigInt(8),
              name: "Coastal Kitchen",
              address: "777 Harbor Dr, Seattle, WA 98101",
              imageUrl: "/restaurant-images/coastal-kitchen.jpg",
            },
          },
        ]}
        showRaffleAnimation={args.showRaffleAnimation}
        raffleEntry={args.raffleEntry}
      />
    </ProfilePageLayout>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Profile page showing the celebration when user completes their final restaurant to finish the entire collection (8/8).",
      },
    },
  },
};