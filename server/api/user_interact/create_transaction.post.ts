export default defineEventHandler(async (event) => {
  // 1. try to fetch from the redis server
  // 2. if server have no record, try to fetch from the cluster
  const ENV = useRuntimeConfig()
  const url = `${ENV.NODE_SERVICE}${ENV.API.POST_CREATE_TRANSACTION}`
  const { sender_wallet, recipient_wallet, amount, sender_privatekey } =
    await readBody(event)
  // checking the requirements of the transactions
  if (!(sender_wallet && recipient_wallet && amount && sender_privatekey)) {
    return null
  }
  const { transaction } = await $fetch<{
    transaction: any
    message: string
  }>(url, {
    method: 'POST',
    body: { sender_wallet, recipient_wallet, amount, sender_privatekey },
  })
  if (!transaction) {
    // error mining block
    return null
  }

  // trigger the refresher
  await $fetch('/api/refresher', {
    method: 'POST',
    body: {
      token: ENV.ANTI_BOT_SECURITY,
    },
  })
  return transaction
})
