/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
          'backgroundOne':'#C9A899',
          'backgroundTwo':' #FDFDFD',
          'fontMain':'#2E2528',
          'Red':'red'
          
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.20rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        'new': '2.2rem',
      }
    },
  },
  plugins: [],
}

