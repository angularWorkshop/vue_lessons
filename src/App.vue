<script setup>
import { catalogWorkspaceSeed } from './catalog-workspace-seed.js';
import CatalogHero from './components/CatalogHero.vue';
import FilterSummary from './components/FilterSummary.vue';
import ProductList from './components/ProductList.vue';

const screen = catalogWorkspaceSeed;
</script>

<template>
  <main class="workspace">
    <CatalogHero :eyebrow="screen.eyebrow" :title="screen.title" :subtitle="screen.subtitle" />
    <FilterSummary :summary="screen.filterSummary" />
    <ProductList :products="screen.products" />
  </main>
</template>

<style scoped>
.workspace {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 16px;
  background: linear-gradient(180deg, #dbeafe 0%, #ffffff 100%);
  color: #0f172a;
  font-family: Arial, sans-serif;
}
</style>
