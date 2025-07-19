/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./src/pages/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
  "./src/app/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        'acuarela': {
          'azul1': '#5B9BD5',
          'azul2': '#87CEEB',
          'turquesa': '#B0E0E6',
          'agua': '#E0F6FF'
        }
      }
    },
  },
  plugins: [],
}