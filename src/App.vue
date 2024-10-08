<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GuestLayout from '@/components/layouts/SystemLayout.vue'
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
  <GuestLayout :is-logged-in="isLoggedIn" @refresh="refreshData">
    <RouterView @refresh="refreshData" />
  </GuestLayout>
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

</template>
