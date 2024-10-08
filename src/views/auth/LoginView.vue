<script setup>
import Container from '@/components/containers/Container.vue'
import { ref } from 'vue'
import { login } from '@/composables/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  document: '',
  password: ''
})

const submit = () => {
  login(form, router, () => error.value = true, () => emit('refresh'))
}

const emit = defineEmits(['refresh'])
</script>
<template>
  <div class="grid gap-5">
    <Container>
      <h1 class="font-semibold px-20">Faça login com suas credenciais para continuar</h1>
    </Container>
    <Container>
      <div class="grid grid-cols-2 py-5 divide-x">
        <div class="px-20">
          <form @submit.prevent="submit">
            <div class="mb-4">
              <label for="document" class="block text-sm font-medium text-gray-700">Documento</label>
              <input id="document" name="document" v-model="form.document"
                     class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
              <input type="password" id="password" name="password" v-model="form.password"
                     class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
            </div>
            <div class="mb-4">
              <button type="submit"
                      class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Entrar
              </button>
            </div>
          </form>
        </div>
        <div class="flex flex-col px-20 space-y-2">
          <span class="font-semibold text-lg">Instruções para o login:</span>
          <span>Para fazer login você deverá usar algum dos seguintes documentos: Matrícula, SIAPE, CPF ou CNPJ.</span>
          <span>Caso não consiga fazer o login, entre em contato com um administrador para a recuperação da senha ou o cadastro do usuário.</span>
        </div>
      </div>
    </Container>
  </div>


</template>