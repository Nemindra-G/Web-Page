import { MetadataRoute } from 'next'
import { COMPANY_INFO } from '@/lib/structured-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.url
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Service pages
  const servicePages = [
    'windows-doors',
    'facades-curtain-walls',
    'custom-fabrication',
    'railings-balustrades'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Project pages (example - in real app, you'd fetch from database)
  const projectPages = [
    'luxury-residential-windows',
    'commercial-office-facade',
    'industrial-warehouse-doors',
    'custom-architectural-railings'
  ].map(project => ({
    url: `${baseUrl}/portfolio/${project}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...projectPages
  ]
}