'use client'

// import {
//   PunchCard,
//   PUNCH_THRESHOLD,
// } from '@/components/ui/restaurant-specific-user-punch-card'

import type {PunchCardWithRestaurant as ApiPunchCardWithRestaurant} from '@/types/api'
import type {PunchCardWithRestaurant as HookPunchCardWithRestaurant} from '@/hooks/use-punch-card-subscription'
import {PunchCard} from '@/components/ui/punchcard'

interface UserPunchCardProps {
  restaurants: ApiPunchCardWithRestaurant[] | HookPunchCardWithRestaurant[]
}

export function UserPunchCard({restaurants}: UserPunchCardProps) {
  // Convert number | null to number for punches

  return <PunchCard restaurants={restaurants} />
}
