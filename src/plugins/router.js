import {
    createRouter,
    createWebHistory
} from 'vue-router'
import MainPages from '@/pages/MainPages/MainPages.vue'
import About from '@/pages/MainPages/AboutCompany.vue'
import Car from '@/pages/CarPark/CarPark.vue'

const routes = [{
        path: '/',
        name: 'MainPages',
        component: MainPages
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/car',
        component: Car
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router