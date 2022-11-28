<script setup lang="ts">
import { alertState } from '~~/stores/alertState'
import { themeState } from '~~/stores/themeState'
const theme = themeState()
const alert = alertState()
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
  <Kcard>
    <v-btn
      prepend-icon="mdi-vuetify"
      append-icon="mdi-vuetify"
      @click="sendRequest()"
      :disabled="pending"
      class="flex justify-center items-center"
    >
      <div class="relative w-[117px]">
        <transition name="fade">
          <div class="absolute w-[117px] translate-y-[-4px]" v-if="pending">
            <div class="flex flex-col items-center">
              <div class="w-full"></div>
              <v-progress-linear
                indeterminate
                :height="10"
                class="w-full"
              ></v-progress-linear>
            </div>
          </div>
          <div class="absolute -translate-y-2" v-else>Send Request</div>
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
  </Kcard>
</template>
