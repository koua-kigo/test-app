'use client'

import * as React from 'react'
import {RestaurantsTable} from '@/components/admin/restaurants-table'
import type {Restaurant} from '@/types/db'
import {toast} from 'sonner'
import type {z} from 'zod'
import type {restaurantSchema} from '@/types/schemas'

// Type for restaurant data
type RestaurantData = z.infer<typeof restaurantSchema>

// Define a public API for the wrapper component
export interface RestaurantTableWrapperRef {
  refreshRestaurants: () => Promise<void>
}

// Fallback for browsers that don't support requestIdleCallback
const requestIdleCallbackPolyfill = (
  callback: IdleRequestCallback,
  options?: IdleRequestOptions
): number => {
  const timeout = options?.timeout || 1
  return window.setTimeout(() => {
    const start = Date.now()
    callback({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
    })
  }, timeout) as unknown as number
}

const cancelIdleCallbackPolyfill = (id: number) => window.clearTimeout(id)

// Use native implementation or polyfill
const requestIdle =
  typeof window !== 'undefined' && 'requestIdleCallback' in window
    ? window.requestIdleCallback
    : requestIdleCallbackPolyfill

const cancelIdle =
  typeof window !== 'undefined' && 'cancelIdleCallback' in window
    ? window.cancelIdleCallback
    : cancelIdleCallbackPolyfill

type PaginationProps = {
  total: number
  pageIndex: number
  pageSize: number
}

type RestaurantTableWrapperProps = {
  initialRestaurants: RestaurantData[]
  pagination: PaginationProps
  fetchRestaurants: (
    page: number,
    size: number
  ) => Promise<[RestaurantData[], {total: number}]>
}

export const RestaurantTableWrapper = React.forwardRef<
  RestaurantTableWrapperRef,
  RestaurantTableWrapperProps
