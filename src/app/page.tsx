import Image from 'next/image'
import Link from 'next/link'
import {SignInButton, SignOutButton, SignUpButton} from '@clerk/nextjs'
import {auth, type Session} from '@clerk/nextjs/server'

import dynamic from 'next/dynamic'
import {Suspense} from 'react'
const Home = dynamic(() =>
  import('@/components/home/home').then((mod) => mod.Home)
)

export default async function Index() {
  const session = await auth()

  const userid = session?.userId

  return (
    <div className='grid grid-rows-[60px_1fr_20px] items-center justify-items-center h-full p-2 gap-16 font-geistSans'>
      <nav className='w-full row-start-1 flex justify-between items-center px-8'>
        <div className='flex items-center gap-6'>
          <Link href='/'>
            <Image
              src='/maple-grove.png'
              alt='Restaurant Passport Logo'
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className='flex gap-4'>{!userid && <SignUpButton />}</div>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  )
}
