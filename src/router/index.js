//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '../views/home.vue')
    },
    {
        path: '/landing',
        name: 'landing.index',
        component: () => import( /* webpackChunkName: "index" */ '../views/landing/index.vue')
    },
     {
        path: '/login',
        name: 'login.index',
        component: () => import( /* webpackChunkName: "index" */ '../views/login/index.vue')
    },
   
   
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router