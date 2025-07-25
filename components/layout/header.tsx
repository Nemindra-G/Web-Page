'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Container } from './container'
import { Button } from '../ui/button'
// import { Icons } from '../ui/icon'
import { NAVIGATION } from '@/lib/constants'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-slate-900/80 backdrop-filter backdrop-blur-xl shadow-xl border-b border-slate-700/40 shadow-slate-900/50'
            : 'bg-slate-900/60 backdrop-filter backdrop-blur-xl border-b border-slate-700/30 shadow-lg shadow-slate-900/30'
        )}
        style={{
          backdropFilter: 'blur(24px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
        }}
      >
        <Container>
          <nav className="flex items-center justify-between h-24 md:h-28 lg:h-32">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group"
            >
              <Image
                src="/logo.png"
                alt="Apex Aluminum Logo"
                width={240}
                height={120}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {NAVIGATION.main.map((item, index) => (
                <div
                  key={item.href}
                  className="animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-6 py-3 font-medium transition-all duration-500 group',
                      'text-slate-200 hover:text-white',
                      pathname === item.href && 'text-white'
                    )}
                  >
                    {/* Beautiful underline effect */}
                    <div className={cn(
                      'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-electric-blue to-primary-500 transition-all duration-500 rounded-full',
                      'w-0 group-hover:w-full',
                      pathname === item.href && 'w-full'
                    )} />
                    
                    {/* Elegant background hover */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-electric-blue/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Clean text with subtle glow */}
                    <span className={cn(
                      'relative z-10 transition-all duration-500',
                      'group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]',
                      pathname === item.href && 'drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                    )}>
                      {item.label}
                    </span>
                  </Link>
                </div>
              ))}
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-electric-blue to-primary-500 text-white font-semibold rounded-xl shadow-lg shadow-electric-blue/20 hover:shadow-xl hover:shadow-electric-blue/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <span className="relative z-10">Get Free Quote</span>
                {/* Glass shine effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 text-slate-200 hover:text-white transition-all duration-300 rounded-lg hover:bg-electric-blue/10 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] backdrop-blur-sm active:scale-95"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <span className="text-2xl font-light">×</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed inset-x-0 top-24 md:top-28 z-40 lg:hidden transition-all duration-300 transform',
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        )}
        style={{
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(24px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.8)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(71, 85, 105, 0.3)'
        }}
      >
        <Container>
          <nav className="py-6 space-y-4">
            {NAVIGATION.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block py-4 px-5 text-lg font-medium transition-all duration-300 rounded-lg relative group',
                  pathname === item.href
                    ? 'text-white bg-electric-blue/8'
                    : 'text-slate-200 hover:text-white hover:bg-electric-blue/5'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-700/50">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-electric-blue to-primary-500 text-white font-semibold rounded-xl shadow-lg shadow-electric-blue/20 hover:shadow-xl hover:shadow-electric-blue/30 transform hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </nav>
        </Container>
      </div>

      {/* Overlay for mobile menu */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity',
          isMobileMenuOpen
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
