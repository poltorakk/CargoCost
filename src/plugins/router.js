import {
    createRouter,
    createWebHistory
} from 'vue-router'
import MainPages from '@/pages/MainPages/MainPages.vue'
import About from '@/pages/MainPages/AboutCompany.vue'
import Car from '@/pages/CarPark/CarPark.vue'

const routes = [{
        path: '/',
        name: 'House',
        component: MainPages
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/car',
        name: 'Car',
        component: Car
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router