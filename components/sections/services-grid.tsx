'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import { Card } from '@/components/ui'
import { Icons } from '@/components/ui/icon'
import { SERVICES_DATA as services } from '@/data'


// Service icon mapping
const ServiceIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className }) => {
  const iconMap = {
    window: Icons.Window,
    building: Icons.Building,
    custom: Icons.Custom,
    railing: Icons.Railing,
  }
  
  // Default to a generic icon if not found
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Icons.Window
  
  return <IconComponent className={className} />
}

interface ServiceCardProps {
  service: typeof services[0]
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Enhanced service theming with unique colors for each service
  const serviceThemes = [
    {
      cardVariant: 'dark-glass',
      iconColor: '#32a8ff', // Electric blue
      accentColor: '#32a8ff', // Electric blue accent
      icon: '🪟'
    },
    {
      cardVariant: 'dark-gradient', 
      iconColor: '#32a8ff', // Electric blue
      accentColor: '#32a8ff', // Electric blue accent
      icon: '🏢'
    },
    {
      cardVariant: 'dark-glass',
      iconColor: '#2A75BB', // Primary blue
      accentColor: '#32a8ff', // Electric blue accent  
      icon: '⚙️'
    },
    {
      cardVariant: 'dark-gradient',
      iconColor: '#32a8ff', // Electric blue
      accentColor: '#2A75BB', // Primary blue accent
      icon: '🛡️'
    },
    {
      cardVariant: 'dark-glass',
      iconColor: '#32a8ff', // Electric blue
      accentColor: '#2A75BB', // Primary blue accent
      icon: '🔗'
    },
    {
      cardVariant: 'dark-gradient',
      iconColor: '#2A75BB', // Primary blue
      accentColor: '#32a8ff', // Electric blue accent
      icon: '🏠'
    },
    {
      cardVariant: 'dark-glass',
      iconColor: '#32a8ff', // Electric blue
      accentColor: '#32a8ff', // Electric blue accent
      icon: '☀️'
    },
    {
      cardVariant: 'dark-gradient',
      iconColor: '#2A75BB', // Primary blue
      accentColor: '#32a8ff', // Electric blue accent
      icon: '🌬️'
    },
    {
      cardVariant: 'dark-glass',
      iconColor: '#32a8ff', // Electric blue
      accentColor: '#32a8ff', // Electric blue accent
      icon: '🏗️'
    },
    {
      cardVariant: 'dark-gradient',
      iconColor: '#2A75BB', // Primary blue
      accentColor: '#32a8ff', // Electric blue accent
      icon: '🏪'
    },
    {
      cardVariant: 'dark-glass',
      iconColor: '#32a8ff', // Electric blue
      accentColor: '#2A75BB', // Primary blue accent
      icon: '🏛️'
    },
    {
      cardVariant: 'dark-gradient',
      iconColor: '#32a8ff', // Electric blue
      accentColor: '#32a8ff', // Electric blue accent
      icon: '🛡️'
    }
  ]

  const themeIndex = index % serviceThemes.length
  const theme = serviceThemes[themeIndex]
  
  if (!theme) return null
  
  const { cardVariant, iconColor, accentColor, icon } = theme

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
    >
      <Card 
        variant={cardVariant as any}
        hover 
        className="h-full flex flex-col justify-between group relative overflow-hidden transform hover:scale-105 transition-all duration-300"
      >
        {/* Ambient glow effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${accentColor}15 0%, transparent 70%)`
          }}
        ></div>
        
        {/* Main Content Section - Grows to fill space */}
        <div className="relative z-10 p-8 flex-1 flex flex-col">
          {/* Icon container with gradient and glow */}
          <div 
            className="flex items-center justify-center w-20 h-20 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 relative"
            style={{
              background: `linear-gradient(135deg, ${iconColor}20, ${accentColor}15)`,
              boxShadow: `0 8px 32px ${iconColor}20, inset 0 1px 0 rgba(255,255,255,0.1)`
            }}
          >
            <div 
              className="text-3xl relative"
              style={{ 
                filter: `drop-shadow(0 0 10px ${iconColor}40)`,
                color: iconColor
              }}
            >
              {icon}
            </div>
            {/* Pulse effect */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"
              style={{ background: `${iconColor}10` }}
            ></div>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-white">
            {service.title}
          </h3>
          
          <p className="text-slate-300 mb-6 leading-relaxed">
            {service.shortDescription}
          </p>
          
          <ul className="space-y-3 flex-1">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-400">
                <span 
                  className="mr-3 mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ 
                    backgroundColor: `${iconColor}20`,
                    color: iconColor,
                    boxShadow: `0 0 10px ${iconColor}30`
                  }}
                >
                  ✓
                </span>
                <span className="group-hover:text-slate-200 transition-colors">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Section - Fixed height to maintain alignment */}
        <div className="relative z-10 px-8 h-20 flex items-center">
          {service.startingPrice ? (
            <div className="w-full">
              <div 
                className="rounded-lg p-3"
                style={{
                  background: `linear-gradient(135deg, ${iconColor}15, ${accentColor}10)`,
                  border: `1px solid ${iconColor}20`
                }}
              >
                <p className="text-xs text-slate-400 mb-1">Starting from</p>
                <p 
                  className="text-xl font-bold"
                  style={{ color: accentColor }}
                >
                  ${service.startingPrice}
                  <span className="text-xs font-normal text-slate-400">/unit</span>
                </p>
              </div>
            </div>
          ) : (
            // Empty space to maintain consistent height
            <div className="w-full h-full"></div>
          )}
        </div>
        
        {/* Button Section - Always at bottom */}
        <div className="relative z-10 p-8 pt-4">
          <Link
            href={`/services/${service.slug}`}
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-electric-blue to-primary-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-electric-blue/25 transform hover:scale-105 transition-all duration-300 relative"
          >
            <span>Learn More</span>
            <span 
              className="ml-2 transform group-hover:translate-x-1 transition-transform text-lg"
              style={{ filter: `drop-shadow(0 0 5px ${accentColor}60)` }}
            >
              →
            </span>
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}

export const ServicesGrid: React.FC = () => {
  return (
    <Section size="xl" background="default">
      <Container>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Professional Aluminum Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From precision-engineered windows and doors to complex curtain wall systems, 
            we provide comprehensive aluminum fabrication solutions for every project need.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Our team specializes in custom aluminum fabrication for unique projects. 
              Let&apos;s discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-glow"
              >
                <span>Get Free Quote</span>
                <Icons.Arrow size="sm" className="ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
