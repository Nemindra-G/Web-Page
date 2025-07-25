'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { GoogleMap } from '@/components/ui/google-map'
import { isValidEmail, isValidPhone } from '@/lib/utils'

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    service: '',
    message: '',
    budget: '',
    contactMethod: 'email'
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, contactMethod: e.target.value }))
  }
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email address'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!isValidPhone(formData.phone)) newErrors.phone = 'Please enter a valid phone number'
    if (!formData.projectType) newErrors.projectType = 'Please select a project type'
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Send form data to the API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        // Handle validation errors from the server
        if (result.errors) {
          setErrors(result.errors)
          throw new Error('Validation failed')
        }
        throw new Error(result.message || 'Failed to submit form')
      }
      
      // Handle success
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        service: '',
        message: '',
        budget: '',
        contactMethod: 'email'
      })
      
      // Scroll to the top of the form to show the success message
      const formElement = document.getElementById('contact-form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your aluminum fabrication project? Contact us today for a free consultation and quote.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-white shadow-xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Send Us a Message
            </h2>
            
            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              {/* Form Status Messages with ARIA Live Region */}
              <div aria-live="polite" aria-atomic="true">
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 mb-6" role="status">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="font-medium">Message sent successfully!</p>
                    </div>
                    <p className="mt-1 text-sm">Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 mb-6" role="alert">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <p className="font-medium">Failed to send message</p>
                    </div>
                    <p className="mt-1 text-sm">Please try again or contact us directly via phone or email.</p>
                  </div>
                )}
              </div>
            
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={`block text-sm font-medium ${errors.firstName ? 'text-red-600' : 'text-slate-700'} mb-1.5`}>
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className={`w-full rounded-lg border ${errors.firstName ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'} px-4 py-2.5 text-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent hover:border-slate-400`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className={`block text-sm font-medium ${errors.lastName ? 'text-red-600' : 'text-slate-700'} mb-1.5`}>
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className={`w-full rounded-lg border ${errors.lastName ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'} px-4 py-2.5 text-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent hover:border-slate-400`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${errors.email ? 'text-red-600' : 'text-slate-700'} mb-1.5`}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full rounded-lg border ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'} px-4 py-2.5 text-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent hover:border-slate-400`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className={`block text-sm font-medium ${errors.phone ? 'text-red-600' : 'text-slate-700'} mb-1.5`}>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={`w-full rounded-lg border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'} px-4 py-2.5 text-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent hover:border-slate-400`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent hover:border-slate-400"
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className={`block text-sm font-medium ${errors.projectType ? 'text-red-600' : 'text-slate-700'} mb-1.5`}>
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select 
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${errors.projectType ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'} px-4 py-2.5 text-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent hover:border-slate-400`}
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="service" className={`block text-sm font-medium ${errors.service ? 'text-red-600' : 'text-slate-700'} mb-1.5`}>
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select 
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${errors.service ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'} px-4 py-2.5 text-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent hover:border-slate-400`}
                >
                  <option value="">Select service</option>
                  <option value="windows-doors">Windows & Doors</option>
                  <option value="facades">Facades & Curtain Walls</option>
                  <option value="custom">Custom Fabrication</option>
                  <option value="railings">Railings & Balustrades</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${errors.message ? 'text-red-600' : 'text-slate-700'} mb-1.5`}>
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  rows={5}
                  className={`w-full rounded-lg border ${errors.message ? 'border-red-300 bg-red-50' : 'border-slate-300 bg-white'} px-4 py-2.5 text-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent hover:border-slate-400`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Estimated Budget (Optional)
                </label>
                <select 
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent hover:border-slate-400"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="email" 
                      checked={formData.contactMethod === 'email'}
                      onChange={handleRadioChange}
                      className="mr-2" 
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="phone" 
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleRadioChange}
                      className="mr-2" 
                    />
                    Phone
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="whatsapp" 
                      checked={formData.contactMethod === 'whatsapp'}
                      onChange={handleRadioChange}
                      className="mr-2" 
                    />
                    WhatsApp
                  </label>
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full relative"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span aria-live="assertive" aria-atomic="true">Sending...</span>
                    <span className="sr-only">Please wait while we send your message</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </Card>

          {/* Company Information */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="p-8 bg-white shadow-xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                    <p className="text-slate-600">
                      1234 Industrial Blvd<br />
                      Manufacturing District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                    <p className="text-slate-600">(555) 123-4567</p>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1 text-electric-blue border-electric-blue hover:bg-electric-blue hover:text-white"
                        onClick={() => window.open('tel:+15551234567')}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Now
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1 text-slate-600 hover:bg-slate-100"
                        onClick={() => {
                          navigator.clipboard.writeText('(555) 123-4567');
                          alert('Phone number copied to clipboard!');
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">info@apexaluminum.com</p>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1 text-electric-blue border-electric-blue hover:bg-electric-blue hover:text-white"
                        onClick={() => window.open('mailto:info@apexaluminum.com')}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Email
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1 text-slate-600 hover:bg-slate-100"
                        onClick={() => {
                          navigator.clipboard.writeText('info@apexaluminum.com');
                          alert('Email address copied to clipboard!');
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">WhatsApp</h3>
                    <p className="text-slate-600">(555) 123-4567</p>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1 text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                        onClick={() => window.open('https://wa.me/15551234567')}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Message on WhatsApp
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1 text-slate-600 hover:bg-slate-100"
                        onClick={() => {
                          navigator.clipboard.writeText('(555) 123-4567');
                          alert('Phone number copied to clipboard!');
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-8 bg-white shadow-xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Business Hours
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Monday - Friday</span>
                  <span className="font-medium text-slate-800">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Saturday</span>
                  <span className="font-medium text-slate-800">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sunday</span>
                  <span className="font-medium text-slate-800">Closed</span>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    Emergency services available 24/7 for commercial clients
                  </p>
                </div>
              </div>
            </Card>

            {/* Google Maps Integration */}
            <Card className="p-8 bg-white shadow-xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Our Location
              </h2>
              
              <GoogleMap 
                address="1234 Industrial Blvd, Manufacturing District, City, State 12345"
                className="aspect-video rounded-lg overflow-hidden mb-4"
              />
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('https://maps.google.com/?q=1234+Industrial+Blvd')}
              >
                View on Google Maps
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}