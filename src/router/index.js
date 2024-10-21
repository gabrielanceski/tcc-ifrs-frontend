import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import AboutView from '@/views/AboutView.vue'
import CompaniesView from '@/views/companies/CompaniesView.vue'
import CompanyCreateView from '@/views/companies/CompanyCreateView.vue'
import CompanyEditView from '@/views/companies/CompanyEditView.vue'
import UsersView from '@/views/users/UsersView.vue'
import UserCreateView from '@/views/users/UserCreateView.vue'
import UserEditView from '@/views/users/UserEditView.vue'

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
    },
    {
      path: '/companies/:id/edit',
      name: 'edit-company',
      component: CompanyEditView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/users/create',
      name: 'create-user',
      component: UserCreateView
    },
    {
      path: '/users/:id/edit',
      name: 'edit-user',
      component: UserEditView
    }
  ]
})

export default router
