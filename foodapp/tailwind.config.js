/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3333cc",
        red: "#e60000",
        secondary: "#555",
        primaryBG: "#f2f2f2",
      },
      fontFamily: {
        primary: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
