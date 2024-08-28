/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headerorange:'#faa107',
        headerblue:'#052351',
        sectiong1:'#ffedd4',
        sectiong2:'#fee0bb',
        section2bg:'#fff4e7'
      }
    },
  },
  plugins: [],
}