import Link from 'next/link'
import {DealsList, DealsListSkeleton} from '@/features/deals'
import {
  getActiveDeals,
  getRestaurants,
} from '@/db/models/restaurants/restaurants'
import {Suspense} from 'react'
import {ArrowLeftIcon, Home} from 'lucide-react'

export const metadata = {
  title: 'Special Deals | Restaurant Passport',
  description:
    'View all current special offers and deals from our partner restaurants',
}

export default async function DealsPage() {
  const deals = await getActiveDeals()

  console.log('🚀 ~ DealsPage ~ deals:', deals)

  return (
    <div className='px-8 py-4 mt-20'>
      <div className='flex flex-col gap-4 items-center mb-8 relative rounded-lg p-6 bg-white py-4'>
        <h1 className='text-3xl font-bold text-center my-4'>Special Deals</h1>

        <div className='sm:w-full flex gap-3 justify-center sm:mt-12'>
          <Link
            href='/restaurants'
            style={{
              backgroundColor: '#208F54',
            }}
            className='text-white rounded-full w-auto px-4 py-2 flex items-center gap-2 line-clamp-1 shadow-sm hover:shadow-md transition-shadow'
          >
            View Restaurants
          </Link>

          <Link
            href='/'
            className='rounded-full bg-black text-white p-4 shadow-sm hover:shadow-md transition-shadow'
          >
            <Home size={22} />
            {/* <BackArrowIcon size={18} /> */}
          </Link>
        </div>
        <p className='text-gray-600 text-center'>
          Discover special offers and deals from our partner restaurants. Save
          money while collecting stamps on your food passport!
        </p>
      </div>

      <Suspense fallback={<DealsListSkeleton />}>
        <DealsList deals={deals} />
      </Suspense>
    </div>
  )
}
