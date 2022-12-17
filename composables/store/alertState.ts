type alertTypes = 'error' | 'success'
export const useStateAlert = defineStore('alert', () => {
  const alertData = ref('')
  const alertTitle = ref('')
  const showAlert = ref(false)
  const alertType = ref<alertTypes>('success')
  return {
    alertData,
    showAlert,
    alertType,
    alertTitle
  }
})
