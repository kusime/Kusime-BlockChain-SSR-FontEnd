export default defineNuxtPlugin(() => {
  return {
    provide: {
      // then this can be called in the template with $hello
      showAlert: () => useStateAlert().showAlert,
      // or use const {$hello}  = useNuxtApp()
    },
  }
})
