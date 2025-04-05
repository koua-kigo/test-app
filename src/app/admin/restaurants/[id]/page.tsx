import Link from 'next/link'
import Image from 'next/image'
import {Suspense} from 'react'
import {auth} from '@clerk/nextjs/server'
import {QRCodeGenerator} from '@/components/qr-code/qr-code-generator'
import {getRestaurantById} from '@/db/models'
import {RestaurantLoading} from '@/features/restaurants/RestaurantLoading'
import {useRouter} from 'next/navigation'
import {AnimatePresence} from 'framer-motion'
import {motion} from 'framer-motion'
const MotionImage = motion(Image)

// Restaurant detail component
function RestaurantDetail({restaurant}) {
  // Handle case where restaurant is not found
  if (!restaurant) {
    return (
      <div className='p-6 text-center'>
        <h2 className='text-2xl font-semibold mb-4'>Restaurant Not Found</h2>
        <p className='text-gray-600 mb-4'>
          The restaurant you are looking for does not exist or has been removed.
        </p>
        <Link href='/restaurants' className='text-blue-500 hover:underline'>
          View all restaurants
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      className='container mx-auto px-4 py-8'
      animate={{opacity: [0, 1, 0], y: [10, 0, 10]}}
      transition={{delay: 0.5, duration: 1, staggerChildren: 0.5}}
    >
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
            aria-label='Back arrow'
            role='img'
          >
            <title>Back arrow</title>
            <path d='M19 12H5M12 19l-7-7 7-7' />
          </svg>
          Back to Restaurants
        </Link>
      </div>

      <motion.div className='relative h-64 w-full mb-8 rounded-lg overflow-hidden'>
        <MotionImage
          src={restaurant.imageUrl || '/RWP.jpg'}
          alt={`${restaurant.name} featured image`}
          fill
          className='object-cover'
          priority
          sizes='100vw'
        />

        <div className='absolute inset-0 bg-black bg-opacity-30' />
        <motion.div className='absolute bottom-0 left-0 p-6'>
          <motion.h1
            className='text-3xl font-bold text-white mb-2'
            animate={{opacity: [0, 1, 0], y: [10, 0, 10]}}
            transition={{delay: 0.5, duration: 1}}
          >
            {restaurant.name}
          </motion.h1>
          <motion.p
            className='text-white text-opacity-90'
            animate={{opacity: [0, 1, 0], y: [10, 0, 10]}}
            transition={{delay: 0.5, duration: 1}}
          >
            {restaurant.address}
          </motion.p>
        </motion.div>
      </motion.div>

      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>About</h2>
        <p className='text-gray-700'>{restaurant.description}</p>
      </div>

      <motion.div
        className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-6'
        animate={{opacity: [0, 1, 0], y: [10, 0, 10]}}
        transition={{delay: 0.5, duration: 1}}
      >
        {/* QR Code Section */}
        <motion.div className='md:col-span-1'>
          <QRCodeGenerator
            restaurant={restaurant}
            onUpdate={() => {
              // Force refresh the data
            }}
          />
        </motion.div>

        {/* Details Section */}
      </motion.div>
    </motion.div>
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

  const restaurant = id ? await getRestaurantById(BigInt(id)) : null

  console.log('🚀 ~ restaurant ~ restaurant:', restaurant)

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
            aria-label='Back arrow'
            role='img'
          >
            <title>Back arrow</title>
            <path d='M19 12H5M12 19l-7-7 7-7' />
          </svg>
          Back to Restaurants
        </Link>
      </div>

      <Suspense fallback={<RestaurantLoading />}>
        <AnimatePresence>
          {restaurant && <RestaurantDetail restaurant={restaurant} />}
        </AnimatePresence>
      </Suspense>
    </div>
  )
}
