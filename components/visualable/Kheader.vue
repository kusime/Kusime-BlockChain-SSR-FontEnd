<template>
  <div class="navbar z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
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
    </div>
    <div class="navbar-center">
    </div>
    <div class="navbar-end gap-4">
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
