<script setup lang="ts">
const { AlertShow } = useStateAlert()
const disabled = ref(false)
const downloadedHook = async () => {
  disabled.value = true
  console.log('Downloading')
  AlertShow('Generating New Wallet...', 'info')
  const { data: pri_pub } = await get_new_wallet()
  if (pri_pub.value !== null) {
    const { private_key, public_key } = pri_pub.value
    // performing downloadedHook
    dumpString(private_key, 'private_key.txt')
    dumpString(public_key, 'public_key.txt')
    AlertShow('Wallet Download Success', 'success')
    disabled.value = false
    return
  }
  AlertShow('Wallet Download Failed', 'error')
  disabled.value = false
}
</script>

<template>
  <div>
    <InteractKButton :click-hooks="downloadedHook" :disabled="disabled"
      >Get New Wallet</InteractKButton
    >
  </div>
</template>
