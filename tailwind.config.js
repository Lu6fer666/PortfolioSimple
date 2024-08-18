/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        newyork: ['NewYork', 'sans-serif'],
        georgia: ['Georgia', 'sans-serif'],
        oregon: ['Oregon', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

