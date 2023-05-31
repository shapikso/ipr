/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/headerImage.jpg')",
      },
      colors: {
        'header-bg': '#222B32',
        'button-bg': '#2091F9',
        'button-bg-hover': '#2d9aff',
        'white-button-hover-bg': '#d9d9d9',
        'pricing-bg': '#252B42',
        'input-bg': '#F5F5F5',
        'input-border': '#E8E8E8',
        'text-color': '#252B42',
      },
      boxShadow: {
        'form': '0px 13px 19px rgba(0, 0, 0, 0.07)',
      },
      fontFamily: {
        'graphik': ['Graphik', 'sans-serif']
      },
    },
  },
  plugins: [],
}

