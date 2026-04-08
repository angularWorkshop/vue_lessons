<script setup>
import { reactive } from 'vue';
import { driftSeed } from './drift-seed.js';

const cart = reactive({
  ...driftSeed,
});

const summary = reactive({
  itemCount: 1,
  total: 700,
  ctaLabel: 'Checkout (1 item)',
});

function addSecondItem() {
  cart.items[1].quantity += 1;
  summary.itemCount += 1;
  summary.ctaLabel = `Checkout (${summary.itemCount} items)`;
}
</script>

<template>
  <section class="drift-screen">
    <button type="button" @click="addSecondItem">Add second item</button>
    <p>Items: {{ summary.itemCount }}</p>
    <p>Total: {{ summary.total }}</p>
    <p>{{ summary.ctaLabel }}</p>
  </section>
</template>

<style scoped>
.drift-screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: start;
  background: linear-gradient(180deg, #e0f2fe 0%, #ffffff 100%);
  color: #0c4a6e;
  font-family: Arial, sans-serif;
}
</style>
