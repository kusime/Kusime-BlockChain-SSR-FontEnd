<template>
  <v-app :theme="theme.currentTheme" class="transition-all duration-300">
    <VisualableKheader />
    <v-container class="h-screen flex justify-center items-center">
      <slot />
    </v-container>
    <VisualableKfooter />
  </v-app>
</template>

<script setup lang="ts">
const theme = useStateTheme()
</script>
