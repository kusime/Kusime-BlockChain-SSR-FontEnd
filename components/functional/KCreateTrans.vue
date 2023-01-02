<script lang="ts" setup>
const { walletRecord, walletBalance } = storeToRefs(useWalletState())
const { AlertShow } = useStateAlert()
const Wrapper = refreshBalance

// transactions hook
const disabled = ref(false)
const Recipient = ref<string>('')
const Amount = ref<string>('')
const PrivateKey = ref<string>('')
const transferHook = async () => {
  disabled.value = true
  AlertShow('Start Transfer ~~', 'info')
  // recipient wallet check
  if (Recipient.value.length < 324 || Recipient.value.length > 1000) {
    AlertShow('Error Recipient Wallet Format', 'error')
    disabled.value = false
    return
  }
  // user private key check
  if (PrivateKey.value.length <= 1000) {
    AlertShow('Error PrivateKey Wallet Format', 'error')
    disabled.value = false
    return
  }
  // user amount check
  if (Amount.value > walletBalance.value) {
    AlertShow('Insufficient Balance', 'error')
    disabled.value = false
    return
  }

  // try to get recipient  wallet Balance
  const { data: balance } = await get_wallet_balance(Recipient.value)
  console.log(balance)
  if (balance.value === null) {
    AlertShow('Maybe Recipient Wallet is error', 'error')
    disabled.value = false
    return
  }
  // all basic information check passed try to create a new transaction

  const { data: transaction } = await create_new_transfer(
    walletRecord.value,
    Recipient.value,
    Amount.value,
    PrivateKey.value
  )
  console.log(transaction)
  if (transaction.value !== null) {
    AlertShow('Transfer Success', 'success')
    disabled.value = false
    setTimeout(refreshBalance, 3000)
    return
  }
  AlertShow('Transfer Failed', 'error')
  disabled.value = false
}

//start the wallet
</script>

<template>
  <!-- The button to open modal -->
  <label
    for="transfer"
    @click="Wrapper"
    v-if="walletRecord.length !== 0"
    class="group absolute right-[27rem] btn btn-outline btn-success gap-2 flex items-center"
  >
    <div
      class="flex flex-row gap-2 justify-center items-center text-black dark:text-white"
    >
      <p>Transfer</p>
      <IconTrans
        class="fill-orange-600 group-hover:fill-orange-700 duration-300"
      />
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

        <InteractKInput
          placeholder="Recipient Wallet"
          v-model:inputs="Recipient"
        />
        <InteractKInput
          placeholder="Your Private Key"
          v-model:inputs="PrivateKey"
        />
        <InteractKInput placeholder="Amount" v-model:inputs="Amount" />

        <InteractKButton :disabled="disabled" :click-hooks="transferHook">
          {{ disabled === false ? 'Transfer' : 'Transferring' }}
        </InteractKButton>
      </div>
    </div>
  </div>
</template>
