import {DealsList, DealsListSkeleton} from '@/features/deals'
import {getActiveDeals} from '@/db/models/restaurants/restaurants'
import {Suspense} from 'react'

import {DealsHero} from './Hero'
export const metadata = {
  title: 'Special Deals | Restaurant Passport',
  description:
    'View all current special offers and deals from our partner restaurants',
}

export default async function DealsPage() {
  const deals = await getActiveDeals()

  return (
    <Suspense fallback={<DealsListSkeleton />}>
      <DealsHero>
        <DealsList deals={deals} />
      </DealsHero>
    </Suspense>
  )
}
