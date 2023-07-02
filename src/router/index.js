import { createRouter, createWebHashHistory } from 'vue-router'
import { _replace } from './utils'

// import { storeToRefs } from 'pinia'
// import { userInfo } from '@/stores/counte.js'
// console.log('userInfo', userInfo)
// const store = userInfo()
// const { user } = storeToRefs(store)
// console.log(user)
// const { person } = toRaw(user.value)
// import About from '../components/About.vue'
// import Home from '../components/Home.vue'

const routes = [
  // 匹配 /o/3549
  // {
  //     path: '/about',
  //     component: () => import(/* webpackChunkName: "about" */ '@/components/About.vue'),
  //     children: [
  //         {
  //             path: 'count',
  //             component: () => import('@/components/components/Count.vue')
  //         }
  //     ]
  // },
  // 匹配 /p/books
  // { path: '/home', component: () => import(/* webpackChunkName: "home" */ '@/components/Home.vue') },
  {
    path: '/table',
    component: () =>
      import(/* webpackChunkName: "table" */ '@/components/Table/index.vue'),
  },
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "table" */ '@/pages/Login/index.vue'),
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "table" */ '@/pages/Login/index.vue'),
  },
  {
    path: '/main',
    component: () =>
      import(/* webpackChunkName: "table" */ '@/pages/Main/index.vue'),
    children: [
      {
        path: 'home',
        meta: {
          name: '首页'
        },
        component: () =>
          import(/* webpackChunkName: "table" */ '@/pages/Home/index.vue'),
      },
      {
        path: 'about',
        meta: {
          name: '分类'
        },
        component: () =>
          import(/* webpackChunkName: "table" */ '@/pages/About/index.vue'),
      },
      {
        path: 'detail',
        meta: {
          name: '详情'
        },
        component: () =>
          import(/* webpackChunkName: "table" */ '@/pages/Detail/index.vue'),
      },
      {
        path: 'choice',
        meta: {
          name: '精选'
        },
        component: () =>
          import(/* webpackChunkName: "table" */ '@/pages/Choice/index.vue'),
      },
      {
        path: 'person',
        meta: {
          name: '个人'
        },
        component: () =>
          import(/* webpackChunkName: "table" */ '@/pages/Person/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

router.beforeEach((to, from, next) => {
  // ...
  if (localStorage.getItem('USERINFO')) {
    document.title = to.meta.name || '未知'
    next()
  } else {
    localStorage.clear()
    next()
  }
})

export default router
