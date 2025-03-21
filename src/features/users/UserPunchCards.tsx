'use client'

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Spinner} from '@/components/ui/spinner'
import Image from 'next/image'
import Link from 'next/link'
import {AnimatePresence, motion} from 'framer-motion'
import type {User} from '@/types/db'
import {UserPunchCard} from '@/features/users/UserPunchCard'
import {
  usePunchCardSubscription,
  type PunchCardWithRestaurant,
} from '@/hooks/use-punch-card-subscription'
import {useEffect, useState} from 'react'
import {useSearchParams} from 'next/navigation'
import {cn} from '@/lib/utils'
import {type Badge, Award} from 'lucide-react'
import React from 'react'

interface UserPunchCardsProps {
  user: User | Record<string, unknown>
  initialPunchCards?: PunchCardWithRestaurant[]
}

export function UserPunchCards({
  user,
  initialPunchCards = [],
}: UserPunchCardsProps) {
  const searchParams = useSearchParams()
  const highlightId = searchParams.get('highlight')
  const [highlightedCardId, setHighlightedCardId] = useState<string | null>(
    null
  )

  // Use static data display if we can't get the user ID
  const [useFallbackData, setUseFallbackData] = useState(false)

  // Extract user ID safely, ensuring it's a bigint
  const userId = (() => {
    try {
      if (user && typeof user === 'object' && 'id' in user) {
        const id = user.id
        // If id is already a bigint, use it
        if (typeof id === 'bigint') return id
        // If id is a number or string, convert to bigint
        if (typeof id === 'number' || typeof id === 'string') {
          return BigInt(id.toString())
        }
      }
      setUseFallbackData(true)
      return undefined
    } catch (e) {
      setUseFallbackData(true)
      return undefined
    }
  })()

  // Use the real-time subscription hook only when we have a valid bigint userId
  const {punchCards, isLoading, error} = !userId
    ? {punchCards: [], isLoading: false, error: null}
    : usePunchCardSubscription(userId)

  // Use the data from the subscription or the initial data
  const displayPunchCards =
    useFallbackData || punchCards.length === 0 ? initialPunchCards : punchCards

  // Set the highlighted card when we have punch cards and a highlight parameter
  useEffect(() => {
    if (highlightId && displayPunchCards.length > 0) {
      // Find the punch card with the matching restaurant ID
      const matchingCard = displayPunchCards.find(
        (card) => String(card.restaurantId) === highlightId
      )

      if (matchingCard) {
        setHighlightedCardId(String(matchingCard.id))

        // Auto-scroll to the highlighted card
        setTimeout(() => {
          const element = document.getElementById(
            `punch-card-${matchingCard.id}`
          )
          if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'center'})
          }
        }, 500)

        // Remove the highlight after 5 seconds
        setTimeout(() => {
          setHighlightedCardId(null)
        }, 5000)
      }
    }
  }, [highlightId, displayPunchCards])

  // If loading and no initial punch cards
  if (isLoading && initialPunchCards.length === 0) {
    return (
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Your Punch Cards</CardTitle>
        </CardHeader>
        <CardContent className='flex justify-center items-center py-8'>
          <Spinner size='lg' />
        </CardContent>
      </Card>
    )
  }

  // If error and no punch cards to display
  if (error && displayPunchCards.length === 0) {
    return (
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Your Punch Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground'>
            Something went wrong loading your punch cards. Please try again
            later.
          </p>
        </CardContent>
      </Card>
    )
  }

  // If no punch cards
  if (displayPunchCards.length === 0) {
    return (
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Your Punch Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground'>
            You don't have any punch cards yet. Visit a restaurant to get
            started!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className='mb-6'>
      <CardHeader>
        <CardTitle>Your Punch Card</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className={cn(
              'relative overflow-hidden rounded-xl bg-card shadow-lg',
              'w-full flex flex-col'
            )}
            style={{perspective: 1000}}
          >
            <div className='rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors p-4'>
              <div className='flex items-center gap-3 mt-2'>
                <div className='flex-grow space-y-1'>
                  <div className='text-xs text-muted-foreground'>
                    {/* {currentPunches} of {totalPunches} punches */}
                  </div>

                  {/* Punch indicators as horizontal dots */}
                  <div className='flex gap-1'>
                    <UserPunchCard
                      restaurants={punchCards.map(
                        (punchCard) => punchCard.restaurant
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
