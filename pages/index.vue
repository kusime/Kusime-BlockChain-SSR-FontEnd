<script setup lang="ts">
const theme = useStateTheme()
const alert = useStateAlert()
const { showAlert, alertData, alertType, alertTitle } = storeToRefs(alert)
const { data, pending, refresh, error } = await useAsyncData('get', () =>
  // https://github.com/unjs/ofetch
  $fetch<{ uid: string }>('/', {
    baseURL: 'https://kusime.icu',
    method: 'GET',
    headers: {
      Prefer: 'params=single-object',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
)

async function sendRequest() {
  const no_clint = await useFetch('/api/base_info/chain')
  console.log(no_clint.data.value?.api)
  await refresh()
  if (error.value) {
    showAlert.value = true
    alertTitle.value = 'Request Send Failed'
    alertData.value = 'Api not response normally ...'
    alertType.value = 'error'
    setTimeout(() => {
      showAlert.value = false
    }, 1500)
  } else {
    showAlert.value = true
    alertTitle.value = 'Request Send Successfully'
    alertData.value = data.value?.uid ?? 'None...'
    alertType.value = 'success'
    setTimeout(() => {
      showAlert.value = false
    }, 1500)
  }
}
</script>

<template>
  <VisualableKcard>
    <v-btn
      prepend-icon="mdi-vuetify"
      append-icon="mdi-vuetify"
      :disabled="pending"
      class="flex justify-center items-center"
      @click="sendRequest()"
    >
      <div class="relative w-[117px]">
        <transition name="fade">
          <div v-if="pending" class="absolute w-[117px] translate-y-[-4px]">
            <div class="flex flex-col items-center">
              <div class="w-full" />
              <v-progress-linear indeterminate :height="10" class="w-full" />
            </div>
          </div>
          <div v-else class="absolute -translate-y-2">Send Request</div>
        </transition>
      </div>
    </v-btn>
    <v-btn
      prepend-icon="mdi-vuetify"
      append-icon="mdi-vuetify"
      @click="theme.toggleTheme()"
    >
      Change Theme
    </v-btn>
  </VisualableKcard>
</template>
