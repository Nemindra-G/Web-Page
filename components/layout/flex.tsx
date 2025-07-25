import React from 'react'
import { cn } from '@/lib/utils'

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: boolean
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = false,
  gap,
  className,
  children,
  ...props
}) => {
  const directions = {
    'row': 'flex-row',
    'col': 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse'
  }

  const justifyOptions = {
    'start': 'justify-start',
    'center': 'justify-center',
    'end': 'justify-end',
    'between': 'justify-between',
    'around': 'justify-around',
    'evenly': 'justify-evenly'
  }

  const alignOptions = {
    'start': 'items-start',
    'center': 'items-center',
    'end': 'items-end',
    'stretch': 'items-stretch',
    'baseline': 'items-baseline'
  }

  const gaps = {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10'
  }

  return (
    <div
      className={cn(
        'flex',
        directions[direction],
        justifyOptions[justify],
        alignOptions[align],
        wrap && 'flex-wrap',
        gap && gaps[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}