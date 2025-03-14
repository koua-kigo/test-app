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
	useSession,
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
	Search,
	Settings2,
	WalletCards,
	Wallet,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useCallback, useState, useEffect } from "react";
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

// Animation variants for the QR scanner and content
const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: "easeOut",
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	exit: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.2,
			ease: "easeIn",
			when: "afterChildren",
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3, ease: "easeOut" },
	},
	exit: {
		opacity: 0,
		y: 10,
		transition: { duration: 0.2, ease: "easeIn" },
	},
};

// NavScanner is now just a button that triggers the modal
type NavScannerProps = {
	onScanClick: () => void;
};

export const NavScanner = ({ onScanClick }: NavScannerProps) => {
	return (
		<Button
			onClick={onScanClick}
			variant="ghost"
			size="sm"
			className={cn(
				"flex flex-col p-4 gap-1 mx-2 h-auto !w-auto rounded-full items-center justify-center",
				"text-primary",
			)}
		>
			<QrCode className="h-5 w-5" />
		</Button>
	);
};

export const Nav = ({ initialActiveTab = "home", onTabChange }: NavProps) => {
	const [activeTab, setActiveTab] = useState(initialActiveTab);
	const { isSignedIn, user } = useUser();
	const { session } = useSession();

	console.log("🚀 ~ Nav ~ session:", session);

	const [showModal, setShowModal] = useState(false);
	const router = useRouter();

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
			setTimeout(() => {
				setShowModal(false);
				// Allow time for success message before reset
				setTimeout(() => {
					reset();
					// Redirect to user profile after scan is complete and modal is closed
					if (user?.id) {
						router.push(`/users/${user.id}/profile`);
					}
				}, 1500);
			}, 1000);
		},
	});

	// Effect to ensure redirection happens after successful scan
	useEffect(() => {
		if (scanResult && user?.id) {
			// Give time for modal to close and success message to show
			const redirectTimeout = setTimeout(() => {
				router.push(`/users/${user.id}/profile`);
			}, 2500);

			return () => clearTimeout(redirectTimeout);
		}
	}, [scanResult, router, user?.id]);

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

	const navigateToPage = useCallback(
		(page: string) => {
			console.log("🚀 ~ navigateToPage ~ page:", page);
			if (page) {
				router.push(page);
			}
		},
		[router],
	);

	const staticNavItems: NavItem[] = [
		// { id: "home", icon: Home, label: "Home", href: "/" },
		{
			id: "restaurants",
			icon: Utensils,
			label: "Food",
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
			{/* QR Scanner Modal with animations */}
			<AnimatePresence>
				{showModal && (
					<Dialog open={showModal} onOpenChange={handleModalClose}>
						<DialogContent className="sm:max-w-md p-0 overflow-hidden">
							<motion.div
								variants={containerVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="p-6"
							>
								<motion.div variants={itemVariants}>
									<DialogHeader>
										<DialogTitle>Scan QR Code</DialogTitle>
										<DialogDescription>
											Point your camera at a restaurant's QR code to earn a
											punch.
										</DialogDescription>
									</DialogHeader>
								</motion.div>

								<div className="flex flex-col items-center space-y-4 mt-4">
									<AnimatePresence mode="wait">
										{isScanning && (
											<motion.div
												key="scanner"
												variants={itemVariants}
												initial="hidden"
												animate="visible"
												exit="exit"
												className="w-full max-w-[350px] h-[350px] mx-auto relative rounded-lg overflow-hidden"
											>
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
											</motion.div>
										)}

										{checkingPunchCardStatus && (
											<motion.div
												key="processing"
												variants={itemVariants}
												initial="hidden"
												animate="visible"
												exit="exit"
												className="text-center py-2"
											>
												<Spinner className="w-8 h-8 mx-auto" />
												<p className="mt-2">Processing your scan...</p>
											</motion.div>
										)}

										{scanResult && (
											<motion.div
												key="success"
												variants={itemVariants}
												initial="hidden"
												animate="visible"
												exit="exit"
												className="text-center py-2 bg-green-50 rounded-md p-3 w-full"
											>
												<CheckCircle className="w-8 h-8 mx-auto text-green-500" />
												<p className="font-medium mt-2">
													Scan processed successfully!
												</p>
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								<motion.div variants={itemVariants} className="mt-6">
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
								</motion.div>
							</motion.div>
						</DialogContent>
					</Dialog>
				)}
			</AnimatePresence>

			<nav className="fixed bottom-[10px] left-0 right-0 z-40 pb-safe">
				<div className="flex justify-evenly items-center p-3 gap-4 mx-auto w-min border-t bg-[#e0d9d1] backdrop-blur-md shadow-lg rounded-full">
					<Link href="/restaurants" className="flex-1">
						<Button
							variant="ghost"
							size="icon"
							className={cn(
								"flex flex-col items-center justify-center rounded-full h-14 w-14 mx-auto touch-manipulation bg-none",
								activeTab === "home"
									? "bg-white/80 text-primary shadow-sm"
									: "text-white",
							)}
						>
							<Utensils className="h-6 w-6" />
						</Button>
					</Link>

					{userIsAdmin && (
						<Link href="/admin" className="flex-1">
							<Button
								variant="ghost"
								size="icon"
								className={cn(
									"flex flex-col items-center justify-center rounded-full h-14 w-14 mx-auto touch-manipulation bg-none",
									activeTab === "admin"
										? "bg-white/80 text-primary shadow-sm"
										: "text-white",
								)}
							>
								<Settings2 className="h-6 w-6" />
							</Button>
						</Link>
					)}

					{isSignedIn && (
						<div className="flex-1 flex items-center justify-center">
							<Button
								variant="outline"
								size="icon"
								className="rounded-full h-16 w-16 flex items-center justify-center"
								onClick={handleScannerToggle}
								aria-label="Scan QR code"
							>
								<QrCode className="h-7 w-7" />
							</Button>
						</div>
					)}

					{isSignedIn && !userIsAdmin && (
						<Link href={`/users/${user?.id}/profile`} className="flex-1">
							<Button
								variant="outline"
								size="icon"
								className={cn(
									"flex flex-col items-center justify-center rounded-full h-14 w-14 mx-auto touch-manipulation bg-none",
									activeTab === "profile"
										? "bg-white/80 text-primary shadow-sm"
										: "",
								)}
							>
								<Wallet className="h-6 w-6" />
							</Button>
						</Link>
					)}

					{!isSignedIn && (
						<div className="flex-1">
							<SignInButton>
								<Button
									variant="ghost"
									size="icon"
									className="flex flex-col items-center justify-center rounded-full h-14 w-14 mx-auto touch-manipulation bg-none"
								>
									<UserPlus className="h-6 w-6" />
									<span className="text-xs mt-1">Sign In</span>
								</Button>
							</SignInButton>
						</div>
					)}
				</div>
			</nav>
		</>
	);
};
