<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchOperations } from './operations-api.js';

const route = useRoute();
const router = useRouter();
const query = ref(route.query.q ?? '');
const screen = reactive({
  loading: true,
  error: null,
  items: [],
});

async function load() {
  screen.loading = true;
  screen.error = null;
  try {
    screen.items = await fetchOperations(query.value);
  } catch (error) {
    screen.error = error.message;
    screen.items = [];
  } finally {
    screen.loading = false;
  }
}

watch(query, value => {
  router.replace({ query: value ? { q: value } : {} });
  load();
});

onMounted(load);
</script>

<template>
<section class="screen">
  <article class="panel stack">
    <h1>Operations Queue</h1>
    <input v-model="query" placeholder="Search tasks" />
    <p v-if="screen.loading">Loading...</p>
    <p v-else-if="screen.error">Error: {{ screen.error }}</p>
    <p v-else-if="screen.items.length === 0">Nothing in queue</p>
    <ul>
      <li v-for="item in screen.items" :key="item.id">{{ item.title }}</li>
    </ul>
  </article>
</section>
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
