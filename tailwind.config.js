/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'heming': ['Heming', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#333333',
          dark: '#e5e5e5',
        },
        secondary: {
          light: '#666666',
          dark: '#b0b0b0',
        },
        background: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        accent: {
          light: '#4a90e2',
          dark: '#6bb6ff',
        },
        border: {
          light: '#eeeeee',
          dark: '#333333',
        },
        dropdown: {
          bg: {
            light: '#ffffff',
            dark: '#2a2a2a',
          },
          hover: {
            light: 'rgba(74, 144, 226, 0.05)',
            dark: 'rgba(107, 182, 255, 0.1)',
          }
        },
        'dropdown-bg': {
          light: '#ffffff',
          dark: '#2a2a2a',
        },
        'dropdown-hover': {
          light: 'rgba(74, 144, 226, 0.05)',
          dark: 'rgba(107, 182, 255, 0.1)',
        }
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'subtleShimmer': 'subtleShimmer 6s infinite',
        'modalFadeIn': 'modalFadeIn 0.3s ease-out',
        'modalSlideIn': 'modalSlideIn 0.4s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { left: '-100%' },
          '50%': { left: '100%' },
          '100%': { left: '100%' },
        },
        subtleShimmer: {
          '0%': { left: '-100%' },
          '50%': { left: '100%' },
          '100%': { left: '100%' },
        },
        modalFadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        modalSlideIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.8) translateY(-50px)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'dropdown': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'dropdown-dark': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'accent': '0 4px 12px rgba(74, 144, 226, 0.1)',
        'accent-dark': '0 4px 12px rgba(107, 182, 255, 0.1)',
      },
    },
  },
  plugins: [],
}

