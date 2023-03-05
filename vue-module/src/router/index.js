import Vue from 'vue'
import VueRouter from 'vue-router'
import Manage from '../views/Manage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Manage',
        redirect: "/home",
        component: () => import('../views/Manage.vue'),
        children: [
            {
                path: 'home', name: '首页', component: () => import('../views/Home.vue')
            },
            {
                path: 'user', name: '用户管理', component: () => import('../views/User.vue')
            },
            {
                path: 'person', name: '个人信息', component: () => import('../views/Person.vue')
            },
            {
                path: 'file', name: '文件管理', component: () => import('../views/File.vue')
            },
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
