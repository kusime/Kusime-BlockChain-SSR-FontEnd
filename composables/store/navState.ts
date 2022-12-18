export const navState = defineStore('navState', () => {
  const navTabs = [
    // this is public information which will be ok with public nav bar
    ['Cluster State', '/open/cluster'], // represent the nodes ip , and its rsa keys
    ['Open Transactions State', '/open/transactions'], // represent the open transactions
    ['BlockChains State', '/open/chain'], // represent the all chains
  ]
  const navBar = navTabs.map((tabs) => {
    return {
      navTitle: tabs[0],
      navRoute: tabs[1],
    }
  })
  return {
    navBar,
  }
})
