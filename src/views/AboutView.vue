<script setup>
import useWindowOpen from '../composable/useWindowOpen'
import TheWeatherList from '../components/TheWeatherList.vue'

const url = ref('https://google.com.tw')
const { openNewWindow } = useWindowOpen(url)
function setUrl() {
  url.value = 'https://www.facebook.com'
}

const { openNewWindow: openIGwindow } = useWindowOpen(
  'https://www.instagram.com/',
)
</script>

<template>
  <div class="about w-full">
    <h1>{{ url }}</h1>
    <button type="button" @click="openNewWindow">
      open Window
    </button>
    <br>
    <button type="button" @click="openIGwindow">
      open instagram window
    </button>
    <br>
    <button type="button" @click="setUrl">
      Set Url
    </button>
    <br>
    <br>
    <button type="button" @click="execute">
      execute Url
    </button>
    <Suspense>
      <TheWeatherList />
      <template #fallback>
        <div i-line-md:loading-loop text-50 />
      </template>
    </Suspense>
    <br>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>
