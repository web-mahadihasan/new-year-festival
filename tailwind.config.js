/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        
      extend: {
        fontFamily: {
          "inter": ["Inter", "sans-serif"], // Adds a new `font-display` class
        },
      },
    },
    plugins: [],
  }