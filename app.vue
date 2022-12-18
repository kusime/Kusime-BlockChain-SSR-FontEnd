<template>
  <LazyFunctionalKalert />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
// initialize the theme
onMounted(() => {
  document.documentElement.dataset.theme =
    useStateTheme().currentTheme === 'system' ? 'light' : 'dark'
})
</script>
