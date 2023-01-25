module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header:{
          black:"#15151C",
          red:"#FF0000",
          hero:"#19222B",
          black2:"#17161C",
          service:"#1F1E24"
        }
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        desktop: '1536px',
        // => @media (min-width: 1280px) { ... }
      },
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
