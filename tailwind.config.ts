/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          350: "#AEAEAE",
          650: "#5E5E5E",
          950:"#1A1628"
        },
        green: {
          550: "#28a745",
        },
        red: {
          350: "#fce9e9",
        },
        dark: {
          400: "rgba(12, 8, 30, 0.85)",
        },
        blue: {
          450: "#17a2b8",
          550: "#0923b8",
          350: "#0d99ff",
          650: "#17a2b8",
          720: "#148a9d",
          750: "#022cef",
          850: "#0923b8",
          250: "#1080f3",
        },
        orange: {
          750: "#e65626",
          450: "#FFA200",
        },
      },
    },
  },
  plugins: [],
};
