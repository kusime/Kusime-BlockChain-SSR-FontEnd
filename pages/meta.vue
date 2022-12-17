<template>
  <div class="">
    <div class="flex flex-col items-center">
      <div>Meta data title => {{ $route.meta.title }}</div>
      <div>Meta data pageType => {{ $route.meta.pageType }}</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'My home page',
  pageType: 'typed page meta test'
})
</script>

<style scoped></style>
