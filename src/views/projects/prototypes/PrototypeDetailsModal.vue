<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Modal from '@/components/modal/Modal.vue'
import { XMarkIcon, PuzzlePieceIcon, PencilSquareIcon, PlusIcon } from '@heroicons/vue/24/outline'
import Tabs from '@/components/containers/Tabs.vue'
import ProjectFeedbackCreateModal from '@/views/projects/prototypes/ProjectFeedbackCreateModal.vue'

const router = useRouter()

const data = ref({
  name: "Protótipo de login",
  description: "Cenário atual da sua empresa, agentes envolvidos e suas funções, principais necessidades e desejos a serem contemplados.",
  requirements: [
    { name: 'Requisito de tela login' },
    { name: 'Requisito de tela de cadastro' },
    { name: 'Requisito de tela de recuperação de senha' },
    { name: 'Requisito de tela de perfil' },
    { name: 'Requisito de tela de configurações' },
    { name: 'Requisito de tela de notificações' },
    { name: 'Requisito de tela de mensagens' },
    { name: 'Requisito de tela de amigos' }
  ]
})

const feedbacks = ref([{author: 'João', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}, {author: 'Maria', feedback: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'}, {author: 'José', feedback: 'But I must explain to you how all this mistaken idea of denouncing pleasure'}])

const emit = defineEmits(['close'])

function editPrototype() {
  router.push(`prototype/edit`)
}

const tabs = ref({
  active: 0,
})

function changeTab(i) {
  console.log(i)
  tabs.value.active = i
}

function createFeedback() {
  showCreateFeedbackModal.value = true
}

const showCreateFeedbackModal = ref(false)

</script>
<template>
  <Modal show @close="emit('close')">
    <div class="w-full p-5">
      <div class="w-full flex justify-between mb-3">
        <div class="flex space-x-2">
          <PuzzlePieceIcon class="size-6" />
          <span class="text-lg font-semibold -translate-y-0.5">Detalhes do protótipo</span>
        </div>
        <button
          @click="emit('close')"
          class="text-zinc-500 hover:text-zinc-800 group -translate-y-1"
        >
          <XMarkIcon class="size-6 group-hover:stroke-2" />
        </button>
      </div>
      <div class="mb-3">
        <Tabs :tabs="[
        { label: 'Dados' },
        { label: 'Feedbacks'},
      ]" :active="tabs.active" @page="changeTab"/>
      </div>
      <div v-show="tabs.active === 0">
        <div class="flex items-center *:text-sm bg-zinc-100 py-4">
          <div class="min-w-36 font-semibold px-2">Nome</div>
          <div class="px-2">{{ data?.name }}</div>
        </div>
        <div class="flex items-center *:text-sm py-4">
          <div class="min-w-36 font-semibold px-2">Documento</div>
          <div class="px-2">{{ data?.description }}</div>
        </div>
        <div class="flex *:text-sm bg-zinc-100 py-4">
          <div class="min-w-36 font-semibold px-2">Requisitos vinculádos</div>
          <div class="px-2">
            <ul class="list-disc list-inside">
              <li v-for="(requirement, index) in data?.requirements" :key="index">{{ requirement.name }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div v-show="tabs.active === 1">
        <div v-for="(feedback, index) in feedbacks" :key="index">
          <div class="flex items-center *:text-sm bg-zinc-100 py-4">
            <div class="min-w-36 font-semibold px-2">Autor</div>
            <div class="px-2">{{ feedback.author }}</div>
          </div>
          <div class="flex items-center *:text-sm py-4">
            <div class="min-w-36 font-semibold px-2">Feedback</div>
            <div class="px-2">{{ feedback.feedback }}</div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-end mt-2">
        <button v-show="tabs.active === 0"
          @click="editPrototype()"
          class="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline text-sm uppercase flex justify-between space-x-2 items-center"
        >
          <PencilSquareIcon class="h-5 w-5 text-white" />
          <span class="translate-y-[1px]">Editar</span>
        </button>
        <button v-show="tabs.active === 1"
          @click="createFeedback()"
          class="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline text-sm uppercase flex justify-between space-x-2 items-center"
        >
          <PlusIcon class="h-5 w-5 text-white" />
          <span class="translate-y-[1px]">Adicionar feedback</span>
        </button>
      </div>
    </div>
  </Modal>

  <ProjectFeedbackCreateModal v-if="showCreateFeedbackModal" @close="showCreateFeedbackModal = false"/>
</template>
