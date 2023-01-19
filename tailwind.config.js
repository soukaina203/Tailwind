module.exports = {
    mode:'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
       bg:{
        pink1:'#7B2869',
        gray1:"#EAE0DA"
       }}
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  