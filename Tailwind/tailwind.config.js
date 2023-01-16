/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["../**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'new-blue': '#243C5A',
        amber: colors.amber,
      },
      spacing: {
        '100' : '25rem',
      },
      fontFamily: {
        'arial': 'Arial'
      }
    },
  },
  plugins: [],
}
