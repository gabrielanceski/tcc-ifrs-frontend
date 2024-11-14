<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Modal from '@/components/modal/Modal.vue'
import { XMarkIcon, PuzzlePieceIcon, PencilSquareIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

const data = ref({
  name: "Nome do requisito",
  description: "Cenário atual da sua empresa, agentes envolvidos e suas funções, principais necessidades e desejos a serem contemplados.",
  goals: "Objetivos a serem alcançados do requisito. Métricas de sucesso e como medi-las.",
  specs: "Especificações técnicas do requisito. Ex: Tecnologias a serem utilizadas, padrões a serem seguidos, etc.",
  collaboration: "Colaboração esperada pela empresa. O que se espera da academia relativamente ao cumprimento do requisito.",
  innovation: "Áreas de inovação. Ex: BIG DATA, IoT, IA, automação, etc.",
  restrictions: "Restrições. Ex: Limitações de tempo (prazo), tecnologia, débito técnico, equipe, etc.",
  importance_level: "HIGH",
  effort_level: "LOW",
})

const emit = defineEmits(['close'])

function editRequirement() {
  router.push(`requirements/edit`)
}

function levelColor(level) {
  switch (level) {
    case 'HIGH':
      return 'bg-red-100 text-red-800'
    case 'MIDDLE':
      return 'bg-yellow-100 text-yellow-800'
    case 'LOW':
      return 'bg-green-100 text-green-800'
  }
}

function levelText(level) {
  switch (level) {
    case 'HIGH':
      return 'Alta'
    case 'MIDDLE':
      return 'Média'
    case 'LOW':
      return 'Baixa'
  }
}
</script>
<template>
  <Modal show @close="emit('close')">
    <div class="w-full p-5">
      <div class="w-full flex justify-between mb-3">
        <div class="flex space-x-2">
          <PuzzlePieceIcon class="size-6" />
          <span class="text-lg font-semibold -translate-y-0.5">Detalhes do requisito</span>
        </div>
        <button
          @click="emit('close')"
          class="text-zinc-500 hover:text-zinc-800 group -translate-y-1"
        >
          <XMarkIcon class="size-6 group-hover:stroke-2" />
        </button>
      </div>
      <div class="flex items-center *:text-sm bg-zinc-100 py-4">
        <div class="min-w-36 font-semibold px-2">Nome</div>
        <div class="px-2">{{ data?.name }}</div>
      </div>
      <div class="flex items-center *:text-sm py-4">
        <div class="min-w-36 font-semibold px-2">Documento</div>
        <div class="px-2">{{ data?.description }}</div>
      </div>
      <div class="flex items-center *:text-sm bg-zinc-100 py-4">
        <div class="min-w-36 font-semibold px-2">Objetivos</div>
        <div class="px-2">{{ data?.goals }}</div>
      </div>
      <div class="flex items-center *:text-sm py-4">
        <div class="min-w-36 font-semibold px-2">Técnica</div>
        <div class="px-2">{{ data?.specs }}</div>
      </div>
      <div class="flex items-center *:text-sm bg-zinc-100 py-4">
        <div class="min-w-36 font-semibold px-2">Colaboração</div>
        <div class="px-2">{{ data?.collaboration }}</div>
      </div>
      <div class="flex items-center *:text-sm py-4">
        <div class="min-w-36 font-semibold px-2">Inovação</div>
        <div class="px-2">{{ data?.innovation }}</div>
      </div>
      <div class="flex items-center *:text-sm bg-zinc-100 py-4">
        <div class="min-w-36 font-semibold px-2">Restrições</div>
        <div class="px-2">{{ data?.restrictions }}</div>
      </div>
      <div class="flex items-center *:text-sm py-4">
        <div class="min-w-36 font-semibold px-2">Nível de importância</div>
        <span
          :class="[levelColor(data?.importance_level), 'truncate w-min flex justify-center px-4 py-0.5 rounded-md text-sm mt-1 font-medium']"
        >
                {{ levelText(data?.importance_level) }}
              </span>
      </div>
      <div class="flex items-center *:text-sm  bg-zinc-100 py-4">
        <div class="min-w-36 font-semibold px-2">Nível de esforço</div>
        <span
          :class="[levelColor(data?.effort_level), 'truncate w-min flex justify-center px-4 py-0.5 rounded-md text-sm mt-1 font-medium']"
        >
                {{ levelText(data?.effort_level) }}
              </span>
      </div>
      <div class="w-full flex justify-end mt-2">
        <button
          @click="editRequirement()"
          class="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline text-sm uppercase flex justify-between space-x-2 items-center"
        >
          <PencilSquareIcon class="h-5 w-5 text-white" />
          <span class="translate-y-[1px]">Editar</span>
        </button>
      </div>
    </div>
  </Modal>
</template>
