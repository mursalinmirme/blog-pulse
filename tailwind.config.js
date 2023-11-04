/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontPoopins: "'Poppins', sans-serif",
        fontNoto: "'Noto Sans', sans-serif",
      }
    },
  },
  plugins: [],
}

/* 
font-family: 'Noto Sans', sans-serif;
font-family: 'Poppins', sans-serif;
 */