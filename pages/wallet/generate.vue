<script setup lang="ts">
const a = ref('')
</script>

<template>
  <div class="">
    <InteractKInput v-model:inputs="a" />
    {{ a }}
  </div>
</template>
