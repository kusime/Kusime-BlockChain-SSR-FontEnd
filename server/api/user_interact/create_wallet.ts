export default defineEventHandler(async (event) => {
  // 1. try to fetch from the redis server
  // 2. if server have no record, try to fetch from the cluster
  const ENV = useRuntimeConfig()
  const url = `${ENV.NODE_SERVICE}${ENV.API.GET_NEW_WALLET}`
  const { private_key, public_key } = await $fetch<{
    private_key: string
    public_key: string
    message: string
  }>(url)
  if (!(public_key && private_key)) {
    return null
  }
  // trigger the refresher
  $fetch('/api/refresher', {
    method: 'POST',
    body: {
      token: ENV.ANTI_BOT_SECURITY,
    },
  })
  return { private_key, public_key }
})
