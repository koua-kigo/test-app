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
	Loader2,
	QrCode,
	CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useScanQrCode } from "@/hooks/use-scan-qr-code";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogClose,
} from "@/components/ui/dialog";

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

// Create a simple spinner component
const Spinner = ({ className }: { className?: string }) => {
	return <Loader2 className={cn("animate-spin", className)} />;
};

// NavScanner is now just a button that triggers the modal
type NavScannerProps = {
	onScanClick: () => void;
};

export const NavScanner = ({ onScanClick }: NavScannerProps) => {
	return (
		<div>
			<Button
				onClick={onScanClick}
				variant="ghost"
				size="sm"
				className={cn("flex flex-col p-4 gap-1 mx-2 h-auto", "text-primary")}
			>
				<QrCode className="h-5 w-5" />
				<span className="text-xs">Scan</span>
			</Button>
		</div>
	);
};

export const Nav = ({ initialActiveTab = "home", onTabChange }: NavProps) => {
	const [activeTab, setActiveTab] = useState(initialActiveTab);
	const { isSignedIn, user } = useUser();
	const [showModal, setShowModal] = useState(false);

	// QR scanning logic moved from NavScanner to Nav
	const {
		isScanning,
		checkingPunchCardStatus,
		scanResult,
		toggleScanner,
		handleScan,
		handleError,
		reset,
	} = useScanQrCode({
		userId: user?.id || "guest",
		onScanSuccess: (result) => {
			console.log("Scan successful:", result);
			// Close modal and show success state on successful scan
			// setTimeout(() => {
			// setShowModal(false);
			// Allow time for success message before reset
			// setTimeout(() => reset(), 1500);
			// }, 1000);
		},
	});

	// Handle opening/closing the modal and scanner together
	const handleScannerToggle = () => {
		if (!isScanning) {
			setShowModal(true);
			toggleScanner();
		} else {
			toggleScanner();
			setShowModal(false);
		}
	};

	// Handle modal close
	const handleModalClose = useCallback(() => {
		if (isScanning) {
			toggleScanner();
		}
		setShowModal(false);
	}, [isScanning, toggleScanner]);

	console.log("🚀 ~ Nav ~ user:", user);

	const userIsAdmin = user?.publicMetadata?.role === "admin";

	console.log("🚀 ~ Nav ~ userIsAdmin:", userIsAdmin);

	const router = useRouter();

	const handleTabChange = (tabId?: string) => {
		if (tabId) {
			router.push(tabId);
		}
	};

	const staticNavItems: NavItem[] = [
		// { id: "home", icon: Home, label: "Home", href: "/" },
		{
			id: "restaurants",
			icon: Utensils,
			label: "Restaurants",
			href: "/restaurants",
		},

		// {
		// 	id: "leaderBoard",
		// 	icon: Trophy,
		// 	label: "Leader Board",
		// 	href: "/leaderboard",
		// },
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
		<>
			{/* QR Scanner Modal moved to Nav component */}
			{showModal && (
				<Dialog open={showModal} onOpenChange={handleModalClose}>
					<DialogContent className="sm:max-w-md">
						<DialogHeader>
							<DialogTitle>Scan QR Code</DialogTitle>
							<DialogDescription>
								Point your camera at a restaurant's QR code to earn a punch.
							</DialogDescription>
						</DialogHeader>

						<div className="flex flex-col items-center space-y-4">
							{isScanning && (
								<div className="w-full max-w-[350px] h-[350px] mx-auto relative rounded-lg overflow-hidden">
									<QrReader
										videoId="qr-video"
										onResult={handleScan}
										constraints={{
											facingMode: "environment",
										}}
										className="w-full h-full"
									/>
									<video
										id="qr-video"
										aria-label="QR code scanner video output"
										controls={false}
										className="hidden"
									>
										<track
											kind="captions"
											src="/empty.vtt"
											label="English captions"
											default
										/>
									</video>
								</div>
							)}

							{checkingPunchCardStatus && (
								<div className="text-center py-2">
									<Spinner className="w-8 h-8 mx-auto" />
									<p className="mt-2">Processing your scan...</p>
								</div>
							)}

							{scanResult && (
								<div className="text-center py-2 bg-green-50 rounded-md p-3 w-full">
									<CheckCircle className="w-8 h-8 mx-auto text-green-500" />
									<p className="font-medium mt-2">
										Scan processed successfully!
									</p>
								</div>
							)}
						</div>

						<DialogFooter className="sm:justify-start">
							<DialogClose asChild>
								<Button
									type="button"
									variant="secondary"
									onClick={handleModalClose}
								>
									Close
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}

			<nav className="fixed bottom-0 left-1/2 -translate-x-1/2 py-4 z-20 ">
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
							{item.icon && <item.icon className="h-5 w-5" />}
							{item.action === "signOut" ? null : (
								<span className="text-xs">{item.label}</span>
							)}
						</Button>
					))}
					{isSignedIn ? (
						<NavScanner onScanClick={handleScannerToggle} />
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
		</>
	);
};
