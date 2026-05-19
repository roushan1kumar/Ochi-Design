/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ochi: {
          black: '#0a0a0a',
          dark: '#111111',
          gray: '#1a1a1a',
          light: '#f5f5f5',
          accent: '#ff6b6b',
        }
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.04em',
      }
    },
  },
  plugins: [],
}
