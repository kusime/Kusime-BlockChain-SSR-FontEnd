type alertTypes = 'error' | 'success'
export const useStateAlert = defineStore('alert', () => {
  const _showAlert = ref(false)
  const _alertTitle = ref('')
  const _alertType = ref<alertTypes>('success')

  const AlertShow = (title: string, type: 'success' | 'error') => {
    // prepare the alert content
    _showAlert.value = true
    _alertTitle.value = title
    _alertType.value = type
    // set the alert hider
    setTimeout(() => {
      _showAlert.value = false
    }, 1500)
  }

  return {
    AlertShow,
    // private , aiming to the KAlert component
    _alertTitle,
    _showAlert,
    _alertType,
  }
})
