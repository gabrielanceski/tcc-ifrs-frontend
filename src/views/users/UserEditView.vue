<script setup>
import Container from '@/components/containers/Container.vue'
import { inject, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AlertLabel from '@/components/form/AlertLabel.vue'
import SubmitButton from '@/components/form/SubmitButton.vue'
import { editUser, getUser, userRoles, resetPassword } from '@/composables/users.js'
import { useFillForm } from '@/composables/form/utils.js'
import Input from '@/components/form/Input.vue'
import { Square2StackIcon } from '@heroicons/vue/24/outline'
import { getCompany } from '@/composables/companies.js'
import InputButton from '@/components/form/InputButton.vue'
import SelectCompanyModal from '@/views/companies/SelectCompanyModal.vue'
import Tabs from '@/components/containers/Tabs.vue'

const form = ref({
  role: '',
  blocked: false
})

const error = ref('')

const router = useRouter()

const route = useRoute()

const company = ref(null)

const data = ref({
  name: '',
  document: ''
})

function submit() {
  let companyId = null;
  if (company.value) {
    companyId = company.value.id !== data.value.company_id ? company.value.id : null
  }
  editUser(form, companyId, route.params.id, router, processing, (err) => {
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



onMounted(() => {
  getUser(data, route.params.id, router, (res) => {
    useFillForm(res, form)
    if (res.company_id) {
      getCompany(company, res.company_id, router)
    }
  })
})

function blockUser() {
  useFillForm(data.value, form)
  form.value.blocked = !form.value.blocked
  submit()
}

const newPassword = ref('');

function copyPasswordToClipboard() {
  navigator.clipboard.writeText(newPassword.value)
}

const showSelectCompanyModal = ref(false);

function selectCompany(res) {
  company.value = res;
  showSelectCompanyModal.value = false;
}

const tabs = ref({
  active: 0,
})

function changeTab(i) {
  console.log(i)
  tabs.value.active = i
}

</script>
<template>
  <div class="grid gap-5">
    <Container>
      <div class="flex justify-between px-20 items-center">
        <h1 class="font-bold text-lg">Editar Usuário</h1>
        <p
          :class="[form.blocked ? 'text-red-700' : 'text-green-700', 'uppercase text-sm font-bold']"
        >
          {{ form.blocked ? 'Usuário Bloqueado' : 'Usuário ativo' }}
        </p>
      </div>
    </Container>
    <div>
      <Tabs :tabs="[
        { label: 'Dados' },
        { label: 'Equipes'}
      ]" :active="tabs.active" @page="changeTab"/>
    </div>
    <Container v-show="tabs.active === 0">
      <form @submit.prevent="submit">
        <div class="grid grid-cols-2 py-5 divide-x">
          <div class="flex flex-col px-20 space-y-2">
            <span class="font-semibold text-lg">Edição de usuário:</span>
            <span class="text-sm">Edite os dados referentes a usuário.</span>
            <span class="text-sm">Os campos de <span class="font-semibold">nome</span> e <span class="font-semibold">documento</span> não são editáveis.</span>
          </div>
          <div class="px-20 flex flex-col">
            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
            <Input id="name" type="text" placeholder="Nome" disabled v-model="data.name" class="mb-2" />
            <label for="document" class="block text-sm font-medium text-gray-700">Documento</label>
            <Input
              id="document"
              type="text"
              placeholder="Documento"
              disabled
              v-model="data.document"
              class="mb-2"
            />
            <label for="role" class="block text-sm font-medium text-gray-700">Função</label>
            <select
              id="role"
              v-model="form.role"
              class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm mb-2"
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
            <label v-if="data.company_id || data.role === 'COMPANY'" for="company" class="block text-sm font-medium text-gray-700">Empresa</label>
            <InputButton v-if="data.company_id || data.role === 'COMPANY'" id="company" type="text" placeholder="Selecionar empresa" :content="company?.name" class="mb-2" @submit="showSelectCompanyModal = true"/>
            <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
            <div v-if="newPassword" class="flex items-center space-x-2 mb-4">
              <Input
                id="password"
                type="text"
                placeholder="Nova senha"
                disabled
                v-model="newPassword"
                class="mb-2"
              />
              <button type="button" @click.stop.prevent="copyPasswordToClipboard" class="p-2 rounded-md border border-gray-300 shadow-sm -translate-y-0.5">
                <Square2StackIcon class="h-5 w-5 text-gray-700" />
              </button>
            </div>
            <SubmitButton v-else @click="resetPassword(data.document,router,(res) => {newPassword = res})" class="bg-white border-zinc-600 border text-zinc-700 hover:text-white hover:bg-zinc-700 truncate mb-4" type="button" message="Gerar nova senha" :processing="processing" />
            <AlertLabel :show="error.length > 0" :message="error" type="error" class="mb-4" />
            <div class="w-full flex justify-end space-x-2">
              <SubmitButton @click="blockUser" class="bg-zinc-600 hover:bg-zinc-700" type="button" :message="form.blocked ? 'Desbloquear' : 'Bloquear'" :processing="processing" />
              <SubmitButton message="Salvar" :processing="processing" />
            </div>
          </div>
        </div>
      </form>
    </Container>
  </div>

  <SelectCompanyModal v-if="showSelectCompanyModal" @close="showSelectCompanyModal = false" @select="selectCompany"/>
</template>
