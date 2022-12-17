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
      error: '#ff0033',
      transparent: 'transparent',

      grey: { light: '#f9f9f9', DEFAULT: 'rgb(108, 117, 125)', dark: 'rgb(52, 58, 64)' },
    },
    extend: {
      scale: {
        98: '98%',

        99: '99%',
      },
      animation: {
        wiggle: 'wiggle 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate-X(0px)' },
          '50%': { transform: 'translate-X(4px)' },
        },
      },
      borderWidth: {
        10: '10px',
        12: '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
