<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row">
      <div class="w-full sm:w-1/3 mb-8 sm:mb-0 sm:pr-4">
        <div class="bg-white rounded-lg shadow-md p-4">
          <div class="flex items-center mb-4">
            <img class="w-10 h-10 rounded-full mr-2" :src="userStore.user.avatar" alt="Profile Image">
            <div>
              <h3 class="font-bold text-lg">{{ userStore.user.username }}</h3>
              <p class="text-gray-500">{{ '@' + userStore.user.username }}</p>
            </div>
          </div>
          <textarea class="w-full border border-gray-300 rounded-md p-2 mb-4" rows="4" placeholder="你在想什么？" v-model="message"></textarea>
          <div class="flex items-center justify-between">
            <div>
              <button class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline" @click="postContent">发布</button>
            </div>
            <div class="flex items-center text-gray-500">
              <!-- <svg class="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15h14M5 9h14M5 3h14"></path>
              </svg> -->
              <p>{{ message.length }}/280</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-2/3">
        <div v-for="(item, index) in contentStore.contents" :key="index" class="bg-white rounded-lg shadow-md p-4 mb-4">
          <div class="flex items-center mb-4">
            <img class="w-10 h-10 rounded-full mr-2" :src="item.avatar" alt="Profile">
            <div>
              <h3 class="font-bold text-lg">{{ item.username }}</h3>
              <p class="text-gray-500">{{ '@' + item.username }}</p>
            </div>
          </div>
          <p class="mb-4">{{ item.content }}</p>
          <div class="flex items-center text-gray-400 text-sm">
            <!-- <svg class="w-6 h-6 mr-1 stroke-current" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg> -->
            <p>发布于{{ formatDate(item.createDate) }}</p>
          </div>
        </div>
        <button class="fixed bottom-4 right-4 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline" @click="scrollToTop">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore'
import { useContentStore } from '../stores/contentStore'
import { computed, onMounted, ref } from 'vue'

const userStore = useUserStore()
const contentStore = useContentStore()
const message = ref('')

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const postContent = async () => {
    let tweet = {
        email: userStore.user.email,
        username: userStore.user.username,
        content: message.value,
        avatar: userStore.user.avatar
    }
    await contentStore.postContent(tweet)
    contentStore.getContents()
    location.reload()
}

computed(() => {
    return {
        async avatarUrl() {
            return await userStore.getUserByEmail('wangbeishan1900@gmail.com')
                .then((res) => {
                    return res.avatar
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
})

const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const secondsAgo = Math.floor((now - date) / 1000)
    const minutesAgo = Math.floor(secondsAgo / 60)
    const hoursAgo = Math.floor(minutesAgo / 60)
    const daysAgo = Math.floor(hoursAgo / 24)
    if (secondsAgo < 60) {
        return `${secondsAgo}秒前`
    } else if (minutesAgo < 60) {
        return `${minutesAgo}分钟前`
    } else if (hoursAgo < 24) {
        return `${hoursAgo}小时前`
    } else if (daysAgo < 2) {
        return '1天前'
    } else {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }
}

onMounted(() => {
    contentStore.getContents()
})

</script>

<style>
  .bg-green-500 {
    background-color: #00b289;
  }

  .bg-green-500:hover {
    background-color: #008c6e;
  }

  .text-green-500 {
    color: #00b289;
  }

  .border-green-500 {
border-color: #00b289;
  }

  .text-gray-500 {
    color: #737373;
  }

  .focus\:shadow-outline-green {
    box-shadow: 0 0 0 2px #00b289;
  }

  @media (max-width: 640px) {
    .flex-col {
      flex-direction: column;
    }

    .sm\:w-1\/3 {
      width: 100%;
      padding-right: 0;
      margin-bottom: 1rem;
    }

    .sm\:pr-4 {
      padding-right: 0;
    }

    .sm\:w-2\/3 {
      width: 100%;
    }

    .sm\:mb-0 {
      margin-bottom: 1rem;
    }
  }
</style>
