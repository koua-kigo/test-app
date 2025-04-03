'use client'

import {useLocation} from '@/context/location-context'
import geolib from 'geolib'
import {useEffect, useState} from 'react'

async function getCoordinatesFromAddress(address: string) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  )
  const data = await response.json()
  return data.results[0].geometry.location // { lat: ..., lng: ... }
}

export const useUserDistanceFromRestaurant = ({
  restaurantAddress,
}: {
  restaurantAddress: string
}) => {
  const [distance, setDistance] = useState(0)
  const {coords} = useLocation()

  useEffect(() => {
    if (!coords) return
    const restaurantCoordinates: any =
      getCoordinatesFromAddress(restaurantAddress)
    if (restaurantCoordinates) {
      const distance = geolib.getDistance(coords, restaurantCoordinates)
      setDistance(distance)
    }
  }, [coords, restaurantAddress])

  return {distance}
}
