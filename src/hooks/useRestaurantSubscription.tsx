'use client'

import {useCallback, useEffect, useRef} from 'react'
import {supabaseBrowserClient} from '@/db/supabase/supabase.client'

/**
 * A hook for subscribing to real-time restaurant and deal updates
 * @param onUpdate - Callback function to execute when updates are detected
 * @returns Object with subscription status
 */
export function useRestaurantsSubscription({
  onUpdate,
}: {
  onUpdate: () => Promise<void>
}) {
  const subscriptionRef = useRef<{
    unsubscribe: () => Promise<'ok' | 'error' | 'timed out'>
  } | null>(null)
  const isSubscribed = useRef(false)

  // Set up real-time subscription
  useEffect(() => {
    if (isSubscribed.current) return

    // Helper function to handle changes
    const handleChange = async (payload: any) => {
      console.log('Restaurant or deal change detected:', payload)
      await onUpdate()
    }

    // Create a single subscription for both tables
    const subscription = supabaseBrowserClient
      .channel('restaurant-changes')
      // Listen for restaurant table changes
      .on(
        'postgres_changes',
        {event: '*', schema: 'public', table: 'restaurants'},
        handleChange
      )
      // Also listen for restaurant_deals changes
      .on(
        'postgres_changes',
        {event: '*', schema: 'public', table: 'restaurant_deals'},
        handleChange
      )
      .subscribe()

    console.log('Restaurant subscription established')
    subscriptionRef.current = subscription
    isSubscribed.current = true

    // Clean up subscription on unmount
    return () => {
      isSubscribed.current = false
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe()
        subscriptionRef.current = null
      }
    }
  }, [onUpdate])

  return {
    isSubscribed: isSubscribed.current,
  }
}
