<template>
    <Header v-if="userStore.isLoggedIn"></Header>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <!-- 项目介绍 -->
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">关于这个项目</h2>
            <p class="text-lg text-gray-500 leading-7">
                这是一个类似推特的项目<br>
                为什么要写这个项目？<br>
                一个是为了练习，此项目前端使用vuejs，后端使用nodejs<br>
                另一个就是 <span class=" text-green-500 hover:text-green-600"><a href="https://liuyandong.com/">栋哥</a></span>
                写过一个类似的项目，这个是对栋哥拙劣的模仿<br>
            </p>
        </div>
        <!-- 个人介绍 -->
        <div class="max-w-3xl mx-auto mt-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">关于我</h2>
            <p class="text-lg text-gray-500 leading-7">
                我是一个前端开发工程师，目前在北京工作，主要使用vuejs和reactjs，偶尔也会写一些nodejs<br>
            </p>
        </div>
        <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-500 leading-7 mt-4">
                👆上面其实都是AI写的，我并不是一个开发者，能写出这个项目，ChatGPT帮助了我很多，
                相比以前来说，ChatGPT可以让我这样的小白写出一个小项目，不用去慢慢的看繁琐的文档，告诉需求，
                然后交给ChatGPT，极大的提升了开发速度。如果没有ChatGPT，css已经让我头脑爆炸了。
            </p>
        </div>
    </div>
    <div class="max-w-3xl mx-auto mt-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">接下来要做的</h2>

        <ul class="bg-white rounded-lg shadow divide-y divide-gray-200">
            <li v-for="(item, index) in items" :key="index" class="flex items-center px-6 py-4">
                <input type="checkbox" class="mr-3 h-5 w-5" v-model="item.checked" />
                <span :class="{ 'text-lg font-medium text-gray-900': true, 'line-through': item.checked }">{{ item.text }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue';
import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();

const items = ref([
    { text: '实现图片上传', checked: false },
    { text: '支持markdown', checked: false },
    { text: '实现用户之间的关注功能', checked: false },
    { text: '随机推荐推文', checked: false },
    { text: '推文的评论点赞功能', checked: false }
])
</script>
