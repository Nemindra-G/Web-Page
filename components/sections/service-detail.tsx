'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import { Card } from '@/components/ui'
import { Icons } from '@/components/ui/icon'
import type { Service } from '@/types'

interface ServiceDetailProps {
  service: Service
  index: number
}

const ProcessStep: React.FC<{ step: Service['process'][0]; index: number }> = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
          {step.step}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
          {step.title}
        </h4>
        <p className="text-slate-600 dark:text-slate-400">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

const ServiceIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className }) => {
  const iconMap = {
    window: Icons.Window,
    building: Icons.Building,
    custom: Icons.Custom,
    railing: Icons.Railing,
  }
  
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Icons.Window
  return <IconComponent className={className} />
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, index }) => {
  const isEven = index % 2 === 0

  return (
    <Section id={`service-${service.slug}`} size="xl" background={isEven ? "default" : "muted"}>
      <Container>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${!isEven ? 'lg:order-2' : ''}`}
          >
            {/* Service Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <ServiceIcon icon={service.icon} className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
                    {service.title}
                  </h2>
                  {service.startingPrice && (
                    <p className="text-lg text-primary font-semibold mt-1">
                      Starting from ${service.startingPrice}/unit
                    </p>
                  )}
                </div>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Features & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <Icons.Check size="sm" className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                  Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <Icons.Star size="sm" className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${!isEven ? 'lg:order-1' : ''}`}
          >
            {/* Service Gallery */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={service.image || '/images/hero-bg.jpg'}
                  alt={`${service.title} showcase`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Our Process
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We follow a systematic approach to ensure quality results and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, idx) => (
              <ProcessStep key={step.step} step={step} index={idx} />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
