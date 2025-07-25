import { Metadata } from 'next'
import { ContactSection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Contact Us - Apex Aluminum Works',
  description: 'Get in touch with Apex Aluminum Works for your aluminum fabrication needs. Request a free quote or schedule a consultation.',
  keywords: ['contact', 'aluminum fabrication', 'free quote', 'consultation', 'apex aluminum'],
  openGraph: {
    title: 'Contact Us - Apex Aluminum Works',
    description: 'Get in touch with Apex Aluminum Works for your aluminum fabrication needs. Request a free quote or schedule a consultation.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactSection />
    </div>
  )
}