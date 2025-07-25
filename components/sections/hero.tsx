'use client'

import React from 'react'
import Image from 'next/image'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'

interface HeroProps {
  backgroundMedia: {
    type: 'video' | 'image'
    src: string
    alt?: string
  }
  headline: string
  subheadline: string
  ctaButtons: Array<{
    text: string
    href: string
    variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  }>
}

export const Hero: React.FC<HeroProps> = ({
  backgroundMedia,
  headline,
  subheadline,
  ctaButtons
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {backgroundMedia.type === 'image' ? (
          <Image
            src={backgroundMedia.src}
            alt={backgroundMedia.alt || ''}
            fill
            className="object-cover"
            priority
            quality={90}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundMedia.src} type="video/mp4" />
          </video>
        )}
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
      </div>

      {/* Hero Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            {subheadline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '400ms' }}>
            {ctaButtons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                size="lg"
                onClick={() => window.location.href = button.href}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
        <p className="text-white/50 text-sm mt-2">Scroll Down</p>
      </div>
    </section>
  )
}