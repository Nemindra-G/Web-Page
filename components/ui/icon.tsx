'use client'

import React from 'react'
import { cn } from '@/lib/utils'

// Icon wrapper component for consistent sizing and styling
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export const Icon: React.FC<IconProps> = ({ 
  size = 'md', 
  className, 
  children,
  ...props 
}) => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }

  return (
    <svg
      className={cn(sizes[size], 'flex-shrink-0', className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      {children}
    </svg>
  )
}

// Common icons used throughout the application
export const Icons = {
  Menu: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </Icon>
  ),
  
  Close: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </Icon>
  ),
  
  ChevronRight: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </Icon>
  ),
  
  ChevronLeft: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </Icon>
  ),
  
  Phone: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </Icon>
  ),
  
  Email: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </Icon>
  ),
  
  Location: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </Icon>
  ),
  
  Arrow: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </Icon>
  ),
  
  Check: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </Icon>
  ),
  
  Star: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </Icon>
  ),
  
  Quote: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </Icon>
  ),
  
  Calendar: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </Icon>
  ),
  
  Clock: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </Icon>
  ),
  
  Window: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h8a2 2 0 012 2v2M4 6v10a2 2 0 002 2h8a2 2 0 002-2V6M4 6h12M4 10h12M10 4v16" />
    </Icon>
  ),
  
  Building: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </Icon>
  ),
  
  Custom: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </Icon>
  ),
  
  Railing: (props: Omit<IconProps, 'children'>) => (
    <Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </Icon>
  )
}