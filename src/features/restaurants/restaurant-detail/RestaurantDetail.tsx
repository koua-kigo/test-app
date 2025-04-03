'use client'

import {getUserByClerkId} from '@/db/models/users/users'

import {DealsList} from '@/features/deals'
import {
  PunchCard,
  PUNCH_THRESHOLD,
} from '@/components/ui/restaurant-specific-user-punch-card'
import type {
  Deal,
  PunchCard as PunchCardType,
  RestaurantDetailPayload,
  User,
} from '@/types/db'
import {useUser} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {Badge} from '@/components/ui/badge'
import {
  MapPin,
  Clock,
  Info,
  Gift,
  Tag,
  QrCode,
  User as UserIcon,
} from 'lucide-react'
import {useUserDistanceFromRestaurant} from '@/hooks/useUserDistance'

export function RestaurantDetail({
  restaurant: restaurantDetail,
  userPunchCard,
  user,
}: {
  restaurant: RestaurantDetailPayload
  user: User
  userPunchCard: PunchCardType
}) {
  const [userData, setUserData] = useState<User | null>(user)
  const [userPunchCardData, setUserPunchCardData] =
    useState<PunchCardType | null>(userPunchCard || null)

  const {user: clerkUser} = useUser()
  const {distance} = useUserDistanceFromRestaurant({
    restaurantAddress: restaurantDetail?.address ?? '',
  })
  useEffect(() => {
    if (clerkUser?.id && !userData) {
      getUserByClerkId(clerkUser.id).then((res) => {
        if (res) {
          setUserData(user)
        }
      })
    }
  }, [clerkUser, userData, user])

  const {deals = [], ...restaurant} = restaurantDetail

  // Convert Deal[] to DatabaseDeal[] for DealsList
  const formattedDeals = deals?.map((deal) => ({
    id: deal.id,
    restaurantId: deal.restaurantId,
    title: deal.title,
    content: deal.content,
    active: deal.active,
    createdAt: deal.createdAt ? deal.createdAt.toString() : null,
    updatedAt: deal.updatedAt ? deal.updatedAt.toString() : null,
    imageUrl: deal.imageUrl,
    restaurant: {
      id: restaurant.id,
      name: restaurant.name,
      imageUrl: restaurant.imageUrl,
    },
  }))

  return (
    <div className='grid gap-6 pb-12'>
      {/* Hero Section */}
      <div className='relative h-64 w-full rounded-xl overflow-hidden'>
        <Image
          src={'/RWP.jpg'} //restaurant.imageUrl ||
          alt={restaurant.name}
          className='object-cover'
          sizes='100vw'
          priority
          fill
        />
        <div className='absolute inset-0 bg-black bg-opacity-40' />
        <div className='absolute bottom-0 left-0 p-6'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            {restaurant.name}
          </h1>
          <div className='flex items-center text-white text-opacity-90'>
            <MapPin className='w-4 h-4 mr-2' />
            <p>{restaurant.address}</p>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* About Section */}
        <div className='bg-white rounded-xl shadow-sm border p-6 col-span-full md:col-span-2'>
          <div className='flex items-center mb-4'>
            <Info className='w-5 h-5 mr-2 text-slate-500' />
            <h2 className='text-2xl font-semibold'>About</h2>
          </div>
          <p className='text-gray-700'>{restaurant.description}</p>
        </div>

        {/* User's Punch Card Section */}
        {userData && userPunchCardData ? (
          <div className='bg-white rounded-xl shadow-sm border p-6 row-span-2 flex flex-col'>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center'>
                <Tag className='w-5 h-5 mr-2 text-blue-500' />
                <h2 className='text-xl font-semibold'>Your Punch Card</h2>
              </div>
              <Link
                href='/profile?tab=punch-cards'
                className='text-sm text-blue-600 hover:underline flex items-center'
              >
                <UserIcon className='w-4 h-4 mr-1' />
                View in Profile
              </Link>
            </div>

            <div className='flex-grow flex items-center justify-center'>
              <PunchCard
                restaurantName={restaurant.name}
                restaurantImage={restaurant.imageUrl}
                restaurantId={restaurant.id}
                currentPunches={userPunchCardData.punches}
                MAX_PUNCH_THRESHOLD={PUNCH_THRESHOLD}
                completed={userPunchCardData.completed}
                lastUpdated={userPunchCardData.updatedAt}
                className='w-full max-w-md'
              />
            </div>
          </div>
        ) : !userData ? (
          <div className='bg-blue-50 border border-blue-200 rounded-xl p-6 h-full flex flex-col justify-between'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>
                Join our rewards program!
              </h3>
              <p className='text-gray-700 mb-4'>
                Sign up to start collecting stamps and earning rewards at this
                restaurant.
              </p>
            </div>
            <div className='flex gap-4'>
              <Link
                href='/sign-up'
                className='inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors'
              >
                Sign Up
              </Link>
              <Link
                href='/sign-in'
                className='inline-block bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition-colors'
              >
                Sign In
              </Link>
            </div>
          </div>
        ) : null}

        {/* Deals Section */}
        <div className='bg-white rounded-xl shadow-sm border p-6 col-span-full'>
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center'>
              <Tag className='w-5 h-5 mr-2 text-amber-500' />
              <h2 className='text-2xl font-semibold'>Current Deals</h2>
            </div>
          </div>

          {formattedDeals && formattedDeals.length > 0 ? (
            <div className='space-y-4'>
              <DealsList deals={formattedDeals} />
            </div>
          ) : (
            <p className='text-gray-600 py-4'>
              No current deals available at this restaurant.
            </p>
          )}
        </div>
      </div>
      {distance && (
        <NotificationCard title='Distance'>
          <p>
            You're only {distance} miles away from {restaurant?.name}
          </p>
        </NotificationCard>
      )}
    </div>
  )
}
