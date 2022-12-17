<script setup lang="ts">
const chain: any[] = []
</script>

<template>
  <VisualableKcard>
    <FunctionalKSender
      :caller="get_chain"
      success-title="returned"
      failed-title="failed"
      :result="chain"
    />
    <FunctionalKThemeButton />
    {{ chain[0] }}
  </VisualableKcard>
</template>
