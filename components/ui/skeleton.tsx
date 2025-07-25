'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
  ...props
}) => {
  const baseStyles = 'bg-slate-200'
  
  const variants = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg'
  }
  
  const animations = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: ''
  }
  
  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        animations[animation],
        className
      )}
      style={{
        width: width || '100%',
        height: height || '1rem'
      }}
      {...props}
    />
  )
}

// Skeleton container for grouping multiple skeleton elements
export const SkeletonContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn('space-y-3', className)}>
      {children}
    </div>
  )
}