<script setup>
import Container from '@/components/containers/Container.vue'
import Input from '@/components/form/Input.vue'
import { ref, watch } from 'vue'
import { createCompany } from '@/composables/companies.js'
import { useRouter } from 'vue-router'
import AlertLabel from '@/components/form/AlertLabel.vue'
import SubmitButton from '@/components/form/SubmitButton.vue'

const form = ref({
  name: '',
  address: '',
  contacts: '',
  document: ''
})

const error = ref('')

const router = useRouter()

function submit() {
  createCompany(form, router, processing, (err) => {
    error.value = err.message
  })
}

const processing = ref(false)

watch(
  form,
  () => {
    error.value = ''
  },
  { deep: true }
)
</script>
<template>
  <div class="grid gap-5">
    <Container>
      <h1 class="font-bold text-lg px-20">Adicionar Empresa</h1>
    </Container>
    <Container>
      <form @submit.prevent="submit">
        <div class="grid grid-cols-2 py-5 divide-x">
          <div class="flex flex-col px-20 space-y-2">
            <span class="font-semibold text-lg">Cadastro de empresas:</span>
            <span>Insira os dados referentes a empresa.</span>
          </div>
          <div class="px-20 flex flex-col">
            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
            <Input id="name" type="text" placeholder="Nome" v-model="form.name" class="mb-2" />
            <label for="address" class="block text-sm font-medium text-gray-700">Endereço</label>
            <Input
              id="address"
              type="text"
              placeholder="Endereço"
              v-model="form.address"
              class="mb-2"
            />
            <label for="phone" class="block text-sm font-medium text-gray-700">Telefone</label>
            <Input
              id="phone"
              type="text"
              placeholder="Telefone"
              v-model="form.contacts"
              class="mb-2"
            />
            <label for="document" class="block text-sm font-medium text-gray-700">Documento</label>
            <Input
              id="document"
              type="text"
              placeholder="Documento"
              v-model="form.document"
              class="mb-4"
            />
            <AlertLabel :show="error.length > 0" :message="error" type="error" class="mb-4" />
            <div class="w-full flex justify-end">
              <SubmitButton message="Adicionar" :processing="processing" />
            </div>
          </div>
        </div>
      </form>
    </Container>
  </div>
</template>
