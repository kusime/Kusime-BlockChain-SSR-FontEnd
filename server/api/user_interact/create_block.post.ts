export default defineEventHandler(async (event) => {
  // 1. try to fetch from the redis server
  // 2. if server have no record, try to fetch from the cluster
  const ENV = useRuntimeConfig()
  const url = `${ENV.NODE_SERVICE}${ENV.API.POST_CREATE_BLOCK}`
  const { miner_wallet } = await readBody(event)
  if (miner_wallet === undefined) {
    return null
  }
  const { block } = await $fetch<{
    block: any
    message: string
  }>(url, {
    method: 'POST',
    body: {
      miner_wallet,
    },
  })
  if (!block) {
    // error mining block
    return null
  }
  return block
})
