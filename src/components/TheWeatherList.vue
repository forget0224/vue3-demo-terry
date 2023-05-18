<script setup>
import useCWBFetch from '@/composable/useCWBFetch'

const query = new URLSearchParams({
  // locationName: ['新北市', '基隆市'],
})
const { data } = await useCWBFetch(`/v1/rest/datastore/F-C0032-001?${query.toString()}`, {
  immediate: true,
}).json()
await new Promise(resolve => setTimeout(resolve, 1000))
const processData = computed(() => {
  if (!data.value)
    return
  return {
    datasetDescription: data.value.records.datasetDescription,
    location: data.value.records.location.map((locationData) => {
      return {
        locationName: locationData.locationName,
        weatherElement: locationData.weatherElement.reduce(
          (accumulator, currentValue) => {
            accumulator[currentValue.elementName] = currentValue.time
            return accumulator
          },
          {},
        ),
      }
    }),
  }
})
</script>

<template>
  <h1 v-if="processData">
    {{ processData.datasetDescription }}
  </h1>
  <table text-center border-collapse bg-slate-800>
    <thead bg-slate-700 text-slate-200>
      <tr>
        <th w-100px>
          縣市
        </th>
        <th w-25vw>
          今天清晨
        </th>
        <th w-25vw>
          今天白天
        </th>
        <th w-25vw>
          今天晚上到明天清晨
        </th>
      </tr>
    </thead>
    <tbody text-slate-200>
      <tr v-for="location in processData.location" :key="location.locationName">
        <td>{{ location.locationName }}</td>
        <td v-for="(wxInfo, index) in location.weatherElement.Wx" :key="`Wx-${index}`">
          {{ wxInfo.parameter.parameterName }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
th,td{
  @apply border border-slate-700
}
</style>
