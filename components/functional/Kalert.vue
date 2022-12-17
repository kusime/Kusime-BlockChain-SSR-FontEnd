<template>
  <div class="fixed top-0 left-0 right-0 z-40 pt-10 w-full translate-y-20">
    <div class="w-full flex justify-center items-center">
      <transition name="bounce">
        <v-alert
          v-if="_showAlert"
          icon="mdi-vuetify"
          :title="_alertTitle"
          :type="_alertType"
          variant="tonal"
          class="max-w-2xl"
        />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const alert = useStateAlert()
const { _showAlert, _alertType, _alertTitle } = storeToRefs(alert)
</script>

<style scoped></style>
