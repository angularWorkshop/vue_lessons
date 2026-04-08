<script setup>
defineProps({
  title: String,
  badgeText: String,
  priceText: String,
  tone: String,
});
</script>

<template>
  <article class="offer-card" :data-tone="tone">
    <p>{{ badgeText }}</p>
    <h2>{{ title }}</h2>
    <p>{{ priceText }}</p>
  </article>
</template>

<style scoped>
.offer-card {
  padding: 18px;
  border-radius: 18px;
  background: white;
}
</style>
