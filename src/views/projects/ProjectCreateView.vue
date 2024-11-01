<script setup>
import Container from '@/components/containers/Container.vue'
import Input from '@/components/form/Input.vue'
import { ref } from 'vue'
import SubmitButton from '@/components/form/SubmitButton.vue'

const form = ref({
  name: 'Projeto 1',
  description: 'Descrição do projeto 1',
  company: 'Empresa 1',
  project_manager: 'Gabriel Ancesky',
})

</script>
<template>
  <div class="grid gap-5">
    <Container>
      <h1 class="font-bold text-lg px-20">Adicionar Projeto</h1>
    </Container>
    <Container>
      <form>
        <div class="grid grid-cols-2 py-5 divide-x">
          <div class="flex flex-col px-20 space-y-2">
            <span class="font-semibold text-lg">Cadastro de projeto:</span>
            <span>Insira os dados referentes ao projeto.</span>
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
            <div class="w-full flex justify-end">
              <SubmitButton message="Adicionar" />
            </div>
          </div>
        </div>
      </form>
    </Container>
  </div>
</template>
