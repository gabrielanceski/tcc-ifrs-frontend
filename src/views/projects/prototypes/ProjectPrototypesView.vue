<script setup>
import { ref } from 'vue'
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline/index.js'
import PrototypeDetailsModal from '@/views/projects/prototypes/PrototypeDetailsModal.vue'

const data = ref([
  { name: 'Protótipo de login' },
  { name: 'Prototipo de cadastro de pessoas' },
  { name: 'Prototipo de cadastro de empresas' },
  { name: 'Prototipo de cadastro de projetos' },
  { name: 'Prototipo de cadastro de requisitos' },
  { name: 'Prototipo de cadastro de equipes' },
  { name: 'Prototipo de cadastro de tarefas' },
  { name: 'Prototipo de cadastro de entregas' }
])

const showModal = ref(false)
</script>
<template>
  <div class="grid grid-cols-3">
    <div v-for="(prototype, index) in data" :key="index">
      <div class="bg-white border border-zinc-500 shadow-md rounded-md p-4 m-4">
        <div class="flex justify-between items-center">
          <span @click="showModal = true" class="font-semibold text-sm">{{ prototype.name }}</span>
          <div class="flex space-x-2">
            <button
              @click="showModal = true"
              class="text-zinc-500 hover:text-zinc-800 group -translate-y-1"
            >
              <PencilSquareIcon class="size-6 group-hover:stroke-2" />
            </button>
            <button
              @click="showModal = true"
              class="text-zinc-500 hover:text-zinc-800 group -translate-y-1"
            >
              <TrashIcon class="size-6 group-hover:stroke-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PrototypeDetailsModal v-if="showModal" @close="showModal = false"/>
</template>
