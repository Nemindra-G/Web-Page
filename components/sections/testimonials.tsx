'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import { Icons } from '@/components/ui/icon'
import { TESTIMONIALS_DATA as testimonials } from '@/data'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: typeof testimonials[0]
  isActive: boolean
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-elevated p-8 md:p-12 relative border border-slate-200/50 dark:border-slate-700/50">
            {/* Quote Icon */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3, type: "spring" }}
              className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow"
            >
              <Icons.Quote className="text-white" size="md" />
            </motion.div>
            
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mb-8 pt-2"
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 italic leading-relaxed font-medium">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </motion.div>
            
            {/* Author */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex items-center"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {testimonial.role} at {testimonial.company}
                </p>
                {testimonial.project && (
                  <p className="text-sm text-primary mt-1 font-medium">
                    {testimonial.project}
                  </p>
                )}
              </div>
            </motion.div>
            
            {/* Rating */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="flex gap-1 mt-6"
            >
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.2 }}
                >
                  <Icons.Star
                    size="sm"
                    className="text-yellow-400 fill-current"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (!isPaused && testimonials.length > 1) {
      const interval = setInterval(nextTestimonial, 6000) // Change every 6 seconds
      return () => clearInterval(interval)
    }
    return undefined
  }, [currentIndex, isPaused])

  return (
    <Section size="lg" className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Don&apos;t just take our word for it. Hear from satisfied clients who have experienced our commitment to quality and precision in aluminum fabrication.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Cards */}
          <div className="relative min-h-[420px] md:min-h-[360px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute inset-0"
              >
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={index === currentIndex}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 lg:-translate-x-16 bg-white dark:bg-slate-800 rounded-full p-4 shadow-elevated hover:shadow-glow transition-all border border-slate-200/50 dark:border-slate-700/50 group"
                aria-label="Previous testimonial"
              >
                <Icons.ChevronLeft size="md" className="text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 lg:translate-x-16 bg-white dark:bg-slate-800 rounded-full p-4 shadow-elevated hover:shadow-glow transition-all border border-slate-200/50 dark:border-slate-700/50 group"
                aria-label="Next testimonial"
              >
                <Icons.ChevronRight size="md" className="text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors" />
              </motion.button>
            </>
          )}

          {/* Dots Indicator */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToTestimonial(index)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    index === currentIndex
                      ? 'w-8 bg-primary shadow-glow'
                      : 'w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Progress Bar */}
          {!isPaused && testimonials.length > 1 && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                key={currentIndex}
              />
            </div>
          )}
        </motion.div>
      </Container>
    </Section>
  )
}