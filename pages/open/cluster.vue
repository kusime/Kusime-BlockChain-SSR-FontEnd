<script setup lang="ts">
const { data: node_rsa, pending } = get_nodes()
</script>

<template>
  <div v-if="!pending">
    <FunctionalKTitle title="Block Cluster" />
    <div
      class="flex flex-col justify-center items-center space-y-10 border-2 border-[#45fa20a1] p-10 rounded-2xl"
    >
      <div class="stats shadow bg-[#f3f3f3e7]">
        <div class="stat">
          <div class="stat-title text-2xl">Current Available Cluster</div>
          <div class="stat-value text-green-500">
            {{ Object.keys(node_rsa).length }}
          </div>
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
  </div>
  <VisualableKLoading v-else />
</template>
