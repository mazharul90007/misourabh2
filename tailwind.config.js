import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'], // Add Cinzel Decorative
        ewert: ['"Ewert"', 'cursive'],  // Add Ewert
        rye: ["Rye", 'serif'] // Rye
      },
      colors: {
        paper: '#F9F4DA',   // background paper
      },
    },
  },
  plugins: [daisyui],
}

