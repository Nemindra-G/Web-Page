import {
  cn,
  formatCurrency,
  formatDate,
  debounce,
  throttle,
  generateSlug,
  isValidEmail,
  isValidPhone,
  getInitials,
  calculateReadingTime,
} from '@/lib/utils'

describe('Utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      expect(cn('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500')
    })

    it('should handle conditional classes', () => {
      expect(cn('base-class', true && 'conditional-class')).toBe('base-class conditional-class')
      expect(cn('base-class', false && 'conditional-class')).toBe('base-class')
    })

    it('should merge conflicting Tailwind classes', () => {
      expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
    })
  })

  describe('formatCurrency', () => {
    it('should format currency correctly', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56')
      expect(formatCurrency(0)).toBe('$0.00')
      expect(formatCurrency(1000000)).toBe('$1,000,000.00')
    })

    it('should handle different currencies', () => {
      expect(formatCurrency(1234.56, 'EUR')).toContain('1,234.56')
    })
  })

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2024-01-15')
      const formatted = formatDate(date)
      expect(formatted).toBe('January 15, 2024')
    })

    it('should handle string dates', () => {
      const formatted = formatDate('2024-01-15')
      expect(formatted).toBe('January 15, 2024')
    })

    it('should handle custom options', () => {
      const date = new Date('2024-01-15')
      const formatted = formatDate(date, { month: 'short', day: 'numeric' })
      expect(formatted).toBe('Jan 15, 2024')
    })
  })

  describe('debounce', () => {
    jest.useFakeTimers()

    it('should debounce function calls', () => {
      const mockFn = jest.fn()
      const debouncedFn = debounce(mockFn, 100)

      debouncedFn()
      debouncedFn()
      debouncedFn()

      expect(mockFn).not.toHaveBeenCalled()

      jest.advanceTimersByTime(100)
      expect(mockFn).toHaveBeenCalledTimes(1)
    })

    afterEach(() => {
      jest.clearAllTimers()
    })
  })

  describe('throttle', () => {
    jest.useFakeTimers()

    it('should throttle function calls', () => {
      const mockFn = jest.fn()
      const throttledFn = throttle(mockFn, 100)

      throttledFn()
      throttledFn()
      throttledFn()

      expect(mockFn).toHaveBeenCalledTimes(1)

      jest.advanceTimersByTime(100)
      throttledFn()
      expect(mockFn).toHaveBeenCalledTimes(2)
    })

    afterEach(() => {
      jest.clearAllTimers()
    })
  })

  describe('generateSlug', () => {
    it('should generate slug from text', () => {
      expect(generateSlug('Hello World')).toBe('hello-world')
      expect(generateSlug('Test & Special Characters!')).toBe('test-special-characters')
      expect(generateSlug('  Multiple   Spaces  ')).toBe('multiple-spaces')
    })

    it('should handle empty string', () => {
      expect(generateSlug('')).toBe('')
    })
  })

  describe('isValidEmail', () => {
    it('should validate email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
      expect(isValidEmail('invalid-email')).toBe(false)
      expect(isValidEmail('test@')).toBe(false)
      expect(isValidEmail('@example.com')).toBe(false)
    })
  })

  describe('isValidPhone', () => {
    it('should validate phone numbers', () => {
      expect(isValidPhone('1234567890')).toBe(true)
      expect(isValidPhone('+1234567890')).toBe(true)
      expect(isValidPhone('(123) 456-7890')).toBe(true)
      expect(isValidPhone('123-456-7890')).toBe(true)
      expect(isValidPhone('abc')).toBe(false)
      expect(isValidPhone('')).toBe(false)
    })
  })

  describe('getInitials', () => {
    it('should get initials from name', () => {
      expect(getInitials('John Doe')).toBe('JD')
      expect(getInitials('John Michael Doe')).toBe('JM')
      expect(getInitials('John')).toBe('J')
      expect(getInitials('')).toBe('')
    })
  })

  describe('calculateReadingTime', () => {
    it('should calculate reading time', () => {
      const shortText = 'This is a short text.'
      const longText = Array(200).fill('word').join(' ')
      
      expect(calculateReadingTime(shortText)).toBe(1)
      expect(calculateReadingTime(longText)).toBe(1)
      
      const veryLongText = Array(400).fill('word').join(' ')
      expect(calculateReadingTime(veryLongText)).toBe(2)
    })
  })
})