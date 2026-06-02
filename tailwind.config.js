/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003D82',
        accent: '#E63946',
        dark: '#1A1A1A',
        light: '#F8F9FA',
      },
    },
  },
  plugins: [],
}
