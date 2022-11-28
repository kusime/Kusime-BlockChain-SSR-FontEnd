<template>
  <div class="fixed bottom-0 left-0 right-0 shadow-2xl shadow-black">
    <v-footer>
      <nav
        class="py-6 text-2xl text-center self-center w-full dark:text-green-500 text-blue-500"
      >
        {{ footer }}
      </nav>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
import { layoutState } from '~~/stores/layoutState'

const { footer } = layoutState()
</script>

<style scoped></style>
