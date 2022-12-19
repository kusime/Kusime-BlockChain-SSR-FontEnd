<template>
  <footer
    class="z-1 fixed opacity-90 bottom-0 left-0 right-0 footer items-center p-4 bg-neutral text-neutral-content"
  >
    <div class="items-center grid-flow-col">
      <div class="flex flex-row justify-center items-center gap-4">
        <p>Copyright © 2022 - All right reserved by Kusime</p>
        <div class="badge badge-info">
          {{ version }}
        </div>
      </div>
    </div>
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <RepresentWalletState class="" />
    </div>
  </footer>
  <!-- <footer
    class=" footer footer-center p-4 bg-base-300 text-base-content"
  >
    <div class="pb-0 flex space-x-6">

    </div>
    
  </footer> -->
</template>

<script setup lang="ts">
const { version } = useStateLayout()
</script>

<style scoped></style>
