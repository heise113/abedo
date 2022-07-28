import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import Partners from "@/pages/Partners"
import Stocks from "@/pages/Stocks"
import CafeCart from "@/pages/CafeCart"
import Basket from "@/pages/Basket"
import Registration from "@/pages/Registration"
import Confirmation from "@/pages/Confirmation";
import forgetPass from "@/pages/forgetPass";



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
    },
    {
        path: '/registration',
        component: Registration,
    },
    {
        path: '/confirmation',
        component: Confirmation,
    },
    {
        path: '/remind',
        component: forgetPass,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;