/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        Sky: "#00BFFF",
        darkFor: "#141414",
      },
    },
    container:{
      center: true,
      padding:{
        DEFAULT:"15px",
        sm: "30px",
        lg: "60px",
        xl: "75px",
        "2xl": "96px",
      }
    },
    fontFamily: {
      'openG': ['Gowun Batang', 'serif'],
    
    }
  },
  plugins: [],
}
