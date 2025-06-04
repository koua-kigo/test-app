import { describe, it, expect, vi, beforeEach } from 'vitest'
import { processQrScan } from '@/app/actions/scan-actions'

// Mock the database functions
vi.mock('@/db/models/punch-cards/punch-cards', () => ({
  createPunchCard: vi.fn(),
  getPunchCardsByUserId: vi.fn(),
  getUserPunchCardForRestaurant: vi.fn(),
  incrementPunchCard: vi.fn(),
}))

vi.mock('@/db/models/restaurants/restaurants', () => ({
  getRestaurantById: vi.fn(),
}))

vi.mock('@/db/models/users/users', () => ({
  getUserByClerkId: vi.fn(),
  getUserById: vi.fn(),
}))

vi.mock('@/db/models/raffle-entries/raffle-entries', () => ({
  createRaffleEntry: vi.fn(),
}))

describe('processQrScan', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return redirect for missing userId', async () => {
    const result = await processQrScan({
      qrData: 'https://example.com/restaurants/123/scan',
      userId: '',
    })

    expect(result).toEqual({
      redirect: '/restaurants/123',
      message: 'Please sign in to collect punches',
      status: 302,
    })
  })

  it('should return error for missing restaurant ID', async () => {
    const result = await processQrScan({
      qrData: 'invalid-qr-data',
      userId: 'user123',
    })

    expect(result).toEqual({
      error: 'Missing restaurant ID',
      message: 'Restaurant ID is required',
      status: 400,
    })
  })

  it('should extract restaurant ID from valid QR data', async () => {
    const mockUserId = BigInt(123)
    const mockRestaurantId = BigInt(456)
    
    // Mock the required functions
    const { getUserByClerkId } = await import('@/db/models/users/users')
    const { getRestaurantById } = await import('@/db/models/restaurants/restaurants')
    const { getUserPunchCardForRestaurant } = await import('@/db/models/punch-cards/punch-cards')
    const { getPunchCardsByUserId } = await import('@/db/models/punch-cards/punch-cards')
    const { createPunchCard } = await import('@/db/models/punch-cards/punch-cards')

    vi.mocked(getUserByClerkId).mockResolvedValue({ id: mockUserId, name: 'Test User' })
    vi.mocked(getRestaurantById).mockResolvedValue({ id: mockRestaurantId, name: 'Test Restaurant' })
    vi.mocked(getUserPunchCardForRestaurant).mockResolvedValue(null)
    vi.mocked(getPunchCardsByUserId).mockResolvedValue([])
    vi.mocked(createPunchCard).mockResolvedValue([{
      id: BigInt(789),
      userId: mockUserId,
      restaurantId: mockRestaurantId,
      punches: 1,
      completed: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])

    const result = await processQrScan({
      qrData: 'https://example.com/restaurants/456/scan',
      userId: 'user-clerk-id',
    })

    expect(result).toEqual({
      message: 'Punch card created successfully',
      data: expect.any(Object),
      restaurantName: 'Test Restaurant',
      isExisting: false,
    })
  })
})