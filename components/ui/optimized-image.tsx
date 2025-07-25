'use client'

import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  fallback?: string
  showSkeleton?: boolean
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'wide'
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  rounded?: boolean
  shadow?: boolean
  overlay?: boolean
  overlayContent?: React.ReactNode
}

// Generate a simple blur placeholder
const generateBlurDataURL = (width: number = 10, height: number = 10) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (ctx) {
    // Create a simple gradient blur effect
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#f1f5f9')
    gradient.addColorStop(0.5, '#e2e8f0')
    gradient.addColorStop(1, '#cbd5e1')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }
  
  return canvas.toDataURL()
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[21/9]'
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallback = '/images/placeholder.jpg',
  showSkeleton = true,
  aspectRatio,
  objectFit = 'cover',
  rounded = false,
  shadow = false,
  overlay = false,
  overlayContent,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false)
    onLoad?.(event)
  }

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true)
    setIsLoading(false)
    if (fallback && imageSrc !== fallback) {
      setImageSrc(fallback)
      setHasError(false)
      setIsLoading(true)
    }
    onError?.(event)
  }

  return (
    <div className={cn(
      'relative overflow-hidden',
      aspectRatio && aspectRatioClasses[aspectRatio],
      rounded && 'rounded-lg',
      shadow && 'shadow-lg',
      className
    )}>
      {/* Loading Skeleton */}
      {isLoading && showSkeleton && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer" />
        </div>
      )}

      {/* Main Image */}
      <Image
        src={imageSrc}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down'
        )}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Cp5O4+9L4PQ"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {/* Error State */}
      {hasError && !fallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center text-slate-500">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          {overlayContent}
        </div>
      )}
    </div>
  )
}

// Specialized components for common use cases
export function HeroImage({ src, alt, className, ...props }: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={cn('w-full h-screen', className)}
      aspectRatio="wide"
      objectFit="cover"
      priority
      sizes="100vw"
      {...props}
    />
  )
}

export function ProjectImage({ src, alt, className, ...props }: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={cn('w-full', className)}
      aspectRatio="landscape"
      objectFit="cover"
      rounded
      shadow
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
    />
  )
}

export function TeamImage({ src, alt, className, ...props }: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={cn('w-full', className)}
      aspectRatio="portrait"
      objectFit="cover"
      rounded
      shadow
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      {...props}
    />
  )
}

export function TestimonialImage({ src, alt, className, ...props }: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={cn('w-16 h-16', className)}
      aspectRatio="square"
      objectFit="cover"
      rounded
      sizes="64px"
      {...props}
    />
  )
}