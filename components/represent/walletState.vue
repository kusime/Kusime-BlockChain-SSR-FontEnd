<script lang="ts" setup>
const { walletRecord } = storeToRefs(useWalletState())
</script>
<template>
  <transition name="rotate">
    <div
      v-if="walletRecord.length !== 0"
      class="right-[20px] bottom-[8px] fixed badge badge-success gap-2 p-[17px]"
    >
      <IconSuccess />
      <p>Wallet Connected</p>
    </div>
    <div
      v-else
      class="right-[20px] bottom-[8px] absolute badge badge-error gap-2 p-[17px]"
    >
      <IconError />
      <p>Wallet Not Connected</p>
    </div>
  </transition>
</template>
