<script setup>
import { reactive } from 'vue';
import { ordersSeed } from './orders-seed.js';

const screen = reactive({
  ...ordersSeed,
});

function setMode(mode) {
  screen.mode = mode;
}
</script>

<template>
  <section class="orders-screen">
    <h1>Orders Workspace</h1>
    <div class="toolbar">
      <button type="button" @click="setMode('loading')">Loading</button>
      <button type="button" @click="setMode('empty')">Empty</button>
      <button type="button" @click="setMode('error')">Error</button>
      <button type="button" @click="setMode('success')">Success</button>
    </div>

    <aside class="help-panel" v-show="screen.helpVisible">Use the buttons to inspect each screen mode.</aside>

    <p v-if="screen.mode === 'loading'">Загрузка...</p>
    <p v-else-if="screen.mode === 'empty'">Нет заказов</p>
    <p v-else-if="screen.mode === 'error'">Не удалось загрузить данные</p>
    <section v-else>
      <p>Success</p>
      <ul>
        <li v-for="order in screen.orders" :key="order.id">{{ order.title }}</li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
.orders-screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 16px;
  align-content: start;
  background: linear-gradient(180deg, #eff6ff 0%, #ffffff 100%);
  color: #0f172a;
  font-family: Arial, sans-serif;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

button {
  border: 0;
  border-radius: 999px;
  padding: 10px 14px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}

.help-panel {
  padding: 12px 16px;
  border-radius: 16px;
  background: #dbeafe;
}
</style>
