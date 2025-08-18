/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
            fontFamily: {
        neue: ['"Neue Haas Display1"', 'sans-serif'],
        albert: ['"Albert Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
