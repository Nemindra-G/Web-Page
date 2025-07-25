'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Loading } from './loading'

interface GoogleMapProps {
  address: string
  zoom?: number
  height?: string
  className?: string
}

export function GoogleMap({ 
  address, 
  zoom = 15, 
  height = '400px',
  className 
}: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Encode the address for the Google Maps embed URL
  const encodedAddress = encodeURIComponent(address)
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}&zoom=${zoom}`
  
  // In a real implementation, you would use an environment variable for the API key
  // const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}&zoom=${zoom}`

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden", 
        className
      )}
      style={{ height }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <Loading size="lg" />
        </div>
      )}
      
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 p-4 text-center">
          <svg className="w-12 h-12 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-slate-600 font-medium">Unable to load map</p>
          <p className="text-sm text-slate-500 mt-1">{error}</p>
        </div>
      ) : (
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setError('Failed to load Google Maps. Please try again later.')
            setIsLoaded(true)
          }}
          title={`Map showing ${address}`}
          className="absolute inset-0"
        />
      )}
    </div>
  )
}

// Fallback component for when API key is not available
export function GoogleMapStatic({ 
  address, 
  className 
}: {
  address: string
  className?: string
}) {
  // Create a URL for a static map or a link to Google Maps
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`
  
  return (
    <div className={cn(
      "relative w-full aspect-video bg-slate-100 rounded-lg overflow-hidden flex flex-col items-center justify-center text-center p-4",
      className
    )}>
      <svg className="w-12 h-12 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <p className="text-slate-600 font-medium">{address}</p>
      <a 
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-electric-blue rounded-md hover:bg-electric-blue-dark transition-colors"
      >
        View on Google Maps
      </a>
    </div>
  )
}