>(({initialRestaurants, pagination, fetchRestaurants}, ref) => {
  const [restaurants, setRestaurants] =
    React.useState<RestaurantData[]>(initialRestaurants)
  const [allLoaded, setAllLoaded] = React.useState(false)
  const [isPolling, setIsPolling] = React.useState(false)
  // Track if we've loaded additional pages on first mount
  const [initialLoadComplete, setInitialLoadComplete] = React.useState(false)

  const [loadedPages, setLoadedPages] = React.useState<Set<number>>(
    new Set([pagination.pageIndex])
  )
  const idleCallbackIdRef = React.useRef<number | null>(null)
  const loadingRef = React.useRef(false)

  // Create a wrapped fetchRestaurants function to track state
  const fetchMoreRestaurants = React.useCallback(
    async (page: number, size: number) => {
      // Mark the page as loading to prevent duplicate requests
      if (loadingRef.current) return []
      loadingRef.current = true

      try {
        // Add the current page to our loaded pages set
        setLoadedPages((prev) => {
          const newSet = new Set(prev)
          newSet.add(page)
          return newSet
        })

        const [newRestaurants] = await fetchRestaurants(page, size)

        setRestaurants((prev) => {
          // Combine with existing, avoiding duplicates by id
          const existingIds = new Set(prev.map((r) => r.id.toString()))
          const uniqueNew = Array.isArray(newRestaurants)
            ? newRestaurants.filter((r) => !existingIds.has(r.id.toString()))
            : []
          return [...prev, ...uniqueNew]
        })

        return newRestaurants
      } catch (error) {
        console.error('Error fetching restaurants:', error)
        return []
      } finally {
        loadingRef.current = false
      }
    },
    [fetchRestaurants]
  )

  // Initial load of the first two pages (20 restaurants)
  React.useEffect(() => {
    const loadInitialPages = async () => {
      if (initialLoadComplete || pagination.total <= pagination.pageSize) return

      try {
        // Load the second page (first page is loaded by default)
        const secondPage = pagination.pageIndex + 1

        // Don't set loading state for initial load to avoid UI flicker
        await fetchMoreRestaurants(secondPage, pagination.pageSize)

        console.log('Preloaded first two pages of restaurants')
      } catch (error) {
        console.error('Error preloading restaurant pages:', error)
      } finally {
        setInitialLoadComplete(true)
      }
    }

    loadInitialPages()
  }, [
    fetchMoreRestaurants,
    initialLoadComplete,
    pagination.pageIndex,
    pagination.pageSize,
    pagination.total,
  ])

  // Schedule background polling when idle
  const schedulePoll = React.useCallback(() => {
    if (allLoaded || isPolling) return

    // Clean up any existing idle callback
    if (idleCallbackIdRef.current !== null) {
      cancelIdle(idleCallbackIdRef.current)
      idleCallbackIdRef.current = null
    }

    // This will be called when the browser is idle
    // When the user changes pages in the table, we'll already have the data loaded
    // so the page change will be instant and smooth
    idleCallbackIdRef.current = requestIdle(
      async () => {
        if (allLoaded) return

        setIsPolling(true)
        try {
          const totalPages = Math.ceil(pagination.total / pagination.pageSize)

          // Find the next page to load
          let nextPage = 1
          while (nextPage <= totalPages) {
            if (!loadedPages.has(nextPage)) break
            nextPage++
          }

          // If we've loaded all pages, we're done
          if (nextPage > totalPages) {
            setAllLoaded(true)
            return
          }

          // Skip the first two pages as they're already loaded from initial effect
          if (nextPage <= pagination.pageIndex + 1 && initialLoadComplete) {
            nextPage = pagination.pageIndex + 2
            // If we've already loaded everything, we're done
            if (nextPage > totalPages) {
              setAllLoaded(true)
              return
            }
          }

          // Fetch the next page
          await fetchMoreRestaurants(nextPage, pagination.pageSize)

          // If we have more pages to load, schedule another poll
          if (nextPage < totalPages) {
            schedulePoll()
          } else {
            setAllLoaded(true)
            // Quietly notify that all data is loaded
            console.log('All restaurant data loaded successfully')
          }
        } catch (error) {
          console.error('Error during idle polling:', error)
        } finally {
          setIsPolling(false)
        }
      },
      {timeout: 2000} // 2 second timeout
    )
  }, [
    allLoaded,
    isPolling,
    loadedPages,
    pagination,
    fetchMoreRestaurants,
    initialLoadComplete,
  ])

  // Start polling on initial render
  React.useEffect(() => {
    // Check if we need to start polling
    if (restaurants.length < pagination.total && !allLoaded && !isPolling) {
      schedulePoll()
    }

    // Cleanup function to cancel idle callback
    return () => {
      if (idleCallbackIdRef.current !== null) {
        cancelIdle(idleCallbackIdRef.current)
      }
    }
  }, [restaurants.length, pagination.total, allLoaded, isPolling, schedulePoll])

  // Force load all restaurants if needed for bulk operations
  const loadAllRestaurants = React.useCallback(async () => {
    if (allLoaded) return

    setIsPolling(true)
    try {
      const totalPages = Math.ceil(pagination.total / pagination.pageSize)
      const pagesToLoad = []

      // Find all pages that haven't been loaded yet
      for (let page = 1; page <= totalPages; page++) {
        if (!loadedPages.has(page)) {
          pagesToLoad.push(page)
        }
      }

      if (pagesToLoad.length === 0) {
        setAllLoaded(true)
        return
      }

      // Show toast for user feedback
      toast.info('Loading all remaining restaurants...')

      // Load all missing pages
      const promises = pagesToLoad.map((page) =>
        fetchMoreRestaurants(page, pagination.pageSize)
      )

      await Promise.all(promises)
      setAllLoaded(true)
      toast.success(`All ${pagination.total} restaurants loaded successfully`)
    } catch (error) {
      console.error('Error loading all restaurants:', error)
      toast.error('Failed to load all restaurants')
    } finally {
      setIsPolling(false)
    }
  }, [allLoaded, fetchMoreRestaurants, loadedPages, pagination])

  // Function to refresh data when a restaurant is updated externally
  const refreshRestaurants = React.useCallback(async () => {
    // Reset the loaded pages tracker
    setLoadedPages(new Set([pagination.pageIndex]))
    setAllLoaded(false)

    try {
      // Fetch the first page again to get the latest data
      const [newRestaurants] = await fetchRestaurants(
        pagination.pageIndex,
        pagination.pageSize
      )

      // Reset the restaurants state with the fresh data
      setRestaurants(Array.isArray(newRestaurants) ? newRestaurants : [])

      // Start polling again to load the rest
      schedulePoll()

      console.log('Restaurant data refreshed')
    } catch (error) {
      console.error('Error refreshing restaurants:', error)
    }
  }, [
    fetchRestaurants,
    pagination.pageIndex,
    pagination.pageSize,
    schedulePoll,
  ])

  // Create a wrapped version of fetchMoreRestaurants for the RestaurantsTable
  const wrappedFetchRestaurants = React.useCallback(() => {
    // Return a function that matches what RestaurantsTable expects
    return loadAllRestaurants()
  }, [loadAllRestaurants])

  // Since the RestaurantsTable component expects pagination as a prop but doesn't declare it
  // in its type signature, we need to create a version of it that accepts our props
  const tablePaginationData = {
    total: pagination.total,
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
  }

  React.useImperativeHandle(ref, () => ({
    refreshRestaurants,
  }))

  return (
    <RestaurantsTable
      restaurants={restaurants}
      fetchRestaurants={wrappedFetchRestaurants}
      pagination={tablePaginationData}
    />
  )
})
