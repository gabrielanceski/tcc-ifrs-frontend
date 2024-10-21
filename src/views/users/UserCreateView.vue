<script setup>
import Container from '@/components/containers/Container.vue'
import Input from '@/components/form/Input.vue'
import { inject, ref, watch } from 'vue'
import { createCompany } from '@/composables/companies.js'
import { useRouter } from 'vue-router'
import AlertLabel from '@/components/form/AlertLabel.vue'
import SubmitButton from '@/components/form/SubmitButton.vue'
import { createUser, userRoles } from '@/composables/users.js'

const form = ref({
  name: '',
  role: 'STUDENT',
  password: '',
  document: ''
})

const repeatPassword = ref('')

const error = ref('')

const router = useRouter()

function submit() {
  if (form.value.password !== repeatPassword.value) {
    error.value = 'As senhas não coincidem'
    return
  }
  createUser(form, router, processing, (err) => {
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

const currentUser = inject('currentUser')
</script>
<template>
  <div class="grid gap-5">
    <Container>
      <h1 class="font-bold text-lg px-20">Adicionar Usuário</h1>
    </Container>
    <Container>
      <form @submit.prevent="submit">
        <div class="grid grid-cols-2 py-5 divide-x">
          <div class="flex flex-col px-20 space-y-2">
            <span class="font-semibold text-lg">Cadastro de usuários:</span>
            <span>Insira os dados referentes a usuário.</span>
          </div>
          <div class="px-20 flex flex-col">
            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
            <Input id="name" type="text" placeholder="Nome" v-model="form.name" class="mb-2" />
            <label for="document" class="block text-sm font-medium text-gray-700">Documento</label>
            <Input
              id="document"
              type="text"
              placeholder="Documento"
              v-model="form.document"
              class="mb-4"
            />
            <label for="role" class="block text-sm font-medium text-gray-700">Função</label>
            <select
              id="role"
              v-model="form.role"
              class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm mb-4"
            >
              <option
                v-show="role.rolesCanManipulate.includes(currentUser?.role)"
                v-for="(role, index) in userRoles"
                :value="role.name"
                :key="index"
              >
                {{ role.label }}
              </option>
            </select>
            <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
            <Input
              id="password"
              type="password"
              placeholder="Crie uma senha"
              v-model="form.password"
              class="mb-2"
            />
            <label for="repeatPassword" class="block text-sm font-medium text-gray-700"
              >Repita a Senha</label
            >
            <Input
              id="repeatPassword"
              type="password"
              placeholder="Repita a senha"
              v-model="repeatPassword"
              class="mb-2"
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
