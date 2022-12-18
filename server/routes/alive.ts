export default defineEventHandler(async (event) => {
  // 1. try to fetch from the redis server
  // 2. if server have no record, try to fetch from the cluster
  const ENV = useRuntimeConfig()
  const url = `${ENV.NODE_SERVICE}${ENV.API.GET_ALIVE}`

  // fetch from the cluster ,and cache the result
  try {
    await $fetch(url)
    return true
  } catch {
    return false
  }
})
