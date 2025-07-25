import React from 'react'
import Link from 'next/link'
import { Section, Container, Grid } from '@/components/layout'
import { Card } from '@/components/ui'
import { SERVICES_DATA as services } from '@/data'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  href: string
}

const ServiceCard: React.FC<ServiceCardProps & { cardVariant: string; iconColor: string; accentColor: string }> = ({
  icon,
  title,
  description,
  features,
  href,
  cardVariant,
  iconColor,
  accentColor
}) => {
  return (
    <Link href={href} className="block h-full">
      <Card 
        variant={cardVariant as any}
        hover 
        className="h-full flex flex-col group relative overflow-hidden transform hover:scale-105 transition-all duration-300"
      >
        {/* Ambient glow effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${accentColor}15 0%, transparent 70%)`
          }}
        ></div>
        
        <div className="relative z-10">
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
            {title}
          </h3>
          
          <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
            {description}
          </p>
          
          <ul className="space-y-3 mb-6">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-slate-400">
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
          
          <div 
            className="flex items-center font-semibold group-hover:gap-3 transition-all relative"
            style={{ color: accentColor }}
          >
            <span className="relative">
              Learn More
              <div 
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: accentColor }}
              ></div>
            </span>
            <span 
              className="ml-2 transform group-hover:translate-x-1 transition-transform text-lg"
              style={{ filter: `drop-shadow(0 0 5px ${accentColor}60)` }}
            >
              →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export const ServicesPreview: React.FC = () => {
  // Get first 4 services for preview
  const previewServices = services.slice(0, 4)
  
  return (
    <Section size="lg" background="default">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering cutting-edge aluminum solutions with precision engineering and unmatched craftsmanship for your most ambitious projects.
          </p>
        </div>
        
        <Grid cols={{ default: 1, sm: 2, lg: 4 }} gap="xl">
          {previewServices.map((service, index) => {
            // Enhanced service theming with unique colors for each service - matching service page icons
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
                icon: '�'
              },
              {
                cardVariant: 'dark-gradient',
                iconColor: '#2A75BB', // Primary blue
                accentColor: '#32a8ff', // Electric blue accent
                icon: '�'
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
              }
            ]
            
            const themeIndex = index % serviceThemes.length
            const theme = serviceThemes[themeIndex]
            
            if (!theme) return null
            
            return (
              <div
                key={service.id}
                className="animate-slide-up"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <ServiceCard
                  icon={<span className="text-3xl">{theme.icon}</span>}
                  title={service.title}
                  description={service.shortDescription}
                  features={service.features}
                  href={`/services/${service.slug}`}
                  cardVariant={theme.cardVariant}
                  iconColor={theme.iconColor}
                  accentColor={theme.accentColor}
                />
              </div>
            )
          })}
        </Grid>
        
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-blue to-primary-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-electric-blue/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Explore All Services</span>
            <span className="ml-3 transform group-hover:translate-x-1 transition-transform text-xl">→</span>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
