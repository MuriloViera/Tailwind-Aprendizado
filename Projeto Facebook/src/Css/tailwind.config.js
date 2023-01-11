/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.html"],
  theme: {
    extend: {
      spacing:{
        '30':'7.5rem',
        '290':'290px',
        '369':'369px',
        '500':'500px',
        '980':'980px'
      },
      fontSize:{
        'subtitle': '1.7rem'
      },
      colors:{
        'main-gray':'#F0F2F5',
        'main-blue':'#1877F2',
        'main-blue-hover':'#166FE5',
        'main-green':'#42B72A',
        'main-green-hover':'#36A420'
      }
    },
  },
  plugins: [],
}
