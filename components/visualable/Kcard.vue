<script setup lang="ts">
const items = [
  { text: 'Nuxt3 Support', icon: 'mdi-flag' },
  { text: 'Tailwind Support', icon: 'mdi-flag' },
  { text: 'MID Icon Support', icon: 'mdi-flag' },
  { text: 'Pinia Support', icon: 'mdi-flag' },
  { text: 'Nuxt Builtin Route Support', icon: 'mdi-flag' },
  { text: 'TypeScript Support', icon: 'mdi-flag' },
  { text: 'Nuxt Fetch Support', icon: 'mdi-flag' }
]
</script>

<template>
  <v-card class="duration-500 transition-all md:w-[50rem]" variant="outlined">
    <div class="w-full py-5 flex justify-center items-center">
      <v-card-item class="md:w-[41rem]">
        <v-card class="mx-auto">
          <v-list class="transition-all duration-500 relative">
            <v-list-subheader>Features</v-list-subheader>
            <v-list-item v-for="(item, i) in items" :key="i">
              <template #prepend>
                <v-icon :icon="item.icon" />
              </template>

              <v-list-item-title class="md:text-center">
                {{
                  item.text
                }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
          <v-divider />
          <v-card-actions class="pt-5 flex justify-center gap-10 duration-1000">
            <slot />
          </v-card-actions>
        </v-card>
      </v-card-item>
    </div>
  </v-card>
</template>
