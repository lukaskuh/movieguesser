/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Amulya", "sans-serif"],
        body: ["Synonym", "sans-serif"],
      },
    },
  },
  plugins: [],
}