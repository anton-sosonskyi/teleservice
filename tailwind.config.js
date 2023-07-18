/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {},
    colors: {
      azure: "#198d99",
      white: "#ffffff",
      black: "#111516",
      "black-dark": "#1D1D1B",
      grey: "#757474",
      orange: "#e3831d",
    }
  },
  plugins: [],
}

