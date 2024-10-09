/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend:{
  colors:{
    own1:"red",
    fbBlue:"#166FE5",
    fbGreen:"#42B72A"
  }
}
  },
  plugins: [],
}