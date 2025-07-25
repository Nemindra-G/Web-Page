// Application constants for Palitha Aluminium

export const COMPANY_INFO = {
  name: 'Palitha Aluminium',
  tagline: 'Precision Crafted. Built to Last.',
  description: 'Professional aluminum fabrication services for residential and commercial projects',
  phone: '+1 (555) 123-4567',
  email: 'info@apexaluminum.com',
  address: {
    street: '123 Industrial Drive',
    city: 'Manufacturing City',
    state: 'State',
    zip: '12345',
    country: 'USA',
  },
  social: {
    facebook: 'https://facebook.com/apexaluminum',
    instagram: 'https://instagram.com/apexaluminum',
    linkedin: 'https://linkedin.com/company/apexaluminum',
    youtube: 'https://youtube.com/@apexaluminum',
  },
  businessHours: {
    monday: '8:00 AM - 6:00 PM',
    tuesday: '8:00 AM - 6:00 PM',
    wednesday: '8:00 AM - 6:00 PM',
    thursday: '8:00 AM - 6:00 PM',
    friday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
} as const;

export const NAVIGATION = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Windows & Doors', href: '/services/windows-doors' },
    { label: 'Facades & Curtain Walls', href: '/services/facades' },
    { label: 'Custom Fabrication', href: '/services/custom' },
    { label: 'Railings & Balustrades', href: '/services/railings' },
  ],
} as const;

export const SERVICE_CATEGORIES = [
  'windows',
  'doors',
  'facades',
  'curtain-walls',
  'custom-fabrication',
  'railings',
  'balustrades',
] as const;

export const PROJECT_CATEGORIES = [
  'residential',
  'commercial',
  'industrial',
] as const;

export const MATERIAL_TYPES = [
  'standard',
  'premium',
  'custom',
] as const;

export const FINISH_TYPES = [
  'anodized',
  'powder-coated',
  'mill-finish',
] as const;

export const CONTACT_METHODS = [
  'email',
  'phone',
  'whatsapp',
] as const;

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const IMAGE_SIZES = {
  hero: { width: 1920, height: 1080 },
  gallery: { width: 800, height: 600 },
  thumbnail: { width: 400, height: 300 },
  avatar: { width: 200, height: 200 },
} as const;

export const SEO_DEFAULTS = {
  title: 'Palitha Aluminium - Precision Crafted. Built to Last.',
  description: 'Professional aluminum fabrication services for residential and commercial projects. Windows, doors, facades, and custom aluminum work.',
  keywords: [
    'aluminum fabrication',
    'aluminum windows',
    'aluminum doors',
    'curtain walls',
    'commercial aluminum',
    'residential aluminum',
    'custom fabrication',
    'aluminum railings',
  ],
  openGraph: {
    type: 'website' as const,
    siteName: 'Palitha Aluminium',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image' as const,
    site: '@apexaluminum',
  },
} as const;

export const FORM_VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 50,
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
} as const;

export const STATISTICS = [
  {
    value: 15,
    label: 'Years in Business',
    suffix: '+',
  },
  {
    value: 500,
    label: 'Projects Completed',
    suffix: '+',
  },
  {
    value: 98,
    label: 'Client Satisfaction',
    suffix: '%',
  },
  {
    value: 50,
    label: 'Team Members',
    suffix: '+',
  },
] as const;
