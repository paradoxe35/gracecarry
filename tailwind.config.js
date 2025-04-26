/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DB7093', // Rose pink
          light: '#F4B8C9',
          dark: '#C25B7C',
        },
        secondary: {
          DEFAULT: '#F5F5F5', // Soft white
          dark: '#E0E0E0',
        },
        neutral: {
          100: '#FFFFFF',
          200: '#F9F9F9',
          300: '#F0F0F0',
          400: '#E0E0E0',
          500: '#CCCCCC',
          600: '#A0A0A0',
          700: '#787878',
          800: '#505050',
          900: '#303030',
        },
        success: '#4CAF50',
        error: '#F44336',
        warning: '#FF9800',
        info: '#2196F3',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        serif: ['Playfair Display', 'serif'], // Elegant serif font for headings
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 12px rgba(0, 0, 0, 0.08)',
        'strong': '0 10px 20px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}