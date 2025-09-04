// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // Your custom colors if any
      },
    },
  },
  plugins: [],
}