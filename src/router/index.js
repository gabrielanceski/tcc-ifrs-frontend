import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import AboutView from '@/views/AboutView.vue'
import CompaniesView from '@/views/companies/CompaniesView.vue'
import CompanyCreateView from '@/views/companies/CompanyCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/companies',
      name: 'companies',
      component: CompaniesView
    },
    {
      path: '/companies/create',
      name: 'create-company',
      component: CompanyCreateView
    }
  ]
})

export default router
