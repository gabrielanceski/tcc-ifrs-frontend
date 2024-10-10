<script setup>
import { RouterView } from 'vue-router'
import SystemLayout from '@/components/layouts/SystemLayout.vue'
import { onMounted, ref } from 'vue'
import { hasToken } from '@/composables/auth.js'
// import HelloWorld from './components/HelloWorld.vue'
const isLoggedIn = ref(false)

onMounted(() => {
  isLoggedIn.value = hasToken();
})

function refreshData() {
  isLoggedIn.value = hasToken();
}
</script>

<template>
  <SystemLayout :is-logged-in="isLoggedIn" @refresh="refreshData">
    <RouterView @refresh="refreshData" />
  </SystemLayout>


</template>
