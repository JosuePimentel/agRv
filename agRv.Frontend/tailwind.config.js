/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        shiny: "0 0 4px",
      },
      colors: {
        PRIMARY: {
          50: "#fff4ec",
          100: "#ffe7d3",
          200: "#ffcaa5",
          300: "#ffa56d",
          400: "#ff7432",
          500: "#ff4e0a",
          default: "#fe3300",
          700: "#cc2002",
          800: "#a11b0b",
          900: "#82190c",
          950: "#460904",
        },
        BLACK: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          default: "#212121",
        },
        WHITE: {
          50: "#f7f7f7",
          100: "#ededed",
          default: "#d9d9d9",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
      },
    },
  },
  plugins: [],
};
