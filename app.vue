<template>
  <NuxtLayout>
    <LazyFunctionalKalert />
    <NuxtPage
      :transition="{
        name: 'fade',
        mode: 'out-in',
      }"
    />
  </NuxtLayout>
</template>
