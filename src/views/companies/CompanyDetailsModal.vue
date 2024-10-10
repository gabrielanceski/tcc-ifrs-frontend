<script setup>

import { onMounted, ref } from 'vue'
import { getCompany } from '@/composables/companies.js'
import { useRouter } from 'vue-router'
import Modal from '@/components/modal/Modal.vue'
import { XMarkIcon, BuildingOfficeIcon, PencilSquareIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const router = useRouter();

const data = ref(null);

const emit = defineEmits(['close']);

onMounted(() => {
  getCompany(data, props.id, router);
})

function editCompany(id) {
  router.push(`/companies/${id}/edit`)
}

</script>
<template>
  <Modal show @close="emit('close')">
    <div class="w-full p-5">
      <div class="w-full flex justify-between mb-3">
        <div class="flex space-x-2">
          <BuildingOfficeIcon class="size-6" />
          <span class="text-lg font-semibold -translate-y-0.5">Empresa</span>
        </div>
        <button @click="emit('close')" class="text-zinc-500 hover:text-zinc-800 group -translate-y-1">
          <XMarkIcon class="size-6 group-hover:stroke-2" />
        </button>
      </div>
      <div class="flex items-center *:text-sm bg-zinc-100 py-4">
        <div class="min-w-36 font-semibold px-2">Nome</div>
        <div class="px-2">{{data?.name}}</div>
      </div>
      <div class="flex items-center *:text-sm py-4">
        <div class="min-w-36 font-semibold px-2">Documento</div>
        <div class="px-2">{{data?.document}}</div>
      </div>
      <div class="flex items-center *:text-sm bg-zinc-100 py-4">
        <div class="min-w-36 font-semibold px-2">Endereço</div>
        <div class="px-2">{{data?.address}}</div>
      </div>
      <div class="flex items-center *:text-sm py-4">
        <div class="min-w-36 font-semibold px-2">Telefone</div>
        <div class="px-2">{{data?.contacts}}</div>
      </div>
      <div class="w-full flex justify-end mt-2">
        <button @click="editCompany(id)" class="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline text-sm uppercase flex justify-between space-x-2 items-center">
          <PencilSquareIcon class="h-5 w-5 text-white" />
          <span class="translate-y-[1px]">Editar</span>
        </button>
      </div>
    </div>
  </Modal>
</template>