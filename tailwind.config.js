/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A6E45", // Vert principal
        secondary: "#4B5563", // Gris
      },
    },
  },
  plugins: [],
};
