<script setup lang="ts">
const items = [
  { text: 'Nuxt3 Support' },
  { text: 'Tailwind Support' },
  { text: 'MID Icon Support' },
  { text: 'Pinia Support' },
  { text: 'Nuxt Builtin Route Support' },
  { text: 'TypeScript Support' },
  { text: 'Nuxt Fetch Support' },
]
</script>

<template>
  <div
    class="flex flex-col space-y-6 transition-all duration-500 p-16 py-44 md:py-20 md:p-20 md:scale-125 bg-base-200 rounded-2xl text-base-content"
  >
    <div class="card-body">
      <!-- list for loop -->
      <h2 class="card-title">Features!</h2>
      <div class="chat chat-end" v-for="item in items">
        <div class="chat-bubble chat-bubble-success">
          {{ item.text }}
        </div>
      </div>

      <div class="divider"></div>
      <!-- action section -->
      <div class="card-actions justify-end">
        <slot />
      </div>
    </div>
  </div>
</template>
