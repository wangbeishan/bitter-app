<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/userStore';

const user = ref({
  username: '',
  email: '',
  password: ''
})

const isInvalid = computed(() => {
  return user.value.password.length < 8 || !/\d+/.test(user.value.password) || !/[a-zA-Z]+/.test(user.value.password)
})

const store = useUserStore()

const register = () => {
  store.register(user.value)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Hi, 加入这个社区吧</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="register">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">
              用户名
            </label>
            <div class="mt-1">
              <input v-model="user.username" id="username" name="username" type="text" autocomplete="username" required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              邮箱
            </label>
            <div class="mt-1">
              <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              密码
            </label>
            <div class="mt-1">
              <input v-model="user.password" id="password" name="password" type="password" autocomplete="current-password"
                required
                :class="['appearance-none', 'block', 'w-full', 'px-3', 'py-2', 'border', 'rounded-md', 'shadow-sm', { 'border-red-500': isInvalid }]"
                class="{ 'border-gray-300': !isInvalid, 'focus:outline-none': !isInvalid, 'focus:ring-green-500': !isInvalid, 'focus:border-greed-500': !isInvalid }"
                placeholder="********">
            </div>
            <p v-if="isInvalid" class="mt-2 text-sm text-red-600" id="password-error">
              你的密码必须至少8个字符长，并且包含至少一个数字和一个字母。</p>
          </div>

          <div>
            <button type="submit" :class="{ 'bg-green-500': !isInvalid, 'bg-gray-400 cursor-default': isInvalid }"
              :disabled="isInvalid"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              注册
            </button>
          </div>

          <div class="mt-6">
            <p class="text-sm font-medium text-gray-700">
              已有账户？立即
              <router-link to="/login" class="text-green-500 hover:text-green-600">
                登入
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>