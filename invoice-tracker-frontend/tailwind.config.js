/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-text-color": "#2f97da",
        "active-link": "#2f97da",
        "not-active-link": "#7b7979",
        "active-icon": "#2f97da",
        "navbar-border":"#7b7979",
      },
    },
  },
  plugins: [],
};
