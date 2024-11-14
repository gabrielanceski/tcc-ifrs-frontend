<script setup>
import Container from '@/components/containers/Container.vue'
import Input from '@/components/form/Input.vue'
import { ref } from 'vue'
import SubmitButton from '@/components/form/SubmitButton.vue'

const form = ref({
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
  <div class="grid gap-5">
    <Container>
      <h1 class="font-bold text-lg px-20">Editar Requisito</h1>
    </Container>
    <Container>
      <form>
        <div class="">
          <div class="flex flex-col px-20 space-y-2 mb-5">
            <span class="font-semibold text-lg">Edição de requisitos:</span>
            <span>Edite os dados referentes ao requisito.</span>
          </div>
          <div class="px-20 flex flex-col">
            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
            <Input id="name" type="text" placeholder="Nome" v-model="form.name" class="mb-2" />
            <label for="description" class="block text-sm font-medium text-gray-700">Descrição</label>
            <Input
              id="description"
              type="text"
              placeholder="Descrição do requisito"
              v-model="form.description"
              class="mb-4"
            />
            <label for="goals" class="block text-sm font-medium text-gray-700">Objetivos</label>
            <Input
              id="goals"
              type="text"
              placeholder="Objetivos a serem alcançados"
              v-model="form.goals"
              class="mb-4"
            />
            <label for="specs" class="block text-sm font-medium text-gray-700">Especificações técnicas</label>
            <Input
              id="specs"
              type="text"
              placeholder="Especificações técnicas"
              v-model="form.specs"
              class="mb-4"
            />
            <label for="collaboration" class="block text-sm font-medium text-gray-700">Colaboração</label>
            <Input
              id="collaboration"
              type="text"
              placeholder="Colaboração esperada pela empresa"
              v-model="form.collaboration"
              class="mb-4"
            />
            <label for="innovation" class="block text-sm font-medium text-gray-700">Inovação</label>
            <Input
              id="innovation"
              type="text"
              placeholder="Áreas de inovação"
              v-model="form.innovation"
              class="mb-4"
            />
            <label for="restrictions" class="block text-sm font-medium text-gray-700">Restrições</label>
            <Input
              id="restrictions"
              type="text"
              placeholder="Restrições"
              v-model="form.restrictions"
              class="mb-4"
            />
            <label for="importance_level" class="block text-sm font-medium text-gray-700">Nível de importância</label>
            <div class="mt-1 mb-4 flex items-center w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              <span
                :class="[levelColor(form.importance_level), 'truncate w-min flex justify-center px-4 py-0.5 rounded-md text-sm font-medium']"
              >
                  {{ levelText(form.importance_level) }}
                </span>
            </div>
            <label for="effort_level" class="block text-sm font-medium text-gray-700">Nível de esforço</label>
            <div class="mt-1 mb-4 flex items-center w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm">
              <span
                :class="[levelColor(form.effort_level), 'truncate w-min flex justify-center px-4 py-0.5 rounded-md text-sm font-medium']"
              >
                  {{ levelText(form.effort_level) }}
                </span>
            </div>
            <div class="w-full flex justify-end">
              <SubmitButton message="Adicionar" />
            </div>
          </div>
        </div>
      </form>
    </Container>
  </div>
</template>
