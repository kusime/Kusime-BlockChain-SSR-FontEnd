export default defineEventHandler(async (event) => {
  // 1. try to fetch from the redis server
  // 2. if server have no record, try to fetch from the cluster
  const ENV = useRuntimeConfig()
  const url = `${ENV.NODE_SERVICE}${ENV.API.POST_GET_BALANCE}`
  const { wallet_address } = await readBody(event)
  if (wallet_address === undefined) {
    return null
  }
  const { balance } = await $fetch<{
    balance: number
    message: string
  }>(url, {
    method: 'POST',
    body: {
      wallet_address,
    },
  })
  console.log(balance)
  if (balance === undefined) {
    return null
  }
  // not trigger the refresher
  return balance
})
