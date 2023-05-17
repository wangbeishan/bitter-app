<template>
    <Header v-if="userStore.isLoggedIn"></Header>
    <div class="bg-gray-100 min-h-screen">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="bg-white rounded-lg shadow-md p-8">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center">
                        <img class="w-16 h-16 rounded-full mr-4" :src="userStore.user.avatar" alt="Profile Image">
                        <div>
                            <h1 class="font-bold text-gray-900 text-2xl">{{ userStore.user.username }}</h1>
                            <p class="text-gray-500">@{{ userStore.user.username }}</p>
                        </div>
                    </div>
                    <button
                        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">关注</button>
                </div>
                <div class="flex">
                    <div class="w-1/3 pr-8">
                        <h2 class="font-bold text-gray-900 text-lg mb-4">个人信息</h2>
                        <div class="mb-4">
                            <h3 class="font-bold text-gray-700 text-sm mb-2">邮箱</h3>
                            <p class="text-gray-500">{{ userStore.user.email }}</p>
                        </div>
                    </div>
                    <div class="w-2/3">
                        <h2 class="font-bold text-gray-900 text-lg mb-4">个人简介</h2>
                        <p class="text-gray-500">暂无</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore'
import Header from './Header.vue'

const userStore = useUserStore()
</script>