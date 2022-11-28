<template>
  <div>
    Parent in parent.vue
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  metaFromParent: 'metaFromParent',
})
</script>

<style scoped></style>
