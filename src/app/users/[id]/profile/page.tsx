import {UserButton} from '@clerk/nextjs'
import {getUserByClerkId} from '@/db/models/users/users'
import {auth} from '@clerk/nextjs/server'
import type {PunchCardWithRestaurant} from '@/hooks/use-punch-card-subscription'
import Image from 'next/image'
import {UserPunchCards} from '@/features/users/UserPunchCards'
import {BentoGrid} from '@/components/kokonutui/bento-grid'
import {Button} from '@/components/ui/button'

// Define viewport metadata as per Next.js recommendations
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default async function ProfilePage() {
  const {userId} = await auth()

  const user = userId ? await getUserByClerkId(userId) : null
  console.log('🚀 ~ ProfilePage ~ user:', user)

  if (!user) return <div>Not logged in</div>

  // Let the client component handle all data fetching with realtime updates
  const initialPunchCards: PunchCardWithRestaurant[] = []

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-bold'>My Collection</h1>
        <UserButton />
      </div>
      <div
        className='rounded-md p-[2px] mb-8 shadow-sm'
        style={{backgroundColor: '#eee', padding: '2px'}}
      >
        <div className='bg-white p-3 flex items-center space-x-4'>
          <div className='flex items-center space-x-4'>
            <div className='font-medium'>
              <div>{user.name}</div>
              <div className='text-sm text-gray-500'>{user.email}</div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src='/eat-shop-dine-play.png'
        alt='Eat Shop Dine Play'
        width={100}
        height={100}
        className='w-full h-auto mb-8 mx-auto display-block'
      />
      {/* Display user's punch cards with real-time updates */}
      <UserPunchCards user={user} initialPunchCards={initialPunchCards} />

      <Button
        className='bold text-white w-full mx-auto mt-8  sm:w-min'
        style={{background: '#208F54'}}
      >
        Where to go Next?
      </Button>

      {/* {user?.id && <UserScanQrCode user={user} />} */}

      {/* TODO: Add Bento Grid UI header */}
    </div>
  )
}
