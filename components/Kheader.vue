<template>
  <div class="z-50 fixed top-0 left-0 right-0 shadow-2xl">
    <v-footer>
      <nav
        class="py-6 text-2xl text-center self-center w-full dark:text-green-500 text-blue-500"
      >
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
