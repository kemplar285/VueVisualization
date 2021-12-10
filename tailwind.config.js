module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      tableLayout: ['hover', 'focus']
    }
  },
  plugins: []
}
