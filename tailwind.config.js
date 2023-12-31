/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px, rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px, rgba(0, 0, 0, 0.063) 0px 10px 10px -3.75px",
      },
      screens: {
        xxxl: { min: "1280px" },
        xxl: { max: "1280px", min: "920px" },
        xl: { max: "920px", min: "734px" },
        sm: { max: "734px", min: "0px" },
        // xs: { max: "459px", min: "150px" },
      },
    },
  },
  plugins: [],
};
