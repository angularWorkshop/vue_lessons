<script setup>
import { reactive } from 'vue';
import { editableProducts } from './editable-products.js';
import EditorModal from './components/EditorModal.vue';

const screen = reactive({
  products: editableProducts,
  activeProduct: null,
});

function openEditor(product) {
  screen.activeProduct = product;
}

function closeEditor() {
  screen.activeProduct = null;
}

function applyProductChanges(nextProduct) {
  const index = screen.products.findIndex(product => product.id === nextProduct.id);
  screen.products[index] = nextProduct;
  screen.activeProduct = null;
}
</script>

<template>
  <main class="workspace">
    <article class="card" v-for="product in screen.products" :key="product.id">
      <h2>{{ product.title }}</h2>
      <p>{{ product.price }} ₽</p>
      <button type="button" @click="openEditor(product)">Edit</button>
    </article>

    <EditorModal :product="screen.activeProduct" @save="applyProductChanges" @close="closeEditor" />
  </main>
</template>

<style scoped>
.workspace {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 12px;
  align-content: start;
  background: linear-gradient(180deg, #ede9fe 0%, #ffffff 100%);
  color: #312e81;
  font-family: Arial, sans-serif;
}

.card {
  padding: 16px;
  border-radius: 18px;
  background: white;
}
</style>
