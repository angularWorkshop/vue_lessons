<script setup>
import { computed, reactive } from 'vue';
import { driftSeed } from './drift-seed.js';

const cart = reactive({
  ...driftSeed,
});

const itemCount = computed(() => cart.items.reduce((sum, item) => sum + item.quantity, 0));
const total = computed(() => cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0));
const ctaLabel = computed(() => `Checkout (${itemCount.value} items)`);

function addSecondItem() {
  cart.items[1].quantity += 1;
}
</script>

<template>
  <section class="drift-screen">
    <button type="button" @click="addSecondItem">Add second item</button>
    <p>Items: {{ itemCount }}</p>
    <p>Total: {{ total }}</p>
    <p>{{ ctaLabel }}</p>
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
