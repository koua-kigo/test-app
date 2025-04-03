import Link from 'next/link'
import Image from 'next/image'

import {Suspense} from 'react'
import {auth} from '@clerk/nextjs/server'
import {QRCodeManager} from '../qr-code-manager'
import {getRestaurantById} from '@/db/models'
import {RestaurantLoading} from '@/features/restaurants/RestaurantLoading'

// Loading component

// Restaurant detail component
async function RestaurantDetail(params: {id: string}) {
  const {id}: {id: string} = await params

  const restaurant = id ? await getRestaurantById(BigInt(id)) : null

  console.log('🚀 ~ restaurant ~ restaurant:', restaurant)

  // Get current user auth status
  // const { userId } = await auth();
  // const isAuthenticated = !!userId;

  if (!restaurant) {
    return null
  }

  console.log('🚀 ~ restaurant ~ restaurant:', restaurant)

  // Get current user auth status
  const {userId} = await auth()
  const isAuthenticated = !!userId

  return (
    <div>
      <div className='relative h-64 w-full mb-8 rounded-lg overflow-hidden'>
        <Image
          src={restaurant.imageUrl || '/RWP.jpg'}
          alt={restaurant.name}
          fill
          className='object-cover'
          priority
          sizes='100vw'
        />

        <div className='absolute inset-0 bg-black bg-opacity-30' />
        <div className='absolute bottom-0 left-0 p-6'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            {restaurant.name}
          </h1>
          <p className='text-white text-opacity-90'>{restaurant.address}</p>
        </div>
      </div>

      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>About</h2>
        <p className='text-gray-700'>{restaurant.description}</p>
      </div>

      <div className='mb-8'>
        <div className='flex justify-between items-center mb-4'>
          {restaurant.qrCodeUrl ? (
            <div className='mb-6'>
              <p className='text-sm text-gray-600 mb-2'>Current QR code:</p>
              <div className='border border-gray-200 rounded-lg p-4 inline-block'>
                <img
                  src={restaurant.qrCodeUrl}
                  alt='Restaurant QR Code'
                  className='w-48 h-48'
                />
              </div>
            </div>
          ) : isAuthenticated ? (
            <QRCodeManager restaurant={restaurant} />
          ) : (
            <p className='text-gray-600'>No QR code has been generated yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}

// Main page component
export default async function RestaurantPage({
  params,
}: {
  params: Promise<{id: string}>
}) {
  console.log('🚀 ~ params:', params)

  const resolvedParams = await params
  const {id} = resolvedParams

  console.log('🚀 ~ id:', id)

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-6'>
        <Link
          href='/restaurants'
          className='text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M19 12H5M12 19l-7-7 7-7' />
          </svg>
          Back to Restaurants
        </Link>
      </div>

      <Suspense fallback={<RestaurantLoading />}>
        <RestaurantDetail id={id.toString()} />
      </Suspense>
    </div>
  )
}
