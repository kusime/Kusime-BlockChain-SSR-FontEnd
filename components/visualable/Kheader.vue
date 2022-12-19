<template>
  <div class="navbar z-50">
    <div class="navbar-start gap-4">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <IconNav />
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 self-center"
        >
          <li v-for="unit in navUnits" :key="unit.navRoute">
            <NuxtLink :to="unit.navRoute" class="text-2xl">
              {{ unit.navTitle }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl"
        >Kusime BlockChain</NuxtLink
      >
      <FunctionalKConnectWallet />
      <FunctionalKDisconnectWallet />
    </div>
    <div class="navbar-center"></div>
    <div class="navbar-end gap-4">
      <FunctionalKCreateTrans />
      <FunctionalKCreateBlock />

      <RepresentServerState :current-server-state="currentServerState" />
      <!-- end function theme toggle -->
      <FunctionalKThemeButton />
    </div>
  </div>
</template>

<script setup lang="ts">
const { navBar: navUnits } = navState()
let currentServerState = ref()
let alive_counter: NodeJS.Timer
onMounted(() => {
  alive_counter = setInterval(() => {
    const { data: online } = useFetch('/alive')
    currentServerState.value = online.value
  }, 2000)
})
onUnmounted(() => {
  clearInterval(alive_counter)
})
</script>

<style scoped></style>
