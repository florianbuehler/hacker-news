// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  // all components for which Tailwind should perform tree-shaking in production builds
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: colors.trueGray,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
