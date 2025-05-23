/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          raleway: ['"Raleway"', "sans-serif"],
          redHat: ['"Red Hat Display"', "sans-serif"],
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
    ],
    safelist: [
      'animate__animated',
      'animate__slideInDown',
      'animate__slideInUp',
      'animate__slideInLeft',
      'animate__slideInRight',
    ],
  };