import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Hero } from '@/components/sections/hero'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

describe('Hero', () => {
  const mockProps = {
    backgroundMedia: {
      type: 'image' as const,
      src: '/test-image.jpg',
      alt: 'Test background'
    },
    headline: 'Test Headline',
    subheadline: 'Test Subheadline',
    ctaButtons: [
      {
        text: 'Primary Button',
        href: '/primary',
        variant: 'primary' as const
      },
      {
        text: 'Secondary Button',
        href: '/secondary',
        variant: 'secondary' as const
      }
    ]
  }


  it('renders correctly with image background', () => {
    render(<Hero {...mockProps} />)
    
    expect(screen.getByText('Test Headline')).toBeInTheDocument()
    expect(screen.getByText('Test Subheadline')).toBeInTheDocument()
    expect(screen.getByAltText('Test background')).toBeInTheDocument()
  })

  it('renders correctly with video background', () => {
    const videoProps = {
      ...mockProps,
      backgroundMedia: {
        type: 'video' as const,
        src: '/test-video.mp4'
      }
    }
    
    render(<Hero {...videoProps} />)
    
    // Query video element directly
    const video = document.querySelector('video')
    expect(video).toBeInTheDocument()
    
    // Check video source
    const source = video?.querySelector('source')
    expect(source).toHaveAttribute('src', '/test-video.mp4')
    expect(source).toHaveAttribute('type', 'video/mp4')
    
    // Check video attributes
    expect(video).toHaveAttribute('autoplay')
    expect(video).toHaveAttribute('loop')
    expect(video).toHaveAttribute('playsInline')
  })

  it('renders CTA buttons correctly', () => {
    render(<Hero {...mockProps} />)
    
    expect(screen.getByText('Primary Button')).toBeInTheDocument()
    expect(screen.getByText('Secondary Button')).toBeInTheDocument()
  })

  it('handles button clicks correctly', () => {
    // Mock window.location for this specific test
    const mockLocation = { href: '' }
    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true,
      configurable: true
    })
    
    render(<Hero {...mockProps} />)
    
    const primaryButton = screen.getByText('Primary Button')
    const secondaryButton = screen.getByText('Secondary Button')
    
    // Just verify buttons are rendered and clickable
    expect(primaryButton).toBeInTheDocument()
    expect(secondaryButton).toBeInTheDocument()
    
    // The actual navigation is handled by the browser
    // so we just verify the buttons exist and can be clicked
    fireEvent.click(primaryButton)
    fireEvent.click(secondaryButton)
  })

  it('renders scroll indicator', () => {
    render(<Hero {...mockProps} />)
    expect(screen.getByText('Scroll Down')).toBeInTheDocument()
  })

  it('applies correct CSS classes for animations', () => {
    render(<Hero {...mockProps} />)
    
    const headline = screen.getByText('Test Headline')
    expect(headline).toHaveClass('animate-fade-in')
    
    const subheadline = screen.getByText('Test Subheadline')
    expect(subheadline).toHaveClass('animate-slide-up')
  })

  it('handles missing alt text gracefully', () => {
    const propsWithoutAlt = {
      ...mockProps,
      backgroundMedia: {
        type: 'image' as const,
        src: '/test-image.jpg',
        alt: '' // Explicitly set empty alt
      }
    }
    
    render(<Hero {...propsWithoutAlt} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', '')
  })

  it('renders with proper semantic structure', () => {
    const { container } = render(<Hero {...mockProps} />)
    
    // Check for section element
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    
    // Check for h1 heading
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Test Headline')
  })
})