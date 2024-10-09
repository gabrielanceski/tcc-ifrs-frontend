<script setup>
import { computed } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: false
  },
  show: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    required: false,
    default: 'error',
    validator(value) {
      return ['error', 'success', 'warning', 'info'].includes(value)
    }
  }
})

const classes = computed(() => {
  return {
    'bg-red-100 text-red-800 border-red-400': props.type === 'error',
    'bg-green-100 text-green-800 border-green-400': props.type === 'success',
    'bg-yellow-100 text-yellow-800 border-yellow-400': props.type === 'warning',
    'bg-blue-100 text-blue-800 border-blue-400': props.type === 'info'
  }
})
</script>
<template>
  <Transition
    name="fade"
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="show"
      :class="[classes, 'p-2 border rounded-md text-sm flex items-center justify-center space-x-2']"
    >
      {{ message }}
    </div>
  </Transition>
</template>
