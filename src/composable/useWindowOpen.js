// import { onUnmounted, unref } from "vue";
let windowOpen;
export default function useWindowOpen(url, success, error) {
  const openNewWindow = () => {
    windowOpen = window.open(unref(url));
  };
  onUnmounted(() => {
    !windowOpen?.closed && windowOpen?.close();
  });
  return {
    openNewWindow,
  };
}
