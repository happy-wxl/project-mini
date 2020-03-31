import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Index from '../views/index.vue'
import Product from '../views/product.vue'
import Detail from '../views/detail.vue'
import Cart from '../pages/cart.vue'
import Order from '../pages/order.vue'
import OrderConfirm from '../pages/orderConfirm.vue'
import OrderPay from '../pages/orderPay.vue'
import AliPay from '../pages/alipay.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: 'index',
                name: 'index',
                component: Index,
            },
            {
                path: 'product/:id',
                name: 'product',
                component: Product,
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: Detail,
            }
        ],

    },
    {
        path: 'cart',
        name: 'cart',
        component: Cart,
    },
    {
        path: 'order',
        name: 'order',
        component: Order,
        children: [
            {
                path: '/confirm',
                name: 'order-confirm',
                component: OrderConfirm
            },
            {
                path: '/pay',
                name: 'order-pay',
                component: OrderPay,
            },
            {
                path: '/ali-pay',
                name: 'ali-pay',
                component: AliPay,
            },
        ]

    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
    // }
]

const router = new VueRouter({
    routes
})

export default router
