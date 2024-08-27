/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#2C2B2B",
        gray: "#D9D9D9"
      },
      fontFamily: {
        pregular: ["Kodchasan-Regular", "sans-serif"],
        plight: ["Kodchasan-Light", "sans-serif"],
        pextralight: ["Kodchasan-ExtraLight", "sans-serif"],
        pbold: ["Kodchasan-Bold", "sans-serif"],
        pmedium: ["Kodchasan-Medium", "sans-serif"],
        // p: ["Kodchasan-", "sans-serif"],
      }
    },
  },
  plugins: [],
}

