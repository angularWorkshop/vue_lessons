<script setup>
import { computed, reactive } from 'vue';
import { capstoneCatalogSeed } from './capstone-catalog-seed.js';
import CatalogHero from './components/CatalogHero.vue';
import SearchBox from './components/SearchBox.vue';
import ProductList from './components/ProductList.vue';
import EmptyState from './components/EmptyState.vue';

const screen = reactive({
  ...capstoneCatalogSeed,
});

const visibleProducts = computed(() => screen.products.filter(product => product.title.toLowerCase().includes(screen.query.toLowerCase())));
</script>

<template>
  <main class="workspace">
    <CatalogHero :title="screen.title" :subtitle="screen.subtitle" />
    <SearchBox />
    <ProductList />
  </main>
</template>

<style scoped>
.workspace {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 16px;
  align-content: start;
  background: linear-gradient(180deg, #dbeafe 0%, #ffffff 100%);
  color: #0f172a;
  font-family: Arial, sans-serif;
}
</style>
