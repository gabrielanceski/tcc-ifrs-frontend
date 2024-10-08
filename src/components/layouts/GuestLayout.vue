<script setup>
import LayoutButton from '@/components/layouts/partials/LayoutButton.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <header class="flex w-screen bg-white border-b px-60 border-zinc-300 justify-between items-center">
    <img alt="Logo" class="h-10" src="@/assets/logo.svg" />
    <div>
      <nav class="flex">
        <RouterLink to="/">
          <LayoutButton title="Início" icon="HomeIcon" :current="route.path === '/'" />
        </RouterLink>
        <RouterLink to="/about">
          <LayoutButton title="Sobre" icon="NewspaperIcon" :current="route.path === '/about'" />
        </RouterLink>
        <RouterLink to="/login">
          <LayoutButton title="Login" icon="IdentificationIcon" :current="route.path === '/login'" />
        </RouterLink>
      </nav>
    </div>
  </header>
  <div class="px-60 pt-10">
    <slot></slot>
  </div>
</template>
