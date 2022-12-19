<script lang="ts" setup>
// for clear use
const wrap = wallet_inputs
const { connectWallet } = useWalletState()
const submitHooks = (val: string) => {
  connectWallet(val)
}
</script>

<template>
  <InteractKInput
    :submit-hook="submitHooks"
    class="placeholder:text-white dark:placeholder:text-gray-400"
    placeholder="Wallet Address..."
    v-model:inputs="wrap"
  />
</template>
