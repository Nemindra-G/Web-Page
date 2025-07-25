import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactSection } from '@/components/sections/contact-section'

// Mock fetch
global.fetch = jest.fn()

// Mock window.open
global.open = jest.fn()

// Mock navigator.clipboard
const mockWriteText = jest.fn()
Object.defineProperty(global.navigator, 'clipboard', {
  value: {
    writeText: mockWriteText,
  },
  configurable: true,
})

// Mock alert
global.alert = jest.fn()

describe('ContactSection', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders contact form correctly', () => {
    render(<ContactSection />)
    
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText('Send Us a Message')).toBeInTheDocument()
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/project type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/service needed/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/project details/i)).toBeInTheDocument()
  })

  it('shows validation errors for required fields', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeInTheDocument()
      expect(screen.getByText('Last name is required')).toBeInTheDocument()
      expect(screen.getByText('Email is required')).toBeInTheDocument()
      expect(screen.getByText('Phone number is required')).toBeInTheDocument()
      expect(screen.getByText('Please select a project type')).toBeInTheDocument()
      expect(screen.getByText('Please select a service')).toBeInTheDocument()
      expect(screen.getByText('Message is required')).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    
    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'invalid-email')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    })
  })

  it('validates phone number format', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    
    const phoneInput = screen.getByLabelText(/phone number/i)
    await user.type(phoneInput, 'invalid-phone')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument()
    })
  })

  it('clears validation errors when fields are edited', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    
    // Trigger validation errors
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeInTheDocument()
    })
    
    // Edit the field
    const firstNameInput = screen.getByLabelText(/first name/i)
    await user.type(firstNameInput, 'John')
    
    await waitFor(() => {
      expect(screen.queryByText('First name is required')).not.toBeInTheDocument()
    })
  })

  it('submits form successfully with valid data', async () => {
    const user = userEvent.setup()
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    } as Response)
    
    render(<ContactSection />)
    
    // Fill out the form
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '(555) 123-4567')
    await user.selectOptions(screen.getByLabelText(/project type/i), 'residential')
    await user.selectOptions(screen.getByLabelText(/service needed/i), 'windows-doors')
    await user.type(screen.getByLabelText(/project details/i), 'Need new windows for my home')
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          phone: '(555) 123-4567',
          company: '',
          projectType: 'residential',
          service: 'windows-doors',
          message: 'Need new windows for my home',
          budget: '',
          contactMethod: 'email'
        })
      })
    })
    
    await waitFor(() => {
      expect(screen.getByText('Message sent successfully!')).toBeInTheDocument()
    })
  })

  it('handles form submission errors', async () => {
    const user = userEvent.setup()
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Server error' }),
    } as Response)
    
    render(<ContactSection />)
    
    // Fill out the form with valid data
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '(555) 123-4567')
    await user.selectOptions(screen.getByLabelText(/project type/i), 'residential')
    await user.selectOptions(screen.getByLabelText(/service needed/i), 'windows-doors')
    await user.type(screen.getByLabelText(/project details/i), 'Need new windows for my home')
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Failed to send message')).toBeInTheDocument()
    })
  })

  it('shows loading state during form submission', async () => {
    const user = userEvent.setup()
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>
    mockFetch.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 1000)))
    
    render(<ContactSection />)
    
    // Fill out the form with valid data
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '(555) 123-4567')
    await user.selectOptions(screen.getByLabelText(/project type/i), 'residential')
    await user.selectOptions(screen.getByLabelText(/service needed/i), 'windows-doors')
    await user.type(screen.getByLabelText(/project details/i), 'Need new windows for my home')
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    expect(screen.getByText('Sending...')).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })

  it('handles contact method radio buttons', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    
    const emailRadio = screen.getByLabelText('Email')
    const phoneRadio = screen.getByLabelText('Phone')
    const whatsappRadio = screen.getByLabelText('WhatsApp')
    
    expect(emailRadio).toBeChecked()
    
    await user.click(phoneRadio)
    expect(phoneRadio).toBeChecked()
    expect(emailRadio).not.toBeChecked()
    
    await user.click(whatsappRadio)
    expect(whatsappRadio).toBeChecked()
    expect(phoneRadio).not.toBeChecked()
  })

  it('handles contact information buttons', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    
    // Test phone call button
    const callButton = screen.getByText('Call Now')
    await user.click(callButton)
    expect(window.open).toHaveBeenCalledWith('tel:+15551234567')
    
    // Test email button
    const emailButton = screen.getByText('Send Email')
    await user.click(emailButton)
    expect(window.open).toHaveBeenCalledWith('mailto:info@apexaluminum.com')
    
    // Test WhatsApp button
    const whatsappButton = screen.getByText('Message on WhatsApp')
    await user.click(whatsappButton)
    expect(window.open).toHaveBeenCalledWith('https://wa.me/15551234567')
  })

  it('handles copy to clipboard functionality', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    
    const copyButtons = screen.getAllByText('Copy')
    
    // Test copying phone number
    await user.click(copyButtons[0])
    expect(mockWriteText).toHaveBeenCalledWith('(555) 123-4567')
    expect(alert).toHaveBeenCalledWith('Phone number copied to clipboard!')
    
    // Test copying email
    await user.click(copyButtons[1])
    expect(mockWriteText).toHaveBeenCalledWith('info@apexaluminum.com')
    expect(alert).toHaveBeenCalledWith('Email address copied to clipboard!')
  })

  it('renders business hours correctly', () => {
    render(<ContactSection />)
    
    expect(screen.getByText('Business Hours')).toBeInTheDocument()
    expect(screen.getByText('Monday - Friday')).toBeInTheDocument()
    expect(screen.getByText('8:00 AM - 6:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('9:00 AM - 4:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getByText('Closed')).toBeInTheDocument()
  })
})