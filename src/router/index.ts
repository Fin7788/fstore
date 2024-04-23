import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import Resturant from '@/views/Resturant/Resturant'
import FoodMenu from '@/views/Resturant/FoodMenu'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Resturant',
      name: 'Resturant',
      component: Resturant,
      children: [
        {
          path: 'FoodMenu',
          component: FoodMenu
        }
      ]
    }
  ]
})

export default router
