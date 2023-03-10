export const useWalletState = defineStore('walletState', () => {
  // initialize the wallet
  const ENV = useRuntimeConfig() // not available in client side
  const { AlertShow } = useStateAlert()
  const walletRecord = ref('')
  const walletBalance = ref()
  async function connectWallet(user_wallet: string) {
    if (user_wallet.length < 324 || user_wallet.length > 1000) {
      AlertShow('Error Wallet Format', 'error')
      return
    }
    // try to get wallet Balance
    const { data: balance } = await get_wallet_balance(user_wallet)
    console.log(balance)
    if (balance.value === null) {
      AlertShow('Wallet Balance Retrieved Failed... null return', 'error')
      return
    }

    if (typeof parseFloat(balance.value) !== 'number') {
      AlertShow('Wallet Balance Retrieved Failed...', 'error')
      return
    }

    AlertShow('Wallet Record Success', 'success')
    walletRecord.value = user_wallet
    walletBalance.value = parseFloat(balance.value)
    return
  }
  return { connectWallet, walletRecord, walletBalance }
})
