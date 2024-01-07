/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primaryColor: "#9771FF",
        yellowColor: "#FEB60D",
        purpleColor: "#0067FF",
        irisBlueColpr: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        },

      boxShadow: {
        panelShadow: "rgba(17, 10, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}
