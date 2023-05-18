<script setup>
import TheWeatherList from '@/components/TheWeatherList.vue'
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <Suspense>
    <TheWeatherList />
    <template #fallback>
      <div i-line-md:loading-loop text-50 />
    </template>
  </Suspense>
</template>
