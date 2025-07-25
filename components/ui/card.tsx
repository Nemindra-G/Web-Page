'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'elevated' | 'bordered' | 'dark-gradient' | 'dark-glass' | 'dark-neon' | 'dark-purple'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default', 
    padding = 'md', 
    hover = false,
    children,
    ...props 
  }, ref) => {
    const baseStyles = 'rounded transition-all duration-300'
    
    const variants = {
      default: 'bg-white shadow-sm border border-gray-200',
      glass: 'bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-sm',
      elevated: 'bg-white shadow-lg hover:shadow-xl',
      bordered: 'bg-white border border-primary-200',
      'dark-gradient': 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-slate-700/50 shadow-2xl hover:shadow-3xl hover:shadow-primary-500/10',
      'dark-glass': 'bg-slate-800/40 backdrop-blur-xl border border-slate-600/30 shadow-xl hover:shadow-2xl hover:border-slate-500/50',
      'dark-neon': 'bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-lg border border-electric-blue/20 shadow-2xl hover:shadow-electric-blue/20 hover:border-electric-blue/40',
      'dark-purple': 'bg-gradient-to-br from-slate-900/95 to-purple-900/30 backdrop-blur-lg border border-accent-500/20 shadow-2xl hover:shadow-accent-500/20 hover:border-accent-500/40'
    }
    
    const paddings = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    }
    
    const hoverStyles = hover ? 'hover:shadow-lg cursor-pointer' : ''
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
