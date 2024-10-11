<script setup>
import Container from '@/components/containers/Container.vue'
import { onMounted, ref } from 'vue'
import { useRouter} from 'vue-router'
import { PencilSquareIcon } from '@heroicons/vue/24/outline'
import { getUsers, userRoles } from '@/composables/users.js'
import UserDetailsModal from '@/views/users/UserDetailsModal.vue'

const router = useRouter()

const data = ref([])

onMounted(() => {
  getUsers(data, router)
})

function createUser() {
  router.push('/users/create')
}

const detailsDocument = ref(null);

function editUser(id) {
  router.push(`/user/${id}/edit`)
}

</script>
<template>
  <div class="grid gap-5">
    <Container>
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-lg">Usuários</h1>
        <button @click.prevent="createUser" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
          <th class="border-r">Função</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user,index) in data" :key="index" :class="[index%2 === 0 ? 'bg-zinc-100' : '', '*:py-2 *:px-3 text-sm']" >
          <td class="border-r">{{ user.document }}</td>
          <td class="border-r font-medium cursor-pointer w-full" @click="detailsDocument = user.document">{{ user.name }}</td>
          <td class="border-r">{{ userRoles[user?.role]?.label }}</td>
          <td class="flex justify-center">
            <button @click="editUser(user.id)">
              <PencilSquareIcon class="h-5 w-5 text-sky-700" />
            </button>
          </td>
        </tr>
        </tbody>
      </table>

    </Container>
  </div>

  <UserDetailsModal v-if="detailsDocument" :id="detailsDocument" @close="detailsDocument = null"/>
</template>