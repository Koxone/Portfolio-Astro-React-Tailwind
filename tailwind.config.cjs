/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx}",
  ],
  theme: {
    extend: {
            boxShadow: ['group-hover'],
      backgroundColor: ['group-hover'],
      borderColor: ['group-hover'],
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};