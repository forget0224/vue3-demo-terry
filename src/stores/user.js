import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const state = reactive({
    isLoading: false,
    result: [],
    error: null,
  })

  const getUsersName = computed(() => state.result.map(item => item.name).join('-'))

  const fetchUserList = async() => {
    state.isLoading = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    state.result = [{
      name: 'Terry',
      age: 37,
    }, {
      name: 'Ariel',
      age: 29,
    }, {
      name: 'Mark',
      age: 40,
    }]
    state.isLoading = false
  }

  return { ...toRefs(state), getUsersName, fetchUserList }
})
