/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // ...
      'cubeGreen': {
        DEFAULT: '#85c869',
      },
      'sideBarGreen': {
        DEFAULT: '#abd699',
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
