/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Primary': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#40A198',
        'secondary': '#596780',
      },
      boxShadow: {
        'primary': '0px 3px 8px #40A19840',
      }
    },
  },
  plugins: [],
}