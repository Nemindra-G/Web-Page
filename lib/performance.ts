'use client'

// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: Map<string, number> = new Map()
  private observers: PerformanceObserver[] = []

  private constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers()
    }
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  private initializeObservers() {
    // Core Web Vitals monitoring
    this.observeWebVitals()
    
    // Resource timing
    this.observeResourceTiming()
    
    // Navigation timing
    this.observeNavigationTiming()
  }

  private observeWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        this.metrics.set('LCP', lastEntry.startTime)
        this.reportMetric('LCP', lastEntry.startTime)
      })
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        this.observers.push(lcpObserver)
      } catch (e) {
        console.warn('LCP observer not supported')
      }
    }

    // First Input Delay (FID)
    if ('PerformanceObserver' in window) {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          this.metrics.set('FID', entry.processingStart - entry.startTime)
          this.reportMetric('FID', entry.processingStart - entry.startTime)
        })
      })
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] })
        this.observers.push(fidObserver)
      } catch (e) {
        console.warn('FID observer not supported')
      }
    }

    // Cumulative Layout Shift (CLS)
    if ('PerformanceObserver' in window) {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        this.metrics.set('CLS', clsValue)
        this.reportMetric('CLS', clsValue)
      })
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] })
        this.observers.push(clsObserver)
      } catch (e) {
        console.warn('CLS observer not supported')
      }
    }
  }

  private observeResourceTiming() {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          // Monitor slow resources
          if (entry.duration > 1000) {
            console.warn(`Slow resource detected: ${entry.name} took ${entry.duration}ms`)
          }
        })
      })
      
      try {
        resourceObserver.observe({ entryTypes: ['resource'] })
        this.observers.push(resourceObserver)
      } catch (e) {
        console.warn('Resource observer not supported')
      }
    }
  }

  private observeNavigationTiming() {
    if ('PerformanceObserver' in window) {
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          const ttfb = entry.responseStart - entry.requestStart
          const domContentLoaded = entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart
          const loadComplete = entry.loadEventEnd - entry.loadEventStart
          
          this.metrics.set('TTFB', ttfb)
          this.metrics.set('DOMContentLoaded', domContentLoaded)
          this.metrics.set('LoadComplete', loadComplete)
          
          this.reportMetric('TTFB', ttfb)
          this.reportMetric('DOMContentLoaded', domContentLoaded)
          this.reportMetric('LoadComplete', loadComplete)
        })
      })
      
      try {
        navigationObserver.observe({ entryTypes: ['navigation'] })
        this.observers.push(navigationObserver)
      } catch (e) {
        console.warn('Navigation observer not supported')
      }
    }
  }

  private reportMetric(name: string, value: number) {
    // In production, you would send this to your analytics service
    console.log(`Performance Metric - ${name}: ${value}ms`)
    
    // Example: Send to Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(value),
        non_interaction: true
      })
    }
  }

  // Manual timing utilities
  startTiming(label: string) {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(`${label}-start`)
    }
  }

  endTiming(label: string) {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(`${label}-end`)
      window.performance.measure(label, `${label}-start`, `${label}-end`)
      
      const measure = window.performance.getEntriesByName(label)[0]
      if (measure) {
        this.reportMetric(label, measure.duration)
      }
    }
  }

  // Get current metrics
  getMetrics() {
    return Object.fromEntries(this.metrics)
  }

  // Cleanup observers
  disconnect() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Hook for using performance monitoring in React components
export function usePerformanceMonitor() {
  const monitor = PerformanceMonitor.getInstance()
  
  return {
    startTiming: monitor.startTiming.bind(monitor),
    endTiming: monitor.endTiming.bind(monitor),
    getMetrics: monitor.getMetrics.bind(monitor)
  }
}

// Utility to measure component render time
export function withPerformanceMonitoring<T extends object>(
  Component: React.ComponentType<T>,
  componentName: string
) {
  return function PerformanceMonitoredComponent(props: T) {
    const monitor = usePerformanceMonitor()
    
    React.useEffect(() => {
      monitor.startTiming(`${componentName}-render`)
      return () => {
        monitor.endTiming(`${componentName}-render`)
      }
    }, [monitor])
    
    return React.createElement(Component, props)
  }
}

// Bundle size analyzer utility
export function analyzeBundleSize() {
  if (typeof window !== 'undefined' && window.performance) {
    const resources = window.performance.getEntriesByType('resource')
    const jsResources = resources.filter((resource: any) => 
      resource.name.includes('.js') && !resource.name.includes('chunk')
    )
    
    const totalSize = jsResources.reduce((total: number, resource: any) => {
      return total + (resource.transferSize || 0)
    }, 0)
    
    console.log(`Total JS bundle size: ${(totalSize / 1024).toFixed(2)} KB`)
    return totalSize
  }
  return 0
}

// Memory usage monitoring
export function monitorMemoryUsage() {
  if (typeof window !== 'undefined' && 'memory' in window.performance) {
    const memory = (window.performance as any).memory
    
    console.log('Memory Usage:', {
      used: `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
      total: `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
      limit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
    })
    
    return memory
  }
  return null
}