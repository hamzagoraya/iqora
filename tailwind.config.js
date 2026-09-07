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
          DEFAULT: '#fba311',
          hover: '#e08e00',
          light: '#fff8eb',
        },
        secondary: {
          DEFAULT: '#131a22',
          hover: '#1f2937',
        },
        dark: {
          bg: '#0b0f17',
          surface: '#141c28',
          card: '#1e293b',
          border: '#273549',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Quicksand', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'primary': '0 8px 25px rgba(251, 163, 17, 0.3)',
        'primary-hover': '0 12px 30px rgba(251, 163, 17, 0.45)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
