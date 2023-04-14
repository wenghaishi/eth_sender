/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'switcheo-green': '#E2FCA4',
        'dark-g':'#053C50',
      },
    },
  },
  plugins: [],
}