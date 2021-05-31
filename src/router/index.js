import Vue from 'vue'
import VueRouter from 'vue-router'
import SetUp from '../views/SetUp.vue'
import Detail from '../views/Detail.vue'
import store from '../store'
// import {Logger} from '@/common/logger';

// const logger = new Logger('router');


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'SetUp' },
  },
  {
    path: '/setup',
    name: 'SetUp',
    component: SetUp,
    meta: { setUp: true }
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {requiredInit: true},
    children: [
      {
      path: 'detail/:id',
      name: 'Detail',
      component: Detail
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.setUp)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const initFlag = store.getters['app/getInitFlag']
    if (initFlag) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredInit)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const initFlag = store.getters['app/getInitFlag']
    if (!initFlag) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
