module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {  
      kaushan: ['kaushan Script'],    
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: '#6000f2',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
