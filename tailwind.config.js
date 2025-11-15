/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- AÑADIDO POR GOOGLE STITCH ---
      colors: {
        "primary": "#13ec5b",
        "background-light": "#f6f8f6",
        "background-dark": "#102216",
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"]
      },
      // --- FIN DE LO AÑADIDO ---
    },
  },
  plugins: [],
}