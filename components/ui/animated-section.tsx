'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, scrollAnimationVariants } from '@/lib/scroll-animations'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale'
  delay?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
  stagger?: boolean
}

export function AnimatedSection({
  children,
  animation = 'fadeIn',
  delay = 0,
  className,
  as: Component = 'div',
  stagger = false
}: AnimatedSectionProps) {
  const { ref, shouldAnimate } = useScrollAnimation(delay)

  const variants = stagger ? scrollAnimationVariants.stagger : scrollAnimationVariants[animation]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
      // @ts-ignore - Component prop handling
      as={Component}
    >
      {children}
    </motion.div>
  )
}

// Specialized component for staggered animations
interface StaggeredListProps {
  children: React.ReactNode
  className?: string
  itemClassName?: string
  staggerDelay?: number
  delay?: number
}

export function StaggeredList({
  children,
  className,
  itemClassName,
  staggerDelay = 0.1,
  delay = 0
}: StaggeredListProps) {
  const { ref, shouldAnimate } = useScrollAnimation(delay)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={containerVariants}
      className={cn(className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={cn(itemClassName)}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Parallax wrapper component
interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className }: ParallaxSectionProps) {
  const { ref, offset } = useParallax(speed)

  return (
    <div
      ref={ref}
      className={cn('relative', className)}
      style={{
        transform: `translateY(${offset}px)`
      }}
    >
      {children}
    </div>
  )
}

// Scroll progress indicator
interface ScrollProgressProps {
  className?: string
  color?: string
}

export function ScrollProgress({ className, color = '#0ea5e9' }: ScrollProgressProps) {
  const progress = useScrollProgress()

  return (
    <motion.div
      className={cn(
        'fixed top-0 left-0 right-0 h-1 z-50 origin-left',
        className
      )}
      style={{
        backgroundColor: color,
        scaleX: progress
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress }}
      transition={{ duration: 0.1 }}
    />
  )
}

// Animated counter component
interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  delay?: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  suffix = '',
  className
}: AnimatedCounterProps) {
  const { ref, shouldAnimate } = useScrollAnimation(delay)
  const [count, setCount] = React.useState(from)

  React.useEffect(() => {
    if (!shouldAnimate) return

    let startTime: number
    const startValue = from
    const endValue = to

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [shouldAnimate, from, to, duration])

  return (
    <span ref={ref} className={cn(className)}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}