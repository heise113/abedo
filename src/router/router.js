import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import Partners from "@/pages/Partners"
import Stocks from "@/pages/Stocks"


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/partners',
        component: Partners
    },
    {
        path: '/stocks',
        component: Stocks,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;