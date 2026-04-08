<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const panelRef = ref(null);
const width = ref(0);
const status = ref('Observer idle');
let observer;

onMounted(() => {
  observer = new ResizeObserver(entries => {
    width.value = Math.round(entries[0].contentRect.width);
    status.value = 'Observer active';
  });
  observer.observe(panelRef.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section class="observer-screen" ref="panelRef">
    <h1>Observer panel</h1>
    <p>Width: {{ width }}</p>
    <p>Status: {{ status }}</p>
  </section>
</template>

<style scoped>
.observer-screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: start;
  background: linear-gradient(180deg, #ecfeff 0%, #ffffff 100%);
  color: #155e75;
  font-family: Arial, sans-serif;
}
</style>
