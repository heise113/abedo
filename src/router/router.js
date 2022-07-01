import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import AllCafe from "@/pages/AllCafe"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/partners',
        component: AllCafe
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;