'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: React.ReactNode
  loading?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    icon,
    loading = false,
    disabled,
    children,
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden'
    
    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 focus:ring-primary-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/25 active:scale-[0.98] transform hover:-translate-y-0.5',
      secondary: 'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 focus:ring-accent-300 shadow-lg hover:shadow-xl hover:shadow-accent-500/25 active:scale-[0.98] transform hover:-translate-y-0.5',
      outline: 'border-2 border-primary-500 text-primary-600 hover:text-white hover:bg-primary-500 active:bg-primary-600 focus:ring-primary-300 shadow-md hover:shadow-lg active:scale-[0.98] transform hover:-translate-y-0.5',
      ghost: 'text-primary-600 hover:text-primary-700 hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-200 hover:shadow-md active:scale-[0.98] transform'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg gap-2 min-h-[36px]',
      md: 'px-6 py-3 text-base rounded-xl gap-2 min-h-[44px]',
      lg: 'px-8 py-4 text-lg rounded-xl gap-3 min-h-[52px]',
      xl: 'px-10 py-5 text-xl rounded-2xl gap-3 min-h-[60px]'
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
        onMouseEnter={(e) => {
          if (!disabled && !loading) {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !loading) {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }
        }}
      >
        {/* Subtle shine effect on hover */}
        <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-200%] hover:translate-x-[200%] transition-transform duration-700"></div>
        {loading ? (
          <>
            <svg 
              className="animate-spin h-4 w-4" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
