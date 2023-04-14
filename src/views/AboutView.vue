<script setup>
import useWindowOpen from "../composable/useWindowOpen";
import TheWeatherList from "../components/TheWeatherList.vue";
const url = ref("https://google.com.tw");
const { openNewWindow } = useWindowOpen(url);
function setUrl() {
  url.value = "https://www.facebook.com";
}

const { openNewWindow: openIGwindow } = useWindowOpen(
  "https://www.instagram.com/"
);
</script>

<template>
  <div class="about w-full">
    <h1>{{ url }}</h1>
    <button @click="openNewWindow" type="button">open Window</button>
    <br />
    <button @click="openIGwindow" type="button">open instagram window</button>
    <br />
    <button @click="setUrl" type="button">Set Url</button>
    <br />
    <br />
    <button @click="execute" type="button">execute Url</button>
    <Suspense>
      <the-weather-list></the-weather-list>
      <template #fallback>
        <div i-line-md:loading-loop text-50></div>
      </template>
    </Suspense>
    <br />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}
</style>
