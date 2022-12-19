export const refreshBalance = async () => {
  const { walletRecord, walletBalance } = storeToRefs(useWalletState())
  const { data: balance } = await get_wallet_balance(walletRecord.value)
  walletBalance.value = balance.value
  console.log('Balance updated')
}
