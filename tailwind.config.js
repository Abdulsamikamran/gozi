/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E8FDF8", // Lightest
          100: "#D1FBF1",
          200: "#A3F7E3",
          300: "#75F3D5",
          400: "#47EFC7",
          500: "#1DE9B6", // Main color (your brand color)
          600: "#17BA92", // Darker for hover
          700: "#118C6E",
          800: "#0C5D49",
          900: "#062F25", // Darkest
        },
      },
    },
  },
  plugins: [],
};
