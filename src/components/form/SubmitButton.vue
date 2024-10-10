<script setup>

import ProcessingIcon from '@/components/icons/ProcessingIcon.vue'

defineProps({
  processing: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: 'Enviar'
  }
})

</script>
<template>
  <button type="submit" :disabled="processing"
          class="w-min bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    <span v-if="!processing">
      {{ message }}
    </span>
    <ProcessingIcon v-else class="size-4"/>
  </button>
</template>