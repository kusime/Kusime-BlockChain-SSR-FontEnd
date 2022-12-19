<script setup lang="ts">
const { walletRecord, walletBalance } = storeToRefs(useWalletState())
const { AlertShow } = useStateAlert()
const disabled = ref(false)
const mineHook = async () => {
  disabled.value = true
  AlertShow('Start Mining ~~', 'info')
  const { data: block } = await mine_new_block(walletRecord.value)
  if (block.value !== null) {
    AlertShow('Mine Block Success', 'success')
    disabled.value = false
    setTimeout(refreshBalance, 3000)
    return
  }
  AlertShow('Mine Block Failed', 'error')
  disabled.value = false
}
</script>

<template>
  <transition name="animate">
    <button
      v-if="walletRecord.length !== 0"
      class="absolute right-[16rem] btn btn-outline btn-success gap-2 flex items-center"
      @click.prevent="mineHook"
      :disabled="disabled"
    >
      <p class="text-black dark:text-white">Mine Block</p>
      <IconHeart v-if="!disabled" />
      <IconSpinner v-else />
    </button>
    <div v-else></div>
  </transition>
</template>
