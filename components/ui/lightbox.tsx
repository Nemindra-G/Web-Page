'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/ui/icon'
import { cn } from '@/lib/utils'

interface LightboxImage {
  src: string
  alt: string
  caption?: string
  title?: string
  description?: string
  metadata?: {
    category?: string
    date?: string
    client?: string
    location?: string
  }
}

interface LightboxProps {
  images: LightboxImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onJumpTo: (index: number) => void
  showInfo?: boolean
  showThumbnails?: boolean
  className?: string
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onJumpTo,
  showInfo = true,
  showThumbnails = true,
  className
}) => {
  const [showInfoPanel, setShowInfoPanel] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const currentImage = images[currentIndex]

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          onPrev()
          break
        case 'ArrowRight':
          onNext()
          break
        case 'i':
        case 'I':
          if (showInfo) setShowInfoPanel(prev => !prev)
          break
        case ' ':
          e.preventDefault()
          setShowInfoPanel(prev => !prev)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden' // Prevent background scroll

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, onNext, onPrev, showInfo])

  // Preload adjacent images
  useEffect(() => {
    if (!isOpen || images.length <= 1) return

    const preloadImage = (src: string) => {
      const img = new window.Image()
      img.src = src
    }

    // Preload next and previous images
    const nextIndex = (currentIndex + 1) % images.length
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    
    if (images[nextIndex]) preloadImage(images[nextIndex].src)
    if (images[prevIndex]) preloadImage(images[prevIndex].src)
  }, [currentIndex, images, isOpen])

  if (!isOpen || !currentImage) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed inset-0 z-50 bg-black/95 flex items-center justify-center",
          className
        )}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery"
      >
        {/* Loading Indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Header Controls */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
          <div className="flex items-center gap-4 text-white">
            <h3 className="text-lg font-semibold">
              {currentImage.title || `Image ${currentIndex + 1} of ${images.length}`}
            </h3>
            {currentImage.metadata?.category && (
              <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
                {currentImage.metadata.category}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {/* Info Toggle */}
            {showInfo && currentImage.description && (
              <button
                className="p-2 text-white hover:text-primary transition-colors rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowInfoPanel(prev => !prev)
                }}
                aria-label="Toggle image information"
              >
                <Icons.Quote size="md" />
              </button>
            )}
            
            {/* Close Button */}
            <button
              className="p-2 text-white hover:text-primary transition-colors rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={onClose}
              aria-label="Close gallery"
            >
              <Icons.Close size="lg" />
            </button>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-primary transition-all rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary hover:scale-110"
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              aria-label="Previous image"
            >
              <Icons.ChevronLeft size="xl" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:text-primary transition-all rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary hover:scale-110"
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              aria-label="Next image"
            >
              <Icons.ChevronRight size="xl" />
            </button>
          </>
        )}
        
        {/* Main Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative max-w-7xl max-h-[90vh] mx-auto px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={1920}
            height={1080}
            className="object-contain max-h-[90vh] w-auto rounded-lg shadow-2xl"
            priority
            onLoadStart={() => setIsLoading(true)}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
          
          {/* Image Caption Overlay */}
          {currentImage.caption && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg"
            >
              <p className="text-sm leading-relaxed">{currentImage.caption}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Information Panel */}
        <AnimatePresence>
          {showInfoPanel && currentImage.description && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-black/90 backdrop-blur-sm text-white p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    {currentImage.title || 'Project Details'}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {currentImage.description}
                  </p>
                </div>
                
                {currentImage.metadata && (
                  <div className="space-y-2 pt-4 border-t border-white/20">
                    {currentImage.metadata.date && (
                      <div className="flex items-center gap-2 text-sm">
                        <Icons.Calendar size="xs" className="text-primary" />
                        <span>{currentImage.metadata.date}</span>
                      </div>
                    )}
                    {currentImage.metadata.client && (
                      <div className="flex items-center gap-2 text-sm">
                        <Icons.Building size="xs" className="text-primary" />
                        <span>{currentImage.metadata.client}</span>
                      </div>
                    )}
                    {currentImage.metadata.location && (
                      <div className="flex items-center gap-2 text-sm">
                        <Icons.Location size="xs" className="text-primary" />
                        <span>{currentImage.metadata.location}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/50 to-transparent">
          {/* Image Counter */}
          <div className="flex justify-center pb-4">
            <div className="text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          {showThumbnails && images.length > 1 && (
            <div className="flex justify-center pb-6">
              <div className="flex gap-2 max-w-md overflow-x-auto px-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      onJumpTo(index)
                    }}
                    className={cn(
                      "w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0",
                      index === currentIndex
                        ? "border-primary scale-110"
                        : "border-transparent hover:border-white/50 hover:scale-105"
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Keyboard Shortcuts Help */}
        <div className="absolute bottom-4 left-4 text-xs text-white/60">
          <p>← → Navigate • ESC Close • I Info • Space Toggle</p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}