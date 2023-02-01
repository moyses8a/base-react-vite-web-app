/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'mountain-meadow': {
          DEFAULT: '#20CB98',
          50: '#B0F3DF',
          100: '#9EF0D8',
          200: '#7BEAC9',
          300: '#58E5BB',
          400: '#35DFAC',
          500: '#20CB98',
          600: '#189B74',
          700: '#116A4F',
          800: '#093A2B',
          900: '#010907',
        },
      },
    },
  },
  plugins: [],
};
