<script setup>
import Header from './components/Header.vue'
import { useUserStore } from './stores/userStore'

const userStore = useUserStore()
</script>

<template>
    <router-view></router-view>
</template>
