<script setup>
import { reactive, watch } from 'vue';
import { filtersSeed } from './filters-seed.js';

const storageKey = 'catalog-filters';

const filters = reactive({
  ...filtersSeed,
});

watch(filters, value => {
  localStorage.setItem(storageKey, JSON.stringify({ ...value }));
}, { deep: true, immediate: true });

watch(() => filters.query, query => {
  document.title = query ? `Catalog: ${query}` : 'Catalog';
}, { immediate: true });
</script>

<template>
  <section class="filters-screen">
    <label>
      Query
      <input type="text" v-model="filters.query" />
    </label>
    <label>
      Level
      <select v-model="filters.level">
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="advanced">Advanced</option>
      </select>
    </label>
    <p>Storage key: {{ storageKey }}</p>
    <p>Preview: {{ filters.query }} / {{ filters.level }}</p>
  </section>
</template>

<style scoped>
.filters-screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: start;
  background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%);
  color: #166534;
  font-family: Arial, sans-serif;
}

label {
  display: grid;
  gap: 6px;
}
</style>
