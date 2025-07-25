// Design tokens for Apex Aluminum Works
// Centralized design system configuration

export const DESIGN_TOKENS = {
  // Color Palette
  colors: {
    // Primary Brand Colors (Modern Electric Blue)
    primary: {
      50: '#eef9ff',
      100: '#d9f2ff',
      200: '#bce7ff',
      300: '#8ed9ff',
      400: '#58c4ff',
      500: '#32a8ff', // Main brand color - Electric blue
      600: '#1b8bff',
      700: '#1472eb',
      800: '#175bbc',
      900: '#194f93',
      950: '#14325a',
    },
    
    // Accent Colors (Vibrant Purple)
    accent: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7', // Vibrant purple accent
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    },
    
    // Neutral Colors (Slate-based)
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
    
    // Metallic Colors (Silver/Aluminum theme)
    metallic: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    
    // Semantic Colors
    semantic: {
      success: {
        50: '#f0fdf4',
        500: '#22c55e',
        600: '#16a34a',
      },
      warning: {
        50: '#fffbeb',
        500: '#f59e0b',
        600: '#d97706',
      },
      error: {
        50: '#fef2f2',
        500: '#ef4444',
        600: '#dc2626',
      },
      info: {
        50: '#f0f9ff',
        500: '#3b82f6',
        600: '#2563eb',
      },
    },
    
    // Background Colors
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      dark: '#0a0a0f',
      darker: '#020208',
      glass: 'rgba(248, 250, 252, 0.8)',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      hero: 'linear-gradient(135deg, #32a8ff 0%, #a855f7 100%)',
      card: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
    },
    
    // Text Colors
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      tertiary: '#64748b',
      inverse: '#ffffff',
      muted: '#94a3b8',
      gradient: 'linear-gradient(135deg, #32a8ff 0%, #a855f7 100%)',
    },
    
    // Border Colors
    border: {
      light: '#e2e8f0',
      medium: '#cbd5e1',
      dark: '#94a3b8',
    },
  },
  
  // Typography Scale
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace'],
    },
    
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1.25' }],
      '6xl': ['3.75rem', { lineHeight: '1.2' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  
  // Spacing Scale
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    18: '4.5rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    128: '32rem',
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    '4xl': '2rem',
    full: '9999px',
  },
  
  // Shadows
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
    
    // Modern enhanced shadows
    glass: '0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.1)',
    elevated: '0 32px 64px -12px rgba(0, 0, 0, 0.25), 0 8px 32px -8px rgba(0, 0, 0, 0.12)',
    floating: '0 20px 40px -8px rgba(50, 168, 255, 0.3), 0 8px 16px -4px rgba(0, 0, 0, 0.1)',
    
    // Colorful glows
    glow: '0 0 20px rgba(50, 168, 255, 0.5)',
    'glow-lg': '0 0 40px rgba(50, 168, 255, 0.7)',
    'glow-xl': '0 0 60px rgba(50, 168, 255, 0.9)',
    'accent-glow': '0 0 20px rgba(168, 85, 247, 0.5)',
    'accent-glow-lg': '0 0 40px rgba(168, 85, 247, 0.7)',
    'accent-glow-xl': '0 0 60px rgba(168, 85, 247, 0.9)',
    
    // Premium effects
    premium: '0 32px 64px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    metallic: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
    neon: '0 0 10px rgba(50, 168, 255, 0.8), 0 0 20px rgba(50, 168, 255, 0.6), 0 0 40px rgba(50, 168, 255, 0.4)',
    cyber: '0 0 10px rgba(50, 168, 255, 0.9), 0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(50, 168, 255, 0.3)',
    rainbow: '0 0 20px rgba(255, 0, 150, 0.4), 0 0 40px rgba(0, 255, 150, 0.3), 0 0 60px rgba(150, 0, 255, 0.2)',
  },
  
  // Animation & Transitions
  animation: {
    duration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      
      // Custom easing curves
      'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      'bounce-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      'elastic': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    },
  },
  
  // Breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Z-Index Scale
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    
    // Semantic z-index values
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modal: '1040',
    popover: '1050',
    tooltip: '1060',
    toast: '1070',
  },
  
  // Component-specific tokens
  components: {
    button: {
      height: {
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
        xl: '3.5rem',
      },
      padding: {
        sm: '0.5rem 0.75rem',
        md: '0.625rem 1rem',
        lg: '0.75rem 1.5rem',
        xl: '1rem 2rem',
      },
    },
    
    card: {
      padding: {
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
    },
    
    input: {
      height: {
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem',
      },
      padding: {
        sm: '0.5rem 0.75rem',
        md: '0.625rem 0.875rem',
        lg: '0.75rem 1rem',
      },
    },
  },
} as const;

// CSS Custom Properties Generator
export const generateCSSVariables = () => {
  const tokens = DESIGN_TOKENS;
  const cssVars: Record<string, string> = {};
  
  // Generate color variables
  Object.entries(tokens.colors.primary).forEach(([key, value]) => {
    cssVars[`--color-primary-${key}`] = value;
  });
  
  Object.entries(tokens.colors.neutral).forEach(([key, value]) => {
    cssVars[`--color-neutral-${key}`] = value;
  });
  
  Object.entries(tokens.colors.metallic).forEach(([key, value]) => {
    cssVars[`--color-metallic-${key}`] = value;
  });
  
  // Generate spacing variables
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value;
  });
  
  return cssVars;
};

// Utility function to get design token values
export const getToken = (path: string) => {
  const keys = path.split('.');
  let value: unknown = DESIGN_TOKENS;
  
  for (const key of keys) {
    value = (value as Record<string, unknown>)?.[key];
    if (value === undefined) break;
  }
  
  return value;
};

// Type-safe token accessor
export type DesignTokenPath = 
  | `colors.primary.${keyof typeof DESIGN_TOKENS.colors.primary}`
  | `colors.neutral.${keyof typeof DESIGN_TOKENS.colors.neutral}`
  | `colors.metallic.${keyof typeof DESIGN_TOKENS.colors.metallic}`
  | `spacing.${keyof typeof DESIGN_TOKENS.spacing}`
  | `typography.fontSize.${keyof typeof DESIGN_TOKENS.typography.fontSize}`
  | `borderRadius.${keyof typeof DESIGN_TOKENS.borderRadius}`
  | `boxShadow.${keyof typeof DESIGN_TOKENS.boxShadow}`;

export const token = <T extends DesignTokenPath>(path: T): string => {
  return getToken(path) as string;
};
