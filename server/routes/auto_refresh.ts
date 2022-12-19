let is_trigger = false // when rebuilding this will reset
export default defineEventHandler(async (event) => {
  // 1. try to fetch from the redis server
  // 2. if server have no record, try to fetch from the cluster
  const ENV = useRuntimeConfig()

  if (is_trigger === false) {
    setInterval(async () => {
      // implemented the user side refresh
      await $fetch('/api/refresher', {
        method: 'POST',
        body: {
          token: ENV.ANTI_BOT_SECURITY,
        },
      })
      // console.log('Refreshing')
    }, 2000)
    is_trigger = true // active

    return 'Auto Refresh Active'
  }
  return 'Already Enabled'
})
