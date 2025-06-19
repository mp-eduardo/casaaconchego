/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#1E3A5F',
        'brand-secondary': '#D4A373',
        'brand-accent': '#A3B18A',
        'brand-light': '#FEFAE0',
        'brand-dark': '#3A3A3A',
      }
    },
  },
  plugins: [],
}