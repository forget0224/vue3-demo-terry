import { useFetch } from '@vueuse/core'

const state = reactive({
  isLoading: false,
  result: [],
  error: null,
})

export function useFetchUser() {
  const fetchUser = async () => {
    state.isLoading = true
    const { data } = await useFetch('/user')
    state.result = data.value
    state.isLoading = false
  }
  const fetchUserList = async () => {
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

  return {
    ...toRefs(state),
    fetchUser,
    fetchUserList,
  }
}
