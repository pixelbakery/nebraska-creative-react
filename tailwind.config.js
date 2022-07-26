/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      heading: ['Archivo', 'sans-serif'],
      body: ['Roboto, sans-serif'],
    },
    colors: {
      black: '#121212',
      white: '#ffffff',
      gray: 'rgb(108, 117, 125)',
      grey: 'rgb(108, 117, 125)',
      'grey-dark': 'rgb(52, 58, 64)',
      'gray-dark': 'rgb(52, 58, 64)',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
