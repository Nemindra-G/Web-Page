import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'muted' | 'dark' | 'gradient' | 'transparent'
  children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({
  size = 'md',
  background = 'default',
  className,
  children,
  ...props
}) => {
  const sizes = {
    xs: 'py-8 md:py-12',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
    xl: 'py-32 md:py-40'
  }

  const backgrounds = {
    default: 'bg-white dark:bg-slate-900',
    muted: 'bg-slate-50 dark:bg-slate-800',
    dark: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700',
    transparent: 'bg-transparent'
  }

  return (
    <section
      className={cn(
        sizes[size],
        backgrounds[background],
        'relative overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}