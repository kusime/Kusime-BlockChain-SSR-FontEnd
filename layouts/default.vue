<template>
  <v-app :theme="theme.currentTheme" class="transition-all duration-300">
    <Kheader />
    <Kalert />
    <v-container class="h-screen flex justify-center items-center">
      <slot />
    </v-container>
    <Kfooter />
  </v-app>
</template>

<script setup lang="ts">
import { themeState } from '~~/stores/themeState'

const theme = themeState()
</script>
