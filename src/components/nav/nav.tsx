"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
	SignedIn,
	SignInButton,
	SignOutButton,
	SignUp,
	SignUpButton,
	useUser,
} from "@clerk/nextjs";
import {
	Award,
	Clock,
	Home,
	Settings,
	Trophy,
	User,
	Utensils,
	UserPlus,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export type NavProps = {
	initialActiveTab?: string;
	onTabChange?: (tabId: string) => void;
};

type NavItem = {
	id: string;
	icon?: React.ElementType;
	label: string;
	href?: string;
	action?: string;
};

export const Nav = ({ initialActiveTab = "home", onTabChange }: NavProps) => {
	const [activeTab, setActiveTab] = useState(initialActiveTab);
	const { isSignedIn, user } = useUser();

	console.log("🚀 ~ Nav ~ user:", user);

	const userIsAdmin = user?.publicMetadata?.role === "admin";

	console.log("🚀 ~ Nav ~ userIsAdmin:", userIsAdmin);

	const router = useRouter();

	const handleTabChange = (tabId: string) => {
		// setActiveTab(tabId);
		// onTabChange?.(tabId);
		router.push(tabId);
	};

	const staticNavItems: NavItem[] = [
		{ id: "home", icon: Home, label: "Home", href: "/" },
		{
			id: "restaurants",
			icon: Utensils,
			label: "Restaurants",
			href: "/restaurants",
		},

		{
			id: "leaderBoard",
			icon: Trophy,
			label: "Leader Board",
			href: "/leaderboard",
		},
	];

	const authNavItems: NavItem[] = [];
	if (isSignedIn && !userIsAdmin) {
		authNavItems.push({
			id: "myProfile",
			icon: User,
			label: "Profile",
			href: `/users/${user?.id}/profile`,
		});
	}
	if (isSignedIn && userIsAdmin) {
		authNavItems.push({
			id: "admin",
			icon: Settings,
			label: "Admin",
			href: "/admin",
		});
	}

	const navItems: NavItem[] = [...staticNavItems, ...authNavItems];

	return (
		<nav className="fixed bottom-0 left-1/2 -translate-x-1/2 py-4 z-20">
			<div className="flex justify-around px-4 py-1 w-content border rounded-full bg-[#e0d9d1] backdrop-blur-sm ">
				{navItems.map((item) => (
					<Button
						key={item.id}
						variant="ghost"
						size="sm"
						className={cn(
							"flex flex-col p-4 gap-1 mx-2 h-auto",
							activeTab === item.id && "text-primary",
						)}
						onClick={() => handleTabChange(item.href)}
					>
						{/* <Link
							href={item.href}
							as={}
							className=""
							aria-label={item.label}
						> */}
						{item.icon && <item.icon className="h-5 w-5" />}
						{item.action === "signOut" ? null : (
							<span className="text-xs">{item.label}</span>
						)}
						{/* </Link> */}
					</Button>
				))}
				{isSignedIn ? (
					<SignOutButton>
						<Button
							variant="ghost"
							size="sm"
							className="flex flex-col p-4 gap-1 mx-2 h-auto"
						>
							Sign Out
						</Button>
					</SignOutButton>
				) : (
					<>
						<SignInButton>
							<Button
								variant="ghost"
								size="sm"
								className="flex flex-col p-4 gap-1 mx-2 h-auto"
							>
								<UserPlus className="h-5 w-5" />
								<span className="text-xs">Sign In</span>
							</Button>
						</SignInButton>
						{/* <SignUpButton>
							<Button
								variant="ghost"
								size="sm"
								className="flex flex-col p-4 gap-1 mx-2 h-auto"
							>
								<UserPlus className="h-5 w-5" />
								<span className="text-xs">Sign Up</span>
							</Button>
						</SignUpButton> */}
					</>
				)}
			</div>
		</nav>
	);
};
