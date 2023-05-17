<template>
  <Header v-if="userStore.isLoggedIn"></Header>
  <div class="min-h-full">
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Microposts</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Your content -->
        <PostContent></PostContent>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';
import PostContent from '../components/PostContent.vue';
import Header from '../components/Header.vue';

const userStore = useUserStore();

</script>
