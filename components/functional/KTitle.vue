<script setup lang="ts">
const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <Head>
      <Title>
        {{ title }}
      </Title>
    </Head>
  </div>
</template>
