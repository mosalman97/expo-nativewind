/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "C150F6",
      },
    },
  },
  plugins: [],
};
