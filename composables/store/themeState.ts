// use the useColorMode() to change the entire application color
// do not use text-white in the default color , this will not work with the theme color

export const useStateTheme = defineStore('theme', () => {
  const colorMode = useColorMode()
  const currentTheme = ref<string>(colorMode.value)
  // colorMode type is Proxy
  watch(colorMode, () => {
    currentTheme.value = colorMode.value
  })
  // register the theme Monitor
  function toggleTheme() {
    // toggleTheme
    if (currentTheme.value === 'dark') {
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
