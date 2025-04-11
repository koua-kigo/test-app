'use client'

import {useState, useEffect, useCallback} from 'react'
import {supabaseBrowserClient} from '@/db/supabase/supabase.client'
import {z} from 'zod'

// Import or redefine the dealSchema
export const dealSchema = z.object({
  id: z.bigint(),
  name: z.string(),
  description: z.string(),
  imageUrl: z.string().url(),
  restaurantId: z.bigint(),
})

export type Deal = z.infer<typeof dealSchema>

export type DealWithRestaurant = Deal & {
  restaurant: {
    id: bigint
    name: string
    description: string
    imageUrl: string
    address: string
    qrCodeUrl: string | null
  }
}

/**
 * A hook for subscribing to real-time raffle entries updates
 * @returns The updated raffle entries array with loading and error states
 */
export function useRaffleEntriesSubscription() {
  const [deals, setDeals] = useState<DealWithRestaurant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchRaffleEntries = useCallback(async () => {
    try {
      setIsLoading(true)

      // Use the client-side API endpoint to get all raffle entries
      const response = await fetch('/api/raffle-entries')

      console.log('🚀 ~ fetchRaffleEntries ~ response:', response)

      const {success, data, error} = await response.json()
      console.log('🚀 ~ fetchRaffleEntries ~ response:', response)

      console.log('🚀 ~ fetchRaffleEntries ~ error:', error)

      console.log('🚀 ~ fetchRaffleEntries ~ deals:', data)
      setDeals(data)
    } catch (err) {
      console.error('Error fetching raffle entries:', err)
      setError(err instanceof Error ? err : new Error('Unknown error occurred'))
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Fetch initial raffle entries
  useEffect(() => {
    fetchRaffleEntries()
  }, [fetchRaffleEntries])

  // Set up real-time subscription
  useEffect(() => {
    // Subscribe to all events on raffle_entries table
    const subscription = supabaseBrowserClient
      .channel('raffle')
      .on(
        'postgres_changes',
        {event: '*', schema: 'public', table: 'raffle_entries'},
        async (payload) => {
          console.log('Change received!', payload)
          fetchRaffleEntries()
        }
      )
      .subscribe()
    console.log('🚀 ~ useEffect ~ subscription:', subscription)

    // Clean up subscriptions on unmount
    return () => {
      subscription.unsubscribe()
    }
  }, [fetchRaffleEntries])

  return {
    deals,
    isLoading,
    error,
  }
}
