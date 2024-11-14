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
import TeamsView from '@/views/teams/TeamsView.vue'
import TeamCreateView from '@/views/teams/TeamCreateView.vue'
import TeamEditView from '@/views/teams/TeamEditView.vue'
import ProjectsView from '@/views/projects/ProjectsView.vue'
import ProjectCreateView from '@/views/projects/ProjectCreateView.vue'
import ProjectEditView from '@/views/projects/ProjectEditView.vue'
import WorkInProgressProjectsView from '@/views/projects/WorkInProgressProjectsView.vue'

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
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView
    },
    {
      path: '/teams/create',
      name: 'create-team',
      component: TeamCreateView
    },
    {
      path: '/teams/edit',
      name: 'edit-team',
      component: TeamEditView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/projects/create',
      name: 'project-create',
      component: ProjectCreateView
    },
    {
      path: '/projects/edit',
      name: 'project-edit',
      component: ProjectEditView
    },
    {
      path: '/projects/in-progress',
      name: 'project-in-progress',
      component: WorkInProgressProjectsView
    }
  ]
})

export default router
