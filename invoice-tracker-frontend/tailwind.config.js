/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      yeollowLightCegedim: '#fec35d',
      yellowDarkCegedim: '#df9007',
      blueCegedim: '#2f97da',
      darkGrey: '#7b7979',
      lightGrey: '#d0cecf ',
      black: '#000',
      white: '#fff',
      darkBlue: '#4338ca',
      red: '#dc2626',
    },
  },
  plugins: [],
}

