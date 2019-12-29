import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'//路由重定向
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue'),
    redirect:'/home/dian',
    children:[
      {
        path: '/home/ying',
        name: 'ying',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/ying/Ying.vue'),
      },
      {
        path: '/home/dian',
        name: 'dian',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/dian/Dian.vue'),
        redirect:'/home/dian/zheng',
        children:[
          {
            path: 'zheng',
            name: 'zheng',
            component: () => import(/* webpackChunkName: "about" */ '../views/home/dian/zheng/Zheng.vue'),
          },
          {
            path: 'ji',
            name: 'ji',
            component: () => import(/* webpackChunkName: "about" */ '../views/home/dian/ji/Ji.vue'),
          },
        ]
      },
      {
        path: '/home/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/login/Login.vue'),
      },
    ]
  },
  {
    path: '/dele/:id',
    name: 'dele',
    component: () => import(/* webpackChunkName: "about" */ '../views/dele/Dele.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
