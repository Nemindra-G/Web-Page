import type { Metadata } from 'next'
import { ProjectsGallery } from '@/components/sections/projects-gallery'
import { Section, Container } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Portfolio - Apex Aluminum Works',
  description: 'Explore our portfolio of completed aluminum fabrication projects including residential, commercial, and industrial installations.',
  keywords: [
    'aluminum projects',
    'portfolio',
    'residential aluminum',
    'commercial aluminum',
    'industrial aluminum',
    'curtain walls',
    'aluminum windows',
    'aluminum doors',
    'custom fabrication'
  ],
  openGraph: {
    title: 'Portfolio - Apex Aluminum Works',
    description: 'Explore our portfolio of completed aluminum fabrication projects.',
    type: 'website',
  },
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="lg" className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Discover our expertise through a showcase of completed aluminum fabrication projects. 
              From residential windows to commercial curtain walls, see the quality and craftsmanship that defines our work.
            </p>
          </div>
        </Container>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-1 bg-gradient-to-r from-primary to-accent"></div>
        </div>
      </Section>

      {/* Projects Gallery */}
      <ProjectsGallery showAll />
    </>
  )
}
