/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      // ...
      'cubeBlue': {
        DEFAULT: '#005475',
      },
      'sideBarGreen': {
        DEFAULT: '#007CAD',
      },
      'white': {
        DEFAULT: '#FFFFFF',
      },
      'gold': {
        DEFAULT: '#d7b72a',
      },
      'bgWhite': {
        DEFAULT: '#F7F7F7',
      },
      'bgBlack': {
        DEFAULT: '#111111',
      },
      'bgSecondaryBlack': {
        DEFAULT: '#3a3a3a',
      },
      'bgThirdBlack': {
        DEFAULT: '#303030',
      },
      'aquaBlue': {
        DEFAULT: '#35b7ff',
      }
    },
    extend: {
      fontFamily: {
        'Roboto':['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
      function ({ addVariant }) {
          addVariant('child', '& > *');
          addVariant('child-hover', '& > *:hover');
      }
  ],
  mode: 'jit',
}
