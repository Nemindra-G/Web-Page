import { Hero, Statistics, ServicesPreview, ProjectsGallery, Testimonials } from '@/components/sections'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        backgroundMedia={{
          type: 'video',
          src: '/Hero Section.mp4'
        }}
        headline="Precision Crafted. Built to Last."
        subheadline="Professional aluminum fabrication services for residential and commercial projects"
        ctaButtons={[
          {
            text: 'Get Free Quote',
            href: '/contact',
            variant: 'primary'
          }
        ]}
      />
      
      {/* Statistics Section */}
      <Statistics />
      
      {/* Services Preview Section */}
      <ServicesPreview />
      
      {/* Projects Gallery Section */}
      <ProjectsGallery />
      
      {/* Testimonials Section */}
      <Testimonials />
    </>
  )
}
