<script setup>
import useWindowOpen from '@/composable/useWindowOpen'

const url = ref('https://google.com.tw')
const { openNewWindow, url: urlCopy } = useWindowOpen(url)
function setUrl() {
  url.value = 'https://www.facebook.com'
}
function setCopyUrl() {
  urlCopy.value = 'https://www.netflix.com/'
}

const typeUrl = computed(() => `${url.value}?type=gogo`)

const { url: computedUrl } = useWindowOpen(typeUrl)

// const { openNewWindow: openIGwindow, url: igUrl } = useWindowOpen()
const { openNewWindow: openIGwindow, url: igUrl } = useWindowOpen('https://tw.yahoo.com/')
function setIGUrl() {
  igUrl.value = 'https://www.instagram.com/'
}
</script>

<template>
  <div class="about w-full">
    <h1>{{ url }}</h1>
    <h1> {{ urlCopy }} </h1>
    <button type="button" mr-10px @click="setUrl">
      Set Url
    </button>
    <button type="button" @click="setCopyUrl">
      Set Copy Url
    </button>
    <br>
    <button type="button" mr-10px @click="openNewWindow">
      open Window
    </button>
    <h1>{{ computedUrl }}</h1>

    <h1>{{ 'IG URL:' }}{{ igUrl }}</h1>
    <button type="button" mr-10px @click="setIGUrl">
      Set IG Url
    </button>

    <button type="button" @click="openIGwindow">
      open instagram window
    </button>
    <br>
    <br>
    <button type="button" @click="execute">
      execute Url
    </button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>
