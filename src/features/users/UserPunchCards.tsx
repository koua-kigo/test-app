'use client'

import Card_10 from '@/components/kokonutui/card-10'
import {
  usePunchCardSubscription,
  type PunchCardWithRestaurant,
} from '@/hooks/use-punch-card-subscription'
import {
  useRaffleEntriesSubscription,
  type RaffleEntryWithRestaurant,
} from '@/hooks/use-raffle-entries-subscription'
import {AwardIcon, CheckIcon} from 'lucide-react'

type User = {
  id: bigint
  name: string
  email: string
}

type UserPunchCardsProps = {
  user: User
  initialPunchCards: PunchCardWithRestaurant[]
}

export function UserPunchCards({
  user,
  initialPunchCards = [],
}: UserPunchCardsProps) {
  // Start with initial data from server, then get real-time updates
  const {punchCards, isLoading, error} = usePunchCardSubscription(user.id)
  // const {raffleEntries} = useRaffleEntriesSubscription(user.id)

  // If we have realtime data, use it, otherwise use the initial data
  const displayPunchCards =
    punchCards.length > 0 ? punchCards : initialPunchCards

  if (isLoading && displayPunchCards.length === 0) {
    return <div className='text-center py-6'>Loading Score Cards...</div>
  }

  if (error) {
    return (
      <div className='text-red-500 py-6'>
        Error loading punch cards: {error.message}
      </div>
    )
  }

  if (!displayPunchCards || displayPunchCards.length === 0) {
    return (
      <div className='bg-white shadow-sm rounded-lg p-6'>
        <h2 className='text-xl font-semibold mb-4'>Your Scan Scoreboard</h2>
        <p className='text-gray-500'>
          You dont have any punch cards yet. Visit a restaurant to get started!
        </p>
      </div>
    )
  }

  return (
    <div className='bg-white shadow-sm rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-4'>Your Scan Scoreboard</h2>
      <div className='mt-4'>
        <div className='text-sm font-medium'>
          Progress: {displayPunchCards.length} / 8
        </div>
        <div className='mt-1 bg-gray-200 rounded-full h-2.5'>
          <div
            className='bg-blue-600 h-2.5 rounded-full'
            style={{width: `${(displayPunchCards.length / 8) * 100}%`}}
          />
        </div>
      </div>
      {/* <div className='mt-4'>
        <div className='p-4 bg-blue-50 rounded-lg mb-4'>
          <h3 className='font-medium text-blue-800 mb-2'>
            {' '}
            {raffleEntry ? 'Your Raffle Entry' : 'You have no Raffle yet'}
          </h3>
          <Card_10>
            <Card_10.Title>{raffleEntry?.restaurant?.name}</Card_10.Title>
            <p>{new Date(raffleEntry.createdAt).toLocaleDateString()}</p>
            <Card_10.Body>
              <AwardIcon className='w-25 h-25' />
            </Card_10.Body>
          </Card_10>
        </div>
      </div> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {displayPunchCards.map((card) => (
          <div
            key={String(card.id)}
            className='border rounded-lg p-4 hover:shadow-md transition-shadow'
          >
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='font-medium'>{card.restaurant?.name}</h3>
                <p className='text-sm text-gray-500'>
                  {card.restaurant?.address}
                </p>
              </div>
              {card.restaurant?.imageUrl && (
                <img
                  src={card.restaurant.imageUrl}
                  alt={card.restaurant.name}
                  className='w-16 h-16 object-cover rounded'
                />
              )}
            </div>

            {card.completed && (
              <div className='mt-2 inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded'>
                <CheckIcon className='w-4 h-4' />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
