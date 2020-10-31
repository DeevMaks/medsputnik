import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Healthmap = () => import('@/views/Healthmap')
const Educationmap = () => import('@/views/Educationmap')
const Activemap = () => import('@/views/Activemap')
const Socialmap = () => import('@/views/Socialmap')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Статистика',
          component: Dashboard
        },
        {
          path: 'healthmap',
          name: 'Карта здоровья',
          component: Healthmap
        },
        {
          path: 'educationmap',
          name: 'Карта компетенций',
          component: Educationmap
        },
        {
          path: 'activemap',
          name: 'Карта активности',
          component: Activemap
        },
        {
          path: 'socialmap',
          name: 'Карта социализации',
          component: Socialmap
        },
      ]
    }
  ]
}
