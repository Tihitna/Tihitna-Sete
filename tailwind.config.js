/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkColor: "#DAA9C8",
        yellowColor: "#FFFBDC",
      },
      screens: {
        xs: { min: "375px", max: "639px" },
        xxs: { max: "374px" },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        monoton: ["Monoton", "cursive"],
        raleway: ["Raleway Dots", "cursive"],
        alexBrush: ["Alex Brush", "regular"],
        rubikMono: ['"Rubik Mono One"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
