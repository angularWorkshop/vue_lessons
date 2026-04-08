<script setup>
defineProps({
  products: Array,
});
</script>

<template>
  <section class="list">
    <article class="card" v-for="product in products" :key="product.id">
      <h2>{{ product.title }}</h2>
      <p>{{ product.level }}</p>
    </article>
  </section>
</template>

<style scoped>
.list {
  display: grid;
  gap: 12px;
}

.card {
  padding: 16px;
  border-radius: 16px;
  background: white;
}
</style>
