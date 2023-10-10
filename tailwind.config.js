/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans"],
        "fira-mono": ["Fira Mono", "monospace"],
        'inter': ["Inter"],
        'labrada': ["Labrada"],
        'lexend': ["Lexend"],
        "open-sans": ["Open Sans"],
        'oswald': ["Oswald"],
        "playfair-display": ["Playfair Display"],
        'poppins': ["Poppins"],
        "fira-sans-condensed": ["Fira Sans Condensed"],
        'roboto': ["Roboto"],
        "roboto-condensed": ["Roboto Condensed"],
        "sofia-sans-condensed": ["Sofia Sans Condensed"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.tap-highlight-transparent': {
          '-webkit-tap-highlight-color': 'transparent',
          'tap-highlight-color': 'transparent',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
