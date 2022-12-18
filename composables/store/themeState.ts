// use the useColorMode() to change the entire application color
// do not use text-white in the default color , this will not work with the theme color

export const useStateTheme = defineStore('theme', () => {
  const colorMode = useColorMode()
  const currentTheme = ref<string>(
    colorMode.value === 'system' ? 'dark' : 'light'
  )
  // register the theme Monitor
  function toggleTheme() {
    // toggleTheme
    console.log(currentTheme.value)
    if (currentTheme.value === 'dark') {
      currentTheme.value = 'light'
      document.documentElement.dataset.theme = 'light'
      document.documentElement.dataset.theme = 'light'
      return
    }

    if (currentTheme.value === 'light') {
      currentTheme.value = 'dark'
      document.documentElement.dataset.theme = 'dark'
      document.documentElement.dataset.theme = 'dark'
      return
    }
  }
  return {
    currentTheme,
    toggleTheme,
  }
})
