'use client'

import * as React from 'react'
import {motion, AnimatePresence} from 'motion/react'
import {cn} from '@/lib/utils'
import {Award, Coffee, Stamp, Utensils} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {Badge} from '@/components/ui/badge'
import {ProgressIndicator} from '@/components/progress-indicator/progress-indicator'

// Constant for punch threshold
export const PUNCH_THRESHOLD = 10

// Type for a single restaurant punch record
export interface RestaurantPunch {
  restaurantId: string | number | bigint
  restaurantName: string
  restaurantImage?: string
  currentPunches: number
  MAX_PUNCH_THRESHOLD?: number
  completed?: boolean
  lastUpdated?: Date | string
}

interface PunchCardProps
  extends Omit<React.ComponentProps<typeof motion.div>, 'ref'> {
  restaurants: RestaurantPunch[]
}

export const PunchCard = React.forwardRef<HTMLDivElement, PunchCardProps>(
  ({className, restaurants, ...props}, ref) => {
    console.log('🚀 ~ restaurants:', restaurants)
    const currentPunches = restaurants.length
    const MAX_PUNCH_THRESHOLD = 10

    return (
      <motion.div
        ref={ref}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className={cn(
          'relative overflow-hidden rounded-xl bg-card shadow-lg',
          'w-full flex flex-col',
          className
        )}
        style={{perspective: 1000}}
        {...props}
      >
        {/* Card Header */}
        <div className='relative h-36 sm:h-48 w-full bg-gradient-to-r from-primary/80 to-primary'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />

          <div className='absolute bottom-0 w-full p-4'>
            <h3 className='text-lg sm:text-xl font-bold text-white'>
              Your Punch Card
            </h3>
            <p className='text-xs text-white/70'>
              Collect punches from your favorite restaurants
            </p>
          </div>
        </div>

        {/* Restaurant List */}
        <div className='flex flex-col p-4 sm:p-6'>
          <h4 className='text-base font-medium mb-4'>Your Restaurants</h4>

          {restaurants.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              You haven't earned any punches yet. Visit a restaurant to get
              started!
            </div>
          ) : (
            <div className='space-y-4'>
              <div
                className={cn(
                  'grid gap-2 mb-5',
                  MAX_PUNCH_THRESHOLD <= 5
                    ? 'grid-cols-5'
                    : MAX_PUNCH_THRESHOLD <= 8
                    ? 'grid-cols-4'
                    : 'grid-cols-5'
                )}
              >
                {restaurants.map((restaurant, index) => (
                  <motion.div
                    key={`punch-${restaurant.restaurantId}`}
                    style={{backgroundColor: '#ddd'}}
                    className={cn(
                      'bg-gray aspect-square rounded-lg border-2 flex items-center justify-center relative ',
                      index < currentPunches
                        ? 'border-primary'
                        : ' border-muted'
                    )}
                    initial={false}
                    animate={
                      index === currentPunches - 1
                        ? {scale: [1, 1.2, 1], rotate: [0, 15, 0]}
                        : {}
                    }
                    transition={{duration: 0.5}}
                  >
                    {index < currentPunches && (
                      <motion.div
                        initial={{scale: 0, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          delay: index === currentPunches - 1 ? 0.2 : 0,
                        }}
                      >
                        <Stamp className='h-5 w-5 stroke-black text-black' />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='flex items-center justify-start'>
          <ProgressIndicator punches={restaurants} />
        </div>
      </motion.div>
    )
  }
)

PunchCard.displayName = 'PunchCard'

// Sub-component for individual restaurant punch items
interface RestaurantPunchItemProps {
  restaurant: RestaurantPunch
  onAddPunch?: (restaurantId: string | number | bigint) => void
}
