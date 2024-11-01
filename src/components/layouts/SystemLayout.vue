<script setup>
import LayoutButton from '@/components/layouts/partials/LayoutButton.vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { logout } from '@/composables/auth.js'
import { inject } from 'vue'

defineProps({
  isLoggedIn: Boolean
})

const emit = defineEmits(['refresh'])

const route = useRoute()
const router = useRouter()

const currentUser = inject('currentUser')
</script>
<template>
  <header class="w-screen bg-white border-zinc-300 flex justify-center">
    <div class="flex w-full justify-between items-center bg-white border-b px-60 max-w-[1920px]">
      <img alt="Logo" class="h-10" src="@/assets/logo.svg" />
      <div>
        <nav class="flex">
          <RouterLink to="/">
            <LayoutButton title="Início" icon="HomeIcon" :current="route.path === '/'" />
          </RouterLink>
          <RouterLink to="/teams">
            <LayoutButton title="Equipes" icon="UserGroupIcon" :current="route.path === '/teams'" />
          </RouterLink>
          <RouterLink to="/projects">
            <LayoutButton title="Projetos" icon="PuzzlePieceIcon" :current="route.path === '/projects'" />
          </RouterLink>
          <RouterLink
            to="/companies"
            v-if="isLoggedIn && currentUser?.role === ('MASTER' || 'ADMIN')"
          >
            <LayoutButton
              title="Empresas"
              icon="BuildingOffice2Icon"
              :current="route.path === '/companies'"
            />
          </RouterLink>
          <RouterLink to="/users" v-if="isLoggedIn && currentUser?.role === ('MASTER' || 'ADMIN')">
            <LayoutButton
              title="Usuários"
              icon="UsersIcon"
              :current="route.path === '/users'"
            />
          </RouterLink>
          <RouterLink to="/login" v-show="!isLoggedIn">
            <LayoutButton
              title="Login"
              icon="IdentificationIcon"
              :current="route.path === '/login'"
            />
          </RouterLink>
          <button v-show="isLoggedIn" @click="logout(router, () => emit('refresh'))">
            <LayoutButton title="Sair" icon="ArrowLeftStartOnRectangleIcon" />
          </button>
        </nav>
      </div>
    </div>
  </header>
  <div class="pt-10 w-full flex justify-center">
    <div class="max-w-[1920px] px-60 w-full">
      <slot></slot>
    </div>
  </div>
</template>
