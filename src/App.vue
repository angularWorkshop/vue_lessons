<script setup>
import { productCardSeed } from './product-card-state.js';

// TODO: quantity should become a ref based on the seed.
const quantity = 0;
// TODO: productState should become a reactive object.
const productState = {
  badgeLabel: 'TODO badge',
  title: 'TODO title',
  basePrice: 0,
  discountPercent: 0,
  inStock: false,
};
</script>

<template>
  <article class="product-card">
    <p class="badge">{{ productState.badgeLabel }}</p>
    <h1>{{ productState.title }}</h1>
    <p>Цена: TODO</p>
    <p>Скидка: TODO</p>
    <p>Количество: TODO</p>
    <p>В наличии: TODO</p>
    <p>Итог: TODO</p>
  </article>
</template>

<style scoped>
.product-card {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: center;
  background: linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%);
  color: #123524;
  font-family: Arial, sans-serif;
  border: 1px solid #bbf7d0;
}

.badge {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #42b883;
}

h1 {
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
}

p {
  margin: 0;
  font-size: 18px;
}
</style>
