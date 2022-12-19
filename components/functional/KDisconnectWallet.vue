<script setup lang="ts">
const { walletRecord, walletBalance } = storeToRefs(useWalletState())
const { AlertShow } = useStateAlert()
const disconnectHook = () => {
  AlertShow('Wallet Disconnected !', 'warning')
  walletRecord.value = ''
  walletBalance.value = undefined
  wallet_inputs.value = ''
}
</script>

<template>
  <transition name="animate">
    <button
      class="absolute left-[38rem] btn btn-outline btn-warning gap-2"
      v-if="walletRecord.length !== 0"
      @click.prevent="disconnectHook"
    >
      Disconnect
      <IconWarning />
    </button>
    <div v-else></div>
  </transition>
</template>
