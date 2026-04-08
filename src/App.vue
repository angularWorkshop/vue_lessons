<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const ticks = ref(0);
const viewport = ref('narrow');
let timerId = null;

function handleResize() {
  viewport.value = window.innerWidth >= 900 ? 'wide' : 'narrow';
}

onMounted(() => {
  timerId = setInterval(() => {
    ticks.value += 1;
  }, 1000);

  window.addEventListener('resize', handleResize);
  handleResize();
});

onUnmounted(() => {
  clearInterval(timerId);
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <section class="cleanup-screen">
    <h1>Live activity</h1>
    <p>Ticks: {{ ticks }}</p>
    <p>Viewport: {{ viewport }}</p>
  </section>
</template>

<style scoped>
.cleanup-screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: start;
  background: linear-gradient(180deg, #fdf2f8 0%, #ffffff 100%);
  color: #9d174d;
  font-family: Arial, sans-serif;
}
</style>
