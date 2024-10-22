<script setup>
import Modal from '@/components/modal/Modal.vue'
import { XMarkIcon, BuildingOfficeIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getCompanies } from '@/composables/companies.js'

const emit = defineEmits(['close', 'select'])

const router = useRouter()

const data = ref([])

onMounted(() => {
  getCompanies(data, router)
})

</script>
<template>
  <Modal show @close="emit('close')">
    <div class="w-full p-5">
      <div class="w-full flex justify-between mb-3">
        <div class="flex space-x-2">
          <BuildingOfficeIcon class="size-6" />
          <span class="text-lg font-semibold -translate-y-0.5">Empresa</span>
        </div>
        <button
          @click="emit('close')"
          class="text-zinc-500 hover:text-zinc-800 group -translate-y-1"
        >
          <XMarkIcon class="size-6 group-hover:stroke-2" />
        </button>
      </div>
      <table class="table-auto w-full">
        <thead>
        <tr class="*:text-left *:border-b *:pb-2 *:px-3 text-sm">
          <th class="border-r">Documento</th>
          <th class="border-r">Nome</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(company, index) in data"
          :key="index"
          :class="[index % 2 === 0 ? 'bg-zinc-100' : '', '*:py-2 *:px-3 text-sm']"
        >
          <td class="border-r">{{ company.document }}</td>
          <td class="border-r font-medium cursor-pointer w-full" @click="emit('select', company)">
            {{ company.name }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </Modal>
</template>
