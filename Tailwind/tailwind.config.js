/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.html"],
  theme: {
    extend: {
      colors: {
        'new-blue': '#243C5A',
      },
      spacing: {
        '100' : '25rem',
      }
    },
  },
  plugins: [],
}
