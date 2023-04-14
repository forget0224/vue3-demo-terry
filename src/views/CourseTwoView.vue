<script setup>
import { useUserStore } from '@/stores/user'
import { useFetchUser } from '@/stores/useFetchUser'
const userStore = useUserStore()
const { isLoading, result, fetchUserList } = useFetchUser()
</script>
<template>
  <h1> Composable vs Pinia(vuex) </h1>
  <h2> Composable </h2>
  <div v-if="isLoading" i-line-md:loading-loop />
  <h1 v-else>
    {{ result }}
  </h1>
  <button @click="fetchUserList">
    fetchUserList
  </button>
  <h2> Pinia </h2>
  <div v-if="userStore.isLoading" i-line-md:loading-loop />
  <template v-else>
    <h1>
      {{ userStore.result }}
    </h1>
    <h1>
      {{ userStore.getUsersName }}
    </h1>
  </template>
  <button @click="userStore.fetchUserList">
    userStore.fetchUserList
  </button>
</template>
