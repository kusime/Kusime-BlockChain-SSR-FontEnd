export const get_chain = () => useLazyFetch('/api/base_info/chain')
export const get_transactions = () =>
  useLazyFetch('/api/base_info/transactions')
export const get_nodes = () => useLazyFetch('/api/cluster_info/active_nodes')
export const get_new_wallet = () =>
  useLazyFetch('/api/user_interact/create_wallet')
export const get_wallet_balance = (wallet_address: string) => {
  return useLazyFetch('/api/user_interact/get_balance', {
    method: 'POST',
    body: {
      wallet_address,
    },
  })
}
export const mine_new_block = (miner_wallet: string) => {
  return useLazyFetch('/api/user_interact/create_block', {
    method: 'POST',
    body: {
      miner_wallet,
    },
  })
}
export const create_new_transfer = (
  sender_wallet: string,
  recipient_wallet: string,
  amount: string,
  sender_privatekey: string
) => {
  return useLazyFetch('/api/user_interact/create_transaction', {
    method: 'POST',
    body: {
      sender_wallet,
      recipient_wallet,
      amount,
      sender_privatekey,
    },
  })
}
