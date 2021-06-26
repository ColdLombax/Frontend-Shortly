module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple-base': '#3A3054',
        'cyan-base': '#2BD0D0',
        'custom-gray': '#9E9AA8',
        'custom-black': '#34313D',
        'custom-white': '#EFF1F7',
      },
      backgroundImage: {
        'mobile-shorten-bg': 'url(/src/assets/bg-shorten-mobile.svg)',
        'desktop-shorten-bg': 'url(/src/assets/bg-shorten-desktop.svg)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
