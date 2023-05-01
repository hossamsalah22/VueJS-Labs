import { createRouter, createWebHistory } from 'vue-router'
import _404 from '../components/404.vue'
import WishListComponent from "@/components/bookstoreComponent.vue";
import CardsComponent from "@/components/CardComponent.vue";



const routes= [
    {
        path: '/',
        component:CardsComponent
    },
    {
        path: '/wishlist',
        component:WishListComponent
    },
    {
        path: '/:catchAll(.*)',
        component: _404
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  
export default router;