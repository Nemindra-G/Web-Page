'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
}

export function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setThemeState(savedTheme)
    } else {
      // Check system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setThemeState(systemTheme)
    }
    setMounted(true)
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setThemeState(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: defaultTheme, toggleTheme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}