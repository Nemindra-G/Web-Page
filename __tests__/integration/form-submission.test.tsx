import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactSection } from '@/components/sections/contact-section'

// Mock fetch for integration tests
global.fetch = jest.fn()

describe('Form Submission Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('completes full form submission workflow', async () => {
    const user = userEvent.setup()
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>
    
    // Mock successful API response
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Form submitted successfully' }),
    } as Response)
    
    render(<ContactSection />)
    
    // Step 1: Fill out all required fields
    await user.type(screen.getByLabelText(/first name/i), 'Jane')
    await user.type(screen.getByLabelText(/last name/i), 'Smith')
    await user.type(screen.getByLabelText(/email address/i), 'jane.smith@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1-555-987-6543')
    await user.type(screen.getByLabelText(/company/i), 'Smith Construction')
    await user.selectOptions(screen.getByLabelText(/project type/i), 'commercial')
    await user.selectOptions(screen.getByLabelText(/service needed/i), 'facades')
    await user.type(screen.getByLabelText(/project details/i), 'Need curtain wall installation for new office building')
    await user.selectOptions(screen.getByLabelText(/estimated budget/i), '50k-100k')
    
    // Step 2: Select preferred contact method
    const phoneRadio = screen.getByLabelText('Phone')
    await user.click(phoneRadio)
    
    // Step 3: Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    // Step 4: Verify loading state
    expect(screen.getByText('Sending...')).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
    
    // Step 5: Verify API call
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          phone: '+1-555-987-6543',
          company: 'Smith Construction',
          projectType: 'commercial',
          service: 'facades',
          message: 'Need curtain wall installation for new office building',
          budget: '50k-100k',
          contactMethod: 'phone'
        })
      })
    })
    
    // Step 6: Verify success message
    await waitFor(() => {
      expect(screen.getByText('Message sent successfully!')).toBeInTheDocument()
      expect(screen.getByText('Thank you for contacting us. We\'ll get back to you shortly.')).toBeInTheDocument()
    })
    
    // Step 7: Verify form reset
    await waitFor(() => {
      expect(screen.getByLabelText(/first name/i)).toHaveValue('')
      expect(screen.getByLabelText(/last name/i)).toHaveValue('')
      expect(screen.getByLabelText(/email address/i)).toHaveValue('')
      expect(screen.getByLabelText(/phone number/i)).toHaveValue('')
      expect(screen.getByLabelText(/company/i)).toHaveValue('')
      expect(screen.getByLabelText(/project type/i)).toHaveValue('')
      expect(screen.getByLabelText(/service needed/i)).toHaveValue('')
      expect(screen.getByLabelText(/project details/i)).toHaveValue('')
      expect(screen.getByLabelText(/estimated budget/i)).toHaveValue('')
      expect(screen.getByLabelText('Email')).toBeChecked()
    })
  })

  it('handles server validation errors correctly', async () => {
    const user = userEvent.setup()
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>
    
    // Mock server validation error response
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        errors: {
          email: 'Email already exists',
          phone: 'Invalid phone number format'
        }
      }),
    } as Response)
    
    render(<ContactSection />)
    
    // Fill out form with data that will trigger server validation errors
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email address/i), 'existing@example.com')
    await user.type(screen.getByLabelText(/phone number/i), 'invalid-phone')
    await user.selectOptions(screen.getByLabelText(/project type/i), 'residential')
    await user.selectOptions(screen.getByLabelText(/service needed/i), 'windows-doors')
    await user.type(screen.getByLabelText(/project details/i), 'Test message')
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    // Verify server validation errors are displayed
    await waitFor(() => {
      expect(screen.getByText('Email already exists')).toBeInTheDocument()
      expect(screen.getByText('Invalid phone number format')).toBeInTheDocument()
    })
    
    // Verify form is not reset when there are validation errors
    expect(screen.getByLabelText(/first name/i)).toHaveValue('John')
    expect(screen.getByLabelText(/last name/i)).toHaveValue('Doe')
  })

  it('handles network errors gracefully', async () => {
    const user = userEvent.setup()
    const mockFetch = fetch as jest.MockedFunction<typeof fetch>
    
    // Mock network error
    mockFetch.mockRejectedValueOnce(new Error('Network error'))
    
    render(<ContactSection />)
    
    // Fill out form with valid data
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '(555) 123-4567')
    await user.selectOptions(screen.getByLabelText(/project type/i), 'residential')
    await user.selectOptions(screen.getByLabelText(/service needed/i), 'windows-doors')
    await user.type(screen.getByLabelText(/project details/i), 'Test message')
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    // Verify error message is displayed
    await waitFor(() => {
      expect(screen.getByText('Failed to send message')).toBeInTheDocument()
      expect(screen.getByText('Please try again or contact us directly via phone or email.')).toBeInTheDocument()
    })
    
    // Verify form data is preserved
    expect(screen.getByLabelText(/first name/i)).toHaveValue('John')
    expect(screen.getByLabelText(/last name/i)).toHaveValue('Doe')
  })

  it('validates form fields in real-time', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    
    // Test email validation
    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'invalid')
    await user.tab() // Trigger blur event
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    })
    
    // Fix the email and verify error clears
    await user.clear(emailInput)
    await user.type(emailInput, 'valid@example.com')
    
    await waitFor(() => {
      expect(screen.queryByText('Please enter a valid email address')).not.toBeInTheDocument()
    })
  })
})