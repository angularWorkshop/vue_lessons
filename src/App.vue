<script setup>
import { ref, watch } from 'vue';

const query = ref('  Vue  ');
const syncStatus = ref('idle');

watch(query, value => {
  query.value = value.trim();
  syncStatus.value = value.trim() ? 'ready' : 'idle';
  document.title = value.trim() ? `Search: ${value.trim()}` : 'Search';
}, { immediate: true });
</script>

<template>
  <section class="watcher-screen">
    <label>
      Query
      <input type="text" v-model="query" />
    </label>
    <p>Normalized: {{ query }}</p>
    <p>Status: {{ syncStatus }}</p>
  </section>
</template>

<style scoped>
.watcher-screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: start;
  background: linear-gradient(180deg, #fff7ed 0%, #ffffff 100%);
  color: #9a3412;
  font-family: Arial, sans-serif;
}
</style>
