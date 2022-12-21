/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#967259',
        secondary: '#ece0d1',
        light: '#FEFCF3',
      },
      fontFamily: {
        italiano: ['Italianno', 'cursive'],
      },
    },
  },
  plugins: [],
};
