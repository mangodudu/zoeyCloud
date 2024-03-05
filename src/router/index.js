/*
 * @Author: zoey
 * @Date: 2023-11-09 20:00:23
 * @LastEditors: zoey
 * @LastEditTime: 2023-12-28 10:48:03
 * @Description: 请填写简介
 */
import { createRouter, createWebHistory } from 'vue-router'
const Login = () => import('../views/Login/index.vue')
const Layout = () => import('../views/Layouts/index.vue')
const Category = () => import('../views/Category/index.vue')
const RecycleBin = () => import('../views/RecycleBin/index.vue')
const Message = () => import('../views/Message/index.vue')
const Setting=()=>import('../views/Setting/index.vue')

const routes = [
  {

    path: '/',
    component: Layout,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: Category,
      },
      {
        path: 'category',
        name: 'category',
        component: Category
      },
      {
        path: 'recyclebin',
        name: 'recyclebin',
        component: RecycleBin
      },
      {
        path: 'message',
        name: 'message',
        component: Message
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login

  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const { requireAuth } = to.meta
  if (requireAuth) {
    const Authorization = localStorage.getItem('Authorization')
    if (Authorization) next()
    else router.push('/login')
  } else {
    next()
  }
})
export default router