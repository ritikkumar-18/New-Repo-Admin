/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs':'300px',
      'sm':'300px',
      'md':'960px',
      'lg':'1024px',
    },
    extend: {
      animation:{
        slideIn:'slideIn 1.5s ease-in-out forwards',
      },
      
      keyframes:{
        slideIn:{
          '0%':{transform: 'translateY(-100%)'},
          '100%':{ transform: 'translateY(0)'},
          
        },
      },
    },
  },
  plugins: [],
}