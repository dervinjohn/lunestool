/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['"Oswald"', defaultTheme.fontFamily.sans],
        lato: ['"Lato"', defaultTheme.fontFamily.sans],
      },
    },
    backgroundImage: {
      synthwave: "url('/src/assets/img/synthwave.jpg')",
      // eagle: "url('/src/assets/img/eagle.jpeg')",

    },
  },
  plugins: [],
};
