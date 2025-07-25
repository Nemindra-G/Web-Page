import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './container'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
// import { Icons } from '../ui/icon'
import { COMPANY_INFO, NAVIGATION } from '@/lib/constants'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="mb-4">
                <Image
                  src="/logo.png"
                  alt="Apex Aluminum Logo"
                  width={480}
                  height={240}
                  className="h-32 md:h-40 lg:h-48 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Leading aluminum fabrication specialists serving residential and commercial clients 
                with premium quality products and exceptional craftsmanship.
              </p>
              <div className="flex space-x-4">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {NAVIGATION.services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {NAVIGATION.main.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-400 mt-0.5">📞</span>
                    <div>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-400 hover:text-primary-400 transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-400 mt-0.5">✉️</span>
                    <div>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-400 hover:text-primary-400 transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-400 mt-0.5 flex-shrink-0">📍</span>
                    <div className="text-slate-400">
                      {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                <p className="text-slate-400 text-sm mb-3">
                  Subscribe to get updates on our latest projects and offers.
                </p>
                <form className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                  <Button variant="primary" size="sm" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}