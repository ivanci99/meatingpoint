/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  extend: {
    backgroundImage: {
      'homepage-texture': "url('/modules/Startseite/Startseite.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
    },
  plugins: [],
}

