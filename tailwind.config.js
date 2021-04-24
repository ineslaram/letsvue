module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#5046E5',
      secondary: '#3FB27F',
      'gray-light': '#D9D9D9',
      'gray-lighter': '#e7e3e3',
      'secondary-darker': '#1d955f',
    }),
  },
}
