<template>
  <button
    class="btn"
    prepend-icon="mdi-vuetify"
    append-icon="mdi-vuetify"
    :disabled="pending"
    @click="sendRequest()"
  >
    <div class="relative w-[117px]">
      <transition name="fade">
        <div v-if="pending" class="absolute w-[117px] translate-y-[-4px]">
          <div class="flex flex-col items-center">
            <div class="w-full" />
            <progress class="progress w-full"></progress>
          </div>
        </div>
        <div v-else class="absolute -translate-y-2">Send Request</div>
      </transition>
    </div>
  </button>
</template>

<script setup lang="ts">
// caller = ()=> useLazyFetch("api address",{other configuration}) ==> ssr return
const { caller, successTitle, failedTitle, result } = defineProps({
  caller: {
    type: Function,
    required: true,
  },
  successTitle: {
    type: String,
    required: true,
    default: 'Success',
  },
  failedTitle: {
    type: String,
    required: true,
    default: 'Failed',
  },
  result: {
    // we use result[0] to store the request result
    type: Array,
    required: true,
  },
})

const alert = useStateAlert()
const { data, pending, error } = await caller()
async function sendRequest() {
  if (error.value) {
    alert.AlertShow(failedTitle, 'error')
  } else {
    result[0] = data
    alert.AlertShow(successTitle, 'success')
  }
}
</script>
