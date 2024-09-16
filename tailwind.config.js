/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F', // Dark background
        secondary: '#1E1E1E', // Slightly lighter dark background
        accent: '#00FFAB', // Neon green accent
        textPrimary: '#EAEAEA', // Light text color
        textSecondary: '#B0B0B0', // Slightly darker text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use a modern sans-serif font
      },
    },
  },
  plugins: [],
}
