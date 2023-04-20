import { createRouter, createWebHashHistory } from 'vue-router'
import { _replace } from './utils'
// import About from '../components/About.vue'
// import Home from '../components/Home.vue'

const routes = [
    // 匹配 /o/3549
    { 
        path: '/about',
        component: () => import(/* webpackChunkName: "about" */ '@/components/About.vue'),
        children: [
            {
                path: 'count',
                component: () => import('@/components/components/Count.vue')
            }
        ]
    },
    // 匹配 /p/books
    { path: '/home', component: () => import(/* webpackChunkName: "home" */ '@/components/Home.vue') },
    { path: '/table', component: () => import(/* webpackChunkName: "table" */ '@/components/Table/index.vue') },
]

// _replace(routes)

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router