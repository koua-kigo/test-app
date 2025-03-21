import {UserButton} from '@clerk/nextjs'
import {getUserByClerkId} from '@/db/models/users/users'
import {auth} from '@clerk/nextjs/server'

import {UserPunchCards} from '@/features/users/UserPunchCards'
import {BentoGrid} from '@/components/kokonutui/bento-grid'
import {usePunchCardSubscription} from '@/hooks/use-punch-card-subscription'

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

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-bold'>My Profile</h1>
        <UserButton />
      </div>
      <div className='bg-white shadow-sm rounded-lg p-6 mb-6'>
        <div className='flex items-center space-x-4'>
          <div className='font-medium'>
            <div>{user.name}</div>
            <div className='text-sm text-gray-500'>{user.email}</div>
          </div>
        </div>
      </div>

      {/* Display user's punch cards with real-time updates */}
      <UserPunchCards user={user} initialPunchCards={user?.punchCards || []} />

      {/* {user?.id && <UserScanQrCode user={user} />} */}

      {/* TODO: Add Bento Grid UI header */}
    </div>
  )
}
