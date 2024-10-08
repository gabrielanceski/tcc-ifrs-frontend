<script setup>
import Container from '@/components/containers/Container.vue'
import { onMounted, ref } from 'vue'
import { getCompanies } from '@/composables/companies.js'
import { useRouter} from 'vue-router'

const router = useRouter()

const data = ref([])

onMounted(() => {
  getCompanies(data, router)
})

function createCompany() {
  router.push('/companies/create')
}

</script>
<template>
  <div class="grid gap-5">
    <Container>
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-lg">Empresas</h1>
        <button @click.prevent="createCompany" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Adicionar
        </button>
      </div>

    </Container>
    <Container>
      <table class="table-auto w-full">
        <thead>
          <tr class="*:text-left *:border-b *:pb-2">
            <th class="border-r pl-3">Nome</th>
            <th class="border-r pl-3">Endereço</th>
            <th class="border-r pl-3">Telefone</th>
            <th class="pl-3">Documento</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(company,index) in data" :key="index" :class="[index%2 === 0 ? 'bg-zinc-100' : '', '*:py-2']" >
            <td class="border-r pl-3">{{ company.name }}</td>
            <td class="border-r pl-3">{{ company.address }}</td>
            <td class="border-r pl-3">{{ company.contacts }}</td>
            <td class="pl-3">{{ company.document }}</td>
          </tr>
        </tbody>
      </table>

    </Container>
  </div>
</template>