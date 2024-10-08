<script setup>
import * as heroicon from '@heroicons/vue/24/outline'
import * as heroiconSolid from '@heroicons/vue/24/solid'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false,
    default: 'XMarkIcon'
  },
  current: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
<template>
  <div
    :class="[
      current ? 'border-zinc-700 bg-zinc-50' : 'border-transparent',
      'flex flex-col w-min min-w-20 hover:border-zinc-700 group items-center justify-center border-b-4 transition-all pt-1.5'
    ]"
  >
    <component
      :is="current ? heroiconSolid[icon] : heroicon[icon]"
      class="size-5 group-hover:stroke-2"
    />
    <span :class="[current ? 'font-semibold' : '', 'text-xs group-hover:font-semibold mt-0.5']">{{
      title
    }}</span>
  </div>
</template>
