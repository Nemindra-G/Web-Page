'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    // Generate a unique ID if not provided
    const textareaId = id || `textarea-${React.useId()}`
    const errorId = error ? `${textareaId}-error` : undefined
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={textareaId}
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={errorId}
          className={cn(
            'w-full rounded-lg border bg-white px-4 py-2.5 text-slate-900 transition-all duration-200',
            'placeholder:text-slate-400 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-slate-300 hover:border-slate-400',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'