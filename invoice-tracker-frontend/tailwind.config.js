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
      green: '#059669',
      'logo-text-color': '#2f97da',
      'active-link': '#2f97da',
      'not-active-link': '#7b7979',
      'active-icon': '#2f97da',
      'navbar-border': '#7b7979',
    },
  },
  plugins: [],
}
