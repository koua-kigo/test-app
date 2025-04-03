import {BoxReveal} from '@/components/magicui/box-reveal'

import Image from 'next/image'
import Link from 'next/link'

export const Home = () => {
  return (
    <main className='flex flex-col justify-center items-center align-middle p-4 w-full'>
      <div className='max-w-lg flex flex-col items-center justify-center align-middle'>
        <Image
          src='/logo.png'
          alt='Restaurant Passport Logo'
          width={300}
          height={300}
          className='mx-auto'
        />

        <BoxReveal boxColor={'#E2FFE5'} duration={0.25}>
          <h2 className='text-3xl font-bold text-center'>
            Track Your Restaurant Adventures
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={'#E2FFE5'} duration={0.35} delay={0.5}>
          <p className='text-center max-w-lg mt-2'>
            Keep track of restaurants you've visited, rate your experiences, and
            create your own{' '}
            <span className='font-semibold text-[#E2FFE5]'>food passport</span>.
          </p>
        </BoxReveal>

        <BoxReveal boxColor={'#E2FFE5'} duration={0.5} delay={0.8}>
          <div className='mt-6'>
            <p>
              Discover new culinary experiences in your area <br />
              Earn rewards and special offers at participating restaurants{' '}
              <br />
              Share your favorite spots with friends and fellow foodies
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={'#E2FFE5'} duration={0.5} delay={1.1}>
          <div className='flex gap-4 items-center flex-row mt-8 justify-center align-middle w-full'>
            <div className='flex gap-4 justify-center align-middle items-center w-min mx-auto'>
              <Link
                href='/sign-up'
                className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#E2FFE5] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
              >
                Get Started
              </Link>

              <Link
                href='/deals'
                className='rounded-full bg-[#e0d9d1] relative z-40 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#E2FFE5] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
              >
                Browse Deals
              </Link>
            </div>
          </div>
        </BoxReveal>
      </div>
    </main>
  )
}
