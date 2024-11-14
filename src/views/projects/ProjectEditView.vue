<script setup>
import Container from '@/components/containers/Container.vue'
import Input from '@/components/form/Input.vue'
import { ref } from 'vue'
import SubmitButton from '@/components/form/SubmitButton.vue'
import Tabs from '@/components/containers/Tabs.vue'
import ProjectRequirementsView from '@/views/projects/requirements/ProjectRequirementsView.vue'
import { useRouter } from 'vue-router'
import ProjectPrototypesView from '@/views/projects/prototypes/ProjectPrototypesView.vue'

const router = useRouter()

const form = ref({
  name: 'Projeto 1',
  description: 'Descrição do projeto 1',
  company: 'Empresa 1',
  project_manager: 'Gabriel Ancesky',
  status: 'Em andamento'
})

const data = ref([{ name: 'Equipe 1', users: '2'}, {name: 'Equipe 2', users: '3'}])

const tabs = ref({
  active: 0,
})

function changeTab(i) {
  console.log(i)
  tabs.value.active = i
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
  <div class="grid gap-5">
    <Container>
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-lg">Editar projeto</h1>
        <button v-show="tabs.active === 1" @click.prevent="router.push('/teams/create')"
                class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Adicionar equipe
        </button>
        <button v-show="tabs.active === 2" @click.prevent="router.push('/requirements/create')"
                class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Adicionar requisito
        </button>
      </div>
    </Container>
    <div>
      <Tabs :tabs="[
        { label: 'Dados' },
        { label: 'Equipes'},
        { label: 'Requisitos'},
        { label: 'Protótipos'}
      ]" :active="tabs.active" @page="changeTab"/>
    </div>
    <Container  v-show="tabs.active === 0">
      <form>
        <div class="grid grid-cols-2 py-5 divide-x">
          <div class="flex flex-col px-20 space-y-2">
            <span class="font-semibold text-lg">Edição de projeto:</span>
            <span>Edite os dados referentes ao projeto.</span>
          </div>
          <div class="px-20 flex flex-col">
            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
            <Input id="name" type="text" placeholder="Nome" v-model="form.name" class="mb-2" />
            <label for="document" class="block text-sm font-medium text-gray-700">Descrição do projeto</label>
            <Input
              id="document"
              type="text"
              placeholder="Documento"
              v-model="form.description"
              class="mb-4"
            />
            <label for="document" class="block text-sm font-medium text-gray-700">Empresa</label>
            <Input
              id="document"
              type="text"
              placeholder="Documento"
              v-model="form.company"
              class="mb-4"
            />
            <label for="document" class="block text-sm font-medium text-gray-700">Administrador</label>
            <Input
              id="document"
              type="text"
              placeholder="Documento"
              v-model="form.project_manager"
              class="mb-4"
            />
            <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
            <span
              :class="[projectStatusColor(form.status), 'truncate w-full flex justify-center px-4 py-0.5 rounded-md text-sm mt-1 font-medium']"
            >
                {{ form.status }}
              </span>
            <div class="w-full flex justify-end">
              <SubmitButton message="Adicionar" />
            </div>
          </div>
        </div>
      </form>
    </Container>
    <Container v-show="tabs.active === 1">
      <table class="table-auto w-full">
        <thead>
        <tr class="*:text-left *:border-b *:pb-2 *:px-3 text-sm">
          <th class="border-r">Nome</th>
          <th>Usuários</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(team, index) in data"
          :key="index"
          :class="[index % 2 === 0 ? 'bg-zinc-100' : '', '*:py-2 *:px-3 text-sm']"
        >
          <td class="border-r truncate w-full font-semibold">{{ team.name }}</td>
          <td
            class="font-medium cursor-pointer"
          >
            {{ team.users }}
          </td>
        </tr>
        </tbody>
      </table>
    </Container>
    <Container v-show="tabs.active === 2">
      <ProjectRequirementsView />
    </Container>
    <Container v-show="tabs.active === 3">
      <ProjectPrototypesView />
    </Container>

  </div>
</template>
