<script setup>
defineProps({
  type: String,
  placeholder: String,
  id: String,
  disabled: {
    type: Boolean,
    default: false
  }
})
const model = defineModel()
</script>
<template>
  <input :id="id" v-model="model" :type="type" :placeholder="placeholder" :disabled="disabled"
         class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
</template>