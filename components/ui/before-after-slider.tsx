'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
  initialPosition?: number
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className,
  initialPosition = 50
}) => {
  const [sliderPosition, setSliderPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    updateSliderPosition(e.clientX)
  }, [isDragging, updateSliderPosition])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    if (e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX)
    }
  }

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    if (e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX)
    }
  }, [isDragging, updateSliderPosition])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full aspect-[16/9] overflow-hidden rounded-lg cursor-col-resize select-none',
        className
      )}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
          priority
        />
        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
          priority
        />
        {/* After Label */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {afterLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-primary cursor-col-resize flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: isDragging ? 1.1 : 1
          }}
        >
          {/* Handle Icon */}
          <div className="flex items-center gap-0.5">
            <div className="w-0.5 h-4 bg-primary rounded-full" />
            <div className="w-0.5 h-4 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
        Drag to compare
      </div>

      {/* Overlay for better interaction */}
      <div className="absolute inset-0 z-20" />
    </div>
  )
}