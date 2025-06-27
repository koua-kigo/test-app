"use client";

import { useState, useEffect, useCallback } from "react";
import { supabaseBrowserClient } from "@/db/supabase/supabase.client";
import { z } from "zod";

// Import or redefine the dealSchema
export const dealSchema = z.object({
  id: z.bigint(),
  name: z.string(),
  description: z.string(),
  imageUrl: z.string().url(),
  restaurantId: z.bigint(),
  title: z.string(),
  content: z.string(),
  active: z.boolean(),
  createdAt: z.string().nullable(),
  updatedAt: z.string().nullable(),
  activeDate: z.string().nullable(),
});

export type Deal = z.infer<typeof dealSchema>;

export type DealWithRestaurant = Deal & {
  restaurant: {
    id: bigint;
    name: string;
    description: string;
    imageUrl: string;
    address: string;
    qrCodeUrl: string | null;
  };
};

/**
 * A hook for subscribing to real-time restaurant deals updates for all restaurants
 * @returns The updated deals array with loading and error states
 */
export function useDealsSubscription() {
  const [deals, setDeals] = useState<DealWithRestaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchDeals = useCallback(async () => {
    try {
      setIsLoading(true);

      // Use the client-side API endpoint to get all deals
      const response = await fetch("/api/deals");

      const { success, data, error } = await response.json();

      // Filter deals that are active and have activeDate matching today
      const today = new Date();
      const todayString = today.toLocaleDateString("en-CA"); // Format: YYYY-MM-DD in local timezone

      const filteredDeals = data.filter((deal: any) => {
        // Check if deal is active
        if (deal.active !== true) return false;

        // Check if activeDate exists and matches today
        if (deal.activeDate) {
          const dealDate = new Date(deal.activeDate);
          const dealDateString = dealDate.toLocaleDateString("en-CA"); // Format: YYYY-MM-DD in local timezone
          return dealDateString === todayString;
        }

        // If no activeDate, don't include the deal
        return false;
      });

      console.log("🚀 ~ fetchDeals ~ filteredDeals:", filteredDeals);
      setDeals(filteredDeals);
    } catch (err) {
      console.error("Error fetching deals:", err);
      setError(
        err instanceof Error ? err : new Error("Unknown error occurred")
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch initial deals
  useEffect(() => {
    fetchDeals();
  }, [fetchDeals]);

  // Set up real-time subscription
  useEffect(() => {
    // Subscribe to INSERT events on restaurant_deals table

    const subscription = supabaseBrowserClient
      .channel("app-deals")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "restaurant_deals" },
        async (payload) => {
          console.log("Change received!", payload);
          fetchDeals();
        }
      )
      .subscribe();
    console.log("🚀 ~ useEffect ~ subscription:", subscription);

    //     const channel = supabase
    // .channel("realtime tweets")
    // .on(
    //   "postgres_changes",
    //   {
    //     event: "*",
    //     schema: "public",
    //     table: "tweets",
    //   },
    //   (payload) => {
    //     router.refresh();
    //   }
    // )
    // .subscribe();

    // Helper function to refresh deals data
    const refreshDeals = async () => {
      try {
        const response = await fetch("/api/deals");

        if (!response.ok) {
          throw new Error("Failed to fetch updated deals");
        }

        const { success, data, error } = await response.json();

        if (!success) {
          throw new Error(error || "Failed to fetch updated deals");
        }

        // Filter deals that are active and have activeDate matching today
        const today = new Date();
        const todayString = today.toLocaleDateString("en-CA"); // Format: YYYY-MM-DD in local timezone

        const filteredDeals = data.filter((deal: any) => {
          // Check if deal is active
          if (deal.active !== true) return false;

          // Check if activeDate exists and matches today
          if (deal.activeDate) {
            const dealDate = new Date(deal.activeDate);
            const dealDateString = dealDate.toLocaleDateString("en-CA"); // Format: YYYY-MM-DD in local timezone
            return dealDateString === todayString;
          }

          // If no activeDate, don't include the deal
          return false;
        });

        setDeals(filteredDeals);
      } catch (err) {
        console.error("Error updating deals:", err);
      }
    };

    // Clean up subscriptions on unmount
    return () => {
      return subscription.unsubscribe();
    };
  }, []);

  return {
    deals,
    isLoading,
    error,
  };
}
