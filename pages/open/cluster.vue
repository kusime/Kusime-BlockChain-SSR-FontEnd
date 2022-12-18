<script setup lang="ts">
const { data: node_rsa, pending } = useLazyFetch(
  '/api/cluster_info/active_nodes'
)
</script>

<template>
  <div class="flex flex-col justify-center items-center space-y-10">
    <div class="stats shadow bg-[#f3f3f3e7]">
      <div class="stat">
        <div class="stat-title">Current Available Cluster</div>
        <div class="stat-value">{{ Object.keys(node_rsa).length }}</div>
      </div>
    </div>

    <div class="overflow-x-auto w-[1000px] h-[500px]">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>NODE IP</th>
            <th>NODE RSA</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="(rsa, node) in node_rsa" :key="node" class="hover">
            <td>{{ node }}</td>
            <td>{{ rsa }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
