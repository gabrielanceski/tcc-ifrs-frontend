<script setup>
import { RouterView, useRouter } from 'vue-router'
import SystemLayout from '@/components/layouts/SystemLayout.vue'
import { onMounted, ref, watch, provide } from 'vue'
import { getLoggedInUser, getToken, hasToken } from '@/composables/auth.js'
const isLoggedIn = ref(false)

const router = useRouter()

onMounted(() => {
  getToken(router)
  isLoggedIn.value = hasToken()
  if (hasToken()) {
    getLoggedInUser(currentUser, router)
  }
})

const currentUser = ref(null)

function refreshData() {
  isLoggedIn.value = hasToken()
  if (hasToken()) {
    getLoggedInUser(currentUser, router)
  }
}

provide('currentUser', currentUser)

watch(
  () => router.currentRoute,
  () => {
    getToken(router)
    refreshData()
  }
)
</script>

<template>
  <SystemLayout :is-logged-in="isLoggedIn" @refresh="refreshData">
    <RouterView @refresh="refreshData" />
  </SystemLayout>
</template>
