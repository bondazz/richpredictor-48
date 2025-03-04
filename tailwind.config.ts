
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        richnavy: {
          DEFAULT: '#0A2342',
          50: '#E6F1FC',
          100: '#C7DEF8',
          200: '#89B8F0',
          300: '#4B92E7',
          400: '#1D6CCE',
          500: '#154D94',
          600: '#0F3970',
          700: '#0A254C',
          800: '#051228',
          900: '#020609',
        },
        richemerald: {
          DEFAULT: '#2D6E7E',
          50: '#E6F3F5',
          100: '#C7E5EA',
          200: '#8FCBD5',
          300: '#57B1C0',
          400: '#2E97AB',
          500: '#236F80',
          600: '#1B5461',
          700: '#133A43',
          800: '#0B1F24',
          900: '#030A0B',
        },
        richorange: {
          DEFAULT: '#F46036',
          50: '#FEEAE3',
          100: '#FDD5C7',
          200: '#FAAC8F',
          300: '#F78357',
          400: '#F46036',
          500: '#E5420F',
          600: '#B3340C',
          700: '#812509',
          800: '#4E1705',
          900: '#1C0902',
        },
        richgray: {
          DEFAULT: '#1D1D1F',
          50: '#F5F5F5',
          100: '#E8E8E9',
          200: '#CDCDD0',
          300: '#B2B2B7',
          400: '#86868F',
          500: '#5D5D64',
          600: '#3A3A3F',
          700: '#1D1D1F',
          800: '#16161A',
          900: '#0A0A0D',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'blur-in': {
          '0%': { filter: 'blur(5px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        'rotate-icon': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'zoom-in': 'zoom-in 0.5s ease-out',
        'blur-in': 'blur-in 0.5s ease-out',
        'rotate-icon': 'rotate-icon 2s linear infinite',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(#e5e7eb 1px, transparent 1px)',
        'gradient-blur': 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
      },
      boxShadow: {
        'elegant': '0 10px 30px -5px rgba(10, 35, 66, 0.05)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'button': '0 2px 10px rgba(244, 96, 54, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
