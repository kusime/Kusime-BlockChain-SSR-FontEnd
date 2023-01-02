export default defineEventHandler(async (event) => {
  // 1. try to fetch from the redis server
  // 2. if server have no record, try to fetch from the cluster
  const ENV = useRuntimeConfig()
  const url = `${ENV.NODE_SERVICE}${ENV.API.POST_GET_BALANCE}`
  const { wallet_address } = await readBody(event)
  if (wallet_address === undefined) {
    return null
  }
  // check if the wallet is Mine wallet
  console.log(wallet_address === ENV.MINE_SYSTEM_PUB)
  if (wallet_address === ENV.MINE_SYSTEM_PUB) {
    console.log('received invalid wallet address')
    return null
  }
  const { balance } = await $fetch<{
    balance: string
    message: string
  }>(url, {
    method: 'POST',
    body: {
      wallet_address,
    },
  })
  if (balance === undefined) {
    return null
  }
  // not trigger the refresher

  return balance
})
