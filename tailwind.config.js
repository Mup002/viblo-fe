/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'searchBtnBg' : '#5488C7',
        'navBg': '#0B1A33',
        'tagBg' : '#F4F4F5',
        'tagBgHover' : '#A79B9B',
        'nameColor' : '#548ED4',
        'footerBg' : '#0B1A33',
        'textFooterColor' : '#C5CED4',
        'borderFooterColor' : '#3C485C',
        'textDisplayColor' : '#ADADAD',
        'borderPage' :'#5488C7',
        'bgUpBtn' : '#5488C7',
        'bgLoginBtn' :'#409EFF',
        'textLogin':'#007BFF',
        'bgDropdown' : '#F0F0F0',
        'textDropdown' : '#606266',
        'borderBox' :'#DCDFE6',
        'bgPost':'#F6F6F7'
      }
    },
  },
  plugins: [],
}

