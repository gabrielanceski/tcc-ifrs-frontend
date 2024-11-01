<script setup>
import Container from '@/components/containers/Container.vue'
import Input from '@/components/form/Input.vue'
import { ref } from 'vue'
import SubmitButton from '@/components/form/SubmitButton.vue'

const form = ref({
  name: 'Equipe 1',
  leader_id: 'Gabriel Ancesky',
  members: [],
  projects: []
})

</script>
<template>
  <div class="grid gap-5">
    <Container>
      <h1 class="font-bold text-lg px-20">Adicionar Equipe</h1>
    </Container>
    <Container>
      <form>
        <div class="grid grid-cols-2 py-5 divide-x">
          <div class="flex flex-col px-20 space-y-2">
            <span class="font-semibold text-lg">Cadastro de equipe:</span>
            <span>Insira os dados referentes a equipe.</span>
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
  </div>
</template>
