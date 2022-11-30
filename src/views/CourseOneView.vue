<script setup>
/**
 * ref one way binding
 */
const count = ref(0)
function addCount() {
  count.value++
}

/**
 * ref two way binding
 */
const inputValue = ref('HiHi Terry')
function setInput() {
  inputValue.value = 'Gogo Terry'
}

/**
 * ref Array
 */
const userList = ref(['Terry', 'Mary', 'Ruby'])
function setUserList() {
  userList.value = ['Tony', 'Steven']
  userList.value.push('Pinky')
}

/**
 * reactive
 */
let user = reactive({
  name: 'Terry',
  age: 37,
  phoneList: ['0999123456', '0999123457'],
})
function setUser() {
  Object.assign(user, {
    name: 'Amy',
    age: 12,
  })
  user.phoneList = ['0911111111', '0922222222']
}
function setIncorrectExample() {
  user = {
    name: 'Ariel',
    age: 29,
  }
}

// Incorrect(X)
const { name, age } = user

const { name: toRefName, age: toRefAge } = toRefs(user)

const refUser = ref({
  name: 'Mark',
  age: 40,
})

function serRefUser() {
  refUser.value = {
    name: 'Jenny',
    age: 18,
  }
}
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <h1>ref & reactive</h1>
  <h2>{{ count }}</h2>
  <button @click="addCount">
    Add count
  </button>
  <hr>
  <h2>{{ userList.join('-') }}</h2>
  <button @click="setUserList">
    setUserList
  </button>
  <br>
  <hr>
  <input v-model="inputValue" type="text">
  <h2>{{ inputValue }}</h2>
  <button @click="setInput">
    setInput
  </button>
  <hr>
  <h2>{{ user.name }}</h2>
  <h2>{{ user.age }}</h2>
  <h2>{{ user.phoneList.join(',') }}</h2>
  <button @click="setUser">
    setUsers
  </button>
  <button @click="setIncorrectExample">
    setIncorrectExample
  </button>
  <h2>{{ name + age }}</h2>
  <h2>{{ toRefName + toRefAge }}</h2>
  <hr>
  <h2>{{ refUser.name }}</h2>
  <h2>{{ refUser.age }}</h2>
  <button @click="serRefUser">
    serRefUser
  </button>
</template>

<style scoped>
hr {
  @apply my-15px
}
</style>
