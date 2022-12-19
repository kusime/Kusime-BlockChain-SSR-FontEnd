<script lang="ts" setup>
const { currentServerState } = defineProps(['currentServerState'])
</script>
<template>
  <transition name="bounce">
    <div
      v-if="currentServerState === true"
      class="right-20 absolute badge badge-success gap-2 p-5"
    >
      <IconSuccess />
      Cluster online
    </div>
    <div
      v-else-if="currentServerState === false"
      class="right-20 absolute badge badge-error gap-2 p-5"
    >
      <IconError />
      Cluster offline
    </div>
    <div v-else class="right-20 absolute badge badge-info gap-2 p-5">
      <IconInfo />
      Checking Cluster
    </div>
  </transition>
</template>
