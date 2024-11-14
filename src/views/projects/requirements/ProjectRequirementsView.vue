<script setup>
import { ref } from 'vue'
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline/index.js'
import { useRouter } from 'vue-router'
import RequirementDetailsModal from '@/views/projects/requirements/RequirementDetailsModal.vue'

const router = useRouter()

const data = ref([{ name: 'Requisito 1', importance_level: 'HIGH', effort_level: 'LOW'},{ name: 'Requisito 2', importance_level: 'MIDDLE', effort_level: 'HIGH'},{ name: 'Requisito 3', importance_level: 'HIGH', effort_level: 'HIGH'}])

function levelColor(level) {
  switch (level) {
    case 'HIGH':
      return 'bg-red-100 text-red-800'
    case 'MIDDLE':
      return 'bg-yellow-100 text-yellow-800'
    case 'LOW':
      return 'bg-green-100 text-green-800'
  }
}

function levelText(level) {
  switch (level) {
    case 'HIGH':
      return 'Alta'
    case 'MIDDLE':
      return 'Média'
    case 'LOW':
      return 'Baixa'
  }
}

const showModal = ref(false)
</script>
<template>
    <table class="table-auto w-full">
      <thead>
      <tr class="*:text-left *:border-b *:pb-2 *:px-3 text-sm">
        <th class="border-r">Nome</th>
        <th class="border-r">Importância</th>
        <th class="border-r">Esforço necessário</th>
        <th>Ações</th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="(requirement, index) in data"
        :key="index"
        :class="[index % 2 === 0 ? 'bg-zinc-100' : '', '*:py-2 *:px-3 text-sm']"
      >
        <td class="border-r truncate w-full font-semibold cursor-pointer" @click="showModal = true">{{ requirement.name }}</td>
        <td class="border-r truncate">
           <span
             :class="[levelColor(requirement.importance_level), 'truncate w-full flex justify-center px-4 py-0.5 rounded-md text-sm mt-1 font-medium']"
           >
                {{ levelText(requirement.importance_level) }}
              </span>
        </td>
        <td class="border-r truncate">
           <span
             :class="[levelColor(requirement.effort_level), 'truncate w-full flex justify-center px-4 py-0.5 rounded-md text-sm mt-1 font-medium']"
           >
                {{ levelText(requirement.effort_level) }}
              </span>
        </td>
        <td class="flex justify-center">
          <button @click="router.push(`/requirements/edit`)">
            <PencilSquareIcon class="h-5 w-5 text-sky-700" />
          </button>
          <button>
            <TrashIcon class="h-5 w-5 text-red-700" />
          </button>
        </td>
      </tr>
      </tbody>
    </table>

  <RequirementDetailsModal v-if="showModal" @close="showModal = false"/>
</template>