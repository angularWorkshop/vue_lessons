<script setup>
import { ref, reactive } from 'vue';
import { productCardSeed } from './product-card-state.js';

const quantity = ref(productCardSeed.quantity);
const productState = reactive({
  badgeLabel: productCardSeed.badgeLabel,
  title: productCardSeed.title,
  basePrice: productCardSeed.basePrice,
  discountPercent: productCardSeed.discountPercent,
  inStock: productCardSeed.inStock,
});
</script>

<template>
  <article class="product-card">
    <p class="badge">{{ productState.badgeLabel }}</p>
    <h1>{{ productState.title }}</h1>
    <p>Цена: {{ productState.basePrice }} ₽</p>
    <p>Скидка: {{ productState.discountPercent }}%</p>
    <p>Количество: {{ quantity }}</p>
    <p>В наличии: {{ productState.inStock ? 'да' : 'нет' }}</p>
    <p>Итог: {{ productState.basePrice * quantity * (1 - productState.discountPercent / 100) }} ₽</p>
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
