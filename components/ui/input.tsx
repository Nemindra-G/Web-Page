'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, icon, id, ...props }, ref) => {
    // Generate a unique ID if not provided
    const inputId = id || `input-${React.useId()}`
    const errorId = error ? `${inputId}-error` : undefined
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              {icon}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={errorId}
            className={cn(
              'w-full rounded-lg border bg-white px-4 py-2.5 text-slate-900 transition-all duration-200',
              'placeholder:text-slate-400',
              'focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent',
              'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50',
              icon && 'pl-10',
              error
                ? 'border-red-500 focus:ring-red-500'
                : 'border-slate-300 hover:border-slate-400',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'