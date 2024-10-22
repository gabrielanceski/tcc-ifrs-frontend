<script setup>
import { MagnifyingGlassIcon} from '@heroicons/vue/24/outline/index.js'

defineProps({
  placeholder: String,
  content: String,
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['submit'])

</script>
<template>
  <button
    @click.stop.prevent="emit('submit')"
    :disabled="disabled"
    :class="[
      disabled ? 'italic cursor-not-allowed' : '',
      'mt-1 block w-full text-left px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
    ]"
  >
    <MagnifyingGlassIcon class="w-4 h-4 inline-block mr-2" />
    {{ content ? content : placeholder }}
  </button>
</template>
