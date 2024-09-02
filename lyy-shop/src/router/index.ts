import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const layout = () => import('@/layout/Layout.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/Home.vue'),
        children: [
          {
            path: ':categoryId',
            component: () => import('@/views/home/Home.vue'),
          },
        ],
        meta: {},
      },
    ],
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'search',
        component: () => import('@/views/Search.vue'),
      },
    ],
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'cart',
        component: () => import('@/views/cart/Cart.vue'),
      },
    ],
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'user',
        component: () => import('@/views/User.vue'),
        meta: {
          needAuth: true,
        },
      },
    ],
  },
  {
    path: '/product/:id',
    component: () => import('@/views/Product.vue'),
    props: true,
  },
  {
    path: '/login',
    component: () => import('@/views/Auth.vue'),
  },
  {
    path: '/signup',
    component: () => import('@/views/Auth.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 导航守卫，检查用户是否登录
router.beforeEach((to) => {
  const loginUser = useLoginUserStore()
  const notification = useNotificationStore()

  if (to.meta.needAuth) {
    if (!loginUser.isLogin) {
      notification.addNotice({
        id: Date.now(),
        msg: '请登录后再访问！',
        status: 'warning',
      })
      return '/login'
    }
  }
})

export default router
