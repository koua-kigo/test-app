import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  getTopUsersByPunchCardCount,
  getPopularRestaurantsByPunchCardCount,
  getUsersInRaffle,
} from '@/db/models/leaderboard/leaderboard'
import {convertBigInts} from '@/lib/utils'
import {UserLeaderboard} from '@/components/leaderboard/user-leaderboard'
import {RestaurantLeaderboard} from '@/components/leaderboard/restaurant-leaderboard'
import {RaffleEntries} from '@/components/leaderboard/raffle-entries'
import {LotteryStatus} from '@/features/users/lottery-status'
import {db} from '@/db/db'
import {punchCards as punchCardsTable} from '@/db/drizzle/schema'
import {inArray} from 'drizzle-orm'

export const metadata = {
  title: 'Leaderboard | Restaurant Passport',
  description: 'View top users and popular restaurants',
}

export default async function LeaderboardPage() {
  // Fetch leaderboard data
  const topUsers = await getTopUsersByPunchCardCount(10)
  const popularRestaurants = await getPopularRestaurantsByPunchCardCount(10)
  const raffleEntries = await getUsersInRaffle(10)

  // Convert BigInt values to strings for serialization
  const serializedTopUsers = convertBigInts(topUsers)
  const serializedPopularRestaurants = convertBigInts(popularRestaurants)
  const serializedRaffleEntries = convertBigInts(raffleEntries)

  // Get punch cards for users in the raffle
  const userIds = raffleEntries.map((entry) => entry.userId)
  const userPunchCards = await db.query.punchCards.findMany({
    where: inArray(punchCardsTable.userId, userIds),
    with: {
      restaurant: true,
    },
  })

  // Format punch cards for the component
  const formattedPunchCards = userPunchCards.map((pc) => ({
    id: pc.id,
    userId: pc.userId,
    restaurantId: pc.restaurantId,
    punches: pc.punches || 0,
    completed: pc.completed || false,
    updatedAt: pc.updatedAt || new Date().toISOString(),
    restaurant: {
      id: pc.restaurant.id,
      name: pc.restaurant.name,
      imageUrl: pc.restaurant.imageUrl,
    },
  }))

  const serializedPunchCards = convertBigInts(formattedPunchCards)

  console.log('🚀 ~ LeaderboardPage ~ serializedTopUsers:', serializedTopUsers)
  console.log(
    '🚀 ~ LeaderboardPage ~ serializedPopularRestaurants:',
    serializedPopularRestaurants
  )
  console.log(
    '🚀 ~ LeaderboardPage ~ serializedRaffleEntries:',
    serializedRaffleEntries
  )

  return (
    <div className='container mx-auto py-10 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold mb-6'>Leaderboard</h1>

      <Tabs defaultValue='users' className='w-full'>
        <TabsList className='grid w-full grid-cols-3 mb-8'>
          <TabsTrigger value='users'>Top Users</TabsTrigger>
          <TabsTrigger value='restaurants'>Popular Restaurants</TabsTrigger>
          <TabsTrigger value='raffle'>Raffle Status</TabsTrigger>
        </TabsList>

        <TabsContent value='users'>
          <Card>
            <CardHeader>
              <CardTitle>Top Users</CardTitle>
              <CardDescription>Users with the most punch cards</CardDescription>
            </CardHeader>
            <CardContent>
              <UserLeaderboard users={serializedTopUsers} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='restaurants'>
          <Card>
            <CardHeader>
              <CardTitle>Popular Restaurants</CardTitle>
              <CardDescription>
                Restaurants with the most punch cards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RestaurantLeaderboard
                restaurants={serializedPopularRestaurants}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='raffle'>
          <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle>Your Raffle Status</CardTitle>
                <CardDescription>
                  Check your progress for raffle entry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LotteryStatus punchCards={serializedPunchCards} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Raffle Entries</CardTitle>
                <CardDescription>
                  Users currently in the raffle drawing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RaffleEntries entries={serializedRaffleEntries} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
