# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Palitha Aluminum Works is a Next.js 15 website for an aluminum fabrication company. The project uses TypeScript, Tailwind CSS v4, React Hook Form with Zod validation, and Framer Motion for animations.

## Common Commands

```bash
# Development (with Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 15.4.2 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **State**: React Context API (Theme)
- **Testing**: Jest + React Testing Library + jest-axe

### Key Directories
- `app/` - Next.js App Router pages and API routes
- `components/` - Reusable UI components organized by type:
  - `ui/` - Core UI components (Button, Card, Input, etc.)
  - `sections/` - Page sections (Hero, Statistics, etc.)
  - `layout/` - Layout components (Header, Footer, Container)
- `data/` - Centralized data store for all content
- `lib/` - Utilities and configurations
- `types/` - TypeScript type definitions
- `__tests__/` - Test files organized by type (components, integration, etc.)
- `public/` - Static assets (images, videos) organized by category

### Important Patterns

1. **Component Props**: All UI components accept standard props:
   ```typescript
   interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
     className?: string;
     children?: React.ReactNode;
   }
   ```

2. **Styling**: Use the `cn()` utility from `lib/utils.ts` for className merging:
   ```typescript
   import { cn } from '@/lib/utils';
   className={cn('base-classes', className)}
   ```

3. **Design Tokens**: Use the design system from `lib/design-tokens.ts` for consistent styling.

4. **Data Access**: All content data is centralized in `data/index.ts` with corresponding types in `types/index.ts`.

5. **API Routes**: Follow the consistent response pattern:
   ```typescript
   type ApiResponse<T> = {
     success: boolean;
     data?: T;
     error?: {
       code: string;
       message: string;
       details?: Record<string, any>;
     };
   }
   ```

6. **Component Variants**: UI components use predefined variants:
   - Button: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
   - Card: 'elevated' | 'outline' | 'ghost'

7. **Theme System**: Dark/light theme support via ThemeContext with CSS variables

### Path Aliases
The project uses TypeScript path aliases:
- `@/` - Project root
- `@/components/*` - Components directory
- `@/lib/*` - Library/utilities
- `@/data/*` - Data directory
- `@/types/*` - Type definitions

### Performance Considerations
- Images are optimized with Next.js Image component
- Framer Motion and React Hook Form imports are optimized in `next.config.ts`
- Components use lazy loading where appropriate
- Turbopack is enabled for faster development builds

### Testing Setup
- Jest configured with React Testing Library
- Accessibility testing with jest-axe
- Tests organized in `__tests__/` directory by type
- Run tests with `npm run test` or `npm run test:watch` for development