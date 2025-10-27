import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAF9F8',  // Very light beige
          100: '#F5F3F1', // Light beige (RPMG original)
          200: '#E8E3DE', // Light brown-gray
          300: '#D4C9C0', // Light brown
          400: '#B8A598', // Medium light brown
          500: '#968170', // Main RPMG brown
          600: '#7A6A5C', // Darker brown
          700: '#5E5147', // Dark brown
          800: '#3C292C', // Very dark brown (RPMG original)
          900: '#2A1B1D', // Almost black brown
          950: '#1A0F10', // Deep brown-black
        },
        accent: {
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
        gray: {
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
        lsg: {
          primary: '#968170',
          light: '#D4C9C0',
          background: '#F5F3F1',
          text: '#3C292C',
          accent: '#B8A598',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
        serif: ['Bree Serif', 'Roboto', 'serif'],
        'source-sans': ['Source Sans', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config