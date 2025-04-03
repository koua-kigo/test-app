import Image from 'next/image'
import Link from 'next/link'

export const Home = () => {
  return (
    <main className='flex flex-col justify-center items-center align-middle'>
      <div>
        <Image
          src='/logo.png'
          alt='Restaurant Passport Logo'
          width={400}
          height={400}
          className='mx-auto'
        />
        <h2 className='text-3xl font-bold text-center'>
          Track Your Restaurant Adventures
        </h2>
        <p className='text-center max-w-lg'>
          Keep track of restaurants you've visited, rate your experiences, and
          create your own food passport.
        </p>

        <div className='flex gap-4 items-center flex-row mt-8 justify-center align-middle'>
          <div className='flex gap-4 justify-center align-middle items-center w-min mx-auto'>
            <Link
              href='/sign-up'
              className='rounded-full  border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[var(--brand-primary)] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            >
              Get Started
            </Link>
            <Link
              href='/deals'
              className='rounded-full bg-[#e0d9d1] relative z-40  border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[var(--brand-primary)]  text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            >
              Browse Deals
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
