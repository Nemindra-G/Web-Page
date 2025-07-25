
import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/sections/hero'
import { ContactSection } from '@/components/sections/contact-section'

describe('Accessibility Tests', () => {
  describe('Button Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Button>Test Button</Button>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper ARIA attributes when loading', async () => {
      const { container } = render(<Button loading>Loading Button</Button>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper ARIA attributes when disabled', async () => {
      const { container } = render(<Button disabled>Disabled Button</Button>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Hero Component', () => {
    const mockHeroProps = {
      backgroundMedia: {
        type: 'image' as const,
        src: '/test-image.jpg',
        alt: 'Test background image'
      },
      headline: 'Test Headline',
      subheadline: 'Test Subheadline',
      ctaButtons: [
        {
          text: 'Primary Button',
          href: '/primary',
          variant: 'primary' as const
        }
      ]
    }

    it('should not have accessibility violations', async () => {
      const { container } = render(<Hero {...mockHeroProps} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper heading hierarchy', async () => {
      const { container } = render(<Hero {...mockHeroProps} />)
      const h1 = container.querySelector('h1')
      expect(h1).toBeInTheDocument()
      expect(h1).toHaveTextContent('Test Headline')
    })

    it('should have proper alt text for images', async () => {
      const { container } = render(<Hero {...mockHeroProps} />)
      const img = container.querySelector('img')
      expect(img).toHaveAttribute('alt', 'Test background image')
    })
  })

  describe('Contact Section', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<ContactSection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper form labels', async () => {
      const { container } = render(<ContactSection />)

      // Check that all form inputs have associated labels
      const inputs = container.querySelectorAll('input, select, textarea')
      inputs.forEach(input => {
        const id = input.getAttribute('id')
        const name = input.getAttribute('name')

        if (input.getAttribute('type') !== 'radio') {
          // For non-radio inputs, check for label association
          const label = container.querySelector(`label[for="${id}"]`) ||
            container.querySelector(`label[for="${name}"]`) ||
            input.closest('label')
          expect(label).toBeTruthy()
        }
      })
    })

    it('should have proper ARIA attributes for form validation', async () => {
      const { container } = render(<ContactSection />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper heading hierarchy', async () => {
      const { container } = render(<ContactSection />)

      const h1 = container.querySelector('h1')
      expect(h1).toBeInTheDocument()
      expect(h1).toHaveTextContent('Get In Touch')

      const h2Elements = container.querySelectorAll('h2')
      expect(h2Elements.length).toBeGreaterThan(0)
    })

    it('should have keyboard navigation support', async () => {
      const { container } = render(<ContactSection />)

      // Check that all interactive elements are focusable
      const interactiveElements = container.querySelectorAll(
        'button, input, select, textarea, a[href]'
      )

      interactiveElements.forEach(element => {
        const tabIndex = element.getAttribute('tabindex')
        // Elements should either not have tabindex or have tabindex >= 0
        if (tabIndex !== null) {
          expect(parseInt(tabIndex)).toBeGreaterThanOrEqual(0)
        }
      })
    })
  })

  describe('Color Contrast', () => {
    it('should have sufficient color contrast for text elements', async () => {
      const { container } = render(
        <div>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      )

      const results = await axe(container, {
        rules: {
          'color-contrast': { enabled: true }
        }
      })
      expect(results).toHaveNoViolations()
    })
  })

  describe('Focus Management', () => {
    it('should have visible focus indicators', async () => {
      const { container } = render(
        <div>
          <Button>Focusable Button</Button>
          <input type="text" placeholder="Focusable Input" />
          <a href="#test">Focusable Link</a>
        </div>
      )

      const results = await axe(container, {
        rules: {
          'focus-order-semantics': { enabled: true }
        }
      })
      expect(results).toHaveNoViolations()
    })
  })

  describe('Screen Reader Support', () => {
    it('should have proper ARIA landmarks', async () => {
      const { container } = render(<ContactSection />)

      // Check for main landmark
      const section = container.querySelector('section')
      expect(section).toBeInTheDocument()

      const results = await axe(container, {
        rules: {
          'landmark-one-main': { enabled: true },
          'region': { enabled: true }
        }
      })
      expect(results).toHaveNoViolations()
    })

    it('should have proper semantic HTML structure', async () => {
      const mockHeroProps = {
        backgroundMedia: {
          type: 'image' as const,
          src: '/test-image.jpg',
          alt: 'Test background'
        },
        headline: 'Test Headline',
        subheadline: 'Test Subheadline',
        ctaButtons: []
      }

      const { container } = render(<Hero {...mockHeroProps} />)

      // Check for proper semantic elements
      expect(container.querySelector('section')).toBeInTheDocument()
      expect(container.querySelector('h1')).toBeInTheDocument()

      const results = await axe(container, {
        rules: {
          'heading-order': { enabled: true }
        }
      })
      expect(results).toHaveNoViolations()
    })
  })
})