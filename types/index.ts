// Global type definitions for Apex Aluminum Works

// Component Props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Button Component Types
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

// Card Component Types
export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'glass' | 'elevated' | 'bordered';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

// Project Data Types
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'residential' | 'commercial' | 'industrial';
  subcategory: string;
  description: string;
  longDescription: string;
  images: {
    hero: string;
    gallery: string[];
    beforeAfter?: {
      before: string;
      after: string;
    };
  };
  specifications: {
    materials: string[];
    dimensions?: string;
    timeline: string;
    budget?: string;
  };
  client: {
    name?: string;
    type: 'residential' | 'commercial';
    testimonial?: string;
  };
  completionDate: string;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Service Data Types
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  startingPrice: number;
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  // Optional fields that may be added in the future
  gallery?: string[];
  relatedProjects?: string[];
  pricing?: {
    startingPrice?: number;
    factors: string[];
  };
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  experience: string;
  specializations: string[];
  certifications: string[];
  contact?: {
    email: string;
    phone: string;
  };
}

// Form Data Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: 'residential' | 'commercial' | 'industrial';
  service: string;
  message: string;
  budget?: string;
  timeline?: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
}

export interface QuoteCalculatorData {
  projectType: 'windows' | 'doors' | 'facade' | 'railing' | 'custom';
  dimensions: {
    width: number;
    height: number;
    quantity: number;
  };
  material: 'standard' | 'premium' | 'custom';
  finish: 'anodized' | 'powder-coated' | 'mill-finish';
  installation: boolean;
  timeline: 'standard' | 'rush';
  location: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

// Animation Types
export interface ScrollAnimationProps {
  trigger?: 'viewport' | 'scroll' | 'hover';
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'scale' | 'parallax';
  duration?: number;
  delay?: number;
  easing?: string;
}

// SEO Types
export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    type: 'website' | 'article';
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    image: string;
  };
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

// Theme Types
export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Statistics Types
export interface StatisticItem {
  value: number;
  label: string;
  suffix?: string;
  animationDelay?: number;
}

// Hero Section Types
export interface HeroProps extends BaseComponentProps {
  backgroundMedia: {
    type: 'video' | 'image';
    src: string;
    alt?: string;
  };
  headline: string;
  subheadline: string;
  ctaButtons: Array<{
    text: string;
    href: string;
    variant: ButtonProps['variant'];
  }>;
}

// Lightbox Types
export interface LightboxProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  initialIndex: number;
  onClose: () => void;
}

// Error Boundary Types
export interface ErrorBoundaryProps extends BaseComponentProps {
  fallback: React.ComponentType<{error: Error}>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}
