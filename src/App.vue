<script setup>
import { nextTick, ref } from 'vue';

const isOpen = ref(false);
const searchInput = ref(null);

async function openSearch() {
  isOpen.value = true;
  await nextTick();
  searchInput.value?.focus();
}
</script>

<template>
<main class="screen">
  <section class="panel stack">
    <h1>Search Focus</h1>
    <button type="button" @click="openSearch">Open search</button>
    <input v-if="isOpen" ref="searchInput" placeholder="Search courses" />
  </section>
</main>
</template>

<style scoped>
:global(body) {
  margin: 0;
}

.screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 16px;
  align-content: start;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  color: #0f172a;
  font-family: Arial, sans-serif;
}

.panel {
  padding: 18px;
  border-radius: 18px;
  background: white;
  border: 1px solid #dbeafe;
}

.stack {
  display: grid;
  gap: 12px;
}

.row {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

button,
input,
select {
  font: inherit;
}

button {
  border: 0;
  border-radius: 12px;
  padding: 10px 14px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

button[disabled] {
  opacity: 0.55;
  cursor: not-allowed;
}

input,
select {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

ul {
  margin: 0;
  padding-left: 20px;
}
</style>
