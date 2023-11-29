/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-photo":
          "url('https://codenight.ir/assets/images/topSectionBackground.svg')",
      },
      colors: {
        green: {
          550: "#28a745",
        },
        red: {
          350: "#fce9e9",
        },
        dark: {
          700: "#01072c",

          600: "#1c1f38",
        },
        blue: {
          450: "#17a2b8",
          550: "#0923b8",
          350:'#0d99ff',
          650: "#17a2b8",
          720: "#148a9d",
          750: "#022cef",
          850: "#0923b8",
          250: "#1080f3",
        },
        orange: {
          750: "#e65626",
          250: "#fcbe28",
        },
        gray:{
          1010:'#061b33',
          650:'#35384d',
          750:"#35384d",
          550:'#35384d'
        }
      },
    },
  },
  plugins: [],
};