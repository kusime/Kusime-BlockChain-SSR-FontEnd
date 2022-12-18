export const navState = defineStore('navState', () => {
  const navTabs = [
    ['Main', '/'],
    // ['AdderPage', '/adder'],
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
