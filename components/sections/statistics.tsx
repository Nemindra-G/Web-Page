'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Section, Container } from '@/components/layout'
import { STATISTICS } from '@/lib/constants'

interface StatItemProps {
  value: number
  label: string
  suffix?: string
  animationDelay?: number
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = '', animationDelay = 0 }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div 
      ref={ref}
      className="text-center animate-slide-up" 
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="text-5xl md:text-6xl font-bold text-primary-500 mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-slate-600 dark:text-slate-300">{label}</div>
    </div>
  )
}

export const Statistics: React.FC = () => {
  return (
    <Section size="lg" background="gradient">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Built on Excellence
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our numbers speak for themselves. Years of dedication to quality and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATISTICS.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              animationDelay={index * 200}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}