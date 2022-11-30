<script setup>
import Modal from '@/components/Modal.vue'
const showModal = ref(false)
</script>
<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <button
    type="button"
    class="mx-auto w-full flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
    @click="showModal = !showModal"
  >
    Show Model
  </button>
  <Modal v-model="showModal">
    <h1>內容內容</h1>
  </Modal>
</template>
