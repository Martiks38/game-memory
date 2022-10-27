/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        red: '0 0 6px 3px #cd0303',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      margin: {
        '30px': '30px',
      },
      maxWidth: {
        75: '1200px',
      },
    },
  },
  plugins: [],
}
