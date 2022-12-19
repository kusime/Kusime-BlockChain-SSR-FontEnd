<template>
  <input
    :type="type"
    class="px-5 py-3 rounded-2xl focus:outline-none duration-500 border-4 border-[#444444] focus:border-[#42ffe9b9] w-full max-w-xs bg-[#3040449a]"
    :placeholder="placeholder"
    @change="emitValue"
    @keyup.enter.prevent="submitHook ? submitHook(val) : () => {}"
    :value="inputs"
  />
</template>

<script setup lang="ts">
const { placeholder, type, inputs, submitHook } = defineProps({
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  // v-model handler
  inputs: String,
  inputsModifiers: {
    default: () => ({}),
  },
  submitHook: {
    type: Function,
  },
})
let val = ref('')
const emits = defineEmits(['update:inputs'])
// modelModifiers handler
function emitValue(e: any) {
  const value = e.target.value
  // binding to the submitHook
  val.value = value
  emits('update:inputs', value)
}
</script>

<style scoped></style>
