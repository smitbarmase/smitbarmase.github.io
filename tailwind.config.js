const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: false,
    content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
