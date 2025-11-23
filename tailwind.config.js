/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Importante para el modo oscuro
  theme: {
    extend: {
      colors: {
        "primary": "#1DB954",
        "background-light": "#f0f2f5",
        "background-dark": "#101622",
        "card-light": "#ffffff",
        "card-dark": "#192233",
        "text-light-primary": "#1c1e21",
        "text-dark-primary": "#ffffff",
        "text-light-secondary": "#65676b",
        "text-dark-secondary": "#92a4c9",
        "border-light": "#e4e6eb",
        "border-dark": "#324467"
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"]
      },
      borderRadius: {
        "lg": "0.75rem",
        "xl": "1rem",
      },
    },
  },
  plugins: [],
}