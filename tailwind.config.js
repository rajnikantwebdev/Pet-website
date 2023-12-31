/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Josefin Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1110px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#062d3e',
          hover: '#021f2C',
        },
        cream: '#ebe3cc',
        orange: {
          DEFAULT: '#ed5c01',
          hover: '#e45a03',
        },
        yellow: '#fbbd08',
      },
    },
  },
  plugins: [],
}

