<template>
  <VisualableKheader />
  <div
    :theme="theme.currentTheme"
    class="flex min-h-screen justify-center items-center bg-base-100 transition-all duration-500"
  >
    <slot />
  </div>
  <VisualableKfooter />
</template>

<script setup lang="ts">
const theme = useStateTheme()
</script>
