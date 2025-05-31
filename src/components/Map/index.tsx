'use client'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef, useState } from 'react'

// Initialize with your token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [location, setLocation] = useState({
    lng: -73.935242,
    lat: 40.730610,
    zoom: 13
  })

  useEffect(() => {
    if (!mapContainer.current || map.current) return
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11', // Dark theme
      center: [location.lng, location.lat],
      zoom: location.zoom

    })

    // Get user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords
        map.current?.flyTo({
          center: [longitude, latitude],
          zoom: 15
        })

        // Add user marker
        new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(map.current!)
      },
      (error) => console.error('Error getting location:', error)
    )

    // Cleanup
    return () => map.current?.remove()
  }, [])

  return (
    <div
      ref={mapContainer}
      className="w-full h-[50vh] bg-slate-900"
    />
  )
}