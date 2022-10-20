/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "./src/**/*.{ts,js,vue}"],
  theme: {
    extend: {
      colors: {
        "main-white": "#f5edf0",
        "main-gray": "#d1ccdc",
        "dark-gray": "#424c55",
        "light-brown": "#886f68",
        "dark-brown": "#3d2c2e",
      },
    },
  },
  plugins: [],
}
