'use client'

import React from 'react'
import { useTheme } from '@/lib/theme-context'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ThemeToggleProps {
  className?: string
  variant?: 'button' | 'switch'
  size?: 'sm' | 'md' | 'lg'
}

export function ThemeToggle({ className, variant = 'button', size = 'md' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  if (variant === 'switch') {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          "relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2",
          size === 'sm' && "h-6 w-11",
          size === 'md' && "h-7 w-12",
          size === 'lg' && "h-8 w-14",
          theme === 'dark' ? "bg-electric-blue" : "bg-slate-200",
          className
        )}
        aria-label="Toggle theme"
      >
        <motion.div
          className={cn(
            "inline-block rounded-full bg-white shadow-lg transform transition-transform",
            size === 'sm' && "h-4 w-4",
            size === 'md' && "h-5 w-5",
            size === 'lg' && "h-6 w-6"
          )}
          animate={{
            x: theme === 'dark' 
              ? size === 'sm' ? 20 : size === 'md' ? 24 : 28
              : 2
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <div className="flex items-center justify-center h-full w-full">
            {theme === 'dark' ? (
              <svg className="w-3 h-3 text-electric-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-3 h-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </div>
        </motion.div>
      </button>
    )
  }

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={toggleTheme}
      className={cn("relative", className)}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </motion.div>
    </Button>
  )
}