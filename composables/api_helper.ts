export const get_chain = () => useLazyFetch('/api/base_info/chain')
export const get_transactions = () =>
  useLazyFetch('/api/base_info/transactions')
