/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-violet': '#FBFAFF',
        'light-gray': '#F3F3F3',
        'dark-blue' : '#0D0F33'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'montserrat': ['Montserrat']
      },
      backgroundImage: {
        'navbar-bg': "url('../public/images/Navbar_BG.png')"
      }
    },
  },
  plugins: [],
}
