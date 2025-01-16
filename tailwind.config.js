/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        liwr: {
          800: "#0F0416",
          700: "#1A0F21",
          600: "#17101E",
          500: "#291F32",
          400: "#362940",
          300: "#C3AFD0",
          200: "#F3E9FC",
        },
        perl: {
          800: "#200532",
          700: "#29123E",
          600: "#7A6B86",
          500: "#9281A0",
          400: "#907EA0",
          300: "#A796B7",
          200: "#E3D4F1",
        },
      },
    },
  },
  plugins: [],
};
