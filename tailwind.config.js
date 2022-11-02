/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "th-red-500": "#bc4749",
        "th-yellow-50": "#f2e8cf",
        "th-gray-200": "#434343",
        "th-green-700": "#386641",
      },
      fontFamily: {
        primaryFont: ["Roboto", "sans-serif"],
        buttonFont: ["Righteous", "cursive"],
      },
    },
  },
  plugins: [],
};
