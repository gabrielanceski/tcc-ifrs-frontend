<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Modal from '@/components/modal/Modal.vue'
import { XMarkIcon, PuzzlePieceIcon, PencilSquareIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

const data = ref({
  name: 'Projeto 1',
  description: 'Descrição do projeto 1',
  company: 'Empresa 1',
  status: 'Em andamento',
  projectManager: 'Gabriel Ancesky',
  teams: [
    { name: 'Equipe 1'},
    { name: 'Equipe 2'},
    { name: 'Equipe 3'}
  ]
})

const emit = defineEmits(['close'])

function editUser() {
  router.push(`projects/edit`)
}

function projectStatusColor(status) {
  switch (status) {
    case 'Em andamento':
      return 'bg-green-100 text-green-800'
    case 'Criado':
      return 'bg-blue-100 text-blue-800'
    case 'Finalizado':
      return 'bg-red-100 text-red-800'
  }
}
</script>
<template>
  <Modal show @close="emit('close')">
    <div class="w-full p-5">
      <div class="w-full flex justify-between mb-3">
        <div class="flex space-x-2">
          <PuzzlePieceIcon class="size-6" />
          <span class="text-lg font-semibold -translate-y-0.5">Detalhes do projeto</span>
        </div>
        <button
          @click="emit('close')"
          class="text-zinc-500 hover:text-zinc-800 group -translate-y-1"
        >
          <XMarkIcon class="size-6 group-hover:stroke-2" />
        </button>
      </div>
      <div class="flex items-center *:text-sm bg-zinc-100 py-4">
        <div class="min-w-36 font-semibold px-2">Nome</div>
        <div class="px-2">{{ data?.name }}</div>
      </div>
      <div class="flex items-center *:text-sm py-4">
        <div class="min-w-36 font-semibold px-2">Documento</div>
        <div class="px-2">{{ data?.description }}</div>
      </div>
      <div class="flex items-center *:text-sm bg-zinc-100 py-4">
        <div class="min-w-36 font-semibold px-2">Empresa</div>
        <div class="px-2">{{ data?.company }}</div>
      </div>
      <div class="flex items-center *:text-sm py-4">
        <div class="min-w-36 font-semibold px-2">Administrador</div>
        <div class="px-2">{{ data?.projectManager }}</div>
      </div>
      <div class="flex items-center *:text-sm  bg-zinc-100 py-4">
        <div class="min-w-36 font-semibold px-2">Status</div>
        <span
          :class="[projectStatusColor(data?.status), 'truncate w-min flex justify-center px-4 py-0.5 rounded-md text-sm mt-1 font-medium']"
        >
                {{ data?.status }}
              </span>
      </div>
      <div class="flex items-center *:text-sm py-4">
        <div class="min-w-36 font-semibold px-2">Equipes</div>
        <span v-for="(team, index) in data?.teams" :key="index"
          :class="['text-blue-800 bg-blue-100 truncate w-min mr-2 flex justify-center px-4 py-0.5 rounded-md text-sm mt-1 font-medium']"
        >
                {{ team.name }}
              </span>
      </div>
      <div class="w-full flex justify-end mt-2">
        <button
          @click="editUser()"
          class="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline text-sm uppercase flex justify-between space-x-2 items-center"
        >
          <PencilSquareIcon class="h-5 w-5 text-white" />
          <span class="translate-y-[1px]">Editar</span>
        </button>
      </div>
    </div>
  </Modal>
</template>
