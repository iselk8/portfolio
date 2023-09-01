/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#141414",
        light: "#f5f5f5",
        primary: "#FF5753", // 240,86,199
        primaryDark: "#FF5753", // 80,230,217
      },
    },
  },
  plugins: [],
};
