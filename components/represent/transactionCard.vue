<script setup lang="ts">
const { sender, recipient, amount, timestamp, signature } = defineProps({
  sender: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
  signature: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- component -->
  <!-- This is an example component -->
  <div
    class="flex items-center justify-center overflow-visible border-4 border-[#ffad76d7] rounded-2xl p-2"
  >
    <div class="bg-white shadow-xl duration-500 transition-all">
      <div class="rounded-2xl text-black">
        <div
          class="md:grid md:grid-cols-2 bg-[#dddddda4] md:space-y-0 space-y-1 p-4 border-b"
        >
          <p class="text-gray-600">Timestamp</p>
          <p class="overflow-x-auto">{{ timestamp }}</p>
        </div>
        <div
          class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
        >
          <p class="text-gray-600">Sender Wallet</p>
          <p class="truncate">{{ sender }}</p>
        </div>
        <div
          class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
        >
          <p class="text-gray-600">Recipient Wallet</p>
          <p class="truncate">{{ recipient }}</p>
        </div>
        <div
          class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
        >
          <p class="text-gray-600">Transaction Amount</p>
          <p class="truncate">{{ amount }}</p>
        </div>
        <div
          class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
        >
          <p class="text-gray-600">Signature</p>
          <p class="truncate">{{ signature }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
