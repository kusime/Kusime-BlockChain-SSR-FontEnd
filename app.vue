<template>
  <NuxtLayout>
    <LazyFunctionalKalert />
    <NuxtPage
      :transition="{
        name: 'fade',
        mode: 'out-in',
      }"
    />
  </NuxtLayout>
</template>
<script setup lang="ts">
// initialize the theme
onMounted(() => {
  document.documentElement.dataset.theme =
    useStateTheme().currentTheme === 'system' ? 'light' : 'dark'
})
</script>
