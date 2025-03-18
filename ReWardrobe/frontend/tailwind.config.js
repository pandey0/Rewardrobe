/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'text-shadow': '0 0 10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.8)', // Black and White text shadow
      },
    },
  },
  plugins: [],
}