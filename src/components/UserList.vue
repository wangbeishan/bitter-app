<template>
    <Header v-if="userStore.isLoggedIn"></Header>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class=" flex justify-center text-3xl font-bold tracking-tight text-gray-900">用户列表</h1>
      </div>
    </header>
    <div class="flex justify-center">
        <ul role="list" class="divide-y divide-gray-100">
            <li v-for="person in users" :key="person.email" class="flex justify-center gap-x-6 py-5">
                <div class="flex gap-x-4 sticky top-0">
                    <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="person.avatar" alt="" />
                    <div class="min-w-0 flex-auto">
                        <p class=" justiftexty font-bold leading-6 text-gray-900">{{ person.username }}</p>
                    </div>
                </div>
                <!-- <div class="hidden sm:flex sm:flex-col sm:items-end">
                <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
                <p v-if="person.lastSeen" class="mt-1 text-xs leading-5 text-gray-500">
                    Last seen <time :datetime="person.lastSeenDateTime">{{ person.lastSeen }}</time>
                </p>
                <div v-else class="mt-1 flex items-center gap-x-1.5">
                    <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p class="text-xs leading-5 text-gray-500">Online</p>
                </div>
            </div> -->
            </li>
        </ul>
    </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '../stores/userStore';
import Header from './Header.vue';

const userStore = useUserStore()
const users = ref([])

onMounted(async () => {
    users.value = await userStore.getUsers()
})
</script>