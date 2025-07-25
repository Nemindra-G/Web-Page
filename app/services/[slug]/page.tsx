import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetail } from '@/components/sections/service-detail'
import { SERVICES_DATA as sampleServices } from '@/data'

// 🎓 LEARNING: This generates static pages at build time for better performance
export async function generateStaticParams() {
  return sampleServices.map((service) => ({
    slug: service.slug,
  }))
}

// 🎓 LEARNING: Dynamic metadata generation based on the service
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const service = sampleServices.find(s => s.slug === slug)
  
  if (!service) {
    return {
      title: 'Service Not Found - Palitha Aluminium'
    }
  }

  return {
    title: `${service.seo.title} - Palitha Aluminium`,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: 'website',
    },
  }
}

// 🎓 LEARNING: The main page component that receives the slug parameter
export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  // Find the service based on the URL slug
  const service = sampleServices.find(s => s.slug === slug)
  
  // If service doesn't exist, show 404
  if (!service) {
    notFound()
  }

  return <ServiceDetail service={service} index={0} />
}
