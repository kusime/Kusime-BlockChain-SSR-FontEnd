export const get_chain = () => useLazyFetch('/api/base_info/chain')
export const get_transactions = () =>
  useLazyFetch('/api/base_info/transactions')
export const get_nodes = () => useLazyFetch('/api/cluster_info/active_nodes')
export const get_new_wallet = () =>
  useLazyFetch('/api/user_interact/create_wallet')
export const get_wallet_balance = (wallet_address: string) => {
  console.log(wallet_address)
  return useLazyFetch('/api/user_interact/get_balance', {
    method: 'POST',
    body: {
      wallet_address,
    },
  })
}
