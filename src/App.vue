<script setup>
import { reactive } from 'vue';
import { cartSeed } from './cart-seed.js';

const cart = reactive({
  ...cartSeed,
});

const subtotal = 0;
const discount = 0;
const total = 0;
const canCheckout = false;

function increase(itemId) {
  const item = cart.items.find(entry => entry.id === itemId);
  item.quantity += 1;
}

function decrease(itemId) {
  const item = cart.items.find(entry => entry.id === itemId);
  item.quantity = Math.max(0, item.quantity - 1);
}
</script>

<template>
  <section class="cart-screen">
    <article class="cart-row" v-for="item in cart.items" :key="item.id">
      <h2>{{ item.title }}</h2>
      <p>{{ item.quantity }}</p>
      <button type="button" @click="decrease(item.id)">-</button>
      <button type="button" @click="increase(item.id)">+</button>
    </article>
    <p>Subtotal: {{ subtotal }}</p>
    <p>Discount: {{ discount }}</p>
    <p>Total: {{ total }}</p>
    <button type="button" :disabled="!canCheckout">Checkout</button>
  </section>
</template>

<style scoped>
.cart-screen {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: start;
  background: linear-gradient(180deg, #eef2ff 0%, #ffffff 100%);
  color: #312e81;
  font-family: Arial, sans-serif;
}

.cart-row {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 8px;
  align-items: center;
}
</style>
