/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A855F7",
        secondary: "#0C1F58",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
