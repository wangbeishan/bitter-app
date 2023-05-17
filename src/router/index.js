import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Error from '../views/Error.vue'
import Profile from '../components/Profile.vue'
import UserList from '../components/UserList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/error',
            name: 'error',
            component: Error
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/users',
            name: 'Users',
            component: UserList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue'),
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

    if (to.meta.requiresAuth && !isLoggedIn) {
        next('/register')
    } else {
        next()
    }
})

export default router
