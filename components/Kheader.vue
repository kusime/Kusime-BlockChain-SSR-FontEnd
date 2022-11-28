<template>
  <div class="fixed top-0 left-0 right-0 shadow-xl">
    <v-footer>
      <nav class="py-6 text-2xl text-center self-center w-full">
        {{ header }}
      </nav>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
import { layoutState } from '~~/stores/layoutState'

const { header } = layoutState()
</script>

<style scoped></style>
