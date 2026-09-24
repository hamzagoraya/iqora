/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1b9fe6',
          hover: '#1f5f86',
          light: '#e8f5fd',
        },
        secondary: {
          DEFAULT: '#021e3b',
          hover: '#12304f',
        },
        accent: {
          DEFAULT: '#fcde42',
          hover: '#e5c93c',
        },
        teal: {
          DEFAULT: '#20a7aa',
        },
        steel: {
          DEFAULT: '#1f5f86',
        },
        navy: {
          DEFAULT: '#021e3b',
        },
        dark: {
          bg: '#000000',
          surface: '#021e3b',
          card: '#1f5f86',
          border: '#20a7aa',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Quicksand', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'primary': '0 8px 25px rgba(27, 159, 230, 0.3)',
        'primary-hover': '0 12px 30px rgba(27, 159, 230, 0.45)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
