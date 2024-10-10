<script setup>
import Container from '@/components/containers/Container.vue'
import Input from '@/components/form/Input.vue'
import { onMounted, ref, watch } from 'vue'
import { editCompany, getCompany } from '@/composables/companies.js'
import { useRoute, useRouter } from 'vue-router'
import AlertLabel from '@/components/form/AlertLabel.vue'
import SubmitButton from '@/components/form/SubmitButton.vue'
import { useFillForm } from '@/composables/form/utils.js'

const form = ref({
  name: '',
  address: '',
  contacts: '',
  document: ''
})

const error = ref('')

const router = useRouter()

const route = useRoute()

function submit() {
  editCompany(form, route.params.id, router, processing, (err) => {
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

const data = ref(null)

onMounted(() => {
  getCompany(data, route.params.id, router, (res) => {
    useFillForm(res, form)
  })
})
</script>
<template>
  <div class="grid gap-5">
    <Container>
      <h1 class="font-bold text-lg px-20">Editar Empresa</h1>
    </Container>
    <Container>
      <form @submit.prevent="submit">
        <div class="grid grid-cols-2 py-5 divide-x">
          <div class="flex flex-col px-20 space-y-2">
            <span class="font-semibold text-lg">Edição de empresas:</span>
            <span>Edite os dados referentes a empresa.</span>
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
              disabled
              v-model="form.document"
              class="mb-4"
            />
            <AlertLabel :show="error.length > 0" :message="error" type="error" class="mb-4" />
            <div class="w-full flex justify-end">
              <SubmitButton message="Salvar" :processing="processing" />
            </div>
          </div>
        </div>
      </form>
    </Container>
  </div>
</template>
