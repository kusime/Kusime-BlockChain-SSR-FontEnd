<script setup lang="ts">
const { data, pending } = await useLazyFetch('/api/cluster_info/active_nodes')
</script>

<template>
  <div class="hero min-h-screen" style="background-image: url(/background.png)">
    <FunctionalKTitle title="Welcome" />
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold text-gray-50/80">
          Kusime BlockChain
        </h1>
        <p class="mb-5 max-w-96 text-xl text-white">
          Get your wallet , mine block , then start making transaction ~
        </p>

        <FunctionalKWalletGet>Get New Wallet</FunctionalKWalletGet>
      </div>
    </div>
  </div>
</template>
