// this will only run one time when the nuxt performing the build process
export default defineEventHandler(async (event) => {
  const SECURITY_KEY = useRuntimeConfig().ANTI_BOT_SECURITY
  const provided_token = (await readBody(event))?.token

  if (provided_token === undefined || provided_token !== SECURITY_KEY) {
    return 'refresh failed, credentials error or not provided'
  }

  const refresh_chain = () =>
    $fetch('/api/base_info/chain', {
      method: 'GET',
      query: {
        refresh: true,
      },
    })

  const refresh_trans = () =>
    $fetch('/api/base_info/transactions', {
      method: 'GET',
      query: {
        refresh: true,
      },
    })
  const refresh_cluster_info = () =>
    $fetch('/api/cluster_info/active_nodes', {
      method: 'GET',
      query: {
        refresh: true,
      },
    })

  try {
    refresh_chain()
    refresh_trans()
    refresh_cluster_info()
    return 'refresh success'
  } catch (error) {
    console.log(error)
    return 'refresh failed'
  }
})
