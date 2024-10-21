<script setup>
import Container from '@/components/containers/Container.vue'
import Input from '@/components/form/Input.vue'
import { inject, onMounted, ref, watch } from 'vue'
import { createCompany, getCompany } from '@/composables/companies.js'
import { useRoute, useRouter } from 'vue-router'
import AlertLabel from '@/components/form/AlertLabel.vue'
import SubmitButton from '@/components/form/SubmitButton.vue'
import { createUser, getUser, userRoles } from '@/composables/users.js'
import { useFillForm } from '@/composables/form/utils.js'

const form = ref({
  role: '',
  blocked: false
})

const error = ref('')

const router = useRouter()

const route = useRoute()

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

const data = ref(null);

onMounted(() => {
  getUser(data, route.params.id, router, (res) => {
    useFillForm(res, form)
  })
})
</script>
<template>
  <div class="grid gap-5">
    <Container>
      <h1 class="font-bold text-lg px-20">Editar Usuário</h1>
    </Container>
    <Container>
      <form @submit.prevent="submit">
        <div class="grid grid-cols-2 py-5 divide-x">
          <div class="flex flex-col px-20 space-y-2">
            <span class="font-semibold text-lg">Edição de usuário:</span>
            <span>Edite os dados referentes a usuário.</span>
          </div>
          <div class="px-20 flex flex-col">
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
            <AlertLabel :show="error.length > 0" :message="error" type="error" class="mb-4" />
            <div class="w-full flex justify-end">
              <SubmitButton message="Salvar" :processing="processing" />
              <SubmitButton type="button" message="Bloquear" :processing="processing" />
            </div>
          </div>
        </div>
      </form>
    </Container>
  </div>
</template>
