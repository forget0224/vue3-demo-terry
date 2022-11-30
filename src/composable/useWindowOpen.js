// import { onUnmounted, unref } from "vue";
let windowOpen
export default function useWindowOpen(newUrl) {
  const url = ref(newUrl)
  // const url = resolveRef(newUrl)
  const openNewWindow = () => {
    if (!url.value)
      return
    windowOpen = window.open(url.value)
  }
  onUnmounted(() => {
    !windowOpen?.closed && windowOpen?.close()
  })
  return {
    openNewWindow,
    url,
  }
}
