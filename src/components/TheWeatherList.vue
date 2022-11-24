<script setup>
import useCWBFetch from "@/composable/useCWBFetch";
const { data } = await useCWBFetch("/v1/rest/datastore/F-C0032-001", {
  immediate: true,
}).json();
await new Promise((resolve) => setTimeout(resolve, 1000));
const processData = computed(() => {
  if (!data.value) return;
  return {
    datasetDescription: data.value.records.datasetDescription,
    location: data.value.records.location.map((locationData) => {
      return {
        locationName: locationData.locationName,
        weatherElement: locationData.weatherElement.reduce(
          (accumulator, currentValue) => {
            accumulator[currentValue.elementName] = currentValue.time;
            return accumulator;
          },
          {}
        ),
      };
    }),
  };
});
</script>

<template>
  <div></div>
  <div v-if="processData">{{ processData.datasetDescription }}</div>
  <ul>
    <li v-for="item in processData.location" :key="item.locationName">
      {{ item.locationName }}
      {{
        item.weatherElement.Wx.map(
          (wxInfo) => wxInfo.parameter.parameterName
        ).join("-")
      }}
    </li>
  </ul>
</template>
