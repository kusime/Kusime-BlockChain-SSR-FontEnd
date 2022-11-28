import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      }
    },
    fontFamily: {
      sans: ['Bangers']
    }
  }
}
