// Structured data utilities for SEO
import { Metadata } from 'next'

// Company information for structured data
export const COMPANY_INFO = {
  name: 'Palitha Aluminium',
  legalName: 'Palitha Aluminium LLC',
  description: 'Professional aluminum fabrication services for residential and commercial projects. Windows, doors, facades, and custom aluminum work.',
  url: 'https://palithaaluminium.com',
  logo: 'https://palithaaluminium.com/logo.png',
  image: 'https://palithaaluminium.com/og-image.jpg',
  telephone: '+1-555-123-4567',
  email: 'info@palithaaluminium.com',
  address: {
    streetAddress: '1234 Industrial Blvd',
    addressLocality: 'Manufacturing District',
    addressRegion: 'CA',
    postalCode: '12345',
    addressCountry: 'US'
  },
  geo: {
    latitude: '34.0522',
    longitude: '-118.2437'
  },
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 09:00-16:00'
  ],
  services: [
    'Aluminum Windows',
    'Aluminum Doors',
    'Curtain Walls',
    'Facades',
    'Custom Fabrication',
    'Railings',
    'Balustrades'
  ],
  foundingDate: '2000',
  employees: '25-50'
}

// Generate Organization structured data
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.url,
    logo: COMPANY_INFO.logo,
    image: COMPANY_INFO.image,
    telephone: COMPANY_INFO.telephone,
    email: COMPANY_INFO.email,
    foundingDate: COMPANY_INFO.foundingDate,
    numberOfEmployees: COMPANY_INFO.employees,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.streetAddress,
      addressLocality: COMPANY_INFO.address.addressLocality,
      addressRegion: COMPANY_INFO.address.addressRegion,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.geo.latitude,
      longitude: COMPANY_INFO.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/apexaluminum',
      'https://www.linkedin.com/company/apex-aluminum-works',
      'https://www.instagram.com/apexaluminum'
    ]
  }
}

// Generate LocalBusiness structured data
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': COMPANY_INFO.url,
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.url,
    telephone: COMPANY_INFO.telephone,
    email: COMPANY_INFO.email,
    image: COMPANY_INFO.image,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.streetAddress,
      addressLocality: COMPANY_INFO.address.addressLocality,
      addressRegion: COMPANY_INFO.address.addressRegion,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.geo.latitude,
      longitude: COMPANY_INFO.geo.longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aluminum Fabrication Services',
      itemListElement: COMPANY_INFO.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service
        }
      }))
    }
  }
}

// Generate Service structured data
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  image?: string
  priceRange?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image,
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url
    },
    areaServed: {
      '@type': 'State',
      name: 'California'
    },
    ...(service.priceRange && { priceRange: service.priceRange })
  }
}

// Generate Project/Work structured data
export function generateCreativeWorkSchema(project: {
  name: string
  description: string
  url: string
  image: string
  dateCreated: string
  client?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image,
    dateCreated: project.dateCreated,
    creator: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.url
    },
    ...(project.client && {
      client: {
        '@type': 'Organization',
        name: project.client
      }
    })
  }
}

// Generate FAQ structured data
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Generate BreadcrumbList structured data
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}

// Generate WebSite structured data with search action
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.url,
    description: COMPANY_INFO.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${COMPANY_INFO.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
}

// Utility to generate page metadata
export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  keywords = []
}: {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  keywords?: string[]
}): Metadata {
  const url = `${COMPANY_INFO.url}${path}`
  const ogImage = image || COMPANY_INFO.image

  return {
    title,
    description,
    keywords: [...keywords, 'aluminum fabrication', 'aluminum windows', 'aluminum doors', 'curtain walls', 'custom fabrication'].join(', '),
    authors: [{ name: COMPANY_INFO.name }],
    creator: COMPANY_INFO.name,
    publisher: COMPANY_INFO.name,
    metadataBase: new URL(COMPANY_INFO.url),
    alternates: {
      canonical: url
    },
    openGraph: {
      type,
      locale: 'en_US',
      url,
      siteName: COMPANY_INFO.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime })
    },
    twitter: {
      card: 'summary_large_image',
      site: '@apexaluminum',
      creator: '@apexaluminum',
      title,
      description,
      images: [ogImage]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  }
}
