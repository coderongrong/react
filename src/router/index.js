import { createRouter, createWebHashHistory } from 'vue-router'

// import About from '../components/About.vue'
// import Home from '../components/Home.vue'

const routes = [
    // 匹配 /o/3549
    { 
        path: '/about',
        component: () => import('@/components/About.vue'),
        children: [
            {
                path: 'count',
                component: () => import('@/components/components/Count.vue')
            }
        ]
    },
    // 匹配 /p/books
    { path: '/home', component: () => import('@/components/Home.vue') },
    { path: '/table', component: () => import('@/components/Table/index.vue') },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

console.log('---> router', router)

export default router