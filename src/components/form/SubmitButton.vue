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
  },
  type: {
    type: String,
    default: 'submit'
  },
  colorClass: {
    type: String,
    default: 'bg-green-600 hover:bg-green-700'
  }
})
</script>
<template>
  <button
    :type="type"
    :disabled="processing"
    :class="[colorClass, 'w-min text-white font-bold py-2 px-4 rounded uppercase text-xs focus:outline-none focus:shadow-outline']"
  >
    <span v-if="!processing">
      {{ message }}
    </span>
    <ProcessingIcon v-else class="size-4" />
  </button>
</template>
