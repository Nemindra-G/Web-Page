'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { isValidEmail } from '@/lib/utils'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function NewsletterModal({ isOpen, onClose, className }: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState
  (false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const interestOptions = [
    { id: 'windows', label: 'Windows & Doors' },
    { id: 'facades', label: 'Facades & Curtain Walls' },
    { id: 'custom', label: 'Custom Fabrication' },
    { id: 'railings', label: 'Railings & Balustrades' },
    { id: 'tips', label: 'Maintenance Tips' },
    { id: 'projects', label: 'Project Showcases' }
  ]

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  const handleInterestToggle = (interestId: string) => {
    setInterests(prev => 
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setError('')
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Send newsletter signup data to API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: name.trim() || undefined,
          interests
        })
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to subscribe')
      }
      
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setEmail('')
        setName('')
        setInterests([])
        setSubmitStatus('idle')
        onClose()
      }, 2000)
      
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setSubmitStatus('error')
      setError(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
          className
        )}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Stay Updated
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  Get the latest news and project updates
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Welcome to our newsletter!
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Thank you for subscribing. You'll receive our latest updates and project showcases.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className={cn(
                      "w-full rounded-lg border px-3 py-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue dark:bg-slate-700 dark:border-slate-600 dark:text-white",
                      error && !isValidEmail(email) && email.trim()
                        ? "border-red-300 bg-red-50 dark:border-red-500 dark:bg-red-900/20"
                        : "border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500"
                    )}
                    required
                  />
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 px-3 py-2.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue dark:bg-slate-700 dark:text-white hover:border-slate-400 dark:hover:border-slate-500"
                  />
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    What interests you? (Optional)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleInterestToggle(option.id)}
                        className={cn(
                          "text-left p-2 rounded-lg border text-sm transition-all",
                          interests.includes(option.id)
                            ? "border-electric-blue bg-electric-blue/10 text-electric-blue dark:bg-electric-blue/20"
                            : "border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-500"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    'Subscribe to Newsletter'
                  )}
                </Button>

                {/* Privacy Note */}
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Hook to manage newsletter modal state
export function useNewsletterModal() {
  const [isOpen, setIsOpen] = useState(false)
  
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  
  return {
    isOpen,
    openModal,
    closeModal,
    NewsletterModal: (props: Omit<NewsletterModalProps, 'isOpen' | 'onClose'>) => (
      <NewsletterModal {...props} isOpen={isOpen} onClose={closeModal} />
    )
  }
}