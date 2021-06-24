module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple-base': '#3A3054',
        'cyan-base': '#2BD0D0',
        'custom-gray': '#9E9AA8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
