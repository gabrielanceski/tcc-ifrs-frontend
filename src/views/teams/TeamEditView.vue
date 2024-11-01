<script setup>
import Container from '@/components/containers/Container.vue'
import Input from '@/components/form/Input.vue'
import { ref } from 'vue'
import SubmitButton from '@/components/form/SubmitButton.vue'
import Tabs from '@/components/containers/Tabs.vue'
import { TrashIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline/index.js'

const form = ref({
  name: 'Projeto 1',
  leader_id: 'Gabriel Ancesky',
  members: [],
  projects: []
})

const tabs = ref({
  active: 0,
})

function changeTab(i) {
  console.log(i)
  tabs.value.active = i
}

const users = ref([{ name: 'Gabriel Ancesky'}, {name: 'Aluno 2'}, {name: 'Aluno 3'}])

const projects = ref([{ name: 'Projeto 1', description: 'Descrição do projeto 1', company: 'Empresa 1'}, {name: 'Projeto 2', description: 'Descrição do projeto 2', company: 'Empresa 2'}])
</script>
<template>
  <div class="grid gap-5">
    <Container>
      <h1 class="font-bold text-lg px-20">Editar Equipe</h1>
    </Container>
    <div>
      <Tabs :tabs="[
        { label: 'Dados' },
        { label: 'Usuários'},
        { label: 'Projetos'}
      ]" :active="tabs.active" @page="changeTab"/>
    </div>
    <Container v-show="tabs.active === 0">
      <form>
        <div class="grid grid-cols-2 py-5 divide-x">
          <div class="flex flex-col px-20 space-y-2">
            <span class="font-semibold text-lg">Edição de equipe:</span>
            <span>Edite os dados referentes a equipe.</span>
          </div>
          <div class="px-20 flex flex-col">
            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
            <Input id="name" type="text" placeholder="Nome" v-model="form.name" class="mb-2" />
            <label for="document" class="block text-sm font-medium text-gray-700">Líder</label>
            <Input
              id="document"
              type="text"
              placeholder="Documento"
              v-model="form.leader_id"
              class="mb-4"
            />
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
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(user, index) in users"
          :key="index"
          :class="[index % 2 === 0 ? 'bg-zinc-100' : '', '*:py-2 *:px-3 text-sm']"
        >
          <td class="border-r truncate w-full font-semibold">{{ user.name }}</td>
          <td class="flex justify-center">
            <button>
              <TrashIcon class="h-5 w-5 text-red-700" />
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </Container>

    <Container v-show="tabs.active === 2">
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
            <button>
              <ArrowTopRightOnSquareIcon class="h-5 w-5 text-sky-700" />
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
