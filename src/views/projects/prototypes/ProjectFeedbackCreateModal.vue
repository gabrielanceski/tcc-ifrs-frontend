<script setup>
import Modal from '@/components/modal/Modal.vue'
import { XMarkIcon, PuzzlePieceIcon, PlusIcon } from '@heroicons/vue/24/outline'
import Input from '@/components/form/Input.vue'

const emit = defineEmits(['close'])

</script>
<template>
  <Modal show @close="emit('close')">
    <div class="w-full p-5">
      <div class="w-full flex justify-between mb-3">
        <div class="flex space-x-2">
          <PuzzlePieceIcon class="size-6" />
          <span class="text-lg font-semibold -translate-y-0.5">Adicionar feedback do protótipo</span>
        </div>
        <button
          @click="emit('close')"
          class="text-zinc-500 hover:text-zinc-800 group -translate-y-1"
        >
          <XMarkIcon class="size-6 group-hover:stroke-2" />
        </button>
      </div>

      <label for="feedback" class="block text-sm font-medium text-gray-700">Feedback</label>
      <Input
        id="feedback"
        type="text"
        placeholder="Feedback"
        class="mb-4"
      />

      <div class="w-full flex justify-end mt-2">
        <button
                class="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline text-sm uppercase flex justify-between space-x-2 items-center"
        >
          <PlusIcon class="h-5 w-5 text-white" />
          <span class="translate-y-[1px]">Adicionar</span>
        </button>
      </div>
    </div>
  </Modal>
</template>
