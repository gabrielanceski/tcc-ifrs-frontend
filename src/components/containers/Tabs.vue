<script setup>
defineProps({
  tabs: Array,
  active: Number
})

const emit = defineEmits(['page'])

function changeTab(i) {
  emit('page', i)
}
</script>
<template>
  <div
    v-for="(tab, i) in tabs"
    :key="i"
    @click="changeTab(i)"
    class="flex w-full"
  >
    <button class="rounded-md border border-gray-300 bg-white hover:bg-zinc-100 px-3 py-1 uppercase text-sm font-semibold">
      {{ tab.label }}
    </button>
  </div>
</template>
