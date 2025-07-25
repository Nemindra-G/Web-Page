'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { ProjectCalculator } from './project-calculator'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface FloatingQuoteButtonProps {
  className?: string
}

export function FloatingQuoteButton({ className }: FloatingQuoteButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  
  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
    setShowCalculator(false)
    document.body.style.overflow = 'auto' // Restore scrolling
  }
  
  const handleCalculatorComplete = (data: any) => {
    // Handle calculator completion - could redirect to contact form with pre-filled data
    console.log('Calculator completed with data:', data)
    closeModal()
    // You could redirect to contact page or show a success message
  }
  
  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0, 
              rotate: 0,
              boxShadow: [
                "0 20px 40px -8px rgba(50, 168, 255, 0.4)",
                "0 25px 50px -10px rgba(168, 85, 247, 0.5)",
                "0 20px 40px -8px rgba(50, 168, 255, 0.4)"
              ]
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20, rotate: 5 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeOut",
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            whileHover={{ 
              y: -4,
              rotate: [0, -1, 1, 0],
              transition: { 
                y: { duration: 0.2 },
                rotate: { duration: 0.3, repeat: 1 }
              }
            }}
            className={cn(
              "fixed bottom-6 right-6 z-40",
              className
            )}
          >
            <Button
              onClick={openModal}
              size="lg"
              className="rounded-full text-white px-6 py-3 flex items-center gap-2 transform hover:scale-105 transition-all duration-300 relative overflow-hidden border border-white/20"
              style={{
                background: 'linear-gradient(135deg, rgba(50, 168, 255, 0.9) 0%, rgba(168, 85, 247, 0.9) 50%, rgba(42, 117, 187, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: `
                  0 20px 40px -8px rgba(50, 168, 255, 0.4),
                  0 8px 32px rgba(168, 85, 247, 0.3),
                  0 0 0 1px rgba(255, 255, 255, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(50, 168, 255, 1) 0%, rgba(168, 85, 247, 1) 50%, rgba(42, 117, 187, 1) 100%)';
                e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
                e.currentTarget.style.boxShadow = `
                  0 32px 64px -12px rgba(50, 168, 255, 0.6),
                  0 16px 48px rgba(168, 85, 247, 0.4),
                  0 0 0 1px rgba(255, 255, 255, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  0 0 20px rgba(50, 168, 255, 0.8)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(50, 168, 255, 0.9) 0%, rgba(168, 85, 247, 0.9) 50%, rgba(42, 117, 187, 0.9) 100%)';
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.boxShadow = `
                  0 20px 40px -8px rgba(50, 168, 255, 0.4),
                  0 8px 32px rgba(168, 85, 247, 0.3),
                  0 0 0 1px rgba(255, 255, 255, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `;
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="relative z-10 font-medium">Get Free Quote</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Quote Request Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">Request a Free Quote</h2>
                  <button
                    onClick={closeModal}
                    className="text-slate-500 hover:text-slate-700 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="mt-2 text-slate-600">
                  Fill out this quick form to get a free, no-obligation quote for your aluminum fabrication project.
                </p>
              </div>
              
              {/* Modal Body */}
              <div className="p-6">
                {!showCalculator ? (
                  // Quote Options
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <p className="text-slate-600">Choose how you'd like to get your quote:</p>
                    </div>
                    
                    <div className="space-y-3">
                      <button
                        onClick={() => setShowCalculator(true)}
                        className="w-full p-4 border-2 rounded-lg text-left transition-colors"
                        style={{
                          borderColor: '#2A75BB',
                          backgroundColor: 'rgba(42, 117, 187, 0.05)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(42, 117, 187, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(42, 117, 187, 0.05)';
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: '#2A75BB' }}
                          >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">Project Cost Calculator</div>
                            <div className="text-sm text-slate-600">Get an instant estimate with our interactive calculator</div>
                          </div>
                        </div>
                      </button>
                      
                      <button
                        onClick={() => window.location.href = '/contact'}
                        className="w-full p-4 border-2 border-slate-200 rounded-lg text-left hover:border-slate-300 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">Contact Our Team</div>
                            <div className="text-sm text-slate-600">Speak directly with our experts for a custom quote</div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  // Project Calculator
                  <div className="max-h-[70vh] overflow-y-auto">
                    <ProjectCalculator onComplete={handleCalculatorComplete} />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
