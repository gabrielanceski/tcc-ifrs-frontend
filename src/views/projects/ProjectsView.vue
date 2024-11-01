<script setup>
import Container from '@/components/containers/Container.vue'
import { ref } from 'vue'
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()

const projects = ref([{ name: 'Projeto 1', description: 'Descrição do projeto 1', company: 'Empresa 1'}, {name: 'Projeto 2', description: 'Descrição do projeto 2', company: 'Empresa 2'}])

</script>
<template>
  <div class="grid gap-5">
    <Container>
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-lg">Projetos</h1>
        <button @click.prevent="router.push('/projects/create')"
                class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Adicionar
        </button>
      </div>
    </Container>

    <Container>
      <table class="table-auto w-full">
        <thead>
        <tr class="*:text-left *:border-b *:pb-2 *:px-3 text-sm">
          <th class="border-r">Nome</th>
          <th class="border-r">Descrição</th>
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
          <td class="border-r truncate w-full font-semibold">{{ project.name }}</td>
          <td class="border-r truncate">{{ project.description }}</td>
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
</template>
