/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'navbar': '#c29c81',
      'navtext':'#dfc8ae',
      'black':'#000',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
