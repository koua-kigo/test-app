'use client'

import {useState, useEffect, useCallback} from 'react'
import {supabaseBrowserClient} from '@/db/supabase/supabase.client'
import {z} from 'zod'
import type {RaffleEntry} from '@/types'
import {getRaffleEntries} from '@/db/models/raffle-entries'

/**
 * A hook for subscribing to real-time raffle entries updates
 * @returns The updated raffle entries array with loading and error states
 */
export function useRaffleEntriesSubscription() {
  const [raffleEntries, setRaffleEntries] = useState<RaffleEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchRaffleEntries = useCallback(async () => {
    try {
      setIsLoading(true)
      const entries = await getRaffleEntries()

      console.log('🚀 ~ fetchRaffleEntries ~ entries:', entries)

      setRaffleEntries(entries)
      setError(null)
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
    raffleEntries,
    isLoading,
    error,
  }
}
