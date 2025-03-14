"use client";
import { toast as sonnerToast } from "sonner";
import type * as React from "react";
import type { ToastProps, ToastActionElement } from "@/components/ui/toast";

// Define the enhanced toast type
export type ToasterToast = ToastProps & {
	id?: string;
	title?: React.ReactNode;
	description?: React.ReactNode;
	action?: ToastActionElement;
	variant?: "default" | "destructive";
};

// Custom toast function that handles variant
const toast = (
	title: string,
	options?: Omit<ToasterToast, "title"> & {
		variant?: "default" | "destructive";
	},
) => {
	const { variant, ...rest } = options || {};

	// Convert shadcn variant to sonner className
	const className =
		variant === "destructive"
			? "bg-destructive text-destructive-foreground"
			: undefined;

	return sonnerToast(title, { ...rest, className });
};

// Add dismiss method from sonner
toast.dismiss = sonnerToast.dismiss;
toast.error = (
	title: string,
	options?: Omit<ToasterToast, "title" | "variant">,
) => toast(title, { ...options, variant: "destructive" });
toast.success = sonnerToast.success;
toast.info = sonnerToast.info;
toast.warning = sonnerToast.warning;

// Export a stub useToast for backwards compatibility
export const useToast = () => {
	return {
		toast,
		toasts: [],
		dismiss: toast.dismiss,
	};
};

// Re-export our custom toast function
export { toast };
