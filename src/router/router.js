import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import Partners from "@/pages/Partners"
import Stocks from "@/pages/Stocks"
import CafeCart from "@/pages/CafeCart"
import Basket from "@/pages/Basket"



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
    },
    {
        path: '/cafe-cart',
        component: CafeCart,
    },
    {
        path: '/basket',
        component: Basket,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;