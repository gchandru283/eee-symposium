/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      fontFamily:{
      'dm-sans': ['DM Sans'],
      'fira-mono': ['Fira Mono', 'monospace'],
      'inter': ['Inter'],
      'labrada': ['Labrada'],
      'lexend': ['Lexend'],
      'open-sans': ['Open Sans'],
      'oswald': ['Oswald'],
      'playfair-display': ['Playfair Display'],
      'poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}

