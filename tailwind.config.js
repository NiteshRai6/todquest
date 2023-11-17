/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F01C21",
        dark: "#091431",
        lightGrey: "#D9D9D9",
        green: "#3BA615",
        lightPink: "rgba(255, 255, 255, 0.85)",
        colorLayer: "rgba(255, 255, 255, 0.70)"
      },
      gap: {
        "6.5": "25px"
      },
      boxShadow: {
        popularTabsShadow: "4px 4px 60px 0px rgba(0, 0, 0, 0.04)",
        buttonShadow: "6px 6px 60px 0px rgba(0, 0, 0, 0.07)"
      },
      padding: {
        cardPd: "16px 23px 15px 22px"
      }
    },
  },
  plugins: [],
}

