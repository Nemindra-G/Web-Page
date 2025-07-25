import type { Metadata } from 'next'
import { ServicesGrid } from '@/components/sections/services-grid'
import { Section, Container } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Our Services - Palitha Aluminium',
  description: 'Professional aluminum fabrication services including windows, doors, facades, curtain walls, custom fabrication, and railings for residential and commercial projects.',
  keywords: [
    'aluminum services',
    'aluminum windows',
    'aluminum doors', 
    'curtain walls',
    'facades',
    'custom fabrication',
    'aluminum railings',
    'commercial aluminum',
    'residential aluminum'
  ],
  openGraph: {
    title: 'Our Services - Palitha Aluminium',
    description: 'Professional aluminum fabrication services for residential and commercial projects.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="lg" className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Professional aluminum fabrication services for residential and commercial projects. 
              From custom windows and doors to complex curtain wall systems, we deliver precision-crafted solutions built to last.
            </p>
          </div>
        </Container>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-1 bg-gradient-to-r from-primary to-accent"></div>
        </div>
      </Section>

      {/* Services Grid */}
      <ServicesGrid />
    </>
  )
}
