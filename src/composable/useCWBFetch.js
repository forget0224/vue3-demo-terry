import { createFetch } from "@vueuse/core";
const useCWBFetch = createFetch({
  baseUrl: "https://opendata.cwb.gov.tw/api",
  options: {
    async beforeFetch({ url, options }) {
      const customUrl = new URL(url);
      customUrl.search = new URLSearchParams({
        Authorization: import.meta.env.VITE_WEATHER_BUREAU_API_KEY,
      }).toString();
      return { url: customUrl, options };
    },
  },
  fetchOptions: {
    mode: "cors",
  },
});

export default useCWBFetch;
