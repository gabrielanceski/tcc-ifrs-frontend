<script setup>
import Container from '@/components/containers/Container.vue'
import { ref } from 'vue'
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import ProjectDetailsModal from '@/views/projects/ProjectDetailsModal.vue'

const router = useRouter()

const projects = ref([{ name: 'Projeto 1', description: 'Descrição do projeto 1', company: 'Empresa 1', status: 'Em andamento'}, {name: 'Projeto 2', description: 'Descrição do projeto 2', company: 'Empresa 2', status: 'Em andamento'}, {name: 'Projeto 3', description: 'Descrição do projeto 3', company: 'Empresa 3', status: 'Em andamento'}])

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

const showDetails = ref(false);
</script>
<template>
  <div class="grid gap-5">
    <Container>
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-lg">Projetos em andamento</h1>
      </div>
    </Container>

    <Container>
      <table class="table-auto w-full">
        <thead>
        <tr class="*:text-left *:border-b *:pb-2 *:px-3 text-sm">
          <th class="border-r">Nome</th>
          <th class="border-r">Descrição</th>
          <th class="border-r">Status</th>
          <th class="border-r">Empresa</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(project, index) in projects"
          :key="index"
          :class="[index % 2 === 0 ? 'bg-zinc-100' : '', '*:py-2 *:px-3 text-sm']"
        >
          <td class="border-r truncate w-full font-semibold" @click="showDetails = true">{{ project.name }}</td>
          <td class="border-r truncate">{{ project.description }}</td>
          <td class="border-r truncate">
           <span
             :class="[projectStatusColor(project.status), 'truncate w-full flex justify-center px-4 py-0.5 rounded-md text-sm mt-1 font-medium']"
           >
                {{ project.status }}
              </span>
          </td>
          <td class="border-r truncate">{{ project.company }}</td>
          <td class="flex justify-center">
            <button @click="router.push(`/projects/edit`)">
              <PencilSquareIcon class="h-5 w-5 text-sky-700" />
            </button>
            <button>
              <TrashIcon class="h-5 w-5 text-red-700" />
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </Container>
  </div>

  <ProjectDetailsModal v-if="showDetails" @close="showDetails = false"/>
</template>
