<template>
  <div>
    Parent in parent.vue {{ $hello('world') }}
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  metaFromParent: 'metaFromParent'
})
</script>

<style scoped></style>
