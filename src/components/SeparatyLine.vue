<template>
  <div class="HorizontalLine"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const lineWidth = ref(1);

const resizeHandler = () => {
  lineWidth.value = document.querySelector(".HorizontalLine").offsetWidth;
};

onMounted(() => {
  resizeHandler();
  window.addEventListener("resize", resizeHandler);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeHandler);
});
</script>

<style lang="scss" scoped>
.HorizontalLine {
  width: 100%;
  height: 1px; 
  background-color: var(--shaw);
}
</style>
