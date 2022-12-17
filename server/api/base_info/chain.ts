export default defineEventHandler(async (event) => {
  // 1. try to fetch from the redis server
  // 2. if server have no record, try to fetch from the cluster
  const ENV = useRuntimeConfig()
  const cache_key = ENV.CACHE_KEY.BLOCK_CHAIN
  const url = `${ENV.NODE_SERVICE}${ENV.API.GET_BLOCK_CHAIN}`
  // refresher logic
  const request_method = event.node.req.method
  let is_refresh = undefined
  if (request_method === 'GET') {
    // checking the query parameters
    is_refresh = getQuery(event)?.refresh
  }
  if (request_method === 'POST') {
    // checking the query parameters
    is_refresh = (await readBody(event))?.refresh
  }

  const cache = await useStorage().getItem(cache_key)
  if (cache !== null && is_refresh === undefined) {
    //  cache available returning the cached value
    return cache
  }
  // fetch from the cluster ,and cache the result
  const cluster_back = await $fetch(url)
  // set the cache
  await useStorage().setItem(cache_key, cluster_back)
  return cluster_back
})
