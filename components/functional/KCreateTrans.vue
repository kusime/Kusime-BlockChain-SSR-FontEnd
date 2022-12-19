<script lang="ts" setup>
const { walletRecord, walletBalance } = storeToRefs(useWalletState())
const { AlertShow } = useStateAlert()
const Wrapper = refreshBalance

//start the wallet
</script>

<template>
  <!-- The button to open modal -->
  <label
    for="transfer"
    @click="Wrapper"
    v-if="walletRecord.length !== 0"
    class="absolute right-[27rem] btn btn-outline btn-success gap-2 flex items-center"
  >
    <div
      class="flex flex-row gap-2 justify-center items-center text-black dark:text-white"
    >
      <p>Transfer</p>
      <IconTrans class="fill-black dark:fill-white" />
    </div>
    <!-- <button class="">


    </button> -->
  </label>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="transfer" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box card relative">
      <label for="transfer" class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <!-- card container -->
      <div
        class="self-center m-auto justify-center items-center flex w-full h-full p-5 flex-col space-y-8 relative"
      >
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-title">My Balance</div>
            <div class="stat-value">{{ walletBalance }}</div>
          </div>
        </div>

        <InteractKInput placeholder="Recipient Wallet" />

        <InteractKInput placeholder="Amount" />

        <InteractKButton>Transfer</InteractKButton>
      </div>
    </div>
  </div>
</template>
