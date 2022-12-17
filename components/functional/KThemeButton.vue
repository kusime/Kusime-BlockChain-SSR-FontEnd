<template>
  <v-btn
    prepend-icon="mdi-vuetify"
    append-icon="mdi-vuetify"
    class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
    @click="theme.toggleTheme()"
  >
    Change Theme
  </v-btn>
</template>

<script setup lang="ts">
const theme = useStateTheme()
</script>

<style scoped></style>
