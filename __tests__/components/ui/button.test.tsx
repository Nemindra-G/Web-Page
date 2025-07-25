import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('inline-flex', 'items-center', 'justify-center')
  })

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>)
    let button = screen.getByRole('button')
    expect(button).toHaveClass('bg-gradient-to-r', 'from-primary-500', 'to-primary-600')

    rerender(<Button variant="secondary">Secondary</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('bg-slate-700')

    rerender(<Button variant="outline">Outline</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('border-2', 'border-primary-500')

    rerender(<Button variant="ghost">Ghost</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('text-slate-600')
  })

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    let button = screen.getByRole('button')
    expect(button).toHaveClass('px-3', 'py-1.5', 'text-sm')

    rerender(<Button size="md">Medium</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('px-4', 'py-2', 'text-base')

    rerender(<Button size="lg">Large</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('px-6', 'py-3', 'text-lg')

    rerender(<Button size="xl">Extra Large</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('px-8', 'py-4', 'text-xl')
  })

  it('shows loading state correctly', () => {
    render(<Button loading>Loading Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('renders with icon', () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>
    render(<Button icon={<TestIcon />}>With Icon</Button>)
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    expect(screen.getByText('With Icon')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Ref Button</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('passes through HTML button attributes', () => {
    render(<Button type="submit" data-testid="submit-button">Submit</Button>)
    const button = screen.getByTestId('submit-button')
    expect(button).toHaveAttribute('type', 'submit')
  })
})