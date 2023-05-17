import { defineStore, storeToRefs } from "pinia"
import { ref } from "vue"
import { axios } from "../index"
import router from '../router/index'
import CryptoJS from 'crypto-js'

export const useUserStore = defineStore('userStore', () => {
    const user = ref(JSON.parse(localStorage.getItem('user')) || {})
    const isLoggedIn = ref(JSON.parse(localStorage.getItem('isLoggedIn')) || false)

    // -----------------------------------------------------
    const test = () => {
        axios.get('/test')
            .then((response) => {
                console.log('Config: ' + response.config)
                console.log('Data: ' + response.data)
            })
            .catch((error) => {
                console.log(error.config)
            })
    }
    // -----------------------------------------------------


    const register = (newUser) => {
        newUser.password = CryptoJS.MD5(newUser.password).toString()
        axios.post('/register', newUser)
            .then((response) => {
                if (response.status === 200) {
                    alert("注册成功，即将跳转登陆页面")
                    //延迟执行页面跳转
                    setTimeout(() => {
                        router.push('/login')
                    }, 1000)
                }
            })
            .catch((error) => {
                console.log(error.config)
            })
    }

    const login = async (logUser) => {
        logUser.password = CryptoJS.MD5(logUser.password).toString()
        await axios.post('/login', logUser)
            .then((response) => {
                if (response.status === 200 && response.data.token) {
                    user.value = response.data.user
                    isLoggedIn.value = true
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('user', JSON.stringify(user.value))
                    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn.value))
                    
                    router.push('/')
                }
            })
            .catch((error) => {
                console.log(error.config)
            })
    }

    const logout = () => {
        user.value = null
        isLoggedIn.value = false
        localStorage.removeItem('user')
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('token')

        router.push('/')
    }

    const getUserByEmail = async (email) => {
        let user = null
        await axios.get(`/user/${email}`)
            .then((response) => {
                if (response.status === 200 && response.data.user) {
                    user = response.data.user
                }
            })
            .catch((error) => {
                console.log(error.config)
            })
        return user
    }

    const getUsers = async () => {
        let users = null
        await axios.get('/users')
            .then((response) => {
                if (response.status === 200 && response.data.users) {
                    users = response.data.users
                }
            })
            .catch((error) => {
                console.log(error.config)
            })
        return users
    }

    return { user, isLoggedIn, register, login, logout, test, getUserByEmail, getUsers }
})