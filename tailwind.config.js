/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#198db3',
        'custom-gray': '#E2E2E2',
        'custom-text-gray': '#A2A4A5',
        'custom-bg-gray': '#f9f9f9',
        'custom-red': '#e17979',
      },
      boxShadow: {
        'soft': '0px 2px 10px 0px rgba(146, 157, 161, 0.2)', 
      }
    },
  },
  plugins: [],
}

