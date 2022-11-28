export const themeState = defineStore('theme', () => {
  const colorMode = useColorMode()
  const currentTheme = ref<string>(colorMode.value)
  // colorMode type is Proxy
  watch(colorMode, () => {
    currentTheme.value = colorMode.value
  })
  // register the theme Monitor
  function toggleTheme() {
    // toggleTheme
    if (currentTheme.value == 'dark') {
      colorMode.preference = 'light'
      currentTheme.value = 'light'
    } else {
      colorMode.preference = 'dark'
      currentTheme.value = 'dark'
    }
  }
  return {
    currentTheme,
    toggleTheme,
  }
})
