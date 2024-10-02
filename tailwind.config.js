/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkColor: "#DAA9C8",
        yellowColor: "#FFFBDC"
      },
      screens:{
        'xs':{'min':'375px', 'max':"639px"},
        'xxs':{'max':'374px'}
      }
    },
  },
  plugins: [],
}
