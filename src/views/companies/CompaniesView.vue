<script setup>
import Container from '@/components/containers/Container.vue'
import { onMounted, ref } from 'vue'
import { getCompanies } from '@/composables/companies.js'
import { useRouter} from 'vue-router'
import { PencilSquareIcon } from '@heroicons/vue/24/outline'
import CompanyDetailsModal from '@/views/companies/CompanyDetailsModal.vue'

const router = useRouter()

const data = ref([])

onMounted(() => {
  getCompanies(data, router)
})

function createCompany() {
  router.push('/companies/create')
}

const detailsId = ref(null);

function editCompany(id) {
  router.push(`/companies/${id}/edit`)
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
          <tr class="*:text-left *:border-b *:pb-2 *:px-3 text-sm">
            <th class="border-r">Documento</th>
            <th class="border-r">Nome</th>
            <th class="border-r">Endereço</th>
            <th class="border-r">Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(company,index) in data" :key="index" :class="[index%2 === 0 ? 'bg-zinc-100' : '', '*:py-2 *:px-3 text-sm']" >
            <td class="border-r">{{ company.document }}</td>
            <td class="border-r font-medium cursor-pointer" @click="detailsId = company.id">{{ company.name }}</td>
            <td class="border-r">{{ company.address }}</td>
            <td class="border-r">{{ company.contacts }}</td>
            <td class="flex justify-center">
              <button @click="editCompany(company.id)">
                <PencilSquareIcon class="h-5 w-5 text-sky-700" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </Container>
  </div>

  <CompanyDetailsModal v-if="detailsId" :id="detailsId" @close="detailsId = null"/>
</template>